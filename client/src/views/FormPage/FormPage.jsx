import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, createActivity } from '../../redux/actions.js';

const FormPage = () => {
	const dispatch = useDispatch();
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

	const changeHandler = (event) => {
		const { name, value } = event.target

		setForm((prevForm) => ({
			...prevForm,
			[name]: value,
		}));

		validate({ ...form, [name]: value });
	}; 

	const validate = (formData) => {
		const { name, difficulty, duration, season } = formData;
		const newErrors = {};

		if(!name) {
			newErrors.name = 'Name is required';
		}else if((name && name.length > 30) || (name && name.length < 3)){
			newErrors.name = 'Name must be between 3 and 30 characters';
		}	 

		if(!difficulty) {
			newErrors.difficulty = 'Difficulty is required';
		}else if(difficulty < 1 || difficulty > 5) {
			newErrors.difficulty = 'Difficulty must be between 1 and 5';
		} 
			
		if(!duration) {
		  	newErrors.duration = 'Duration is required';
		}else if(duration < 1 || duration > 24){
			newErrors.duration = 'Duration must be between 1 and 24 hours';
		}

		if(!season) {
			newErrors.season = 'Season is required';
		}else if(season !== 'Verano' && season !== 'Invierno' && season !== 'Otoño' && season !== 'Primavera'){
			newErrors.season = 'Seasons: Verano, Invierno, Otoño y Primavera'
		}
//		setForm({ ...form, [name]: value })
		setErrors(newErrors);
	}; 

	const handleCountryChange = (event) => {
		const selectedCountries = Array.from(event.target.options)
			.filter((option) => option.selected)
			.map((option) => option.value);
		setForm((prevForm) => ({
			...prevForm,
			countries: selectedCountries,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if(Object.keys(errors).length === 0){
			const { name, difficulty, duration, season, countries } = form;
			const activityData = {
				name,
				difficulty,
				duration,
				season,
				countries: countries && countries.map((country) => country && country.slice(0, 3)),
			};

			dispatch(createActivity(form));

			window.alert('Activity created succesfully!')
			resetForm();
		}
	};

	const resetForm = () => {
		setForm({
			name: '',
			difficulty: 0,
			duration: 0,
			season: "",
			countries: [],
		});
		setErrors({});
	}

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
				<label>Countries</label>
				<select value={form.countries} onChange={handleCountryChange} name="Countries" multiple>
					<option disabled value="">-- Seleccione países --</option>
					{countries && countries.map((country) => (
						<option key={country.id} value={country.id}>
							{`${country.id}: ${country.name}`}
						</option>					
					))}
				</select>
			</div>
			<div>
				<button type="submit" disabled={Object.keys(errors).length > 0}>Crear Actividad</button>
			</div>
		</form>
	)
};

export default FormPage;