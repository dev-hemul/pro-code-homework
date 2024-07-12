/*
import fs from 'node:fs';

fs.readFile('text.txt', 'utf8', (err, data) => {
	if (err) {
		console.error(err);
		return;
	}

	console.log(data);
})*/

import fs from 'node:fs/promises';

async function readWriteDeleteFile() {
	const data = await fs.readFile('text.txt', 'utf-8');
	await fs.writeFile('another-text.txt', data);
	console.log('File has been written');

	setTimeout(async () => {
		await fs.rm('another-text.txt');
		console.log('File has been deleted');
	}, 10000);
}

readWriteDeleteFile();