import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="column">
            <img src={`${process.env.PUBLIC_URL}/pics/Di-Tech-logo.jpg`} alt="Company Icon" className="company-icon" />
            </div>
            <div className="column">
                <h4>Contact Information</h4>
                    <p>Di-Tech</p>
                    <p>Holmensvej 24A</p>
                    <p>3600 Frederikssund</p>
                    <p>Denmark</p>
                    <p>Phone: +45 24 21 54 51</p>
                    <p>Email: service@di-tech.eu</p>
            </div>
            <div className="column">
                <h4>Services</h4>
                <p>Maintenance of Engine Control system (ECS)</p>
                <p>Performance optimization</p>
                <p>Trouble shooting</p>
                <p>Modification of cylinder lubricators (ME/Alpha)</p>
            </div>
        </footer>
    );
};
export default Footer;

