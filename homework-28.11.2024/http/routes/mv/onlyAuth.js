import * as auth from './../../../controller/auth.js';
import createHttpError from 'http-errors';

// Функция проверки токена
const mv = (req, res, next) => {
  // Извлекаем токен из заголовка Authorization
  const accessT = req.headers['authorization']?.split(' ')[1];  // Ожидаем формат "Bearer <token>"

  if (!accessT) {
    return next(createHttpError(401, 'No access token provided'));
  }

  // Проверяем токен
  const result = auth.verifyAccessT(accessT);
  console.log('verifyAccessT result:', result);

  if (result !== true) {
    return next(createHttpError(403, 'Invalid or expired token'));
  }

  // Извлекаем payload из токена и сохраняем user ID в res.locals
  const payload = auth.getPayloadAccessT(accessT);
  res.locals.uid = payload.iss;  // Сохраняем user ID как uid
  console.log('Payload:', payload);
  console.log('UID:', res.locals.uid);

  next();
};

export default mv;
