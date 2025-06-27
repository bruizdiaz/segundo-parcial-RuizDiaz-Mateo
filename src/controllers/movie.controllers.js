import { Movie } from '../models/movie.model.js';

const capitalize = (str) => {
	if (typeof str !== 'string') throw new Error();
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

//Obtener todas las peliculas
export const getAllMovies = async (req, res) => {
	try {
		const movies = await Movie.findAll({
			attributes: {
				exclude: ['updatedAt', 'createdAt'],
			},
		});
		return res.status(200).json({ movies });
	} catch (err) {
		console.error('>>> Hubo un error inesperado:', err);
		return res.status(500).json({ message: 'Error interno del servidor' });
	}
};

//Obtener pelicula por ID
export const getMovieByID = async (req, res) => {
	try {
		const { id } = req.params;
		const movie = await Movie.findByPk(id);
		if (!movie) {
			return res.status(404).json({ message: 'Película no encontrada' });
		}
		res.json(movie);
	} catch (err) {
		console.error('>>> Hubo un error inesperado:', err);
		return res.status(500).json({ message: 'Error interno del servidor' });
	}
};

//Crear una pelicula
export const createMovie = async (req, res) => {
	try {
		const { title, director, duration, genre, description } = req.body;
		const errors = [];
		let newDescription = description;

		// Validaciones de campos vacíos o nulos
		if (title === '' || director === '' || duration === '' || genre === '')
			errors.push({ message: '¡No puedes dejar campos vacios!' });
		if (title === null || director === null || duration === null || genre === null)
			errors.push({ message: '¡No puedes dejar campos nulos!' });
		if (
			title === undefined ||
			director === undefined ||
			duration === undefined ||
			genre === undefined
		)
			errors.push({ message: '¡No puedes dejar campos sin definir!' });
		if (!description || description === null || description === '')
			newDescription = 'No hay descripcion proporcionada';

		if (errors.length > 0) return res.status(400).json({ errors });

		// Validación de duración
		if (duration < 0) errors.push({ message: 'La duracion no puede ser menor a 0' });
		if (duration % 1 !== 0)
			errors.push({
				message: 'La duracion de la pelicula debe ser redondeada a un numero entero.',
			});
		if (typeof duration !== 'number' || isNaN(duration)) {
			errors.push({ message: 'La duración debe ser un número válido.' });
		}
		if (errors.length > 0) return res.status(400).json({ errors });

		// Formateo de datos
		const formatedTitle = capitalize(title.trim());
		const formatedGenre = capitalize(genre.trim());
		const formatedDirector = capitalize(director.trim());
		const formatedDescription = capitalize(newDescription.trim());

		// Validar unicidad de título
		const existingMovie = await Movie.findOne({ where: { title: formatedTitle } });
		if (existingMovie) {
			return res.status(409).json({ message: 'Ya existe una película con ese título' });
		}

		// Crear película
		const newMovie = await Movie.create({
			title: formatedTitle,
			director: formatedDirector,
			duration: duration,
			genre: formatedGenre,
			description: formatedDescription,
		});

		return res.status(201).json({ newMovie });
	} catch (err) {
		console.error('>>> Hubo un error inesperado:', err);
		return res.status(500).json({ message: 'Error interno del servidor' });
	}
};

//Actualiza una película existente por su ID.
export const updateMovie = async (req, res) => {
	try {
		const { id } = req.params;
		let { title, director, duration, genre, description } = req.body;
		const errors = [];

		// Validaciones de campos vacíos o nulos
		if (title === '' || director === '' || duration === '' || genre === '')
			errors.push({ message: '¡No puedes dejar campos vacíos!' });
		if (title === null || director === null || duration === null || genre === null)
			errors.push({ message: '¡No puedes dejar campos nulos!' });
		if (description === null || description === undefined) description = '';

		// Validación de duración
		if (duration < 0) errors.push({ message: 'La duración no puede ser menor a 0' });
		if (duration % 1 !== 0)
			errors.push({
				message: 'La duración de la película debe ser un número entero.',
			});
		if (typeof duration !== 'number' || isNaN(duration)) {
			errors.push({ message: 'La duración debe ser un número válido.' });
		}
		if (errors.length > 0) return res.status(400).json({ errors });

		// Buscar película por ID
		const movie = await Movie.findByPk(id);
		if (!movie) {
			return res.status(404).json({ message: 'Película no encontrada' });
		}

		// Validar unicidad de título (excepto la actual)
		if (title && title !== movie.title) {
			const existingMovie = await Movie.findOne({ where: { title: formatedTitle } });
			if (existingMovie && existingMovie.id !== movie.id) {
				return res.status(409).json({ message: 'Ya existe una película con ese título' });
			}
		}

		// Formateo de datos
		const formatedTitle = capitalize(title.trim());
		const formatedGenre = capitalize(genre.trim());
		const formatedDirector = capitalize(director.trim());
		const formatedDescription = capitalize(description.trim());

		// Actualizar película
		await movie.update({
			title: formatedTitle,
			director: formatedDirector,
			duration,
			genre: formatedGenre,
			description: formatedDescription,
		});
		return res.status(200).json({ message: 'Película actualizada', movie });
	} catch (err) {
		console.error('>>> Hubo un error inesperado:', err);
		return res.status(500).json({ message: 'Error interno del servidor' });
	}
};

//Elimina una película por su ID.
export const deleteMovie = async (req, res) => {
	try {
		const { id } = req.params;
		const movie = await Movie.findByPk(id);
		if (!movie) {
			return res.status(404).json({ message: 'Película no encontrada' });
		}
		await movie.destroy();
		return res.status(200).json({ message: 'Película eliminada' });
	} catch (err) {
		console.error('>>> Hubo un error inesperado:', err);
		return res.status(500).json({ message: 'Error interno del servidor' });
	}
};
