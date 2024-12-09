import { generateKeyPairSync } from 'crypto';
import fs from 'fs';

// Генерация ключей
const { publicKey, privateKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048, // Довжина ключа в бітах
  publicKeyEncoding: {
    type: 'spki', // Стандарт для публічного ключа
    format: 'pem', // Формат PEM
  },
  privateKeyEncoding: {
    type: 'pkcs8', // Стандарт для приватного ключа
    format: 'pem', // Формат PEM
  },
});

// Сохранение ключей в файлы
fs.writeFileSync('./keys/publicKey.pem', publicKey);
fs.writeFileSync('./keys/privateKey.pem', privateKey);

console.log('Ключі успішно сгенеровані!');