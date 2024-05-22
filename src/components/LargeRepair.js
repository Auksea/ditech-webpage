import React from 'react';
import { Helmet } from 'react-helmet';
import './LargeRepair.css';

function LargeRepair() {
  return (
    <div className="large-repair">
      <Helmet>
        <title>Large Repair</title>
        <meta name="description" content="Performance measurement and evaluation are crucial aspects of optimizing fleet operations. At Di-Tech, we offer advanced tools and methodologies to assess and analyze various performance metrics, including fuel consumption, emissions levels, operational efficiency, and maintenance effectiveness." />
        <link rel="canonical" href="https://di-tech.eu/large-repair" />
      </Helmet>
      <h1 className="headingofLargeRepair">Large Repair</h1>
      <div className="contentofRepair">
        <div className="text-columnofRepair">
          <p>
            Performance measurement and evaluation are crucial aspects of optimizing fleet operations. At Di-Tech, we offer advanced tools and methodologies to assess and analyze various performance metrics, including fuel consumption, emissions levels, operational efficiency, and maintenance effectiveness.
          </p>
          <p className='extraParagraph'>
            Contact us today to explore how our engineering services can elevate your fleet's performance and efficiency.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LargeRepair;
