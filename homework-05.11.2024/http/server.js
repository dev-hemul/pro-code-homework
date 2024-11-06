import express from 'express';
import path from 'path';
// Цей рядок імпортує функцію fileURLToPath із модуля url, вбудованого в Node.js.
import {fileURLToPath} from 'url';
// Логи для консолі за запитами
import morgan from 'morgan';
// Обробка та відображення помилок
import createHttpError from 'http-errors';
// Розфарбовування консолі
import colors from 'colors';
// Импорт CORS
import cors from 'cors';
import session from 'express-session'
import MongoStore from 'connect-mongo'
import UsersRoute from './routes/users.js';


const app = express();
app.use(morgan('combined'));

app.use(cors({
  origin: '*',
	credentials: true
}));
app.use(express.json());

app.use(session({
	secret: 'key12',
  resave: true,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: 'mongodb+srv://hemul:qwerty1@cluster0.andfk.mongodb.net/session?retryWrites=true&w=majority&appName=Cluster0',
  })
}));

// import.meta.url це спеціальна змінна ESM, яка містить URL поточного модуля (файлу).
// fileURLToPath(import.meta.url) - конвертує цей URL в шлях файлової системи.
// В результаті __filename буде містити повний шлях до поточного файлу (де знаходиться цей код). Це аналог старої змінної __filename в CommonJS.
const __filename = fileURLToPath(import.meta.url);

// path.dirname(__filename) отримує директорію, в якій знаходиться файл, з повного шляху __filename
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/api', UsersRoute);
app.post('/start-session', (req, res) => {
	 res.json(({ sessionId: req.sessionID, sessionData: req.session }));
})

app.use((req, res, next) => {
	next(createHttpError(404));
})

// error hendler - midleware для обробки помилок. Тобто спочатку вище формуємо помилку, а потім всі помилки передаються сюди
app.use((err, req, res, next) => {
	const {status = 404, message = 'Internal Server Error'} = err; // Беремо статус помилки
	console.error(status);
	console.error(message);
	
	res.status(status).json({ error: message }); // Повертаємо пвоідомлення про помилку в форматі HSON
});

export default app;