import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, getActivities, filterCountriesByActivity } from '../../redux/actions.js';
import style from './FiltersAndorders.module.css?inline';


const ActivityFilter = () => {
	const dispatch = useDispatch();
	const activities = useSelector((state) => state.activities);

	 useEffect(() => {
		dispatch(getActivities());
	},[dispatch])

	const handleChange = (event) => {
		const activity = event.target.value
		if(activity === ""){
			dispatch(getCountries());
		} else {
			dispatch(filterCountriesByActivity(activity));
		}
	};

	return (
		<div>
			<select onChange={handleChange}>
				<option value="">Filter by activity</option>
				{activities && activities.length !== 0 && activities.map((activity) => {
					return (
						<option key={activity.id} value={activity.name}>
              				{activity.name}
            			</option>
					);
				})}
			</select>
		</div>
	)
};

export default ActivityFilter;
