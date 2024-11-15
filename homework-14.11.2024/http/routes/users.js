import { Router } from 'express';
// Імпорт контроллера
import * as usersController from '../../controller/users.js';
import path from 'path'; // Імпорт path для роботи зі шляхами

const router = Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});

router.post('/createUser', async (req, res) => {
	const {name} = req.body;
	console.log(name);
	await usersController.createUser(name);
	res.status(200).json({ message: 'User created successfully', name });
});

router.get('/users', async (req, res) => {
	try {
		const users = await usersController.showUser(); // Отримуємо список користувачів
		console.log('Response data before sending:', users); // Логіруємо перед відправкою
		res.status(200).json(users); // Відправляємо користувачів клієнту
	} catch (error) {
		console.error('Error fetching users:', error);
		res.status(500).json({message: 'Error fetching users'});
	}
});

// Видалення користувача по ID
router.delete('/deleteUser/:id', async (req, res) => {
	const userId = req.params.id;
	console.log(`Отриманий на видалення користувача з ID: ${userId}`); // Логіруємо ID
	try {
		const deletedUser = await usersController.deleteUser(userId);
		console.log('Видалений користувач:', deletedUser); // Логіруємо видаленого користувача
		if (!deletedUser) {
			return res.status(404).json({ message: 'Користувач не знайдений' });
		}
		res.status(200).json({ message: 'Користувач успішно видалений', user: deletedUser });
	} catch (error) {
		console.error('Помилка при видаленні користувача:', error);
		res.status(500).json({ message: 'Помилка при видаленні користувача', error });
	}
});

// Обробка PUT-запиту для оновлення користувача
router.put('/updateUser/:id', async (req, res) => {
  const userId = req.params.id; // Отримуємо ID користувача з параметрів запиту
  const { name } = req.body; // Отримуємо нове ім'я із тіла запиту

  try {
    // Виклик контролера для оновлення користувача
    const updatedUser = await usersController.updateUser(userId, name);
    
    if (!updatedUser) {
      return res.status(404).json({ message: 'Користувача не знайдено' });
    }

    res.status(200).json({ message: 'Користувача успішно оновлено', user: updatedUser });
  } catch (error) {
    console.error('Помилка при оновленні користувача:', error);
    res.status(500).json({ message: 'Помилка під час оновлення користувача' });
  }
});

export default router;
