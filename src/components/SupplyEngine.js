import React from 'react';
import { Helmet } from 'react-helmet';
import './SupplyEngine.css';

function SupplyEngine() {
  return (
    <div className="supplyEngine">
      <Helmet>
        <title>Supply of Engine Driven Hydraulic Pumps and Proportional Valves - Di-Tech Marine Engineering</title>
        <meta name="description" content="We supply top-quality engine driven hydraulic pumps and proportional valves manufactured by Danfoss (Eaton), ensuring superior performance and reliability in hydraulic systems." />
        <meta name="keywords" content="HPS ( Hydraulic power supply), engine driven hydraulic pumps, proportional valves, Danfoss, Eaton, hydraulic systems, HPS ( Hydraulic power supply)" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Supply of Engine Driven Hydraulic Pumps and Proportional Valves - Di-Tech Marine Engineering" />
        <meta property="og:description" content="We supply top-quality engine driven hydraulic pumps and proportional valves manufactured by Danfoss (Eaton), ensuring superior performance and reliability in hydraulic systems." />
        <meta property="og:url" content="https://di-tech.eu/supply-engine" />
        <meta property="og:type" content="website" />
      </Helmet>

      <h1 className="headingofSupply">Supply of engine driven hydraulic pumps and proportional valves made by Danfoss(Eaton)</h1>
      <div className="contentOfSupplyEngine">
        <p>Our supply includes top-quality engine driven hydraulic pumps and proportional valves manufactured by Danfoss (Eaton), ensuring superior performance and reliability in hydraulic systems.</p>
        <p className='extraParagraph'>
          Contact us today to explore how our engineering services can elevate your fleet's performance and efficiency.
        </p>
      </div>
    </div>
  );
}

export default SupplyEngine;


