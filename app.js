import express from 'express';
import moviesRoutes from './src/routes/movie.routes.js';
import { connectDB } from './src/config/database.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = Number(process.env.PORT);

app.use(express.json());
app.use('/api', moviesRoutes);

connectDB().then(() =>
	app.listen(PORT, () =>
		console.log('>>> Servidor escuchando en http://localhost:' + PORT),
	),
);
