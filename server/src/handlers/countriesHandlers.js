const { 
	getCountries,
	getCountryById,
	searchCountriesByName
} = require('../controllers/countryController.js');

const getCountriesHandler = async (req, res) => {
	const { name } = req.query;
	try {
		if(name){
			const queryName = await searchCountriesByName(name);
			res.status(200).json(queryName);
		}else{
			const allCountries = await getCountries();
			res.status(200).json(allCountries);
		}
	} catch(error){
		console.error('La información no existe o hubo un error al obtener los países')
		res.status(500).json({ error: error.message });
	}
};

const getCountriesByIdHandler = async (req, res) => {
	const { idPais } = req.params;
	try {
		const idParam = await getCountryById(idPais);
		res.status(200).json(idParam);
	}catch(error){
		console.error('Error al obtener el país por ID');
		res.status(500).json({ error: error.message });
	}
};

module.exports = {
	getCountriesHandler,
	getCountriesByIdHandler
}