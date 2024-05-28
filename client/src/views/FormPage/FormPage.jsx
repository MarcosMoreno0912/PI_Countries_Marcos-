import  { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCountries, createActivity } from '../../redux/actions.js';
import CountrySelect from '../../components/CountrySelectForm/CountrySelectForm.jsx';
import { validate, resetForm } from './FormPageUtils.js';
import style from './Form.module.css';
import gifForm from '../../assets/gifForm.gif';
import Notification from '../../components/Notification/Notification.jsx';

const FormPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const countries = useSelector((state) => state.countries)

	const [showSuccessNotification, setShowSuccessNotification] = useState(false);
	const [showErrorNotification, setShowErrorNotification] = useState(false);
	const [touched, setTouched] = useState({})

    useEffect(() => {
		dispatch(getCountries());
	}, [dispatch])
	
	const [form, setForm] = useState({
		name: "",
		difficulty: 0,
		duration: 0,
		season: "",
		countries: [],
	});

	const [errors, setErrors] = useState({});

	const changeHandler = (event) => {
		const { name, value } = event.target;

		setForm((prevForm) => ({
			...prevForm,
			[name]: value,
		}));

		setTouched((prevTouched) => ({
            ...prevTouched,
            [name]: true,
        }));

		const newErrors = validate({ ...form, [name]: value }, { ...touched, [name]: true });
		setErrors(newErrors)
		
	};  

	const blurHandler = (event) => {
		const { name } = event.target;
	
		setTouched((prevTouched) => ({
			...prevTouched,
			[name]: true,
		}));
	
		const newErrors = validate(form, { ...touched, [name]: true });
		setErrors(newErrors);
	};

	const handleCountryChange = (selectedCountries) => {
		const countriesData = selectedCountries.map((countryId) => {
			return countries.find((country) => country.id === countryId);
		});
		setForm((prevForm) => ({
			...prevForm,
			countries: countriesData,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const newErrors = validate(form);
    	setErrors(newErrors);

		if(Object.keys(newErrors).length === 0 && form.countries.length > 0){
			const { name, difficulty, duration, season, countries } = form;
			const activityData = {
				name,
				difficulty,
				duration,
				season,
				countries: countries.map((country) => country.id),
		    };

			dispatch(createActivity(activityData))
				.then(() => {
					setShowSuccessNotification(true);
					resetForm(setForm, setErrors);
				})
				.catch(() => {
					setShowErrorNotification(true);
				})
		}
	};

	const handleBackHome = () => {
		navigate('/home')
	};

	return (
		<div className={style.bodyForm}>
			{showSuccessNotification && (
				<Notification type="success" message="Actividad creada con éxito!" onClose={() => setShowSuccessNotification(false)} />
			)}
			{showErrorNotification && (
				<Notification type="error" message="Error al crear actividad. Por favor revisa los campos y vuelve a intentar" onClose={() => setShowErrorNotification(false)} />
			)}
			<h1>Planea tu próxima aventura:</h1>
			<form className={style.formComponent} onSubmit={handleSubmit}>
				<div className={style.imgCircle}>
					<img src={gifForm} alt="Form Activity" className={style.imageGif} />
				</div>
				<div className={style.inputs}>
					<div className={style.errorName}>
						<label>Nombre</label>
						<input name="name" type="text" value={form.name} onChange={changeHandler} onBlur={blurHandler} />
						{errors.name && <span>{errors.name}</span>}
					</div>
					<div className={style.errorDifficulty}>
						<label>Dificultad</label>
						<input name="difficulty" type="number" value={form.difficulty} onChange={changeHandler} onBlur={blurHandler} />
						{errors.difficulty && <span>{errors.difficulty}</span>}		
					</div>
					<div className={style.errorDuration}>
						<label>Duración</label>
						<input name="duration" type="number" value={form.duration} onChange={changeHandler} onBlur={blurHandler} />
						{errors.duration && <span>{errors.duration}</span>}
					</div>
					<div className={style.errorSeason}>
						<label>Temporada</label>
						<input name="season" type="text" value={form.season} onChange={changeHandler} onBlur={blurHandler} />
						{errors.season && <span>{errors.season}</span>}	
					</div>
				</div>
				<div className={style.countryList}>
					<label>Destino:</label>
					<CountrySelect 
						countries={countries}
						selectedCountries={form.countries}
						handleCountryChange={handleCountryChange}
				    />
					<div className={style.submitButton}>
						<button type="submit" disabled={Object.keys(errors).length > 0 || form.countries && form.countries.length === 0}>Crear Actividad</button>
					</div>
					<div className={style.backButton}>
						<button onClick={handleBackHome}>Volver</button>
					</div>	
				</div>

			</form>
		</div>
	)
};

export default FormPage;