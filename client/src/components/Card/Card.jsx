import React from 'react';
import style from './Card.module.css';
import { useNavigate } from 'react-router-dom';

export const Card = ({ idPais, flag, name, continent }) => {
	const navigate = useNavigate();

	const handlerClick = () => {
		navigate(`/countries/${idPais}`);
	};

	return (
		<div className={style.card}>
			<h3>{name}</h3>
			<img src={flag} alt={name} width="200px" height="250px" />
			<h5>{continent}</h5>
        	<button onClick={handlerClick}>Ver más</button>
		</div>
	);
}

export default Card;
