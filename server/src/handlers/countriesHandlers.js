const { 
	getCountries,
	getCountryById,
	searchCountriesByName
} = require('../controllers/countryController.js');

const getCountriesHandler = async (req, res) => {
	const { name } = req.query;
	try {
		if(!name){
			const allCountries = await getCountries();
		    res.status(200).json(allCountries);
		}
		const country = await searchCountriesByName(name);

		if(country.length === 0){
			return res.status(404).json({ error: 'No hay países con ese nombre o no se puede obtener '});
		}
		res.status(200).json(country);
	} catch(error){
		console.error('Ocurrió un error al obtener los países')
		res.status(500).json({ error: error.message });
	}
};

const getCountriesByIdHandler = async (req, res) => {
	const { idPais } = req.params;
	try {
		const country = await getCountryById(idPais);
		if(country.length > 0){
			res.status(200).json(country);
		}else{
			res.status(404).send('No se encontró un país con el ID proporcionado');
		}		
	}catch(error){
		console.error('Error al obtener el país por ID');
		res.status(500).json({ error: error.message });
	}
};
	
module.exports = {
	getCountriesHandler,
	getCountriesByIdHandler
}