import React from 'react';
import { Helmet } from 'react-helmet';
import './PumpOverhaul.css';

function PumpOverhaul() {
  return (
    <div className="pumpOverhaul">
      <Helmet>
        <title>HPS pump workshop overhauling (ME-C/ME-B)</title>
        <meta name="description" content="HPS pump workshop overhauling for ME-C/ME-B engines." />
        <link rel="canonical" href="https://di-tech.eu/pump-overhaul" />
      </Helmet>
      <h1 className="headingofPump">HPS pump workshop overhauling (ME-C/ME-B)</h1>
      <div className="contentOfPumpOverhaul">
        <p></p>
        <p className='extraParagraph'>
          Contact us today to explore how our engineering services can elevate your fleet's performance and efficiency.
        </p>
      </div>
    </div>
  );
}

export default PumpOverhaul;
