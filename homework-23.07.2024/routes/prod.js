import {Router} from "express";

const router = new Router();

router.get('/list', (req, res) => {
	const product= [
		{id: 1, name: 'prod 1', price: 123},
	]
	res.json(product);
})

export default router;