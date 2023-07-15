import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, getActivities} from '../../redux/actions.js';
import CardsContainer from '../../components/CardsContainer/CardsContainer.jsx'; 
import style from './Home.modules.css?inline';
import Filters from '../../components/Filters&orders/Filters&orders.jsx';
import Paginated from '../../components/Paginated/Paginated.jsx';

const Home = () => {
	const dispatch = useDispatch();
	const allCountries = useSelector((state) => state.countries);
	const [currentPage, setCurrentPage] = useState(1);
	const countriesPerPage = 10;
	 
	const indexOfLastCountry = currentPage * countriesPerPage;
	const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
	const currentCountries = allCountries && allCountries.slice(indexOfFirstCountry, indexOfLastCountry)	

	const paginado = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	useEffect(() => {
		dispatch(getCountries());
		dispatch(getActivities());
	},[dispatch]);

	return(
		<div className={style.home}>
			<h1>Proyecto Individual Countries</h1>
			<Filters />
			<div className={style.homeCards}>	
				<CardsContainer currentCountries={currentCountries}/>
			</div>
			<Paginated 
				countriesPerPage={countriesPerPage}
				totalCountries={allCountries && allCountries.length}
				currentPage={currentPage}
				paginado={paginado}
			/>
		</div>
	)
}

export default Home;