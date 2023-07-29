import { 
	GET_COUNTRIES,
	SEARCH_COUNTRIES,
	GET_COUNTRIES_DETAIL,
	FILTER_COUNTRIES_BY_CONTINENT,
	FILTER_COUNTRIES_BY_ACTIVITY,
	SORT_COUNTRIES_ALPHABET,
	SORT_COUNTRIES_BY_POPULATION,
	GET_ACTIVITIES,
	CREATE_ACTIVITY,
	DELETE_ACTIVITY,
	MODIFY_ACTIVITY,
	CLEAR_DELETE_SUCCESS_ACTIVITY,
} from './actions.js';


const initialState = {
	countries: [],
	activities: [],
	searchCountries: [],
	allCountries: [],
	countriesDetail: [],
	deleteSuccessActivity: null, 
}


const Reducer = (state= initialState, action) => {
	switch (action.type){
		case GET_COUNTRIES:
			return{
				...state,
				countries: action.payload,
				allCountries: action.payload,				
			};

		case SEARCH_COUNTRIES:
			return{
				...state,
				countries: action.payload,
				searchCountries: action.payload,
			};

		case GET_COUNTRIES_DETAIL:
			return{
				...state,
				countriesDetail: action.payload,
			};

		case FILTER_COUNTRIES_BY_CONTINENT:
			const filteredByContinent = state.allCountries && state.allCountries.filter(
        		(country) => {return country.continent === action.payload
      		});
			return{
				...state,
				countries: filteredByContinent,
				searchCountries: [],
			};

		case GET_ACTIVITIES:
			return{
				...state,
				activities: action.payload,
			};

		case FILTER_COUNTRIES_BY_ACTIVITY:
			const filteredByActivity = state.allCountries && state.allCountries.filter((country) => {
    			return country.Activities && country.Activities.some((activity) => {
    				return activity.name === action.payload
    			})
  			});
			return{
				...state,
				countries: filteredByActivity,
			};

		case CREATE_ACTIVITY:
			return {
				...state,
				activities: [...state.activities, action.payload],
			};

		case DELETE_ACTIVITY:
			return {
				...state,
				activities: state.activities.filter(
					(activity) => activity.id !== action.payload.id
				),
				deleteSuccessActivity: action.payload,
			};

		case CLEAR_DELETE_SUCCESS_ACTIVITY:
			return {
				...state,
				deleteSuccessActivity: null,
			};

		case MODIFY_ACTIVITY:
			return {
				...state,
				activities: state.activities.map((activity) => 
					activity.id === action.payload.id ? action.payload : activity
				),
			};

		case SORT_COUNTRIES_ALPHABET:
			const sortedAlphabeticall = [...state.countries].sort((a, b) => {
				if(action.payload === "asc") {
					return a.name.localeCompare(b.name);
				}else{
					return b.name.localeCompare(a.name);
				};
			});
			return {
				...state,
				countries: sortedAlphabeticall,
				searchCountries: [],
			};

		case SORT_COUNTRIES_BY_POPULATION:
			const sortedByPopulation = [...state.countries].sort((a, b) => {
				if(action.payload === "asc") {
					return a.population - b.population;
				}else{
					return b.population - a.population;
				};
			});
			return {
				...state,
				countries: sortedByPopulation,
				searchCountries: [],
			};
			
		default: 
			return state; 
	}

}

export default Reducer;