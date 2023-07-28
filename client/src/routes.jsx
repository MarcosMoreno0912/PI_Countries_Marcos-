import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, useLocation } from 'react-router-dom';
import { getCountries, getActivities } from './redux/actions.js';
import LandingPage from './views/LandingPage/LandingPage.jsx';
import HomePage from './views/HomePage/HomePage.jsx';
import DetailPage from './views/DetailPage/DetailPage.jsx';
import FormPage from './views/FormPage/FormPage.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import AboutPage from './views/AboutPage/AboutPage.jsx';

const AppRoutes = () => {
	const location = useLocation();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCountries());
		dispatch(getActivities());
	},[dispatch]);

	const navRoutes = [ "/home", "/countries/:idPais"];

	return(	
		<div>
			{navRoutes.includes(location.pathname) && <NavBar />}
			<Routes>
				<Route exact path="/" element={<LandingPage />} />
        		<Route path="/home" element={<HomePage />} />
        		<Route path="/countries/:idPais" element={<DetailPage />} />
        		<Route path="/createAct" element={<FormPage />} />
        		<Route path="/about" element={<AboutPage />} />
			</Routes>
		</div>
	)
}

export default AppRoutes;
