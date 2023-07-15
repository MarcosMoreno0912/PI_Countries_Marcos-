import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Reducer from './reducer.js';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esta línea se encarga de conectar nuestra app con la extensión REDUX DEVTOOLS

const store = createStore(
	Reducer,
	composeEnhancer(applyMiddleware(thunk)) // esta línea es para poder hacer peticiones a un server
);

export default store;