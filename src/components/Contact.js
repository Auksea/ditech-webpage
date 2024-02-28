import React from 'react';
import './Contact.css';
import ContactForm from './ContactForm';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';


const Contact = () => {
    return (
        <div className="contact-page-container">
            <div className="columns-container">
                <div className="contact-info-column">
                    <h2 className='column-heading'>Our workshop in Frederikssund, Denmark</h2>
                    <div className="contact-info">
                        <div className="address-column">
                            <p><FaMapMarkerAlt /></p>
                            <p>Holmensvej 24A,</p>
                            <p>3600 Frederikssund,</p>
                            <p>Denmark</p>
                        </div>
                        <div className="phone-email-column">
                            <p><FaPhone /> +45 24 21 54 51</p>
                            <p><FaEnvelope /> service@di-tech.eu</p>
                        </div>
                    </div>
                </div>
                <div className="map-column">
                    <iframe
                        title="location-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2239.8386851517894!2d12.074831076505058!3d55.848113973119624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46526911cda3211d%3A0x9275de12a68d955f!2sHolmensvej%2024A%2C%203600%20Frederikssund!5e0!3m2!1sen!2sdk!4v1708941259430!5m2!1sen!2sdk"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <div className="contact-form-container">
                <h2 className='column-heading'>Or leave us a message</h2>
                <ContactForm />
            </div>
        </div>
    );
};


export default Contact;

