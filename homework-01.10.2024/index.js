import mongoose from 'mongoose';
import gamesModel from './models/games.js';
import yearModel from './models/year.js';

await mongoose.connect('mongodb://localhost:27017/games');

/*await yearModel.create ({
	year: 2013,
})*/

const yearId = '66febea7eb08105c0a2ccfc5';

/*await gamesModel.create({
	name: 'Assassin’s Creed Odyssey',
	year_id: yearId
})*/

const result = await gamesModel
	.find({year_id: yearId})
	.populate('year_id')
console.log(result);
