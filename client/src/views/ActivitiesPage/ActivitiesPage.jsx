import React from 'react';
import ActivityContainer from '../../components/ActivityContainer/ActivityContainer.jsx';
import style from './ActivitiesPage.module.css';

const ActivitiesPage = () => {

	return (
		<div className={style.activitiesPage}>
			<ActivityContainer />
		</div>
	)
}

export default ActivitiesPage;