import React, { useState, useEffect } from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

const FilmDetails = props => {
	
	const [film, setFilm] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		const getFilm = async () => {
			let res = await fetch('https://ghibliapi.herokuapp.com/films/' + props.match.params.id);
			if (res.ok) {
				let film = await res.json();
				setFilm(film);
			} else {
				setError(true);
			}
		};
		getFilm();
	}, [props.match.params.id]);
	
	return (
		<section className="row justify-content-center my-3">
			<article className="col-md-8">
				<div className="card my-3 shadow">
					<div className="card-body text-center">
						{error ? <h1 className="text-danger"><FaExclamationCircle /></h1> : <h4 className="card-title">{film.title}</h4>}
						<p className="card-text">{film.description}</p>
					</div>
				</div>
			</article>
		</section>
	);
}

export default FilmDetails;