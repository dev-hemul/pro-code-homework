import * as cardModel from '../model/card.js';

const findAll = () => {
	return cardModel.findAll();
}

const findbyId = (id) => {
	return cardModel.findbyId(id);
}

export { findAll, findbyId };