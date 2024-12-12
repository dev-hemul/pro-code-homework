import mongoose, {Schema, SchemaTypes} from 'mongoose';

const schema = new Schema({
	login: {
		type: SchemaTypes.String,
		default: '',
	},
	password: {
		type: SchemaTypes.String,
		default: '',
	},
	email: {
		type: SchemaTypes.String,
		default: '',
	},
	jti: {
		type: SchemaTypes.String,
		default: '',
	},
	refreshToken: {
		type: SchemaTypes.String,
		default: '',
	},
	param: {
		type: mongoose.Schema.Types.ObjectId,
		default: null,
	}
	
}, {timestamps: true}); // Автоматом додасть поля createdAt, updatedAt (час створення і час оновлення запису)

const model = mongoose.model('user', schema, 'user');
export default model;
