const express = require("express");
const router = express.Router();
const { getCountries, getCountryById, searchCountriesByName } = require('../controllers/countryController.js');
const { createActivity, getActivities } = require('../controllers/activityController.js');
const { getCountriesData } = require('../utils/getApi.js');

getCountriesData(); //función que obtiene los países para guardarlos en la DB

router.get('/countries', getCountries);
router.get('/countries/:idPais', getCountryById);
router.get('/countries', searchCountriesByName);

router.get('/activities', getActivities);
router.post('/activities', createActivity);

module.exports = router;
