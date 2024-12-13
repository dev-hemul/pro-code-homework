import { Router } from 'express';
import { requestPasswordReset, resetPassword } from '../../controller/forgotPassword.js'; // Подключаем ваш новый контроллер

const app = Router();

// Маршрут для запроса восстановления пароля
app.post('/forgot-password', requestPasswordReset);

// Маршрут для сброса пароля
app.post('/reset-password', resetPassword);

export default app;