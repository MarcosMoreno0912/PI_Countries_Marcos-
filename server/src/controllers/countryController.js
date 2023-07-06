const { Country } = require('../db.js');
const { Activity } = require('../db.js');

const getCountries = async (req, res) => {
	try{
		const countries = await Country.findAll({
			include: [{ model: Activity }],
		});
		const countriesData = countries.map(country =>({
			id: country.id,
      		name: country.name,
      		flag: country.flag,
      		continent: country.continent,
      		capital: country.capital,
      		area: country.area,
     		population: country.population,
		}));
		res.status(200).json(countriesData);
	}catch(error) {
		console.error('Error al obtener los países', error);
		res.status(500).json({ error: 'Error al obtener los países' });
	}
};

const getCountryById = async (req, res) => {
	const idPais = req.params.idPais.toUpperCase();

	try{
		const country = await Country.findOne({
			where: { id: idPais },
			include: [{ model: Activity }],
		});

		if(country){
			return res.status(200).json(country);
		}else{
			return res.status(404).json({ error: 'País no encontrado' });
		}
	}catch(error){
		console.error('Error al obtener el detalle del país', error);
		res.status(500).json({ error: 'Error al obtener el detalle del país' });
	}
};

const searchCountriesByName = async (req, res) => {
	const name = req.query.name;

	try{
		const countries = await Country.findAll({
			where: { name: { [Op.like]: `%${name}%` } },
			include: [{ model: Activity }],
		});

		if(countries.length === 0){
			return res.status(404).json({ error: 'Países no encontrados' });
		}
		const countriesData = countries.map(country => ({
			id: country.id,
      		name: country.name,
      		flag: country.flag,
      		continent: country.continent,
      		capital: country.capital,
      		area: country.area,
      		population: country.population,
		}));

		res.status(200).json(countriesData);
	} catch(error){
		console.error('Error al buscar países por nombre', error);
		res.status(500).json({ error: 'Error al buscar los países por nombre' });	
	}
};

module.exports = {
	getCountries,
	getCountryById,
	searchCountriesByName,
}