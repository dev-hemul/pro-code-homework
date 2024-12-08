import fs from 'fs/promises';
import path from 'path';
// Бібліотека для роботи з JWT (JSON Web Signature). Вона дозволяє підписувати або перевіряти токени.
import jws from 'jws';
import {nanoid} from 'nanoid';

const reftokens = [

];

const alg = 'RS512';
const lifedur = 5 * 60 * 1000;

// process.cwd() повертає поточну робочу директорію, звідки був запущений скрипт.
// Кореневий каталог використовується для вказівки базової директорії, щодо якої будуються шляхи до файлів.
const rootdir = process.cwd();

// Приватний і публічний ключ мають генеруватись десь на сервері локально, для теста використав онлайн генератор
const priv = await fs.readFile(path.join(rootdir, 'keys/privateKey.pem'), 'utf8');
const pub = await fs.readFile(path.join(rootdir, 'keys/publicKey.pem'), 'utf8');


// Створюємо Access токен + час його життя (5 хвилин)
const createAccessT = (payload) => { // payload = { iss: user_id } У нашому випадку буде приходити ID юзера
	if(!payload.exp) {
		payload.exp = Date.now() + lifedur;
	}
	
	// Дописуємо JSON - token id
	payload.jti = nanoid();
	
	const token = jws.sign({
		header: {alg: alg},
		payload,
		secret: priv
	});
	
	return {token, jti};
}

// Створюємо Refresh Token
// TODO: Для тесту буде масив, але потрібно буде створити БД і записувати його туди
const createRefrT = (jti, param) => { // jti - token id, param - id юзера
	const token = nanoid();
	reftokens.push({
		jti,
		token,
		param
	});
	
	return token;
}

// Об'єднуємо функції створення access і refresh токенів через те що, будуть викликатись разом
const createTokens = (payload) => {
	// access token
	const {token: accessT, jti} = createAccessT(payload);
	// refresh token
	const params = {};
	if(payload.iss) {
		params.iss = iss;
	}
	
	const refreshT = createRefrT(jti, params);
	
	return {accessT, refreshT};
}

// Функція для оновлення токена
const replaceTokens = ( accessT, refreshT ) => {
	const { payload } = jws.decode(accessT);
	const { jti } = payload;
	const idx = reftokens.findIndex((item) => (item.jti === jti && item.token === refreshT));
	if(idx === -1) return false; // refresh token not found
	
	delete(reftokens[idx]); // remove used refresh token
	
	delete(payload.exp); // remove old exp date
	
	return createTokens(payload);
}

// Видалити всі токени певного юзера
const widthdrawRefrByIss = (iss) => { // В нашому контексті це user_id
	reftokens.forEach((item, idx) => {
		if (item.params.iss !== iss) {
		return;
		}
		
		delete reftokens[idx];
	})
}

export default { createTokens, replaceTokens, widthdrawRefrByIss };