import React from 'react';
import { Helmet } from 'react-helmet';
import './HealthCheck.css';

function HealthCheck() {
  return (
    <div className="health-check">
      <Helmet>
        <title>Health check of engines</title>
        <meta name="description" content="Our comprehensive health check of engines involves thorough inspections and diagnostic tests to assess the condition and performance of your vessel's engines." />
        <link rel="canonical" href="https://di-tech.eu/health-check" />
      </Helmet>
      <h1 className="headingofHealthCkeck">Health check of engines </h1>
      <p>
        Our comprehensive health check of engines involves thorough inspections and diagnostic tests to assess the condition and performance of your vessel's engines. 
        We meticulously analyze various components, including fuel systems, cooling systems, and exhaust systems, to identify any potential issues and ensure optimal functioning.
      </p>
      <p className='extraParagraph'>
        Contact us today to explore how our engineering services can elevate your fleet's performance and efficiency.
      </p>
    </div>
  );
}

export default HealthCheck;
