import React from 'react';
import './Footer.css';

const Footer = ({ toggleDropdown }) => {
    const scrollToTopAndOpenDropdown = () => {
        // Scroll to the top
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        
        // Open the Services dropdown menu
        toggleDropdown(true);
    };

    return (
        <footer className="footer">
            <div className="FooterImgColumn">
                <img src={`${process.env.PUBLIC_URL}/pics/Di-Tech-logo.jpg`} alt="Company Icon Footer" className="company-icon-footer" />
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
                {/* Add onClick event to each service link */}
                <p><a href="#" onClick={scrollToTopAndOpenDropdown}>Maintenance of Engine Control system (ECS)</a></p>
                <p><a href="#" onClick={scrollToTopAndOpenDropdown}>Performance optimization</a></p>
                <p><a href="#" onClick={scrollToTopAndOpenDropdown}>Trouble shooting</a></p>
                <p><a href="#" onClick={scrollToTopAndOpenDropdown}>Modification of cylinder lubricators (ME/Alpha)</a></p>
            </div>
        </footer>
    );
};

export default Footer;
