import React from 'react';
import { Helmet } from 'react-helmet';
import './GeneralMaintenance.css';

function GeneralMaintenance() {
  return (
    <div className="generalMaintenance">
      <Helmet>
        <title>General Maintenance - Di-Tech Marine Engineering</title>
        <meta name="description" content="Di-Tech specializes in general maintenance services including piston pull and bearing replacement. Contact us today to explore how our engineering services can elevate your fleet's performance and efficiency." />
        <link rel="canonical" href="https://di-tech.eu/general-maintenance" />
      </Helmet>
      <h1 className="headingofGeneralMaintenance">General maintenance (Piston pull, bearing replacement)</h1>
      <div className="contentOfGeneralMaintenance">
        <p></p>
        <p className='extraParagraph'>
          Contact us today to explore how our engineering services can elevate your fleet's performance and efficiency.
        </p>
      </div>
    </div>
  );
}

export default GeneralMaintenance;
