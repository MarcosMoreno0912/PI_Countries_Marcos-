import React from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import style from './NavBar.modules.css?inline';
import { Link } from 'react-router-dom'

const NavBar = () => {
	
	return (
		<div className={style.navContainer}>
			<Link to="/home">Home</Link>
			<Link to="/createAct">Create Activity</Link>
			<SearchBar />
		</div>
	);
};

export default NavBar;