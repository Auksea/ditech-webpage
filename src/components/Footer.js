import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                    <img src={`${process.env.PUBLIC_URL}/pics/Di-Tech-logo.jpg`} alt="Company Icon" className="company-icon" />
                    </div>
                    <div className="col-md-3">
                        <h5>Contact Information</h5>
                        <p>Di-Tech</p>
                        <p>Holmensvej 24A</p>
                        <p>3600 Frederikssund</p>
                        <p>Denmark</p>
                        <p>Phone: +45 24 21 54 51</p>
                        <p>Email: service@di-tech.eu</p>
                    </div>
                    <div className="col-md-6">
                        <h5>Services</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Service 1</a></li>
                            <li><a href="#">Service 2</a></li>
                            <li><a href="#">Service 3</a></li>
                            {/* Add more services as needed */}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;