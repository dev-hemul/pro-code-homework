import * as auth from './../../../controller/auth.js';
import createHttpError from 'http-errors';

// Функція перевірки токена
const mv = (req, res, next) => {
	if (!req.body.accessT) { // no token
	next(createHttpError(401, 'Not authorized, not token'));
	return;
	}
	
	const result = auth.verifyAccessT(req.body.accessT);
	
	if (result !== 'ok') {
	next(createHttpError(403));
	return;
	}
	
	const {payload } = auth.decodeAccessT(req.body.accessT);
	
	res.locals.uid = payload.iss;
	
	next();
}

export default mv;