import * as cardModel from '../model/card-films.js';

const findAll = () => {
	return cardModel.findAll();
}

const findbyId = (id) => {
	return cardModel.findbyId();
}

export { findAll, findbyId};