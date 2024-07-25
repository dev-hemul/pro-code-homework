// Це все називається роутер сторінки blog

import {Router} from "express";

const router = new Router();

// А це називається роут, їх може бути багато
router.get('/123', (req, res) => {
	res.json({test: 123});
})

// А це динамічний роут по ID, p url параметром

router.get('/:id', (req, res) => {
	const {id} = req.params;
	console.log(id);
})

export default router;