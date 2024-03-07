import React, { useState, useEffect } from 'react';
import './CylinderMeasurements.css';

const CylinderMeasurements = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ textAlign: 'center' }}>
            {/* Heading */}
            <p className='section-title-for-cylinderPage1'>What we Offer</p>
            <h1 className="section-title-for-cylinderPage2">Cylinder liner measurement including condition-based evaluation</h1>
            
            {/* Columns */}
            <div className="row">
                <div className="col-md-6">
                    <p className='cylinder-text'>Minimize Operational Downtime and Enhance Vessel Efficiency through Big Data Analysis</p>
                    <p className='cylinder-text'>Enhance vessel operations and minimize downtime through meticulous Big Data analysis of cylinder conditions</p>
                    <p className='cylinder-text'>Nemoy Orbiter offers comprehensive 3D linear wear analyses, alongside refined visual liner inspections, bolstered by revised port inspection protocols</p>
                    <p className='cylinder-text'><strong>Our services include:</strong></p>
                    <ul>
                        <li>Precise 3D scanning of cylinder liners</li>
                        <li>High-fidelity imaging of pistons, piston rings, and piston skirts</li>
                        <li>Detailed liner and cylinder cover imaging</li>
                    </ul>
                    <p className='cylinder-text'>By harnessing the power of Big Data, we empower vessel operators to optimize maintenance schedules, mitigate unscheduled repairs, and ensure seamless operations</p>
                </div>
                <div className="col-md-6">
                    <img
                        className="imageForCylinderPage3"
                        src={`${process.env.PUBLIC_URL}/pics/cylinder.PNG`}
                        alt="Cylinder"
                    />
                </div>
            </div>

            {/* Bootstrap Carousel */}
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
                        <img className="d-block w-100" src={`${process.env.PUBLIC_URL}/pics/measurements1.PNG`} alt="First slide" />
                    </div>
                    <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
                        <img className="d-block w-100" src={`${process.env.PUBLIC_URL}/pics/measurements2.PNG`} alt="Second slide" />
                    </div>
                    <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
                        <img className="d-block w-100" src={`${process.env.PUBLIC_URL}/pics/measurements4.PNG`} alt="Third slide" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CylinderMeasurements;




