const { Activity } = require('../db.js');
const { Country } = require('../db.js');

const createActivity = async (req, res) => {
	const { name, difficulty, duration, season, countries } = req.body;

	try {
		const activity = await Activity.create({
			name,
			difficulty,
			duration,
			season, 
		});

		if(countries && countries.length > 0){
			await activity.addCountries(countries)
		}
		res.status(201).json(activity);
	} catch(error) {
		console.error('Error al crear la actividad turística', error);
		res.status(500).json({ error: 'Error al crear la actividad turística' });
	}
};

const getActivities = async (req, res) => {
	try {
		const activities = await Activity.findAll();
		res.status(200).json(activities);
	} catch(error){
		console.error('Error al obtener las actividades turísticas', error);	
		res.status(500).json({ error: 'Error al obtener las actividades turísticas' });
	}
};

module.exports = {
	createActivity,
	getActivities,
};
