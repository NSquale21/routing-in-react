import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
		<nav className="nav justify-content-center p-2 shadow">
			<NavLink exact to='/' className="btn btn-outline-primary mx-2 shadow-sm" activeClassName="btn btn-primary mx-2 shadow-sm text-white">Home</NavLink>
			<NavLink exact to='/films' className="btn btn-outline-primary mx-2 shadow-sm" activeClassName="btn btn-primary mx-2 text-white shadow-sm">Films</NavLink>
			<NavLink exact to='/people' className="btn btn-outline-primary mx-2 shadow-sm" activeClassName="btn btn-primary mx-2 text-white shadow-sm">People</NavLink>
		</nav>
  );
}

export default NavBar;