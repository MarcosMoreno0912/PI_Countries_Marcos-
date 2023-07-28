import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchCountries } from '../../redux/actions.js';
import style from './SearchBar.module.css';
import Notification from '../../components/Notification/Notification.jsx';

const SearchBar = () => {
	const [searchCountry, setSearchCountry] = useState('');
	const [showNoResultsNotification, setShowNoResultsNotification] = useState(false);
	const [showResultsNotification, setShowResultsNotification] = useState(false);
	const dispatch = useDispatch();

	const handleClearSearch = () => {
		setSearchCountry('')
		dispatch(searchCountries(''));
	};

	const handleInputChange = (event) => {
		const inputValue = event.target.value;
		setSearchCountry(inputValue);
		dispatch(searchCountries(inputValue));
	};

	const handleSearch = () => {
        dispatch(searchCountries(searchCountry));
        if(searchCountry.trim() === '') {
        	setShowNoResultsNotification(true);
        } else {
        	setShowResultsNotification(true);
        }
	};

	return (
		<div className={style.searchB}>
			{showNoResultsNotification && (
        		<Notification type="error" message="No existen coincidencias o países con ese nombre." onClose={() => setShowNoResultsNotification(false)} />
      		)}
      		{showResultsNotification && (
        		<Notification type="success" message="Resultados coincidentes con tu búsqueda." onClose={() => setShowResultsNotification(false)} />
      		)}
			<input className={style.searchInput} type="search" value={searchCountry} onChange={handleInputChange} placeholder="Buscar País" />
			<button className={style.searchButton}onClick={handleSearch}>Search</button>
			{searchCountry && <button className={style.clearButton} onClick={handleClearSearch}>Clear</button>}		
		</div>
	)
}

export default SearchBar; 