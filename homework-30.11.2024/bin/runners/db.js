// Підключення до бази даних
import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
	const dbName = 'mongodb+srv://devhemulll:1111111111@cluster0.b5p5e.mongodb.net/jwt?retryWrites=true&w=majority&appName=Cluster0';
	try {
		await mongoose.connect(dbName);
		console.log(`Connected to DB user: ${dbName}`.bgGreen.black);
	} catch (err) {
		console.log(`'not connected', err`.bgYellow.red.bold);
	}
}

export default connectDB;