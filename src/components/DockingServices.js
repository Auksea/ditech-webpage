import React from 'react';
import { Helmet } from 'react-helmet';
import './DockingServices.css';

function DockingServices() {
  return (
    <div className="services-container">
      <Helmet>
        <title>Our Services - Di-Tech Marine Engineering</title>
        <meta name="description" content="Discover the professional services offered by Di-Tech Marine Engineering, specializing in maritime engineering. Our expertise includes piston and cylinder liner overhaul, fuel pumps/boosters, exhaust valves, lubricators, and more. Contact us today to learn how we can assist you with your maritime engineering needs." />
        <link rel="canonical" href="https://di-tech.eu//docking-services" />
      </Helmet>
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
            <li>Valve maintenance and repair</li>
            <li>Hydraulic system overhaul</li>
          </ul>
        </div>
        <div className="services-column">
          <h2>Professional Expertise</h2>
          <p>Our team of highly skilled engineers and technicians are experienced in providing top-notch services to meet our clients' needs. With a focus on precision, efficiency, and reliability, we ensure that every project is completed to the highest standards.</p>
          <p className='extraParagraph'>Contact us today to learn more about how we can assist you with your maritime engineering needs.</p>
        </div>
      </div>
    </div>
  );
}

export default DockingServices;


