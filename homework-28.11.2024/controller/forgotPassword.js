import userModel from '../model/user-info.js';
import bcrypt from 'bcrypt';
import crypto from 'crypto'; // Для генерации токенов сброса пароля
import sendResetPasswordEmail from './emailController.js'; // Функция отправки email (можно реализовать отдельно)

const generateResetToken = () => {
  return crypto.randomBytes(32).toString('hex');
};

// Контроллер для запроса на сброс пароля
export const requestPasswordReset = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Пользователь с таким email не найден!' });
    }

    // Генерация токена сброса пароля
    const resetToken = generateResetToken();
    const resetTokenExpiration = Date.now() + 3600000; // Токен действителен 1 час

    // Сохраняем токен и срок его действия в базе
    user.resetToken = resetToken;
    user.resetTokenExpiration = resetTokenExpiration;
    await user.save();

    // Отправка письма с ссылкой на сброс пароля
    const resetLink = `http://localhost:3000/reset-password/${resetToken}`;
    await sendResetPasswordEmail(user.email, resetLink);

    return res.status(200).json({ status: 'ok', message: 'Ссылка для сброса пароля отправлена на ваш email' });
  } catch (error) {
    console.error('Ошибка при запросе на сброс пароля:', error);
    return res.status(500).json({ error: 'Ошибка при обработке запроса на сброс пароля' });
  }
};

// Контроллер для сброса пароля
export const resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    // Находим пользователя по токену сброса
    const user = await userModel.findOne({
      resetToken: token,
      resetTokenExpiration: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ error: 'Неверный или просроченный токен!' });
    }

    // Хешируем новый пароль
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Обновляем пароль пользователя
    user.password = hashedPassword;
    user.resetToken = undefined; // Очищаем токен
    user.resetTokenExpiration = undefined; // Очищаем срок действия токена
    await user.save();

    return res.json({ message: 'Пароль успешно сброшен' });
  } catch (error) {
    console.error('Ошибка при сбросе пароля:', error);
    return res.status(500).json({ error: 'Ошибка при сбросе пароля' });
  }
};
