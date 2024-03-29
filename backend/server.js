// Dependencies
import path from 'path';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
// ----------------------------------------------------------------------------------------------------
// import path from 'path';
import connectDB from './config/database.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
// ----------------------------------------------------------------------------------------------------
// Routes (Import):
import userRoutes from './routes/userRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
// ----------------------------------------------------------------------------------------------------
dotenv.config();
// ----------------------------------------------------------------------------------------------------
// Function running to connect express with database
// connectDB(); was imported from another file and
// Sends a connection request using .env file and returns
// The connection
connectDB();
// ----------------------------------------------------------------------------------------------------
const app = express();
// Asking express to use json as a default-------------------------------------------------------------
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);
// ----------------------------------------------------------------------------------------------------
// Initial Test Route
app.get('/', (req, res) => {
	res.send('API running nicely boss');
});
// Routes----------------------------------------------------------------------------------------------
// app.use("/api/users", require("./routes/api/users"));
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/upload', uploadRoutes);
// ----------------------------------------------------------------------------------------------------
// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);
app.use(cors());
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '/frontend/build')));

	app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')));
} else {
	app.get('/', (req, res) => {
		res.send('API is running....');
	});
}
app.use(notFound);
app.use(errorHandler);
// ----------------------------------------------------------------------------------------------------
const PORT = process.env.PORT || 5000;
// ----------------------------------------------------------------------------------------------------
app.listen(PORT, console.log(`Server runnin in ${process.env.NODE_ENV} mode on ${PORT}`));
