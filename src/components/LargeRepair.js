import React from 'react';
import { Helmet } from 'react-helmet';
import './LargeRepair.css';

function LargeRepair() {
  return (
    <div className="large-repair">
      <Helmet>
      <title>Large Repair - Di-Tech Marine Engineering</title>
      <meta name="description" content="Di-Tech specializes in large repair services for marine engines, offering comprehensive solutions to address significant issues and ensure the optimal functioning of your vessel's engine systems." />
      <meta name="keywords" content="large repair, marine engine repair, engine maintenance, marine engineering services" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Large Repair - Di-Tech Marine Engineering" />
      <meta property="og:description" content="Di-Tech specializes in large repair services for marine engines, offering comprehensive solutions to address significant issues and ensure the optimal functioning of your vessel's engine systems." />
      <meta property="og:url" content="https://di-tech.eu/large-repair" />
      <meta property="og:type" content="website" />
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
