import React from 'react';
import { Helmet } from 'react-helmet';
import './PressureMeasure.css';

function PressureMeasure() {
  return (
    <div className="pressure-measure">
      <Helmet>
        <title>Real-time Pressure Measuring Instrument - Di-Tech Marine Engineering</title>
        <meta name="description" content="Our real-time pressure measuring instrument provides accurate and reliable data for monitoring pressure levels in various ship systems." />
        <meta name="keywords" content="pressure measuring instrument, real-time pressure monitoring, ship systems, engine cylinders, hydraulic systems, pneumatic circuits" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Real-time Pressure Measuring Instrument - Di-Tech Marine Engineering" />
        <meta property="og:description" content="Our real-time pressure measuring instrument provides accurate and reliable data for monitoring pressure levels in various ship systems." />
        <meta property="og:url" content="https://di-tech.eu/pressure-measure" />
        <meta property="og:type" content="website" />
      </Helmet>

      <h1 className="headingofPressureMeasure">Real-time Pressure Measuring Instrument</h1>
      <div className="contentofPressure">
        <div className="text-columnofPressure">
          <p>
            Our real-time pressure measuring instrument provides accurate and reliable data for monitoring pressure levels in various ship systems. Whether it's engine cylinders, hydraulic systems, or pneumatic circuits, our instrument ensures precise measurement, enabling timely adjustments and preventive maintenance to optimize performance and ensure safety.
          </p>
          <p className='extraParagraph'>
            Contact us today to explore how our engineering services can elevate your fleet's performance and efficiency.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PressureMeasure;

