import http from 'node:http';
import fs from 'node:fs/promises';

const config = {
	port: 8000
}

const server = http.createServer(async (req, res) => {
	const {url} = req;
	if (url === '/') {
		const index = await fs.readFile('client/index.html', 'utf8');
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html; charset=utf-8');
		res.end(index);
	} else if (url === '/style.css') {
		const css = await fs.readFile('client/style.css', 'utf8');
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/css; charset=utf-8');
		res.end(css);
	} else if (url === '/index.js') {
		const jsFile = await fs.readFile('./client/index.js', 'utf8')
		res.statusCode = 200;
		res.setHeader('Content-type', 'text/javascript')
		res.end(jsFile)
	} else if (url === '/json') {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');

		const obj = {
			title: 'Що таке JSON',
			article: 'JSON (JavaScript Object Notation) – це текстовий формат, призначений для зберігання структурованих даних. Він був створений американським програмістом Дугласом Крокфордом на базі JavaScript, але при цьому не прив\'язаний до нього і є незалежним. JSON легко поєднується з будь-яким сучасним середовищем програмування, зокрема, код для введення та обробки даних у цьому форматі присутній у мовах PHP, Python, Java та Ruby.'
		};

		const json = JSON.stringify(obj);
		res.end(json);
	}
});

server.listen(config.port);