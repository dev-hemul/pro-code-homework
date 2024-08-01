import {Router} from 'express';
import * as filmCtrl from '../../controllers/card-films.js';

const router = Router();

router.get('/', (req, res) => {
  const {findAll} = filmCtrl;
  const items = findAll();
  res.render('main', {items});
})

export default router;