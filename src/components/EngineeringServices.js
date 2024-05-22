import React from 'react';
import { Helmet } from 'react-helmet';
import './EngineeringServices.css';

function EngineeringServices() {
  return (
    <div className="engineering-services">
      <Helmet>
        <title>Engineering Services for Ship Retrofit - Di-Tech Marine Engineering</title>
        <meta name="description" content="Discover Di-Tech's comprehensive engineering services tailored for ship retrofit projects. From upgrading propulsion systems to enhancing fuel efficiency, our team is equipped to handle diverse retrofit needs. Contact us to explore how our engineering services can elevate your fleet's performance and enhance environmental sustainability." />
        <link rel="canonical" href="https://di-tech.eu/engineering-services" />
      </Helmet>
      <h1 className="headingofEngineering">Engineering Services for Ship Retrofit</h1>
      <div className="contentofEng">
        <div className="text-columnofEng">
          <p>
            At <strong>Di-Tech, </strong>we specialize in providing comprehensive engineering services tailored for ship retrofit projects. Whether it's upgrading propulsion systems, enhancing fuel efficiency, or implementing environmental compliance solutions, our team is equipped to handle diverse retrofit needs.
          </p>
          <p>
            Furthermore, we understand the importance of Performance Measurement Indicators (PMIs) in assessing the impact of retrofit solutions on vessel performance. Our experts develop customized PMIs to monitor key metrics such as fuel consumption, emissions reduction, and operational efficiency, allowing shipowners to quantify the benefits of their retrofit investments.
          </p>
          <p className='extraParagraph'>
            Contact us today to explore how our engineering services and Performance Measurement Indicators can elevate your fleet's performance, reduce operating costs, and enhance environmental sustainability.
          </p>
        </div>
        <div className="image-column">
          <img src={`${process.env.PUBLIC_URL}/pics/work15.jpg`} alt="marine engineering services" />
        </div>
      </div>
    </div>
  );
}

export default EngineeringServices;

