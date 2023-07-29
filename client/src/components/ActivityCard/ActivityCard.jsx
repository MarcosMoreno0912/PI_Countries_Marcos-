import React from 'react';
import style from './ActivityCard.module.css';
import { useNavigate } from 'react-router-dom';

export const ActivityCard = ({ activityId, flag, name, season, countries }) => {
	const navigate = useNavigate();

	const handlerClick = () => {
		navigate();
	};

	return (
		<div className={style.card}>
			<h3>{name}</h3>
			<h5>{season}</h5>
			<h5>{countries}</h5>
			<img src={flag} alt={name} width="200px" height="250px" />
        	<button onClick={handlerClick}>Modificar</button>
        	<button onClick={handlerClick}>Eliminar</button>
		</div>
	);
}

export default ActivityCard;