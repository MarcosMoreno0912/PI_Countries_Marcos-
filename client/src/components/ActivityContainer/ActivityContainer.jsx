import React from 'react';
import { useSelector } from 'react-redux';
import ActivityCard from '../ActivityCard/ActivityCard.jsx';
import style from './ActivityContainer.module.css'

const ActivityContainer = () => {
    const listActivities = useSelector(state => state.activities);
//    const infoCountries = useSelector(state => state.allCountries); //traerme la info de los países para mostrar los que estén asociados a las actividades(name y flag)

	return (
		<div className={style.activityContainer}>
			{listActivities && listActivities.map((activity) => ( 
				<ActivityCard
					key={activity.id}
					name={activity.name}
					difficulty={activity.difficulty}
					duration={activity.duration}
					season={activity.season}
					activityId={activity.id}
					countries={activity.Countries}
				/>	
			))}	
		</div>
	) 
};

export default ActivityContainer;