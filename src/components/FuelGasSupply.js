import React from 'react';
import { Helmet } from 'react-helmet';
import './FuelGasSupply.css';

function FuelGasSupply() {
  return (
    <div className="fuelGasSupply">
      <Helmet>
        <title>Fuel Gas Supply System - Di-Tech Marine Engineering</title>
        <meta name="description" content="Di-Tech specializes in troubleshooting and repair of MAN PVU (Pressure Vacuum Units) within the fuel gas supply system. Our expertise ensures efficient diagnosis and resolution of issues, maintaining the reliability and performance of your gas supply system." />
        <meta name="keywords" content="fuel gas supply system, MAN PVU, Pressure Vacuum Units, marine engineering, troubleshooting, repair, gas supply system, fleet performance, efficiency" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Fuel Gas Supply System - Di-Tech Marine Engineering" />
        <meta property="og:description" content="Di-Tech specializes in troubleshooting and repair of MAN PVU (Pressure Vacuum Units) within the fuel gas supply system. Our expertise ensures efficient diagnosis and resolution of issues, maintaining the reliability and performance of your gas supply system." />
        <meta property="og:url" content="https://di-tech.eu/fuel-gas-supply" />
        <meta property="og:type" content="website" />
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
