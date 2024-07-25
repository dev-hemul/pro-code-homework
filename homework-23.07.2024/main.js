import express from 'express';
import index from './routes/index.js';
import about from './routes/about.js';
import contact from './routes/contact.js';

/*import blogRouter from './routes/blog.js';
import prodRouter from './routes/prod.js';*/

const app = express()
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log(`Server started on ${PORT}`);
})

app.use(express.static('static'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', index);
app.use('/', about);
app.use('/', contact);



/*
app.use('/blogRouter', blogRouter);
app.use('/prod', prodRouter);
*/


