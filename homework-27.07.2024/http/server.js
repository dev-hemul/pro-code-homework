import path from 'node:path';
import express from 'express';
import createHttpError from 'http-errors';
import logger from 'morgan';
import mainRouter from './routes/main.js';
import cardRouter from './routes/card.js';

const server = express();

server.set('views', path.resolve('./http/views'));
server.set('view engine', 'ejs');

server.use(logger('dev'));
server.use(express.static(path.resolve('./http/public')));

server.use('/', mainRouter);
server.use('/card', cardRouter);


server.use((req, res, next) => {
	next(createHttpError(404));
})

// error hendler - midleware для обробки помилок. Тобто спочатку вище формуємо помилку, а потім всі помилки передаються сюди
server.use((err, req, res, next) => {
	const {status = 404, message} = err; // Беремо статус помилки
	console.error(status);
	console.error(message);

	res.status(status); // Встановлюємо статус відповіді
	res.render('error', {errorStatus: status, message}); // Передаємо статус і повідомлення в шаблон
});

export default server;