import React, { useState, useEffect } from 'react';
import FilmCard from '../components/FilmCard';

const Films = props => {
	
	const [films, setFilms] = useState([]);

	useEffect(() => {
		const getFilms = async () => {
			let res = await fetch('https://ghibliapi.herokuapp.com/films');
			let films = await res.json();
			setFilms(films);
		}
		getFilms();
	}, []);
	
	return (
		<section className="row justify-content-center my-3">
			{films.map(film => <FilmCard key={film.id} film={film} />)}
		</section>
  );
}

export default Films;