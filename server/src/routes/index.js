const express = require("express");
const router = express.Router();
const { getCountriesHandler, getCountriesByIdHandler } = require('../handlers/countriesHandlers.js');
const { createActivityHandler, getActivityHandler, deleteActivityHandler, updateActivityHandler } = require('../handlers/activitieHandlers.js');
const { getCountriesData } = require('../utils/getApi.js');

//getCountriesData(); //función que obtiene los países para guardarlos en la DB


const validate = (req, res, next) => {
	const { name, difficulty, duration, season, countries } = req.body;
	if(!name) return res.status(400).json({ error: 'Missing name' });
	if(!difficulty) return res.status(400).json({ error: 'Missing difficulty' });
	if(!duration) return res.status(400).json({ error: 'Missing duration' });
	if(!season) return res.status(400).json({ error: 'Missing season' });
	if(!countries) return res.status(400).json({ error: 'Missing countries' });
	next();
};

router.get('/countries', getCountriesHandler);
router.get('/countries/:idPais', getCountriesByIdHandler);

router.get('/activities', getActivityHandler);
router.post('/activities', createActivityHandler);
router.put('/activities/:activityId', updateActivityHandler);
router.delete('/activities/:activityId', deleteActivityHandler);

module.exports = router;
