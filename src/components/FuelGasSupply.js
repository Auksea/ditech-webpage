import React from 'react';
import { Helmet } from 'react-helmet';
import './FuelGasSupply.css';

function FuelGasSupply() {
  return (
    <div className="fuelGasSupply">
      <Helmet>
        <title>Fuel Gas Supply System - Di-Tech Marine Engineering</title>
        <meta name="description" content="Di-Tech specializes in troubleshooting and repair of MAN PVU (Pressure Vacuum Units) within the fuel gas supply system. Our expertise ensures efficient diagnosis and resolution of issues, maintaining the reliability and performance of your gas supply system." />
        <link rel="canonical" href="https://di-tech.eu/fuel-gas-supply" />
      </Helmet>
      <h1 className="headingofFuelGasSupply">Fuel gas supply system</h1>
      <div className="contentOfFuelGasSupply">
        <p>We specialize in troubleshooting and repair of MAN PVU (Pressure Vacuum Units) within the fuel gas supply system. Our expertise ensures efficient diagnosis and resolution of issues, maintaining the reliability and performance of your gas supply system.</p>
        <p className='extraParagraph'>
          Contact us today to explore how our engineering services can elevate your fleet's performance and efficiency.
        </p>
      </div>
    </div>
  );
}

export default FuelGasSupply;
