import React from 'react';
import { Helmet } from 'react-helmet';
import './OnBoardOverhaul.css';

function OnBoardOverhaul() {
  return (
    <div className="on-board-overhaul">
      <Helmet>
        <title>Onboard Overhaul Services - Di-Tech Marine Engineering</title>
        <meta name="description" content="Explore our onboard overhaul services for FIVA, ELFI, and ELVA systems. Contact us today to elevate your fleet's performance and efficiency." />
        <meta name="keywords" content="onboard overhaul services, FIVA overhaul, ELFI overhaul, ELVA overhaul, ship maintenance, marine engineering services" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Onboard Overhaul Services - Di-Tech Marine Engineering" />
        <meta property="og:description" content="Explore our onboard overhaul services for FIVA, ELFI, and ELVA systems. Contact us today to elevate your fleet's performance and efficiency." />
        <meta property="og:url" content="https://di-tech.eu/onboard-overhaul" />
        <meta property="og:type" content="website" />
      </Helmet>

      <h1 className="headingofOverhaul">Overhaul of FIVA/ELFI/ELVA</h1>
      <div className="contentofOverhaul">
        <div className="text-columnofOverhaul">
          <p>
            Our onboard overhaul services encompass a range of activities to ensure the reliability and performance of your ship's critical components. We specialize in:
          </p>
          <ul>
            <li>Overhaul, Testing, and Calibration of FIVA/ELFI in workshop.</li>
            <li>Onboard overhaul and calibration of FIVA/ELFI/ELVA systems.</li>
          </ul>
          <p>
            With our experienced engineers and advanced diagnostic tools, we conduct comprehensive inspections, repairs, and maintenance to minimize downtime and maximize operational efficiency.
          </p>
          <p>
            From overhauling propulsion systems to optimizing fuel delivery mechanisms, we offer tailored solutions to meet your vessel's specific requirements. Our goal is to deliver top-notch service that enhances your fleet's performance and extends the lifespan of your equipment.
          </p>
          <p className='extraParagraph'>
            Contact us today to explore how our engineering services can elevate your fleet's performance and efficiency.
          </p>
        </div>
        <div className="image-column">
          <img src="/pics/example2.webp" alt="overhaul ship engine" />
        </div>
      </div>
    </div>
  );
}

export default OnBoardOverhaul;
