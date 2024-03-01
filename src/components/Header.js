import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    const [animated, setAnimated] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Added state for dropdown toggle
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
        headerImage = "/pics/example9.jpg";
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
                    <button className={`navbar-toggler ${isDropdownOpen ? 'dropdown-open' : ''}`} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        <span className="navbar-toggler-icon"></span>
                        <span className="dropdown-line"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li>
                                <Dropdown show={isDropdownOpen} onToggle={(isOpen) => setIsDropdownOpen(isOpen)}>
                                    <Dropdown.Toggle id="dropdown-basic" className={`nav-link custom-dropdown-toggle ${isDropdownOpen ? 'dropdown-open' : ''}`}>
                                        Services
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="custom-dropdown-menu">
                                        <Dropdown.Item as={Link} to="/maintenance-ecs">Maintenance of Engine Control System</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/troubleshooting">Troubleshooting</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/performance">Performance optimization</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/modification">Modification of cylinder lubricators</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li className="nav-item active">
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










