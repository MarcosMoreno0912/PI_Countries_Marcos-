import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchCountries } from '../../redux/actions.js';
import style from './SearchBar.module.css';

const SearchBar = () => {
	const [searchCountry, setSearchCountry] = useState('');
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
	};

	return (
		<div className={style.searchB}>
			<input className={style.searchInput} type="search" value={searchCountry} onChange={handleInputChange} placeholder="Buscar País" />
			<button className={style.searchButton}onClick={handleSearch}>Search</button>
			{searchCountry && <button className={style.clearButton} onClick={handleClearSearch}>Clear</button>}		
		</div>
	)
}

export default SearchBar; 