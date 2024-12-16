import {Router} from 'express';
import onlyAuthMv from './mv/onlyAuth.js';
import User from './../../model/user-info.js';


const router = Router();

router.post('/profile', onlyAuthMv, async (req, res) => {
  const { uid } = res.locals;

  try {
    const user = await User.findById(uid).select('login email'); // Ищем пользователя по UID
    if (!user) {
      return res.status(404).json({ message: 'User not found' }); // Пользователь не найден
    }

    // Отправляем успешный ответ с login и email
    return res.json({
      status: 'ok',
      payload: {
        uid,
        login: user.login,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error); // Логируем ошибку
    return res.status(500).json({ message: 'Server error' }); // Ответ при ошибке
  }
});

export default router;