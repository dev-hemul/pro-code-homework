import mongoose, {Schema, SchemaTypes} from 'mongoose';

const schema = new Schema({
	name: {
		type: SchemaTypes.String,
		default: '',
	}
}, {timestamps: true}); // Автоматом додасть поля createdAt, updatedAt (час створення і час оновлення запису)

const model = mongoose.model('user', schema, 'user');
export default model;
