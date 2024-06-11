import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
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
        <Helmet>
            <title>Cylinder Liner Measurement - Di-Tech Marine Engineering</title>
            <meta name="description" content="Learn about Di-Tech Marine Engineering's cylinder liner measurement services, including condition-based evaluation and 3D scanning of cylinder liners. Enhance vessel efficiency and minimize operational downtime." />
            <meta name="keywords" content="3D Liner scanning, Nemoy, Health check of main engine, Cylinder Liner Measurement, Di-Tech Marine Engineering, 3D scanning, condition-based evaluation, vessel efficiency, operational downtime, marine engineering services" />
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content="Cylinder Liner Measurement - Di-Tech Marine Engineering" />
            <meta property="og:description" content="Discover Di-Tech Marine Engineering's expert cylinder liner measurement services. Utilize 3D scanning and condition-based evaluation to enhance vessel efficiency and minimize downtime." />
            <meta property="og:url" content="https://di-tech.eu/cylinder-measurement" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={'${process.env.PUBLIC_URL}/pics/cylinder.webp'} />
            <meta property="og:image:alt" content="Cylinder liner measurement tool" />
        </Helmet>

        <p className='section-title-for-cylinderPage1'>What we Offer</p>
        <h1 className="section-title-for-cylinderPage2">Cylinder liner measurement including condition-based evaluation</h1>
            
        <div className="row">
            <div className="col-md-6">
                <p className='cylinder-text'>Minimize Operational Downtime and Enhance Vessel Efficiency through Big Data Analysis</p>
                <p className='cylinder-text'>Enhance vessel operations and minimize downtime through meticulous Big Data analysis of cylinder conditions</p>
                <p className='cylinder-text'>Di-Tech offers comprehensive 3D linear wear analyses, alongside refined visual liner inspections, bolstered by revised port inspection protocols</p>
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
                        className="engine cylinder measuring tool"
                        src={`${process.env.PUBLIC_URL}/pics/cylinder.webp`}
                        alt="Cylinder"
                    />
                </div>
            </div>

            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
                        <img className="d-block w-100" src={`${process.env.PUBLIC_URL}/pics/measurements1.webp`} alt="3D scanning of cylinder liners" />
                    </div>
                    <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
                        <img className="d-block w-100" src={`${process.env.PUBLIC_URL}/pics/measurements2.webp`} alt="3D scanning of cylinder liners" />
                    </div>
                    <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
                        <img className="d-block w-100" src={`${process.env.PUBLIC_URL}/pics/measurements3.webp`} alt="3D scanning of cylinder liners" />
                    </div>
                    <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
                        <img className="d-block w-100" src={`${process.env.PUBLIC_URL}/pics/measurements4.webp`} alt="3D scanning of cylinder liners" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CylinderMeasurements;




