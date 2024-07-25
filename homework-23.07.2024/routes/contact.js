import {Router} from "express";

const router = new Router();

router.get('/contact', (req, res) => {
    res.render('contact');
});

export default router;