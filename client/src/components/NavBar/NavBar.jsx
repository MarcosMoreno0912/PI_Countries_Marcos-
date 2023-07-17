import React from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import style from './NavBar.module.css';
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
	const navigate = useNavigate();

	const handleExitClick = () => {
		navigate('/')
	};

	const handleCreateActClick = () => {
		navigate('/createAct')
	};
	
	return (
		<div className={style.navContainer}>
			<button className={style.exitButton} onClick={handleExitClick}>
				Exit
			</button>
			<label>Próximo destino:</label>
			<SearchBar />
			<button className={style.createButton} onClick={handleCreateActClick}>
				Create Activity
			</button>
		</div>
	);
};

export default NavBar;