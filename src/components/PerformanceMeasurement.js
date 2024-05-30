import React from 'react';
import { Helmet } from 'react-helmet';
import './PerformanceMeasurement.css';

function PerformanceMeasurement() {
  return (
    <div className="performance-measurement">
      <Helmet>
        <title>Performance Measurement & Evaluation - Di-Tech Marine Engineering</title>
        <meta name="description" content="Discover how Di-Tech utilizes advanced tools and methodologies to assess and analyze performance metrics for optimizing fleet operations. Contact us today to elevate your fleet's performance and efficiency." />
        <meta name="keywords" content="performance measurement, fleet operations optimization, fuel consumption analysis, emissions levels, operational efficiency, maintenance effectiveness" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Performance Measurement & Evaluation - Di-Tech Marine Engineering" />
        <meta property="og:description" content="Discover how Di-Tech utilizes advanced tools and methodologies to assess and analyze performance metrics for optimizing fleet operations. Contact us today to elevate your fleet's performance and efficiency." />
        <meta property="og:url" content="https://di-tech.eu/performance-measurement" />
        <meta property="og:type" content="website" />
      </Helmet>

      <h1 className="headingofPerformance">Performance measurement and evaluation</h1>
      <div className="contentofPerformance">
        <div className="text-columnofPerformance">
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

export default PerformanceMeasurement;

