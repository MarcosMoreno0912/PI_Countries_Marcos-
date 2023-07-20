import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, getActivities, filterCountriesByContinent, sortCountriesAlphabet, sortCountriesByPopulation } from '../../redux/actions.js';
import ActivityFilter from './ActivityFilter.jsx';
import style from './FiltersAndorders.module.css';

const Filters = () => {
	const dispatch = useDispatch();
	const [selectedContinent, setSelectedContinent] = useState('');

	const  { countries } = useSelector((state) => state);

	const handleContinentFilter = (event) => {
		const continent = event.target.value;
		setSelectedContinent(continent);
		if(continent === ""){
			dispatch(getCountries());
		}else{
			dispatch(filterCountriesByContinent(continent));
		}	
	};



	const handleAlphabetSort = (event) => {
		const order = event.target.value;
		dispatch(sortCountriesAlphabet(order));
	};

	const handlePopulationSort = (event) => {
		const order = event.target.value;
		dispatch(sortCountriesByPopulation(order));
	};

	const handleResetFilters = () => {
		setSelectedContinent('');
		dispatch(getCountries());
	};

	return (
		<div className={style.filters}>
			<select onChange={handleContinentFilter}>
				<option value= "">All Continents</option>
				<option value= "Americas">Americas</option>
				<option value= "Africa">Africa</option>
				<option value= "Asia">Asia</option>
				<option value= "Europe">Europe</option>
				<option value= "Oceania">Oceania</option>
				<option value= "Antarctic">Antarctic</option>
			</select>
			<ActivityFilter />
			<select onChange={handleAlphabetSort}>
				<option value= "">Order by name</option>
				<option value= "asc">A-Z</option> 
				<option value= "desc">Z-A</option>// tanto de manera alfabética y por cantidad de población.
			</select>
			<select onChange={handlePopulationSort}>
				<option value= "">Order by Population</option>
				<option value= "asc">Población ascendente</option> 
				<option value= "desc">Población descendente</option>
			</select>
			<button onClick={handleResetFilters}>Reset Filters</button>
		</div>
	)
};

export default Filters;