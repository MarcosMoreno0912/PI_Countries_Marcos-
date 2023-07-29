import React, { useState } from 'react';
import style from './ActivityCard.module.css';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteActivity } from '../../redux/actions.js';
//import EditActivityForm from '../EditActivityForm/EditActivityForm.jsx';

const ActivityCard = ({ activityId, flag, name, difficulty, duration, season, countries }) => {
	const navigate = useNavigate();
	const allCountries = useSelector(state => state.allCountries);
	const dispatch = useDispatch();
	const [searchTerm, setSearchTerm] = useState('');

  	const filteredCountries = countries && countries.filter((country) => 
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
   	);

  	const handleDelete = () => {
  		const confirmation = window.confirm('¿Estás seguro de que quieres eliminar esta actividad?');
  		if(confirmation){
  			dispatch(deleteActivity(activityId))
  		}
  	};

	return (
		<>
			<div className={style.card}>
				<h3>{name}</h3>
				<h5>{season}</h5>
				<h5>Countries:</h5>
					<ul>
        				{filteredCountries && filteredCountries.map(country => (
          					<li key={country.name}>
            					{country.name}
          					</li>
        				))}
      				</ul>
      			<div className={style.buttons}>
        			<button className={style.deleteB}onClick={handleDelete}>Delete</button>
				</div>			
			</div>		
        </>
	);
}

export default ActivityCard;