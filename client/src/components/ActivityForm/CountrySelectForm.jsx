import React, { useState } from 'react';
import style from './CountrySelectForm.module.css?inline';

const CountrySelect = ({ countries, selectedCountries, handleCountryChange }) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [selectedCountryIds, setSelectedCountryIds] = useState(selectedCountries)

	const toggleDropdown = () => {
		setIsDropdownOpen((prevState) => !prevState);
	};

	const toggleCountrySelection = (event) => {
		const selectedIds = Array.from(event.target.options)
		.filter((option) => option.selected)
		.map((option) => option.value)

		setSelectedCountryIds(selectedIds);
		handleCountryChange(selectedIds);
	};

//	const handleCountrySelect = (event) => {
//		const selectedCountryIds = Array.from(event.target.options)
//		.filter((option) => option.selected)
//		.map((option) => option.value);
//	
//		handleCountryChange (selectedCountryIds);
//	};

	return (
    <div className={`country-select`}>
      <div className="select-options" onClick={toggleDropdown}>
        <span className="placeholder">-- Select countries --</span>
        <i className="arrow-icon"></i>
      </div>
      <div className="select-options">
        <select multiple value={selectedCountryIds} onChange={toggleCountrySelection}>
          {countries && countries.map((country) => (
            <option key={country.id} value={country.id}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      {selectedCountryIds && selectedCountryIds.length > 0 && (
        <div className="selected-countries">
          {selectedCountryIds && selectedCountryIds.map((countryId) => {
            const country = countries && countries.find((c) => c.id === countryId);
            if (!country) {
              	return null;
            }
            return (
              <div key={country.id} 
              	className={`country-card ${selectedCountryIds && selectedCountryIds.includes(countryId) ? 'selected' : ''}`}
              	onClick={() => toggleCountrySelection(country.id)}
              >  
                <img src={country.flag} alt={country.name} />
                <span>{country.name}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CountrySelect;