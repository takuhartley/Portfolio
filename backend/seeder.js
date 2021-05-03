import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import User from './models/userModel.js';
import Project from './models/projectModel.js';
import connectDB from './config/database.js';
// ----------------------------------------------------------------------------------------------------
dotenv.config();
connectDB();
// ----------------------------------------------------------------------------------------------------
const importData = async () => {
	try {
		// Delete pre-existing data
		await User.deleteMany();
		const createdUsers = await User.insertMany(users);
		console.log('Data Imported!'.green.inverse);
		process.exit();
	} catch (error) {
		console.error(`${error}`.red.inverse);
		process.exit(1);
	}
};
// ----------------------------------------------------------------------------------------------------
const destroyData = async () => {
	try {
		await Project.deleteMany();
		await User.deleteMany();
		console.log('Data Destroyed!'.red.inverse);
		process.exit();
	} catch (error) {
		console.error(`${error}`.red.inverse);
		process.exit(1);
	}
};
// ----------------------------------------------------------------------------------------------------
if (process.argv[2] === '-d') {
	destroyData();
} else {
	importData();
}
// ----------------------------------------------------------------------------------------------------
