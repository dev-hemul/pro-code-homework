import express from 'express';
import path from 'path';
// Цей рядок імпортує функцію fileURLToPath із модуля url, вбудованого в Node.js.
import {fileURLToPath} from 'url';
// Логи для консолі за запитами
import morgan, {token} from 'morgan';
// Обробка та відображення помилок
import createHttpError from 'http-errors';
// Розфарбовування консолі
import colors from 'colors';
	// Импорт CORS
import cors from 'cors';
import UsersRoute from './routes/users.js';
import * as auth from '../controller/auth.js'


const app = express();
app.use(morgan('combined'));

app.use(cors({
  origin: '*',
	credentials: true
}));
app.use(express.json());

// import.meta.url це спеціальна змінна ESM, яка містить URL поточного модуля (файлу).
// fileURLToPath(import.meta.url) - конвертує цей URL в шлях файлової системи.
// В результаті __filename буде містити повний шлях до поточного файлу (де знаходиться цей код). Це аналог старої змінної __filename в CommonJS.
const __filename = fileURLToPath(import.meta.url);

// path.dirname(__filename) отримує директорію, в якій знаходиться файл, з повного шляху __filename
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/api', UsersRoute);


app.get('/token', (req, res) => {
  // log + pass
  // check log + pass
  // get uid
  const uid = 10; // симулюємо, що id користувача 10 (але в реальності має бути метод post , так як дані приходять з фронта)
	const token = auth.createJWT({iss: uid});
  res.json({ status: 'ok', token: token });
});

app.get('/removeAll', (req, res) => {
  // Перевіряємо JWT
  const jwt = 'eyJhbGciOiJSUzUxMiJ9.eyJ1aWQiOjEwfQ.ChOBZ0iiHkqbStkCPzkHFst0WUQJNSX7fJcjiik0DNS_p4nDLzsmT3tfTyrHK1oOzrQ3s2NnXMDbpj-k34cTqOm1gTaFOPNbOsUaVrNbWzieNrQX-2iQ9Cpg_zzUPR7Th_JhaKBbuAT9Vzxnv8Y0xVJqmRRAdeOfWDeUZXkrqlo1vuAp6XhwAsHf78mp0AQ9H90I1LgyyBNNHa_cXsAUJGAYKBcKV8-TuaxPOAW85lDUm4E1i2LzoSypQ83Z67kPIrwAw2Qoxgi2fmWTsNHxCm7jI4SJ4DHe3NkhRMihiKj_jDw2k3CWer8Hi2LASOggtKfzOV5bpMnWxprmh4-FbA'; // симулюємо, що id користувача 10
	const result = auth.checkJWT(jwt);
	if (!result) {
		res.json({status: 'invalid token'});
		return
	}
	
	// Декодуємо JWT (за необхідності)
	const data = auth.decodeJWT(jwt);
	console.log(data);
	
  res.json({ status: 'ok', token: token });
});

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