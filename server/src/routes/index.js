const express = require("express");
const router = express.Router();
const { getCountriesHandler, getCountriesByIdHandler} = require('../handlers/countriesHandlers.js');
const { createActivityHandler, getActivityHandler } = require('../handlers/activitieHandlers.js');
const { getCountriesData } = require('../utils/getApi.js');

//getCountriesData(); //función que obtiene los países para guardarlos en la DB

router.get('/countries', getCountriesHandler);
router.get('/countries/:idPais', getCountriesByIdHandler);

router.get('/activities', getActivityHandler);
router.post('/activities', createActivityHandler);

module.exports = router;
