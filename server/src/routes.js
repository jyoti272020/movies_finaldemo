const express = require('express');
const Movie = require('./models/Movie');
const BookTicket= require('./models/BookTicket')

const router = express.Router();

module.exports = function() {
	router.get('/getMovies/:searchValue', async (req, res) => {
        const { searchValue } = req.params;
        const moviesData = await Movie.find({title:searchValue});
        console.log(moviesData);
        return res.send(moviesData);
    });

	router.post('/addMovie', async (req, res) => {
		const { title, year, poster, imdbId, type } = req.body;

		const movie = new Movie({
			title,
			year,
			imdbId,
			type,
			poster
		});
		await movie.save();
		res.json({ message: 'Movie added successfully' });
    });
    
    router.post('/ticketBook', async (req, res) => {
		const { name, amount } = req.body;

		const ticketsave = new BookTicket({
			name, 
			amount
		});
		await ticketsave.save();
		res.json({ message: 'Ticket sucessfully booked' });
	});

	return router;
};
