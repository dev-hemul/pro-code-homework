// Підключення до бази даних
import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
	const dbName = 'mongodb+srv://devhemulll:88888888@cluster0.ah4xy.mongodb.net/User?retryWrites=true&w=majority&appName=Cluster0';
	try {
		await mongoose.connect(dbName);
		console.log(`Connected to DB user: ${dbName}`.bgGreen.black);
	} catch (err) {
		console.log(`'not connected', err`.bgYellow.red.bold);
	}
}

export default connectDB;



