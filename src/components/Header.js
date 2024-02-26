import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [animated, setAnimated] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setAnimated(true);
    }, []);

    const isContactPage = location.pathname === '/contact';
    const headerText = isContactPage ? "Contact Us" : "We offer specialized services to MAN B&W two-stroke engines";
    const companyLogo = "/pics/Di-Tech-logo.jpg";
    const headerImage = isContactPage ? "/pics/example8.jpg" : "/pics/example4.jpg"; // Different images for Home and Contact pages

    return (
        <div className={`header-wrapper ${animated ? 'animated' : ''}`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${headerImage})` }}>
            <div className={`heading-container ${isContactPage ? 'contact-page' : ''}`}>
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




