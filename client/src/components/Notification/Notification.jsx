import React, { useEffect } from 'react';
import style from './Notification.module.css';
import iconoCheck from '../../assets/iconoCheck.png';
import iconoError from '../../assets/iconoError.png';

const Notification = ({ type, message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const checkIcon = iconoCheck;
  const errorIcon = iconoError;

  const iconSrc = type === 'success' ? checkIcon : errorIcon;

  return (
    <div className={style.notification} data-type={type}>
      <img src={iconSrc} alt="icon" />
      {message}
    </div>
  );
};

export default Notification;
