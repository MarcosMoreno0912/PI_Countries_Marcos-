import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchCountries } from '../../redux/actions.js';

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
		<div>
			<input type="search" value={searchCountry} onChange={handleInputChange} placeholder="Buscar País" />
			<button onClick={handleSearch}>Search</button>
			{searchCountry && <button onClick={handleClearSearch}>Clear</button>}		
		</div>
	)
}

export default SearchBar; 