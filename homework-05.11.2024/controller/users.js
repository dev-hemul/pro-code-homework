import userModel from '../model/user.js';

const createUser = async (userName) => {
  const result = await userModel.create({
    name: userName,
  });
  return result.id;
};

const showUser = async () => {
  try {
    const users = await userModel.find(); // Отримуємо масив користувачів
    console.log('Users from DB:', users); // Логіруєм користувачів для отладки
    return users; // Повертаємо масив
  } catch (error) {
    console.error('Error fetching users:', error); // Логируемо ошибку
    return []; // Повертаємо пустий масив у разі помилки
  }
};

const updateUser = async (userId, newName) => {
  try {
    const updatedUser = await userModel.findByIdAndUpdate(userId, { name: newName }, { new: true });
    return updatedUser; // Повертаємо оновленого користувача
  } catch (error) {
    console.error('Помилка під час оновлення користувача:', error);
    return null; // Повертаємо null у разі помилки
  }
};


// Видяляємо користувача по ID
const deleteUser = async (userId) => {
  try {
    return  await userModel.findByIdAndDelete(userId); // Використовуємо userModel
     // Повертаємо, видаленого користувача або null, если не знайдений
  } catch (error) {
    console.error('Помилка при видаленні користувача:', error);
    throw error; // Прокидуємо помилку далі
  }
};

export { createUser, showUser, updateUser, deleteUser };