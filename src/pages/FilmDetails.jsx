import React, { useState, useEffect } from 'react';

const FilmDetails = props => {
	
	const [film, setFilm] = useState([]);

	useEffect(() => {
		const getFilm = async () => {
			let res = await fetch('https://ghibliapi.herokuapp.com/films/' + props.match.params.id);
			let film = await res.json();
			setFilm(film);
		}
		getFilm();
	}, []);
	
	return (
		<section className="row justify-content-center my-3">
			<article className="col-md-8">
				<div className="card my-3 shadow">
					<div className="card-body text-center">
						<h4 className="card-title">{film.title}</h4>
						<p className="card-text">{film.description}</p>
					</div>
				</div>
			</article>
		</section>
	);
}

export default FilmDetails;