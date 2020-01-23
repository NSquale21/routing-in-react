import React from 'react';
import { Link } from 'react-router-dom';

const FilmCard = ({ film }) => {
	return (
		<article className="col-8">
			<div className="card my-2 shadow">
				<div className="card-body text-center">
					<h4 className="card-title">{film.title}</h4>
					<Link className="btn btn-primary btn-sm shadow-sm" to={`/films/${film.id}`}>Details</Link>
				</div>
			</div>
		</article>
	);
}

export default FilmCard;