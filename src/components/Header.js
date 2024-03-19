import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Header = ({ isDropdownOpen, toggleDropdown }) => {
    const [animated, setAnimated] = useState(false);
    const [showCurtainMenu, setShowCurtainMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [showMobileServices, setShowMobileServices] = useState(false);
    const location = useLocation();

    const handleToggleSublist = (e) => {
        setShowCurtainMenu(!showCurtainMenu);
        e.stopPropagation();
    };

    const handleToggleServices = () => {
        if (isDropdownOpen) {
            toggleDropdown(false);
        } else {
            toggleDropdown(true);
            setShowMobileServices(true);
            setShowCurtainMenu(true);
        }
    };
    
    const handleExitMenu = () => {
        toggleDropdown(false);
        setShowCurtainMenu(false); 
    };
    
    useEffect(() => {
        setAnimated(true);
    }, []);

    useEffect(() => {
        handleExitMenu();
    }, [location]);

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);
        };

        setResponsiveness();

        window.addEventListener('resize', setResponsiveness);

        return () => {
            window.removeEventListener('resize', setResponsiveness);
        };
    }, []);

    useEffect(() => {
        if (showCurtainMenu) {
            setShowMobileServices(false);
        }
    }, [showCurtainMenu]);


    const isContactPage = location.pathname === '/contact';
    const isAboutPage = location.pathname === '/about';
    const isPreDockingServicesPage = location.pathname === '/pre-docking';
    const isCylinderMeasurementPage = location.pathname === '/cylinder-measurement';
    const isAlphaLubricationPage = location.pathname === '/alpha-system';
    const isDockingServicesPage = location.pathname === '/docking-services';
    const isEngineeringServicesPage = location.pathname === '/engineering-services';
    const isPerformanceMeasurementPage = location.pathname === '/performance-measurement';
    const isPressureMeasurePage = location.pathname === '/pressure-measure';
    const isOnBoardOverhaulPage = location.pathname === '/onboard-overhaul';
    const isHealthCheckPage = location.pathname === '/health-check';
    const isLargeRepairPage = location.pathname === '/large-repair';
    const isAdjustmentValves = location.pathname === '/adjustment-valves';
    const isReconditionValvesPage = location.pathname === '/recondition-valves';
    const isOverhaulExhaustPage = location.pathname === '/overhoal-exhaust';
    const isOverhaulFuelPage = location.pathname === '/overhoal-fuel-boosters';
    const isGeneralMaintenancePage = location.pathname === '/general-maintenance';
    const isPumpOverhaulPage = location.pathname === '/pump-overhaul';
    const isSupplyEnginePage = location.pathname === '/supply-engine';
    const isMEenginesPage = location.pathname === '/ME-MC-engines';
    const isShaPoliPage = location.pathname === '/shaPoli';
    const isDeRatingPage = location.pathname === '/de-rating';
    const isTroubleShootingPage = location.pathname === '/trouble-shooting';
    const isFuelGasSupplyPage = location.pathname === '/fuel-gas-supply';
    const isMEtrainingPage = location.pathname === '/ME-training';

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
        headerText = "Cylinder Measurement";
        headerImage = "/pics/dock3.jpg";
    } else if (isAlphaLubricationPage) {
        headerText = "Alpha Lubricator System";
        headerImage = "/pics/Lubricator.PNG";
    } else if (isDockingServicesPage) {
        headerText = "Docking Service for MC/MC-C ME-B, ME-C, ME-GI, ME-GA, LGIP, LGIM";
        headerImage = "/pics/example10.jpg";
    } else if (isEngineeringServicesPage) {
        headerText = "Engineering Services for Retrofit";
        headerImage = "/pics/example3.jpg";
    } else if (isPerformanceMeasurementPage) {
        headerText = "Performance Measurement and evaluation";
        headerImage = "/pics/work15.jpg";
    } else if (isPressureMeasurePage) {
        headerText = "Real time Pressure measuring instrument";
        headerImage = "/pics/water2.jpg";
    }else if (isOnBoardOverhaulPage) {
        headerText = "On board overhaul of FIVA/ELFI/ELVA";
        headerImage = "/pics/backgrnd6.jpg";
    }else if (isHealthCheckPage) {
        headerText = "Health check of engines";
        headerImage = "/pics/water3.jpg";
    }else if (isAdjustmentValves) {
        headerText = "Overhaul, testing and adjustment of fuel injection valves";
        headerImage = "/pics/parts1.jpg";
    }else if (isReconditionValvesPage) {
        headerText = "Reconditioning of exhaust valve spindles and seats";
        headerImage = "/pics/backgrnd4.jpg";
    }else if (isOverhaulExhaustPage) {
        headerText = "Overhaul of Exhaust valves onboard and in workshop";
        headerImage = "/pics/dock.jpg";
    }else if (isOverhaulFuelPage) {
        headerText = "Overhaul of Fuel boosters";
        headerImage = "/pics/water3.jpg";
    }else if (isGeneralMaintenancePage) {
        headerText = "General Maintenance";
        headerImage = "/pics/dock2.jpg";
    }else if (isPumpOverhaulPage) {
        headerText = "HPS pump workshop overhauling";
        headerImage = "/pics/dock3.jpg";
    }else if (isSupplyEnginePage) {
        headerText = "Supply of engine driven hydraulic pumps and proportional valves made by Danfoss";
        headerImage = "/pics/dock4.jpg";
    }else if (isMEenginesPage) {
        headerText = "EEXI-EPL ME/MC engines";
        headerImage = "/pics/example5.jpg";
    }else if (isShaPoliPage) {
        headerText = "Shaft Power Limitation";
        headerImage = "/pics/backgrnd4.jpg";
    }else if (isDeRatingPage) {
        headerText = "De-rating";
        headerImage = "/pics/water2.jpg";
    }else if (isTroubleShootingPage) {
        headerText = "TroubleShooting";
        headerImage = "/pics/work19.jpg";
    }else if (isMEtrainingPage) {
        headerText = "Onboard ME Training";
        headerImage = "/pics/training.jpg";
    }else if (isLargeRepairPage) {
        headerText = "Large Repair of Engines";
        headerImage = "/pics/backgrnd2.jpg";
    }else if (isFuelGasSupplyPage) {
        headerText = "Fuel Gas Supply";
        headerImage = "/pics/backgrnd5.jpg";
    }
    else {
        headerText = "We offer specialized services to MAN B&W two-stroke engines";
        headerImage = "/pics/example4.jpg";
    }

const companyLogo = "/pics/Di-Tech-logo.jpg";

return (
    <div className={`header-wrapper ${animated ? 'animated' : ''}`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${headerImage})` }}>
        <Link className="navbar-brand" to="/">
            <img src={`${process.env.PUBLIC_URL}${companyLogo}`} alt="Company Icon Header" className="company-icon-header" />
        </Link>
        <div className={`heading-container ${isContactPage ? 'contact-page' : ''} ${isAboutPage ? 'about-page' : ''}`}>
            <h1 className="heading">{headerText}</h1>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <button
                    className={`navbar-toggler custom-toggler ${isDropdownOpen ? 'dropdown-open' : ''}`}
                    type="button"
                    onClick={handleToggleSublist}>
                    <span className="navbar-toggler-icon"></span>
                    <span className="dropdown-line"></span>
                </button>
                <div className={`collapse navbar-collapse ${isMobile ? 'hide' : ''}`} id="navbarNav">
                        <ul className={`navbar-nav ${isMobile ? '' : 'ml-auto'}`}>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item dropdown">
                        <Dropdown show={isDropdownOpen} onToggle={(isOpen) => toggleDropdown(isOpen)}>
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
                                    <Dropdown.Item as={Link} to="/fuel-gas-supply">Fuel Gas Supply</Dropdown.Item>
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
            {showCurtainMenu && (
            <div className="curtain-menu-header">
                <button className="back-button" onClick={handleExitMenu}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <ul className="curtain-menu-items">
                    <li><Link to="/" onClick={handleExitMenu}>Home</Link></li>
                    <li><Link to="/about" onClick={handleExitMenu}>About</Link></li>
                    <li>
                    <button
                        className="accordion-button collapsed custom-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                        onClick={handleToggleServices}>
                        Services
                    </button>
                        <div
                            id="flush-collapseOne"
                            className={`panel collapse ${showMobileServices ? 'show' : ''}`}>
                                <ul>
                                    <li><Link to="/pre-docking" onClick={handleExitMenu}>Pre-Docking inspection</Link></li>
                                    <li><Link to="/docking-services" onClick={handleExitMenu}>Docking services</Link></li>
                                    <li><Link to="/cylinder-measurement" onClick={handleExitMenu}>Cylinder liner measurement</Link></li>
                                    <li><Link to="/engineering-services" onClick={handleExitMenu}>Engineering services for retrofit</Link></li>
                                    <li><Link to="/alpha-system" onClick={handleExitMenu}>Alpha lubricator system</Link></li>
                                    <li><Link to="/performance-measurement" onClick={handleExitMenu}>Performance measurement and evaluation</Link></li>
                                    <li><Link to="/pressure-measure" onClick={handleExitMenu}>Real time Pressure measuring instrument</Link></li>
                                    <li><Link to="/onboard-overhaul" onClick={handleExitMenu}>Onboard overhaul of FIVA/ELFI/ELVA</Link></li>
                                    <li><Link to="/health-check" onClick={handleExitMenu}>Health check of engines</Link></li>
                                    <li><Link to="/large-repair" onClick={handleExitMenu}>Large repair</Link></li>
                                    <li><Link to="adjustment-valves" onClick={handleExitMenu}>Overhaul, testing and adjustment of fuel injection valves</Link></li>
                                    <li><Link to="/recondition-valves" onClick={handleExitMenu}>Reconditioning of exhaust valve spindles and seats</Link></li>
                                    <li><Link to="/overhoal-exhaust" onClick={handleExitMenu}>Overhaul of Exhaust valves onboard and in workshop</Link></li>
                                    <li><Link to="/overhoal-fuel-boosters" onClick={handleExitMenu}>Overhaul of Fuel boosters/Exhaust valve actuators</Link></li>
                                    <li><Link to="/general-maintenance" onClick={handleExitMenu}>General maintenance (Piston pull, bearing replacement etc)</Link></li>
                                    <li><Link to="/pump-overhaul" onClick={handleExitMenu}>FIVA, HPS pump workshop overhauling (ME-C/ME-B)</Link></li>
                                    <li><Link to="/supply-engine" onClick={handleExitMenu}>Supply of engine driven hydraulic pumps, made by Danfoss (Eaton)</Link></li>
                                    <li><Link to="/ME-MC-engines" onClick={handleExitMenu}>EEXI-EPL ME/MC engines</Link></li>
                                    <li><Link to="/shaPoli" onClick={handleExitMenu}>ShaPoLi (Shaft Power Limitation)</Link></li>
                                    <li><Link to="/de-rating" onClick={handleExitMenu}>De-rating</Link></li>
                                    <li><Link to="/trouble-shooting" onClick={handleExitMenu}>Troubleshooting</Link></li>
                                    <li><Link to="/fuel-gas-supply" onClick={handleExitMenu}>Fuel Gas Supply</Link></li>
                                    <li><Link to="/ME-training" onClick={handleExitMenu}>Onboard ME Training, also covering dual fuel engines</Link></li>
                                </ul>
                        </div>
                    </li>
                    <li><Link to="/contact" onClick={handleExitMenu}>Contact</Link></li>
                </ul>
            </div>
        )}
      </div>
    );
};

export default Header;










