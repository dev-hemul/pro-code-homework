import express from 'express';
import MainRouter from './routes/index.js';
import AboutRouter from './routes/about.js';
import ContactRouter from './routes/contact.js';

const app = express()
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log(`Server started on ${PORT}`);
})

app.use(express.static('static'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', MainRouter);
app.use('/about', AboutRouter);
app.use('/contact', ContactRouter);


