import React from 'react';
import './AdjustmentValves.css';

function AdjustmentValves() {
  return (
    <div className="adjustment-valves">
      <h1 className="headingofAdjustmentV">Overhaul, Testing, and Adjustment of Fuel Injection Valves</h1>
      <div className="contentofAdjustmentV">
        <div className="text-columnofAdjustmentV">
          <p>
          Our overhaul, testing, and adjustment services for fuel injection valves are designed to optimize the performance and efficiency of your engines. With our extensive expertise and state-of-the-art equipment, we ensure that your fuel injection valves are meticulously inspected, tested, and calibrated to meet the highest standards of quality and reliability.
          </p>
          <p className='extraParagraph'>
            Contact us today to explore how our engineering services can elevate your fleet's performance and efficiency.
          </p>
        </div>
        <div className="image-column">
          <img src="/pics/parts.jpg" alt="AdjustmentV Image" />
        </div>
      </div>
    </div>
  );
}

export default AdjustmentValves;
