// import { useSelector } from 'react-redux';
import Card from '../Card/Card.jsx';
// import { Link } from 'react-router-dom'
import style from './CardsContainer.module.css'

const CardsContainer = ({ currentCountries }) => {
//    const currentCountries = useSelector(state => state.countries);

	return (
		<div className={style.cardsContainer}>
			{currentCountries && currentCountries.map((country) => ( 
				<Card
					key={country.id}
					flag={country.flag}
					name={country.name}
					continent={country.continent}
					idPais={country.id}
				/>	
			))}		
		</div>
	) 
};

export default CardsContainer;