import mongoose, {Schema} from 'mongoose';

const schema = new Schema({
	name: {type: String},
	year: {type: Number},
});

const model = mongoose.model('Albums', schema);

export default model;