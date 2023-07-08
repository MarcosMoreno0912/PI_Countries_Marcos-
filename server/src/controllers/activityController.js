const { Activity } = require('../db.js');
const { Country } = require('../db.js');
const { Op } = require('sequelize');

const createActivity = async (name, difficulty, duration, season, countries) => {
	try { 
		const existsActivity = await Activity.findOne({
			where: { name }
		});

		if(existsActivity) throw new Error('La actividad ya existe');
		if(!countries || countries.length === 0) throw new Error('La actividad debe estar asociada a un país');

		const newActivity = await Activity.create({
			name,
			difficulty,
			duration,
			season,
			countries,
		});
		await newActivity.addCountries(countries)
		return newActivity;
	} catch(error){
		throw new Error(error.message);
	}
};

const getAllActivities = async () => {
	try{
		const activities = await Activity.findAll({
			include: {
				model: Country,
				attributes: ['name'],
				through: { attributes: [] },
			},
		});
		return activities;
	}catch(error){
		throw new Error('Error al obtener las actividades turísticas');
	}
};

const deleteActivity = async (name) => {
	try {
		const deleteActivities = await Activity.findOne({
		 where: { 
		 	name: {
				[Op.like]: `%${name}%`,
		 	}, 
		 }, 
		});

		if(!deleteActivities) {
			throw new Error('Actividad turística no encontrada')
		}
		await deleteActivities.destroy();
		return { message: 'Actividad eliminada con éxito'};
	
	} catch(error){
		throw new Error('Error al intentar eliminar la actividad')
	}
};

module.exports = {
	createActivity,
	getAllActivities,
	deleteActivity
};
