import React from 'react';
import { Helmet } from 'react-helmet';
import './HealthCheck.css';

function HealthCheck() {
  return (
    <div className="health-check">
      <Helmet>
        <title>Health Check of Engines - Di-Tech Marine Engineering</title>
        <meta name="description" content="Di-Tech offers a comprehensive health check of engines involving thorough inspections and diagnostic tests to assess the condition and performance of your vessel's engines." />
        <meta name="keywords" content="health check, engine health check, marine engine health, vessel engine inspection" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Health Check of Engines - Di-Tech Marine Engineering" />
        <meta property="og:description" content="Di-Tech offers a comprehensive health check of engines involving thorough inspections and diagnostic tests to assess the condition and performance of your vessel's engines." />
        <meta property="og:url" content="https://di-tech.eu/health-check" />
        <meta property="og:type" content="website" />
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
