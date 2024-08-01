const films = [
	{
		id: 1, name: "Inception", img: "img/inception.jpg", producer: "Christopher Nolan", year: "2010", rating: "8.7"
	},
	{
		id: 2, name: "Tenet", img: "img/tenet.jpg", producer: "Christopher Nolan", year: "2020", rating: "7.5"
	},
	{
		id: 3, name: "Interstellar", img: "img/interstellar.jpg", producer: "Christopher Nolan", year: "2014", rating: "8.5"
	},
	{
		id: 4, name: "Transcendence", img: "img/transcendence.jpg", producer: "Christopher Nolan", year: "2014", rating: "6.3"
	},
	{
		id: 5, name: "The Dark Knight Rises", img: "img/the-dark-knight-rises.jpg", producer: "Christopher Nolan", year: "2012", rating: "8.3"
	}
];

const findAll = () => {
	return films;
};

const findbyId = (id) => {
	const result = films.find(film => film.id === id);
	return result;
};

export { findAll, findbyId }
