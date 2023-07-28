export const validate = (formData) => {
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
	 return newErrors;
};

export const resetForm = (setForm, setErrors) => {
	setForm({
		name: '',
		difficulty: 0,
		duration: 0,
		season: '',
		countries: [],
	});
	setErrors({});
}
