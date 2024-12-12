import {Router} from 'express';
import onlyAuthMv from './mv/onlyAuth.js';


const router = Router();

router.post('/profile', onlyAuthMv, (req, res) => {
	const {uid} = res.locals;
	console.log('res.locals.uid:', res.locals.uid);
	res.json({status: 'ok', payload: {uid}});
})

export default router;