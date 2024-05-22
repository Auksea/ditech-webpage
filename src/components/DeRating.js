import React from 'react';
import { Helmet } from 'react-helmet';
import './DeRating.css';

function DeRating() {
  return (
    <div className="deRating">
      <Helmet>
        <title>De-rating - Di-Tech Marine Engineering</title>
        <meta name="description" content="Learn about Di-Tech Marine Engineering's de-rating services. Contact us today to explore how our engineering services can elevate your fleet's performance and efficiency." />
        <link rel="canonical" href="https://di-tech.eu/de-rating" />
      </Helmet>
      <h1 className="headingofDeRating">De-rating</h1>
      <div className="contentOfDeRating">
        <p></p>
        <p className='extraParagraph'>
          Contact us today to explore how our engineering services can elevate your fleet's performance and efficiency.
        </p>
      </div>
    </div>
  );
}

export default DeRating;
