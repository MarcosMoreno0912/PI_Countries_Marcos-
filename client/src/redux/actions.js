import axios from 'axios';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRIES_DETAIL ='GET_COUNTRIES_DETAIL';
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
export const FILTER_COUNTRIES_BY_CONTINENT = 'FILTER_COUNTRIES_BY_CONTINENT';
export const SORT_COUNTRIES_ALPHABET ='SORT_COUNTRIES_ALPHABET';
export const SORT_COUNTRIES_BY_POPULATION = 'SORT_COUNTRIES_BY_POPULATION';
export const FILTER_COUNTRIES_BY_ACTIVITY = 'FILTER_COUNTRIES_BY_ACTIVITY';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const DELETE_ACTIVITY = 'DELETE_ACTIVITY';
export const MODIFY_ACTIVITY = 'MODIFY_ACTIVITY';
export const CLEAR_DELETE_SUCCESS_ACTIVITY = 'CLEAR_DELETE_SUCCESS_ACTIVITY'

export const getCountries = () => {
	return async (dispatch) =>{
		try {
			const json = await axios.get(`http://localhost:3001/countries?timestamp=${Date.now()}`)
			dispatch({
				type: GET_COUNTRIES,
				payload: json.data,
			});
		} catch(error){
			console.error(error)
		}
	}
};

export const getCountriesDetail = (idPais) => {
	return async (dispatch) =>{
		try {
			const json = await axios.get(`http://localhost:3001/countries/${idPais}`)
			dispatch({
				type: GET_COUNTRIES_DETAIL,
				payload: json.data,
			});
		} catch(error){
			console.error(error)
		}
	}
};

export const searchCountries = (searchCountry) => {
	return async (dispatch) =>{
		try {
			const json = await axios.get(`http://localhost:3001/countries?name=${searchCountry}`);
			dispatch({
				type: SEARCH_COUNTRIES,
				payload: json.data,
			});
		} catch(error){
			console.error(error);
		}
	}
};

export const getActivities = () => {
	return async (dispatch) =>{
		try {
			const json = await axios.get(`http://localhost:3001/activities`)
			dispatch({
				type: GET_ACTIVITIES,
				payload: json.data,
			});
		} catch(error){
			console.error(error)
		}
	}
};

export const createActivity = (payload) => {
	return async (dispatch) =>{
		try {
			const json = await axios.post(`http://localhost:3001/activities`, payload);
			dispatch({
				type: CREATE_ACTIVITY,
				payload: json.data,
			});
		} catch(error){
			console.error(error)
		}
	}
};

export const modifyActivity = (activityId, activityData) => {
	return async (dispatch) => {
		console.log("activityId:", activityId)
		try{
			const json = await axios.put(`http://localhost:3001/activities/${activityId}`, activityData)
			dispatch({
				type: MODIFY_ACTIVITY,
				payload: json.data,
			});
		} catch(error) {
			console.error(error)
		}
	}
};

export const deleteActivity = (activityId) => {
	return async (dispatch) => {
		try{
			const json = await axios.delete(`http://localhost:3001/activities/${activityId}`)
			dispatch({
				type: DELETE_ACTIVITY,
				payload: json.data,
			});
		} catch(error) {
			console.error(error)
		}
	}
};

export const clearDeleteSuccessActivity = () => {
	return {
		type: CLEAR_DELETE_SUCCESS_ACTIVITY,
	};
};


export const filterCountriesByActivity = (name) => {
	return {
		type: FILTER_COUNTRIES_BY_ACTIVITY,
		payload: name,
	};
};

export const filterCountriesByContinent = (continent) => {
	return { 
		type: FILTER_COUNTRIES_BY_CONTINENT,
		payload: continent,
	}
};

export const sortCountriesAlphabet = (order) => {
	return {
		type: SORT_COUNTRIES_ALPHABET,
		payload: order,
	}
};

export const sortCountriesByPopulation = (order) => {
	return { 
		type: SORT_COUNTRIES_BY_POPULATION,
		payload: order,
	}
};
