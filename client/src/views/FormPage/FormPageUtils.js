export const validate = (formData, touchedFields = {}) => {
	const { name, difficulty, duration, season } = formData;
	const newErrors = {};

	if(touchedFields.name){	
		if(!name) {
			newErrors.name = 'Nombre es requerido';
		}else if((name && name.length > 30) || (name && name.length < 3)){
			newErrors.name = 'Nombre debe tener entre 3 y 30 caracteres';
		}
	}	 

	if(touchedFields.difficulty){
		if(!difficulty) {
			newErrors.difficulty = 'Dificultad es requerida';
		}else if(difficulty < 1 || difficulty > 5) {
			newErrors.difficulty = 'Elija un valor entre 1 y 5';
		} 
	}
			
	if(touchedFields.duration){
		if(!duration) {
			newErrors.duration = 'Duracion es requerida';
		}else if(duration < 1 || duration > 24){
			newErrors.duration = 'Elija un valor entre 1 y 24 hs';
		}
	}

	if(touchedFields.season){
		if(!season) {
			newErrors.season = 'Temporada es requerida';
		}else if(season !== 'Verano' && season !== 'Invierno' && season !== 'Otoño' && season !== 'Primavera'){
			newErrors.season = 'Opciones: Verano, Invierno, Otoño y Primavera'
		}
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
