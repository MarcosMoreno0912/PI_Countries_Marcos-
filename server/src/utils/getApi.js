const axios = require('axios');
const { Country } = require('../db.js');

const getCountriesData = async () => {
	try {
		const response = await axios.get('https://restcountries.com/v3.1/all');
		const countriesData = response.data;

		const countries = countriesData.map(countryData => ({
			id: countryData.cca3,
			name: countryData.name.common,
			flag: countryData.flags?.png || '',
			continent: countryData.region || '',
			capital: countryData.capital?.[0] || '',
			area: countryData.area?.toString() || null,
			population: countryData.population ?? null,
		}));

		await Country.bulkCreate(countries, {
			updateOnDuplicate: ['name', 'flag', 'continent', 'capital', 'area', 'population',],
		});

		console.log('Countries saved succesfully!');
	}catch(error){
		console.error('Error saving countries', error);
	}
};

module.exports = { getCountriesData };