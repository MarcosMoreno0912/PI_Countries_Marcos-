import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Notification from '../../components/Notification/Notification.jsx';
import ActivityContainer from '../../components/ActivityContainer/ActivityContainer.jsx';
import { clearDeleteSuccessActivity } from '../../redux/actions.js';
import style from './ActivitiesPage.module.css';

const ActivitiesPage = () => {
	const deleteSuccessActivity = useSelector(state => state.deleteSuccessActivity);
	const dispatch = useDispatch();

	const handleNotificationClose = () => {
		dispatch(clearDeleteSuccessActivity());
	};

	return (
		<div className={style.activitiesPage}>
			{deleteSuccessActivity && (
        		<Notification type="success" message="Actividad eliminada exitosamente" onClose={handleNotificationClose}/>
      		)}
			<ActivityContainer />
		</div>
	)
}

export default ActivitiesPage;