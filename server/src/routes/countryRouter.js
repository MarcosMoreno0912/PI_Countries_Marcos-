const express = require('express');
const axios = require('axios');
const CountryModel = require('../models/Country.js');

const countryRouter = express.Router();


countryRouter.get('/', (req, res) => {
	res.status(200).send('Aquí se obtendran todos los paises')
	//Lógica para obtener todos los países
});

countryRouter.get('/:idPais', (req, res) => {
	res.status(200).send('Aquí se mostrará el detalle de un país obtenido por ID');
	//Lógica para obtener el detalle de un país específico
});

countryRouter.get('/name', (req, res) => {
	res.status(200).send('Aquí se buscará un país por nombre')
	//Lógica para buscar países por nombre
});


module.exports = countryRouter;