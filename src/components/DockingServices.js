import React from 'react';
import './DockingServices.css';

function DockingServices() {
  return (
    <div className="services-container">
    <h1 className="headingofDocking">Our Services</h1>
    <p className="secondaryHeadingofDocking">We provide professional services in maritime engineering, specializing in:</p>

    <div className="services-grid">
      <div className="services-column">
        <h2>Services Offered:</h2>
        <ul className="services-list">
          <li>Piston and Cylinder liner overhaul</li>
          <li>Fuel pumps/boosters and fuel injection equipment</li>
          <li>Exhaust valves and Exhaust actuator</li>
          <li>Lubricators</li>
          <li>Overhaul and calibration of ELFI/FIVA/ELVA</li>
          <li>Pneumatic system overhaul</li>
        </ul>
      </div>
      <div className="services-column">
        <h2>Professional Expertise</h2>
        <p>Our team of highly skilled engineers and technicians are experienced in providing top-notch services to meet our clients needs. With a focus on precision, efficiency, and reliability, we ensure that every project is completed to the highest standards.</p>
        <p className='extraParagraph'>Contact us today to learn more about how we can assist you with your maritime engineering needs.</p>
      </div>
    </div>
  </div>
);
}

export default DockingServices;
