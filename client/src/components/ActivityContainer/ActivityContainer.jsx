import React from 'react';
import { useSelector } from 'react-redux';
import ActivityCard from '../ActivityCard/ActivityCard.jsx';
import style from './ActivityContainer.module.css'

const ActivityContainer = () => {
    const listActivities = useSelector(state => state.activities);

	return (
		<div className={style.activityContainer}>
			{listActivities && listActivities.map((activity) => ( 
				<ActivityCard
					key={activity.id}
					flag={activity.flag}
					name={activity.name}
					season={activity.season}
					activityId={activity.id}
					countries={activity.countries}
				/>	
			))}		
		</div>
	) 
};

export default ActivityContainer;