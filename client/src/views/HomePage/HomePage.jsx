import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, getActivities} from '../../redux/actions.js';
import CardsContainer from '../../components/CardsContainer/CardsContainer.jsx'; 
import style from './Home.module.css';
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

	return(
		<div className={style.home}>
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