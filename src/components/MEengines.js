import React from 'react';
import { Helmet } from 'react-helmet';
import './MEengines.css';

function MEengines() {
  return (
    <div className="MEengines">
      <Helmet>
        <title>EEXI-EPL ME/MC Engines - Di-Tech Marine Engineering</title>
        <meta name="description" content="Di-Tech offers specialized engineering services for EEXI-EPL ME/MC engines, designed to optimize performance and efficiency. Contact us today to enhance your fleet's capabilities." />
        <meta name="keywords" content="EEXI, EPL, ME engines, MC engines, marine engine services, fleet performance, efficiency optimization" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="EEXI-EPL ME/MC Engines - Di-Tech Marine Engineering" />
        <meta property="og:description" content="Di-Tech offers specialized engineering services for EEXI-EPL ME/MC engines, designed to optimize performance and efficiency. Contact us today to enhance your fleet's capabilities." />
        <meta property="og:url" content="https://di-tech.eu/ME-MC-engines" />
        <meta property="og:type" content="website" />
      </Helmet>

      <h1 className="headingofMEengines">EEXI-EPL ME/MC engines</h1>
      <div className="contentOfMEengines">
      <p></p>
      <p className='extraParagraph'>
      Contact us today to explore how our engineering services can elevate your fleet's performance and efficiency.
      </p>
      </div>
    </div>
  );
}

export default MEengines;
