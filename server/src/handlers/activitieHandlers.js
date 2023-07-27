const {
	createActivity,
	getAllActivities,
	deleteActivity,
	updateActivity,
} = require('../controllers/activityController.js');
//const { v4: uuidv4 } = require('uuid');

const createActivityHandler = async (req, res) => {
	const { name, difficulty, duration, season, countries} = req.body;
	
	try{
		if(!name || !difficulty || !duration || !season || !countries) res.status(400).json({ error: 'Name, difficulty, duration, season o countries son requeridos' });

		const newActivity = await createActivity(name, difficulty, duration, season, countries);
		return res.status(201).json(newActivity);
	}catch (error) {
		console.error('Ocurrió un error al crear la actividad')
		return res.status(500).json({ error: error.message });
	}
};

const getActivityHandler = async (req, res) => {
	try{
		const activities = await getAllActivities();
		return res.status(200).json(activities);
	} catch(error) {
		console.error('Error al obtener las actividades turísticas')
		return res.status(500).json({ error: error.message });
	}
};

const deleteActivityHandler = async (req, res) => {
	const { activityId } = req.params;
	try{
		const activitieDeleted = await deleteActivity(activityId);
		return res.status(200).json(activitieDeleted);
	
	}catch(error){
		console.error('Error al intentar eliminar la actividad turística')
		return res.status(500).json({ error: error.message });
	}
};

const updateActivityHandler = async (req, res) => {
	const { activityId } = req.params;
	const { name, difficulty, duration, season, countries } = req.body;

	try{
		if(!name || !difficulty || !duration || !season || !countries) {
			return res.status(400).json({ error: 'Name, difficulty, duration, season o countries son requeridos' });
		}

		const updatedActivity = await updateActivity( activityId, name, difficulty, duration, season, countries);
		return res.status(200).json(updatedActivity);
	} catch (error) {
		console.error('Ocurrió un error al actualizar la actividad');
		return res.status(500).json({ error: error.message });
	}
}; 

module.exports = {
	createActivityHandler,
	getActivityHandler,
	deleteActivityHandler,
	updateActivityHandler,
}