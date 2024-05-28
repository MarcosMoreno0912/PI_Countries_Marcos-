import { useState } from 'react';
import style from './CountrySelectForm.module.css';

const CountrySelect = ({ countries, selectedCountries, handleCountryChange }) => {
   const [searchTerm, setSearchTerm] = useState('');

   const toggleCountrySelection = (event, country) => {
      const isChecked = event.target.checked;
      const selectedIds = isChecked
      ? [...selectedCountries.map((c) => c.id), country.id]
      : selectedCountries && selectedCountries.filter((c) => c.id !== country.id)

      handleCountryChange(selectedIds);
   };

   const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
   };

   const filteredCountries = countries.filter((country) => 
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
   );

   return (
      <div className={style.countrySelect}>
         <div className={style.searchBox}>
            <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Buscar países..." />
         </div>
         <div className={style.countryList}>
            {filteredCountries && filteredCountries.map((country) => (
               <div key={country.id} className={style.countryCard}>
                  <input type="checkbox" checked={selectedCountries && selectedCountries.some((c) => c.id === country.id)}
                     onChange={(e) => toggleCountrySelection(e, country)}
                  />
                  <img src={country.flag} alt={country.name} className={style.imageFlag} />
                  <span>{country.name}</span>
               </div>
            ))}         
         </div>  
      </div>
   );
};

export default CountrySelect;