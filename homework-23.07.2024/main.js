import express from 'express';
import createHttpError from "http-errors";
import MainRouter from './routes/index.js';
import AboutRouter from './routes/about.js';
import ContactRouter from './routes/contact.js';
import SocialRouter from './routes/social.js';

const app = express()
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log(`Server started on ${PORT}`);
})

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('static'));

app.use('/', MainRouter);
app.use('/about', AboutRouter);
app.use('/contact', ContactRouter);

/*app.use('/social', SocialRouter);*/

app.use((req, res, next) => {
	next(createHttpError(404));
})

// error hendler - midleware для обробки помилок. Тобто спочатку вище формуємо помилку, а потім всі помилки передаються сюди
app.use((err, req, res, next) => {
    const { status = 404, message } = err; // Беремо статус помилки
    console.error(status);
    console.error(message);

    res.status(status); // Встановлюємо статус відповіді
    res.render('error', { errorStatus: status, message }); // Передаємо статус і повідомлення в шаблон
});


