import userModel from '../model/user.js';
import bcrypt from 'bcrypt';
import {nanoid} from 'nanoid';

const createUser = async (login, password, email) => {
  // Хешируем пароль перед сохранением в БД
  const hashedPassword = await bcrypt.hash(password, 10);
  
  // Генерируем jti
  const jti = nanoid();

  // Создаем нового пользователя и сохраняем в базу данных
  const user = new userModel({
    login,
    password: hashedPassword,
    email,
    jti,
  });

  await user.save();
};

export default createUser;