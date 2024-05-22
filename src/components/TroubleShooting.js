import React from 'react';
import { Helmet } from 'react-helmet';
import './TroubleShooting.css';

function TroubleShooting() {
  return (
    <div className="troubleShooting">
      <Helmet>
        <title>Troubleshooting Services for Ship Systems</title>
        <meta name="description" content="Specializing in troubleshooting various ship systems including pneumatic control, hydraulic control, electrical control, main engine control, fuel gas supply, and dual fuel engine systems." />
        <link rel="canonical" href="https://di-tech.eu/trouble-shooting" />
      </Helmet>
      <h1 className="headingofTroubleShooting">Trouble shooting</h1>
      <div className="contentOfTroubleShooting">
        <p>We specialize in troubleshooting various systems including:</p>
        <ul>
          <li>Pneumatic control system</li>
          <li>Hydraulic control system</li>
          <li>Electrical control system</li>
          <li>Main engine control system</li>
          <li>Fuel gas supply system</li>
          <li>Dual Fuel engine troubleshooting and overhaul</li>
        </ul>
        <p className='extraParagraph'>
          Contact us today to explore how our engineering services can elevate your fleet's performance and efficiency.
        </p>
      </div>
    </div>
  );
}

export default TroubleShooting;
