import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, getActivities} from '../../redux/actions.js';
import CardsContainer from '../../components/CardsContainer/CardsContainer.jsx'; 
import style from './Home.module.css';
import Filters from '../../components/FiltersAndorders/FiltersAndorders.jsx';
import Paginated from '../../components/Paginated/Paginated.jsx';
import iconoCheck from '../../assets/iconoCheck.png';

const Home = ({ fromLandingPage }) => {
	const dispatch = useDispatch();
	const allCountries = useSelector((state) => state.countries);
	const [currentPage, setCurrentPage] = useState(1);
	const countriesPerPage = 10;
	const [showNotification, setShowNotification] = useState(false);

	const indexOfLastCountry = currentPage * countriesPerPage;
	const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
	const currentCountries = allCountries && allCountries.slice(indexOfFirstCountry, indexOfLastCountry)	

	const paginado = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	useEffect(() => {
		if(fromLandingPage){
			setShowNotification(true);

			setTimeout(() => {
				setShowNotification(false);
			}, 2300);
		}
	}, [fromLandingPage]);

	return(
			<div className={style.home}>
				{showNotification && (
					<div className={style.notification}>
						<img src={iconoCheck} alt="icono" />
						<span>Countries loading succesfully</span>
					</div>
				)}
				<Filters />
				<Paginated 
					countriesPerPage={countriesPerPage}
					totalCountries={allCountries && allCountries.length}
					currentPage={currentPage}
					paginado={paginado}
				/>
				<div>	
					<CardsContainer currentCountries={currentCountries}/>
				</div>
			</div>
	)
}

export default Home;