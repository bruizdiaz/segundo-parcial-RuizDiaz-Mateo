import { Router } from 'express';
import {
	getAllMovies,
	getMovieByID,
	createMovie,
	updateMovie,
	deleteMovie,
} from '../controllers/movie.controllers';

const router = Router();

router.get('/', getAllMovies);
router.get('/:id', getMovieByID);
router.post('/', createMovie);
router.put('/:id', updateMovie);
router.delete('/:id', deleteMovie);

export default router;
