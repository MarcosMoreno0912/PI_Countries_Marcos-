const express = require('express');
const axios = require('axios');
const ActivityModel = require('../models/Activity.js');

const activityRouter = express.Router();

activityRouter.get('/', (req, res) => {
	res.status(200).send('Aquí se mostrarás todas las actividades disponibles');
	//Lógica para obtener todas las actividades
});

activityRouter.post('/', (req, res) => {
	res.status(200).send('En esta ruta se creará una nueva actividad');
	//Lógica para crear una nueva actividad
});

module.exports = activityRouter;