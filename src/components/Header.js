import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [animated, setAnimated] = useState(false);
    const location = useLocation();
    const isContactPage = location.pathname === '/contact';
    const isAboutPage = location.pathname === '/about';

    useEffect(() => {
        setAnimated(true);
    }, []);

    let headerText, headerImage;

    if (isContactPage) {
        headerText = "Contact Us";
        headerImage = "/pics/example8.jpg";
    } else if (isAboutPage) {
        headerText = "About Us";
        headerImage = "/pics/example6.jpg";
    } else {
        headerText = "We offer specialized services to MAN B&W two-stroke engines";
        headerImage = "/pics/example4.jpg";
    }

    const companyLogo = "/pics/Di-Tech-logo.jpg";
    return (
        <div className={`header-wrapper ${animated ? 'animated' : ''}`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${headerImage})` }}>
            <div className={`heading-container ${isContactPage ? 'contact-page' : ''} ${isAboutPage ? 'about-page' : ''}`}>
                <h1 className="heading">{headerText}</h1>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={`${process.env.PUBLIC_URL}${companyLogo}`} alt="Company Icon" className="company-icon" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;




