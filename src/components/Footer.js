import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './Footer.css';

const Footer = ({ toggleDropdown }) => {
    const [isReadMoreVisible, setReadMoreVisible] = useState(false);

    const scrollToTopAndOpenDropdown = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        toggleDropdown(true);
    };

    const toggleReadMore = () => {
        setReadMoreVisible(!isReadMoreVisible);
    };

    return (
        <footer className="footer">
            <Helmet>
                <title>Di-Tech Marine Engineering</title>
                <meta name="description" content="Get in touch with Di-Tech Marine Engineering for high-quality marine engineering services. Maintenance of engine control systems (ECS), performance optimization and more" />
                <meta name="keywords" content="Di-Tech Marine Engineering, marine engineering services, ECS maintenance, performance optimization, troubleshooting, cylinder lubricator modification, marine engineering Denmark" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Di-Tech Marine Engineering" />
                <meta property="og:description" content="Get in touch with Di-Tech Marine Engineering for high-quality marine engineering services. Maintenance of engine control systems (ECS), performance optimization and more" />
                <meta property="og:url" content="https://di-tech.eu/footer" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={`${process.env.PUBLIC_URL}/pics/Di-Tech-logo.webp`} />
            </Helmet>

            <div className="FooterImgColumn">
                <img src={`${process.env.PUBLIC_URL}/pics/Di-Tech-logo.webp`} alt="marine engineering services" title="Di-Tech Marine Engineering Logo" loading="lazy" className="company-icon-footer" />
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

            <div className="ReadMoreSection">
                <button onClick={toggleReadMore} className="ReadMoreButton">
                    {isReadMoreVisible ? 'Show Less' : 'Read More'}
                </button>
                {isReadMoreVisible && (
                    <div className="ReadMoreContent">
                        <p>Explore our wide range of marine engineering services. We are based in Denmark, but our reach is global. Whether you need regular maintenance or urgent repairs, Di-Tech Marine Engineering is here to help. Contact us today for reliable and professional marine engineering solutions.</p>
                        <div className="ReadMoreLinks">
                            <p><a href="https://di-tech.eu/" target="_blank" rel="noopener noreferrer">2-stroke engine maintenance</a></p>
                            <p><a href="https://di-tech.eu/" target="_blank" rel="noopener noreferrer">2-stroke specialist</a></p>
                            <p><a href="https://di-tech.eu/" target="_blank" rel="noopener noreferrer">2-stroke workshop</a></p>
                            <p><a href="https://di-tech.eu/" target="_blank" rel="noopener noreferrer">Alpha Lubricator</a></p>
                            <p><a href="https://di-tech.eu/" target="_blank" rel="noopener noreferrer">ELFI Overhaul</a></p>
                            <p><a href="https://di-tech.eu/" target="_blank" rel="noopener noreferrer">ELVA Overhaul</a></p>
                            <p><a href="https://di-tech.eu/" target="_blank" rel="noopener noreferrer">FIVA Overhaul</a></p>
                            <p><a href="https://di-tech.eu/" target="_blank" rel="noopener noreferrer">HCU</a></p>
                            <p><a href="https://di-tech.eu/" target="_blank" rel="noopener noreferrer">HPS (Hydraulic power supply)</a></p>
                            <p><a href="https://di-tech.eu/" target="_blank" rel="noopener noreferrer">MAN genuine spare parts</a></p>
                            <p><a href="https://di-tech.eu/" target="_blank" rel="noopener noreferrer">MAN 2-stroke troubleshooting</a></p>
                            <p><a href="https://di-tech.eu/" target="_blank" rel="noopener noreferrer">Engine power limitation (EPL)</a></p>
                            <p><a href="https://di-tech.eu/" target="_blank" rel="noopener noreferrer">ShaPoLi (shaft power limitation)</a></p>
                            <p><a href="https://di-tech.eu/" target="_blank" rel="noopener noreferrer">Piston pull</a></p>
                            <p><a href="https://di-tech.eu/" target="_blank" rel="noopener noreferrer">Exhaust valve overhaul</a></p>
                            <p><a href="https://di-tech.eu/" target="_blank" rel="noopener noreferrer">Fuel valve overhaul</a></p>
                            <p><a href="https://di-tech.eu/" target="_blank" rel="noopener noreferrer">Turbocharger overhaul</a></p>
                            <p><a href="https://di-tech.eu/" target="_blank" rel="noopener noreferrer">LDM (Liner dimension measurement)</a></p>
                            <p><a href="https://di-tech.eu/" target="_blank" rel="noopener noreferrer">3D Liner scanning</a></p>
                            <p><a href="https://di-tech.eu/" target="_blank" rel="noopener noreferrer">Nemoy</a></p>
                            <p><a href="https://di-tech.eu/" target="_blank" rel="noopener noreferrer">Health check of main engine</a></p>
                            <p><a href="https://di-tech.eu/" target="_blank" rel="noopener noreferrer">Engine upgrade</a></p>
                            <p><a href="https://di-tech.eu/" target="_blank" rel="noopener noreferrer">2-stroke retrofit</a></p>
                        </div>
                    </div>
                )}
            </div>
        </footer>
    );
};

export default Footer;



