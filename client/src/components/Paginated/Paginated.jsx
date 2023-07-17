import React from 'react';
import style from './Paginated.module.css';
import { Link } from 'react-router-dom';

const Paginated = ({ countriesPerPage, totalCountries, currentPage, paginado }) => {
	
	const pageNumbers = Math.ceil(totalCountries / countriesPerPage);

	return (
		<nav className={style.paginated}>
			<ul className={style.listPag}>
				{Array.from({ length: pageNumbers }, (_, index) => index + 1).map(
					(number) => ( 
					<div className={`${style.numbersPage} ${number === currentPage ? style.active : ''}`} key={number} > 
						<button onClick={() => paginado(number)}>{number}</button>
					</div>
					) 
				)}
			</ul>
		</nav>
	)
}

export default Paginated;
