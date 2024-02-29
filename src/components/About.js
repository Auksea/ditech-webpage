import React, { useEffect } from 'react';
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
      <h2 className="first-heading">About Us</h2>
      <p className="second-heading">Di-Tech was founded in 2021 and founding partners have years of experience with marine engines</p>
      
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
            src={`${process.env.PUBLIC_URL}/pics/work13.jpeg`}
            alt="First slide"
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

