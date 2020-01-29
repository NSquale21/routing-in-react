import React, { useState, useEffect } from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

const PeopleDetails = props => {
	
	const [person, setPerson] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		const getPerson = async () => {
			let res = await fetch('https://ghibliapi.herokuapp.com/people/' + props.match.params.id);
			if (res.ok) {
				let person = await res.json();
				setPerson(person);
			} else {
				setError(true);
			}
		}
		getPerson();
	}, [props.match.params.id]);
	
	return (
		<section className="row justify-content-center my-3">
			<article className="col-md-8">
				<div className="card my-3 shadow">
					<div className="card-body text-center">
						{error ? <h1 className="text-danger"><FaExclamationCircle /></h1> : <h4 className="card-title">{person.name}</h4>}
						<p className="card-text">Age: {person.age ? person.age : 'NA'}</p>
					</div>
				</div>
			</article>
		</section>
	);
}

export default PeopleDetails;