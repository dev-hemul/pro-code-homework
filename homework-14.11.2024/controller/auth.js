import fs from 'fs/promises';
import path from 'path';

// Бібліотека для роботи з JWT (JSON Web Signature). Вона дозволяє підписувати або перевіряти токени.
import jws from 'jws';

const alg = 'RS512';

// process.cwd() повертає поточну робочу директорію, звідки був запущений скрипт.
// Кореневий каталог використовується для вказівки базової директорії, щодо якої будуються шляхи до файлів.
const rootdir = process.cwd();

// Приватний і публічний ключ мають генеруватись десь на сервері локально, для теста використав онлайн генератор
const priv = await fs.readFile(path.join(rootdir, 'keys/priv.key'), 'utf8');
const pub = await fs.readFile(path.join(rootdir, 'keys/pub.key'), 'utf8');

// Функція для створення JWT
const createJWT = (data) => {
	const token = jws.sign({
  header: { alg },
  payload: data,
  secret: priv,
});
	return token;
}

// Функція для перевірки JWT
const checkJWT = (jwt) => {
	return jws.verify(jwt, alg, pub)
}

// Функція для декодування JWT
const decodeJWT = (jwt) => {
	return jws.decode(jwt);
}

export {createJWT, checkJWT, decodeJWT};