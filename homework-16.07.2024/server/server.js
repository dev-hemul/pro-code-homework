import http from 'node:http';
import fs from 'node:fs/promises';

const config = {
	port: 8000
}

let num = 50;

const server = http.createServer(async (req, res) => {
	const {url} = req;
	if (url === '/') {
		const index = await fs.readFile('client/index.html', 'utf8');
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html; charset=utf-8');
		res.end(index);
	}else if (url === '/style.css') {
			const css = await fs.readFile('client/style.css', 'utf8');
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/css; charset=utf-8');
			res.end(css);
	}else if (url === '/index.js') {
		const js = await fs.readFile('client/index.js', 'utf8');
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/javascript; charset=utf-8');
		res.end(js);
	}else if (url === '/inc') {
 		num+=1;
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain; charset=utf-8');
		console.log(num);
		res.end("ok");
	}else if (url === '/dec') {
		num-=1;
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain; charset=utf-8');
		console.log(num);
		res.end("ok");
	}else if (url === '/num') {

		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain; charset=utf-8');
		res.end(String(num));
	}
});

server.listen(config.port);