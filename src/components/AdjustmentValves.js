import React from 'react';
import { Helmet } from 'react-helmet';
import './AdjustmentValves.css';

function AdjustmentValves() {
  return (
    <div className="adjustment-valves">
      <Helmet>
        <title>Fuel Injection Valves Overhaul - Di-Tech Marine Engineering</title>
        <meta name="description" content="Discover Di-Tech Marine Engineering's expert services for overhauling, testing, and adjusting fuel injection valves. Optimize your marine engine's performance and efficiency with our specialized solutions." />
        <meta name="keywords" content="Di-Tech Marine Engineering, fuel injection valves, valve overhaul, valve testing, valve adjustment, marine engine services, marine engineering, engine efficiency" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Fuel Injection Valves Overhaul - Di-Tech Marine Engineering" />
        <meta property="og:description" content="Expert services in overhauling, testing, and adjusting fuel injection valves to enhance marine engine performance and efficiency. Learn more about Di-Tech Marine Engineering." />
        <meta property="og:url" content="https://di-tech.eu/adjustment-valves" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={'${process.env.PUBLIC_URL}/pics/parts.webp'} />
      </Helmet>

      <h1 className="headingofAdjustmentV">Overhaul, Testing, and Adjustment of Fuel Injection Valves</h1>
      <div className="contentofAdjustmentV">
        <div className="text-columnofAdjustmentV">
          <p>
            Our overhaul, testing, and adjustment services for fuel injection valves are designed to optimize the performance and efficiency of your engines. With our extensive expertise and state-of-the-art equipment, we ensure that your fuel injection valves are meticulously inspected, tested, and calibrated to meet the highest standards of quality and reliability.
          </p>
          <p className='extraParagraph'>
            Contact us today to explore how our engineering services can elevate your fleet's performance and efficiency.
          </p>
        </div>
        <div className="image-column">
          <img src="/pics/parts.webp" alt="ship engine repair companies" />
        </div>
      </div>
    </div>
  );
}

export default AdjustmentValves;

