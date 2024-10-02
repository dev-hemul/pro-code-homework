import mongoose from 'mongoose';
import Albums from './models/albums.js';

await mongoose.connect('mongodb://localhost:27017/Linkin-Park-Albums');

await Albums.create({
	name: 'Meteora',
	year: 2003
})

await Albums.create({
	name: 'One More Light',
	year: 2017
})

await Albums.create({
	name: 'From Zero',
	year: 2023
})

const result = await Albums.find();
console.log(result);

const id = '66fd97b7b8b82f396776db88';
await Albums.deleteOne({_id: id})

const id_deleted = '66fd97b7b8b82f396776db8a';
await Albums.updateOne({_id: id_deleted}, {year: '2024'})

