import React from 'react';
import './PressureMeasure.css';

function PressureMeasure() {
  return (
    <div className="pressure-measure">
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
        {/*<div className="image-column">
          <img src="your-image-url.jpg" alt="Pressure Measuring Instrument" />
  </div>*/}
</div>
</div>
  );
}

export default PressureMeasure;

