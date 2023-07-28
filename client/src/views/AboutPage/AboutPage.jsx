import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import about from '../../assets/about.jpg'
import style from './AboutPage.module.css'

const AboutPage = () => {
   const navigate = useNavigate();

   const handleBackClick = () => {
      navigate('/home')
   };

	return(
	<div className={style.about}>
         <h1>The Creator</h1>
         <img src= {about} alt="Mi foto" />
         <p>Mi nombre es Marcos Moreno</p> 
         <p>Espero que disfrutes interactuar con mi página.</p>
         <div className={style.redes}>
            <a href="https://twitter.com/marcosn_m7">
               <FaTwitter />
            </a>
            <a href="https://www.instagram.com/moreno83marcos?igshid=NGExMml2YTkyZg==">
               <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/marcos-moreno-09a829230">
               <FaLinkedin />
            </a>
         </div>
         <div>
            <button className={style.backButton} onClick={handleBackClick}>
               Back
            </button>
         </div>
    </div>
	);
};

export default AboutPage;