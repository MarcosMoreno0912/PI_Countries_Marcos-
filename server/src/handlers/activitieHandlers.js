const {
	createActivity,
	getAllActivities,
} = require('../controllers/activityController.js');

const createActivityHandler = async (req, res) => {
	const activityData = req.body;
	try{
		const newActivity = await createActivity(activityData);
		res.status(201).json(newActivity);
	}catch (error) {
		console.error('Ocurrió un error al crear la actividad')
		res.status(500).json({ error: error.message });
	}
};

const getActivityHandler = async (req, res) => {
	try{
		const activities = await getAllActivities(activities);
		res.status(200).json(activities);
	} catch(error) {
		console.error('Error al obtener las actividades turísticas')
		res.status(500).json({ error: error.message });
	}
};

module.exports = {
	createActivityHandler,
	getActivityHandler
}