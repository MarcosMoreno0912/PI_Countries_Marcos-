//import React, { useState } from 'react';
//import { useSelector, useDispatch } from 'react-redux';
//import { modifyActivity } from '../../redux/actions.js';
//import { validate } from '../../views/FormPage/FormPageUtils.js';
//import CountrySelect from '../CountrySelectForm/CountrySelectForm.jsx';
//import style from './EditActivityForm.module.css'

//const EditActivityForm = ({ activityData, onClose }) => {
//	const dispatch = useDispatch();
//	const countries = useSelector((state) => state.countries)
//	const [showSuccessNotification, setShowSuccessNotification] = useState(false);
//	const [showErrorNotification, setShowErrorNotification] = useState(false);

//	const [form, setForm] = useState({
//		name: activityData.name,
//		difficulty: activityData.difficulty || 0,
//		duration: activityData.duration || 0,
//		season: activityData.season,
//		countries: [],
//	});

//	const [errors, setErrors] = useState({});

//	const changeHandler = (event) => {
//		const { name, value } = event.target;

//		setForm((prevForm) => ({
//			...prevForm,
//			[name]: value,
//		}));

//		const newErrors = validate({ ...form, [name]: value });
//		setErrors(newErrors);
//	};

//	const handleCountryChange = (selectedCountries) => {
//		const countriesData = selectedCountries.map((countryId) => {
//			return countries.find((country) => country.id === countryId);
//		});
//		setForm((prevForm) => ({
//			...prevForm,
//			countries: countriesData,
//		}));
//	};

//	const handleSubmit = (event) => {
//		event.preventDefault();

//		const newErrors = validate(form);
//		setErrors(newErrors);

//		if (Object.keys(newErrors).length === 0 && form.countries.length > 0) {
//      		const { activityId, name, difficulty, duration, season, countries } = form;
//      		const activityData = {
//      			id: activityId,
//        		name,
//        		difficulty,
//        		duration,
//        		season,
//        		countries: countries.map((country) => country.id),
//      		};

//      		dispatch(modifyActivity(activityData))
//        		.then(() => {
//        			setShowSuccessNotification(true);
//					resetForm(setForm, setErrors);
//          			onClose();
//        		})
//        		.catch(() => {
//        			setShowErrorNotification(true);
//        	});
//    	}
//	}

//	return (
//		<div className={style.formEdit} >
//			{showSuccessNotification && (
//				<Notification type="success" message="Activity edited successfully!" onClose={() => setShowSuccessNotification(false)} />
//			)}
//			{showErrorNotification && (
//				<Notification type="error" message="Error editing activity. Por favor revisa los campos y vuelve a intentar" onClose={() => setShowErrorNotification(false)} />
//			)}
//			<form className={style.formComponent} onSubmit={handleSubmit}>
//				<h1>Edit the activity:</h1>
//				<div className={style.errorName}>
//					<label>Name</label>
//					<input name="name" type="text" value={form.name} onChange={changeHandler} />
//					{errors.name && <span>{errors.name}</span>}
//				</div>
//				<div className={style.errorDifficulty}>
//					<label>Difficulty</label>
//					<input name="difficulty" type="number" value={form.difficulty} onChange={changeHandler} />
//					{errors.difficulty && <span>{errors.difficulty}</span>}		
//				</div>
//				<div className={style.errorDuration}>
//					<label>Duration</label>
//					<input name="duration" type="number" value={form.duration} onChange={changeHandler} />
//					{errors.duration && <span>{errors.duration}</span>}
//				</div>
//				<div className={style.errorSeason}>
//					<label>Season</label>
//					<input name="season" type="text" value={form.season} onChange={changeHandler} />
//					{errors.season && <span>{errors.season}</span>}	
//				</div>
//				<div>
//					<label>Destino:</label>
//					<CountrySelect 
//						countries={countries}
//						selectedCountries={form.countries}
//						handleCountryChange={handleCountryChange}
//				    />	
//				</div>
//				<div className={style.submitButton}>
//					<button type="submit" disabled={Object.keys(errors).length > 0 || form.countries && form.countries.length === 0}>Update Activity</button>
//				</div>
//			</form>
//		</div>
//	)
//}

//export default EditActivityForm;
