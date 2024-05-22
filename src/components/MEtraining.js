import React from 'react';
import { Helmet } from 'react-helmet';
import './MEtraining.css';

function MEtraining() {
  return (
    <div className="MEtraining">
      <Helmet>
        <title>Onboard ME Training, also covering dual fuel engines.</title>
        <meta name="description" content="Explore our onboard ME training programs, covering dual fuel engines. Contact us today to elevate your fleet's performance and efficiency." />
        <link rel="canonical" href="https://di-tech.eu/ME-training" />
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
