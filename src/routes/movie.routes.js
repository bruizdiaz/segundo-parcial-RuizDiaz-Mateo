import { Router } from 'express';
import {
	getAllMovies,
	getMovieByID,
	createMovie,
	updateMovie,
	deleteMovie,
} from '../controllers/movie.controllers.js';

const router = Router();

router.get('/movies', getAllMovies);
router.get('/movies/:id', getMovieByID);
router.post('/movies', createMovie);
router.put('/movies/:id', updateMovie);
router.delete('/movies/:id', deleteMovie);

export default router;
