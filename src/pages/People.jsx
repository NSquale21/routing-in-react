import React, { useState, useEffect } from 'react';
import PeopleCard from '../components/PeopleCard';

const People = props => {
	
	const [people, setPeople] = useState([]);

	useEffect(() => {
		const getPeople = async () => {
			let res = await fetch('https://ghibliapi.herokuapp.com/people');
			let people = await res.json();
			setPeople(people);
		}
		getPeople();
	}, []);
	
	return (
		<section className="row justify-content-center my-3">
			{people.map(person => <PeopleCard key={person.id} person={person} />)}
		</section>
  );
}

export default People;