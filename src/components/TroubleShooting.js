import React from 'react';
import './TroubleShooting.css';

function TroubleShooting() {
  return (
    <div className="troubleShooting">
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
