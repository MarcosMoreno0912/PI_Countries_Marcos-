import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCountries, getActivities, createActivity } from '../../redux/actions.js';
import { toast } from 'react-toastify';
import CountrySelect from '../../components/ActivityForm/CountrySelectForm.jsx';
import { validate, resetForm } from './FormPageUtils.js';
import style from './Form.module.css';
import gifForm from '../../assets/gifForm.gif';

const FormPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const countries = useSelector((state) => state.countries)

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

		const newErrors = validate({ ...form, [name]: value });
		setErrors(newErrors)
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

			dispatch(createActivity(activityData));

//			toast.success('Activity created succesfully!')
//Aquí agregar un mensaje de Success, que capture el status 201 desde el back y lo muestre.
			resetForm(setForm, setErrors);
		}
	};

	const handleBackHome = () => {
		navigate('/home')
	};

	return (
		<div className={style.bodyForm}>
			<h1>Plan your next adventure:</h1>
			<form className={style.formComponent} onSubmit={handleSubmit}>
				<div>
					<img src={gifForm} alt="Form Activity" className={style.imageGif} />
				</div>
				<div className={style.errorName}>
					<label>Name</label>
					<input name="name" type="text" value={form.name} onChange={changeHandler} />
					{errors.name && <span>{errors.name}</span>}
				</div>
				<div className={style.errorDifficulty}>
					<label>Difficulty</label>
					<input name="difficulty" type="number" value={form.difficulty} onChange={changeHandler} />
					{errors.difficulty && <span>{errors.difficulty}</span>}		
				</div>
				<div className={style.errorDuration}>
					<label>Duration</label>
					<input name="duration" type="number" value={form.duration} onChange={changeHandler} />
					{errors.duration && <span>{errors.duration}</span>}
				</div>
				<div className={style.errorSeason}>
					<label>Season</label>
					<input name="season" type="text" value={form.season} onChange={changeHandler} />
					{errors.season && <span>{errors.season}</span>}	
				</div>
				<div>
					<label>Destino:</label>
					<CountrySelect 
						countries={countries}
						selectedCountries={form.countries}
						handleCountryChange={handleCountryChange}
				    />	
				</div>
				<div className={style.submitButton}>
					<button type="submit" disabled={Object.keys(errors).length > 0 || form.countries && form.countries.length === 0}>Crear Actividad</button>
				</div>
				<div className={style.backButton}>
					<button onClick={handleBackHome}>Back to Home</button>
				</div>
			</form>
		</div>
	)
};

export default FormPage;