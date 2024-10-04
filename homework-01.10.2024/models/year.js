import mongoose, {Schema} from 'mongoose';

const schema = new Schema({
	year: {type: Number}
});

const model = mongoose.model('year', schema);

export default model;