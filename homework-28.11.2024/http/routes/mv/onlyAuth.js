import * as auth from './../../../controller/auth.js';
import createHttpError from 'http-errors';

// Функція перевірки токена
const mv = (req, res, next) => {
  if (!req.body.accessT) {
    return next(createHttpError(401, 'No access token provided'));
  }

  const result = auth.verifyAccessT(req.body.accessT);
  console.log('verifyAccessT result:', result);
  if (result !== 'ок') {
    return next(createHttpError(403, 'Invalid or expired token'));
  }

  const payload = auth.getPayloadAccessT(req.body.accessT);
  res.locals.uid = payload.iss;
  console.log('Payload:', payload);
  console.log('UID:', res.locals.uid);

  next();
};

export default mv;