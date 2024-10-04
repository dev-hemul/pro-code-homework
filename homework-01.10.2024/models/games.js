import mongoose, {Schema} from 'mongoose';
import './year.js';

const schema = new Schema({
	name: {type: String},
	year_id: {type: Schema.Types.ObjectId, ref: 'year'},
});

const model = mongoose.model('game', schema);

export default model;