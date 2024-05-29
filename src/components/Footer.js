import React from 'react';
import { Helmet } from 'react-helmet';
import './Footer.css';

const Footer = ({ toggleDropdown }) => {
    const scrollToTopAndOpenDropdown = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        toggleDropdown(true);
    };

    return (
        <footer className="footer">
            <Helmet>
                <title>Di-Tech Marine Engineering - Contact Information and Services</title>
                <meta name="description" content="Get in touch with Di-Tech Marine Engineering for high-quality marine engineering services. Contact us for maintenance of engine control systems (ECS), performance optimization, troubleshooting, and modification of cylinder lubricators (ME/Alpha). Visit our website to learn more." />
                <meta name="keywords" content="Di-Tech Marine Engineering, marine engineering services, ECS maintenance, performance optimization, troubleshooting, cylinder lubricator modification, marine engineering Denmark" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://di-tech.eu/footer" />
                <meta property="og:title" content="Di-Tech Marine Engineering - Contact Information and Services" />
                <meta property="og:description" content="Get in touch with Di-Tech Marine Engineering for high-quality marine engineering services. Contact us for maintenance of engine control systems (ECS), performance optimization, troubleshooting, and modification of cylinder lubricators (ME/Alpha). Visit our website to learn more." />
                <meta property="og:url" content="https://di-tech.eu/footer" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={'${process.env.PUBLIC_URL}/pics/Di-Tech-logo.webp'} />
            </Helmet>

            <div className="FooterImgColumn">
                <img src={`${process.env.PUBLIC_URL}/pics/Di-Tech-logo.webp`} alt="marine engineering services" className="company-icon-footer" />
            </div>
            <div className="FooterColumn">
                <h4>Contact Information</h4>
                <p>Di-Tech</p>
                <p>Holmensvej 24A</p>
                <p>3600 Frederikssund</p>
                <p>Denmark</p>
                <p>Phone: +45 24 21 54 51 / +45 25 73 73 66</p>
                <p>Email: <a href="mailto:service@di-tech.eu">service@di-tech.eu</a></p>
            </div>
            <div className="FooterColumn">
                <h4>Services</h4>
                <p><a href="#" onClick={scrollToTopAndOpenDropdown}>Maintenance of Engine Control system (ECS)</a></p>
                <p><a href="#" onClick={scrollToTopAndOpenDropdown}>Performance optimization</a></p>
                <p><a href="#" onClick={scrollToTopAndOpenDropdown}>Troubleshooting</a></p>
                <p><a href="#" onClick={scrollToTopAndOpenDropdown}>Modification of cylinder lubricators (ME/Alpha)</a></p>
            </div>
        </footer>
    );
};

export default Footer;

