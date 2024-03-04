import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    const [animated, setAnimated] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const location = useLocation();
    const isContactPage = location.pathname === '/contact';
    const isAboutPage = location.pathname === '/about';
    const isPreDockingServicesPage = location.pathname === '/pre-docking';
    const isCylinderMeasurementPage = location.pathname === '/cylinder-measurement';

    const [showSublist, setShowSublist] = useState(false);

    const handleToggleSublist = (e) => {
        setShowSublist(!showSublist);
        e.stopPropagation();
    };

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
    } else if (isPreDockingServicesPage) {
        headerText = "Pre-Docking Services";
        headerImage = "/pics/example6.jpg";
    } else if (isCylinderMeasurementPage) {
        headerText = "Cylinder Measurements";
        headerImage = "/pics/work9.jpeg";
    } 
    else {
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
            <button className={`navbar-toggler custom-toggler ${isDropdownOpen ? 'dropdown-open' : ''}`} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
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
                                <Dropdown.Item as={Link} to="/pre-docking">Pre-Docking inspection</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/docking-services" onClick={handleToggleSublist} style={{ whiteSpace: 'normal', fontSize: '0.9rem' }}>
                                Docking services for MC/MC-C ME-B, ME-C, ME-GI, ME-GA, LGIP, LGIM, including engine overhaul supervision and manpower provision in dry-dock
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to="/cylinder-measurement">
                                Cylinder liner measurement including condition-based evaluation
                            </Dropdown.Item>
                                <Dropdown.Item as={Link} to="/engineering-services">Engineering services for retrofit</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/alpha-system">Alpha lubricator system, overhaul, troubleshooting and upgrade</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/performance-measurement">Performance measurement and evaluation</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/pressure-measure">Real time Pressure measuring instrument</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/onboard-overhaul">Onboard overhaul of FIVA/ELFI/ELVA</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/health-check">Health check of engines</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/large-repair">Large repair</Dropdown.Item>
                                <Dropdown.Item as={Link} to="adjustment-valves">Overhaul, testing and adjustment of fuel injection valves</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/recondition-valves">Reconditioning of exhaust valve spindles and seats</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/overhoal-exhaust">Overhaul of Exhaust valves onboard and in workshop</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/overhoal-fuel-boosters">Overhaul of Fuel boosters/Exhaust valve actuators</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/general-maintenance">General maintenance (Piston pull, bearing replacement etc)</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/pump-overhaul">FIVA, HPS pump workshop overhauling (ME-C/ME-B)</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/supply-engine">Supply of engine driven hydraulic pumps, made by Danfoss (Eaton)</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/ME-MC-engines">EEXI-EPL ME/MC engines</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/shaPoli">ShaPoLi (Shaft Power Limitation)</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/de-rating">De-rating</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/trouble-shooting">Troubleshooting</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/ME-training">Onboard ME Training, also covering dual fuel engines</Dropdown.Item>
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










