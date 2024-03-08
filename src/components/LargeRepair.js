import React from 'react';
import './LargeRepair.css';

function LargeRepair() {
  return (
    <div className="large-repair">
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
        <div className="image-column">
          <img src="your-image-url.jpg" alt="LRepair Image" />
        </div>
      </div>
    </div>
  );
}

export default LargeRepair;