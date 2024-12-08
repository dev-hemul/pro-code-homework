import {Router} from 'express';
import onlyAuthMv from './mv/onlyAuth.js';


const router = Router();

router.get('/', (req, res) => {
	// TODO: Тут має рендеритись головна сторінка авторизації
	res.send('<h1>Головна сторінка</h1>')
})

router.post('/profile', onlyAuthMv, (req, res) => {
	const {uid} = res.locals.uid;
	res.json({status: 'ok', payload: uid});
})

export default router;