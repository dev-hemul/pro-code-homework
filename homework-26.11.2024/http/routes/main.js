import Ajv from 'ajs';
import {Router} from 'express';
import * as auth from './../../controller/auth.js';

const router = Router();
const ajv = new Ajv();

router.get('/login', (req, res) => {
	// login+pwd
	// check login+pwd
	// get uid
	const uid = 10; // for test
	
	res.json({ status: 'ok', token }); // placeholder
	
})

export default router;