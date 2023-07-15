import React from 'react';
import style from './Card.module.css';
import { Link } from 'react-router-dom';

export const Card = ({ idPais, flag, name, continent }) => {
	return (
		<div className={style.card}>
			<img src={flag} alt={name} width="200px" height="250px" />
			<h3>{name}</h3>
			<h5>{continent}</h5>
			<Link to={`/countries/${idPais}`}>
        		<button>Ver más</button>
      		</Link>
		</div>
	);
}

export default Card;
