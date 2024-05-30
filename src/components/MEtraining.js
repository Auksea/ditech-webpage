import React from 'react';
import { Helmet } from 'react-helmet';
import './MEtraining.css';

function MEtraining() {
  return (
    <div className="MEtraining">
      <Helmet>
        <title>Onboard ME Training | Dual Fuel Engines - Di-Tech Marine Engineering</title>
        <meta name="description" content="Discover our comprehensive onboard ME training programs, covering dual fuel engines. Tailored courses for all levels of experience to optimize fleet performance and efficiency." />
        <meta name="keywords" content="onboard ME training, dual fuel engines, marine engineering training, fleet performance, efficiency optimization" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Onboard ME Training | Dual Fuel Engines - Di-Tech Marine Engineering" />
        <meta property="og:description" content="Discover our comprehensive onboard ME training programs, covering dual fuel engines. Tailored courses for all levels of experience to optimize fleet performance and efficiency." />
        <meta property="og:url" content="https://di-tech.eu/ME-training" />
        <meta property="og:type" content="website" />
      </Helmet>

      <h1 className="headingofMEtraining">Onboard ME Training, also covering dual fuel engines.</h1>
      <div className="contentOfMEtraining">
        <p>Our training courses cover all levels and are customized to the specific needs of the crew/management. Whether it's basic training for new recruits or advanced courses for experienced engineers, we tailor our programs to ensure they meet your fleet's requirements.</p>
        <p className='extraParagraph'>
          Contact us today to explore how our engineering services can elevate your fleet's performance and efficiency.
        </p>
      </div>
    </div>
  );
}

export default MEtraining;
