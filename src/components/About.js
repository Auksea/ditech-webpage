import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faHandshake, faUsers, faMedal, faComments } from '@fortawesome/free-solid-svg-icons';

const AboutPage = () => {
  useEffect(() => {
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const handleScroll = () => {
      const headings = document.querySelectorAll('.block-heading-values, .block-heading-mission, .block-heading-exp');
      headings.forEach((heading) => {
        if (isInViewport(heading)) {
          heading.classList.add('slide-from-left');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="about-container">
      <Helmet>
        <title>About Us - Di-Tech Marine Engineering</title>
        <meta name="description" content="Learn about Di-Tech Marine Engineering, your expert partner in MAN B&W two-stroke marine engine services. Discover our values, mission, and extensive experience in the marine industry." />
        <meta name="keywords" content="Di-Tech Marine Engineering, MAN B&W engines, two-stroke marine engines, marine engine maintenance, marine engine troubleshooting, marine engine services, marine engineering company" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Us - Di-Tech Marine Engineering" />
        <meta property="og:description" content="Discover Di-Tech Marine Engineering's expertise in MAN B&W two-stroke marine engines. Learn about our mission, values, and extensive industry experience." />
        <meta property="og:url" content="https://di-tech.eu/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={'${process.env.PUBLIC_URL}/pics/work13.webp'} />
        <meta property="og:image:alt" content="Di-Tech Marine Engineering Logo" />
        <link rel="canonical" href="https://di-tech.eu/about" />
      </Helmet>

      <div className="values-block">
        <p className="block-heading-values">Our Values</p>
        <div className="value">
          <h2>Reliability</h2>
          <h2><FontAwesomeIcon icon={faHandshake} /></h2>
          <p>Consistently delivering dependable services and products that ensure the smooth operation of marine engines.</p>
        </div>
        <div className="value">
          <h2>Expertise</h2>
          <h2><FontAwesomeIcon icon={faMedal} /></h2>
          <p>Striving for excellence through deep industry knowledge, technical proficiency, and continuous learning.</p>
        </div>
        <div className="value">
          <h2>Integrity</h2>
          <h2><FontAwesomeIcon icon={faComments} /></h2>
          <p>Operating with honesty, transparency, and ethical conduct in all interactions with customers, suppliers, and employees.</p>
        </div>
        <div className="value">
          <h2>Customer-Oriented</h2>
          <h2><FontAwesomeIcon icon={faUsers} /></h2>
          <p>Placing the needs and satisfaction of customers at the forefront of every decision and action.</p>
        </div>
      </div>
      
      <div className="mission-block">
        <p className="block-heading-mission">Our Mission</p>
        <h2><FontAwesomeIcon icon={faBusinessTime} /></h2>
        <p className="mission-text">Provide services, maintenance and troubleshooting on MAN B&W two-stroke Marine Engines</p>
      </div>
      
      <div className="experience-block">
        <div className="experience-image">
          <img
            className="d-block w-100"
            src={`${process.env.PUBLIC_URL}/pics/work13.webp`}
            alt="Ship Engine Repair Denmark"
          />
        </div>
        <div className="experience-text">
          <p className='block-heading-exp'>Experience</p>
          <p><span style={{ fontStyle: 'italic', fontSize: '40px' }}>At our core </span>we excel in providing specialized services tailored specifically for MAN B&W two-stroke Marine Engines. With two decades of dedicated experience under our belt, we've honed our expertise in service, maintenance, and troubleshooting for these engines to perfection. Our proficiency extends across the spectrum, encompassing both conventional Diesel and Dual Fuel engines.</p>
          <p>When you choose us, you're not just selecting a service provider; you're partnering with a team that prioritizes your satisfaction above all else. We understand the critical role marine engines play in your operations, which is why we go above and beyond to ensure they operate at peak efficiency and reliability.</p>
          <p>In choosing us, you're not just investing in a service provider; you're investing in the longevity and success of your maritime ventures.</p>
        </div>
      </div>
    </div>
  );
};  

export default AboutPage;

