import React, { useEffect } from 'react';
import './Contact.css';
//import ContactForm from './ContactForm';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    useEffect(() => {
        const handleScroll = () => {
            const headings = document.querySelectorAll('.column-heading');
            headings.forEach((heading) => {
                if (isElementInViewport(heading)) {
                    heading.classList.add('slide-from-left');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

return (
    <div className="contact-page-container">
        <div className="columns-container">
            <div className="contact-info-column">
                <p className='column-heading'>Our workshop in Frederikssund, Denmark</p>
                <div className="contact-info">
                    <div className="address-column">
                        <p><FaMapMarkerAlt /></p>
                        <p>Holmensvej 24A,</p>
                        <p>3600 Frederikssund,</p>
                        <p>Denmark</p>
                    </div>
                    <div className="phone-email-column">
                        <p><FaPhone /> +45 24 21 54 51 / +45 25 73 73 66</p>
                        <p><FaEnvelope /> <a href="mailto:service@di-tech.eu">service@di-tech.eu</a></p>
                    </div>
                </div>
            </div>
            <div className="map-column">
                <iframe
                    title="location-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1396.2758087651682!2d12.076049523857487!3d55.8479180262925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465269a8ba60d623%3A0xe22e44f31e651af3!2sDI-Tech!5e0!3m2!1sen!2sdk!4v1710833904558!5m2!1sen!2sdk"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    </div>
    );
};

export default Contact;


