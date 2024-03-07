import React from 'react';
import './AlphaSystem.css';

const AlphaSystem = () => {
  return (
    <div className="alpha-system">
      <h1 className='heading-of-Lubricator-page'>Alpha Lubricator Upgrade</h1>
      <p className='second-heading-of-Lubricator-page'>Slow Steaming Kit</p>
      
      {/* First set of rows */}
      <div className="row">
        <div className="row-item">
          <img src={`${process.env.PUBLIC_URL}/pics/AlphaLubImage1.PNG`} alt="Image 1" className="row-image" />
          <img src={`${process.env.PUBLIC_URL}/pics/AlphaLubImage2.PNG`} alt="Image 2" className="row-image" />
          <h2>Reduction of cylinder oil costs</h2>
          <p>
            In early 2012, a new layout of the Alpha Lubricator in new MC engines was intro-
            duced. Along with a number of design improvements, the injection volume and
            frequency has been changed in order to optimise the cylinder oil consumption at
            low load.
          </p>
          <p>
            Now, Alpha Lubricator Upgrade is introduced as a retrofit solution,
            optimising cylinder oil consumption in existing engines.
          </p>
        </div>
        <div className="row-item">
          <p>
            A consequence of substantial over-lubrication at low load is generating deposits
            on the piston crown and rings, increasing the risk of damage to the cylinder liners.
            In addition, over-lubrication generates excess costs for unnecessary lubrication oil.
          </p>
          <p>
            The Alpha Lubricator Upgrade is a major improvement of the system. By adapting
            the new lubricator layout, a complete lubrication optimisation at all engine loads
            is now possible.
          </p>
          <h2 className='Lubricatorlist'>Benefits of upgrading the system: </h2>
          <ul>
            <li>Cylinder lubrication oil savings of 20-50% at low load</li>
            <li>More accurate feed rate control at all engine loads</li>
            <li>Minimising over-lubrication at low load, reducing deposits, hence improving the cylinder condition</li>
            <li>Implementation of latest design features</li>
            <li>Upgraded interface by latest software version.</li>
          </ul>
        </div>
      </div>

      {/* Second set of rows */}
      <div className="row-wrapper">
        <h2 className='middle-heading'>Alpha Lubricator Upgrade is benefi cial to all large bore MC engines (70-98 bore) and older installations in small bore engines.</h2>
        <div className="row">
          <div className="row-item">
            <h4>Scope of content</h4>
            <p>
              The Alpha Lubricator Upgrade, Slow
              Steaming Kit, comprises a new MCU, including the latest software, and the improved lubricator layout:
            </p>
            <p>
              <strong>MCU Mk 2: </strong>New hardware version, plug
              and play in existing ALCU. New software
              with upgraded algorithm and system interface
            </p>
          </div>
          <div className="row-item">
            <p>
              <strong>Lubricators: </strong>Complete lubricators with
              all new design features (recommended at
              the standard 5-year lubricator overhaul)
              or
            </p>
            <p>
              <strong>Lubricator kits: </strong>
              Parts to modify the lubri-
              cators for optimised slow steaming opera-
              tion (require that solenoid valves, accumu-
              lators, etc. are in good working condition).
            </p>
          </div>
        </div>
      </div>

      {/* Container for the last two images and paragraph */}
      <div className="last-images-container">
        <img src={`${process.env.PUBLIC_URL}/pics/AlphaLubImage3.PNG`} alt="Image 3" className="row-image" />
        <p>
          The new lubricator layout reduces the engine power level at which the algorithm, controlling the cylinder oil feed rate, changes. The “breakpoint” is moved to the left. The Alpha Lubricator Upgrade enables the cylinder oil feed rate to follow a lower curve. The marked area in the fi gure above corresponds to the potential lubrication oil savings from upgrading the system. 
        </p>
        <img src={`${process.env.PUBLIC_URL}/pics/AlphaLubImage4.PNG`} alt="Image 4" className="row-image" />
      </div>
    </div>
  );
};

export default AlphaSystem;



