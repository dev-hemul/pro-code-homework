import { Router } from 'express';
import createHttpError from 'http-errors';
import * as filmCtrl from '../../controllers/card.js';

const router = Router();

router.get('/:id', (req, res, next) => {
  const id = Number(req.params.id);
  const { findbyId } = filmCtrl;
  const item = findbyId(id);
  if (item) {
    res.render('card', { item });
  } else {
    next(createHttpError(404, 'Card not found'));
  }
});

export default router;