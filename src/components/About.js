import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherPointed } from '@fortawesome/free-solid-svg-icons';


const AboutPage = () => {
    return (
      <div className="about-container">
        <h5 className="first-heading">About Us</h5>
        <h1 className="second-heading">Di-Tech was founded in 2021 and founding partners have years of experience with marine engines</h1>
        <div className="mission-block">
        <h2>Our Mission</h2>
        <h2><FontAwesomeIcon icon={faFeatherPointed} /></h2>
          <p className="mission-text">Provide services, maintenance and troubleshooting on MAN B&W two-stroke Marine Engines</p>
        </div>
      </div>
    );
  };  
  

export default AboutPage;
