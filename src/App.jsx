import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './pages/Home';
import Films from './pages/Films';
import People from './pages/People';
import FilmDetails from './pages/FilmDetails';
import PeopleDetails from './pages/PeopleDetails';

const App = () => {
  return (
		<BrowserRouter>
		<NavBar />
			<main className="container">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/films" component={Films} />
					<Route exact path="/people" component={People} />
					<Route exact path="/films/:id" component={FilmDetails} />
					<Route exact path="/people/:id" component={PeopleDetails} />
				</Switch>
			</main>
		</BrowserRouter>
  );
}

export default App;