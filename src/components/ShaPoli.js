import React from 'react';
import { Helmet } from 'react-helmet';
import './ShaPoli.css';

function ShaPoLi() {
  return (
    <div className="ShaPoli">
      <Helmet>
        <title>ShaPoLi (Shaft Power Limitation) - Di-Tech Marine Engineering</title>
        <meta name="description" content="ShaPoLi (Shaft Power Limitation) is a system for managing power output in marine engines." />
        <meta name="keywords" content="ShaPoLi, Shaft Power Limitation, marine engines, power management" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="ShaPoLi (Shaft Power Limitation) - Di-Tech Marine Engineering" />
        <meta property="og:description" content="ShaPoLi (Shaft Power Limitation) is a system for managing power output in marine engines." />
        <meta property="og:url" content="https://di-tech.eu/ShaPoLi" />
        <meta property="og:type" content="website" />
      </Helmet>

      <h1 className="headingofShaPoli">ShaPoLi (Shaft Power Limitation)</h1>
      <div className="contentOfShaPoli">
        <p></p>
        <p className='extraParagraph'>
          Contact us today to explore how our engineering services can elevate your fleet's performance and efficiency.
        </p>
      </div>
    </div>
  );
}

export default ShaPoLi;

