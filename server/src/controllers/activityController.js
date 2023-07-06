const { Activity } = require('../db.js');
const { Country } = require('../db.js');

const createActivity = async (activityData) => {
	try { 
		const activity = await Activity.create(activityData);
		return activity;
	} catch(error){
		throw new Error('Error al crear la actividad');
	}
};

const getAllActivities = async () => {
	try{
		const activities = await Activity.findAll();
		return activities;
	}catch(error){
		throw new Error('Error al obtener las actividades turísticas');
	}
};

module.exports = {
	createActivity,
	getAllActivities,
};
