import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom';
import { getCountriesDetail } from '../../redux/actions.js';
import style from './Detail.module.css?inline'
import { toast } from 'react-toastify';

 const DetailPage = () => {
	const { idPais } = useParams();
	const navigate = useNavigate(); 
	
	const dispatch = useDispatch();
	const country = useSelector((state) => state.allCountries.find((c) => c.id === idPais));
	
	useEffect(() => {
		dispatch(getCountriesDetail(idPais))
	}, [idPais, dispatch]);

	const handleBack = () => {
		navigate('/home')
	}

	const handleCreateAct = () => {
		navigate('/createAct')
	}

	if(!country) return toast.success('Loading Country...')
	
	return (
		<div className={style.detailContainer}>
      		<h1>{country.name}</h1>
         	<img src={country.flag} alt={country.name} className={style.flagImage} />
         		<div>
            		<p>
               			<strong>Id:</strong> {country.id}
            		</p>
            		<p>
               			<strong>Continent:</strong> {country.continent}
            		</p>
            		<p>
               			<strong>Capital:</strong> {country.capital}
            		</p>
            		<p>
               			<strong>Área:</strong> {country.area}
            		</p>
            		<p>
               			<strong>Population:</strong> {country.population}
            		</p>
            		<div>
               			<strong>Activities:</strong>{country.Activities && country.Activities.length ?
                  		country.Activities.map((a, idx) => 
                  			(<div key={idx}>
                        		<p><strong>{a.name}</strong> Difficulty: {a.difficulty}, Duration: {a.duration} hs., Season:  {a.season}</p>
                     		</div>))
                  	: <div> No activities to show</div>}
                  	<button onClick={handleBack}>Back</button>
                  	<button onClick={handleCreateAct}>Add Turistic Activity</button>
            	</div>
         	</div>
		</div>
	);
};
export default DetailPage;