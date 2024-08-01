import {Router} from 'express';
import createHttpError from 'http-errors';
import * as filmCtrl from '../../controllers/card.js';

const router = Router();

router.get('/', (req, res) => {
  const {findAll} = filmCtrl;
  const items = findAll();
  res.render('main', {items});
})

export default router;