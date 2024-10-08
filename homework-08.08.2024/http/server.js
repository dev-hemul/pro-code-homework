import path from 'node:path';
import express from 'express';
import createHttpError from 'http-errors';
import logger from 'morgan';
import mainRouter from './routes/main.js';


const server = express();

server.set('views', path.resolve('./http/views'));
server.set('view engine', 'ejs');

server.use(logger('dev'));
server.use(express.static(path.resolve('./http/public')));

server.use('/', mainRouter);


server.use((req, res, next) => {
	next(createHttpError(404));
})


server.use((err, req, res, next) => {
	const {status = 404, message} = err;
	console.error(status);
	console.error(message);

	res.status(status);
	res.render('error', {errorStatus: status, message});
});

export default server;