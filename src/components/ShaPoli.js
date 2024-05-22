import React from 'react';
import { Helmet } from 'react-helmet';
import './ShaPoli.css';

function ShaPoLi() {
  return (
    <div className="ShaPoli">
      <Helmet>
        <title>ShaPoLi (Shaft Power Limitation)</title>
        <meta name="description" content="ShaPoLi (Shaft Power Limitation) is a system for managing power output in marine engines." />
        <link rel="canonical" href="https://di-tech.eu/ShaPoLi" />
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

