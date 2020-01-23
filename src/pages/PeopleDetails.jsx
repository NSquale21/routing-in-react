import React, { useState, useEffect } from 'react';

const PeopleDetails = props => {
	
	const [person, setPerson] = useState([]);

	useEffect(() => {
		const getPerson = async () => {
			let res = await fetch('https://ghibliapi.herokuapp.com/people/' + props.match.params.id);
			let person = await res.json();
			setPerson(person);
		}
		getPerson();
	}, []);
	
	return (
		<section className="row justify-content-center my-3">
			<article className="col-md-8">
				<div className="card my-3 shadow">
					<div className="card-body text-center">
						<h4 className="card-title">{person.name}</h4>
						<p className="card-text">Age: {person.age ? person.age : 'NA'}</p>
					</div>
				</div>
			</article>
		</section>
	);
}

export default PeopleDetails;