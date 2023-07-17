import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCountries, createActivity } from '../../redux/actions.js';
import { toast } from 'react-toastify';
import CountrySelect from '../../components/ActivityForm/CountrySelectForm.jsx';
import { validate, resetForm } from './FormPageUtils.js';

const FormPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { countries } = useSelector((state) => state)

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
//	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const changeHandler = (event) => {
		const { name, value } = event.target

		setForm((prevForm) => ({
			...prevForm,
			[name]: value,
		}));
		
//		const newErrors = {};
//		setErrors(newErrors);
		validate({ ...form, [name]: value }, setErrors);
	};  

	const handleCountryChange = (selectedCountryIds) => {
		setForm((prevForm) => ({
			...prevForm,
			countries: selectedCountryIds,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if(Object.keys(errors).length === 0 && form.countries.length > 0){
			const { name, difficulty, duration, season, countries } = form;
			const activityData = {
				name,
				difficulty,
				duration,
				season,
				countries: countries && countries.map((country) => country && country.slice(0, 3)),
			};

			dispatch(createActivity(form));

			toast.success('Activity created succesfully!')
			resetForm(setForm, setErrors);
		}
	};

	const handleBackHome = () => {
		navigate('/home')
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>Name</label>
				<input type="text" value={form.name} onChange={changeHandler} name="name" />
				{errors.name && <span>{errors.name}</span>}
			</div>
			<div>
				<label>Difficulty</label>
				<input type="number" value={form.difficulty} onChange={changeHandler} name="difficulty" />
				{errors.difficulty && <span>{errors.difficulty}</span>}		
			</div>
			<div>
				<label>Duration</label>
				<input type="number" value={form.duration} onChange={changeHandler} name="duration" />
				{errors.duration && <span>{errors.duration}</span>}
			</div>
			<div>
				<label>Season</label>
				<input type="text" value={form.season} onChange={changeHandler} name="season" />
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
			<div>
				<button type="submit" disabled={Object.keys(errors).length > 0 || form.countries.length === 0}>Crear Actividad</button>
			</div>
			<div>
				<button onClick={handleBackHome}>Back to Home</button>
			</div>
		</form>
	)
};

export default FormPage;