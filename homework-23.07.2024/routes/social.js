import {Router} from "express";

const router = new Router();

router.get('/', (req, res) => {
    res.render('social');
});

export default router;