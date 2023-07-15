import { Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './views/LandingPage/LandingPage.jsx';
import HomePage from './views/HomePage/HomePage.jsx';
import DetailPage from './views/DetailPage/DetailPage.jsx';
import FormPage from './views/FormPage/FormPage.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import style from './AppRoutes.module.css'

const AppRoutes = () => {
	const location = useLocation();

	return(	
		<div className={style.routes}>
			{location.pathname !== '/' && <NavBar className={style.nav}/>}
			<Routes>
				<Route exact path='/' element={<LandingPage />} />
				<Route path='/home' element={<HomePage />} />
				<Route path='/countries/:idPais' element={<DetailPage />} />
				<Route path='/createAct' element={<FormPage />} />
			</Routes>
		</div>
	)
}

export default AppRoutes;
