const { Country } = require('../db.js');
const { Activity } = require('../db.js');
const { Op } = require('sequelize');

const getCountries = async () => {
	try{ 
		const countries = await Country.findAll({
			include: {
				model: Activity,
				through: { attributes: [] },
			}
		});
		return countries;
	}catch(error){
		throw new Error('La información no existe o hubo un error al obtener los países');
	}
};

const getCountryById = async (idPais) => {
	try{ 
		const country = await Country.findAll({
			where: {
				id: idPais.toUpperCase(),
			},
			include: {
				model: Activity,
				through: { attributes: [] },
			},
		});
		return country;
	}catch(error){
		throw new Error('Error al obtener el país por ID');
	}	
};

const searchCountriesByName = async (name) => {
	try{
		const country = await Country.findAll({
			where: {
				name: {
					[Op.iLike]: `%${name}%`,
				},
			},
		});
		return country;
	}catch(error){
		throw new Error('La información no existe o hubo un error al obtener los países');
	}
};

module.exports = {
	getCountries,
	getCountryById,
	searchCountriesByName,
}