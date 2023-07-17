import react from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Landing.module.css';

export default function LandingPage() {
	const navigate = useNavigate();

	const handleButtonClick = () => {
		navigate('/home')
	};

	return (
		<div className={style.landing}>
			<h1 className={style.title}>Welcome to Countries App!</h1>
				<button className={style.button} onClick={handleButtonClick}>
					Comenzar Aventura
				</button>
		</div>
	)
}