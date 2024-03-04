import React from 'react';
import './CylinderMeasurements.css';

const CylinderMeasurements = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            {/* Heading */}
            <p className='section-title-for-cylinderPage1'>What we Offer</p>
            <h1 className="section-title-for-cylinderPage2">Cylinder liner measurement including condition-based evaluation</h1>
            
            {/* Columns */}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ flex: 1 }}>
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
                    <img
                        className="imageForCylinderPage1"
                        src={`${process.env.PUBLIC_URL}/pics/work4.jpeg`}
                    />
                </div>
                <div style={{ flex: 1 }}>
                    <img
                        className="imageForCylinderPage2"
                        src={`${process.env.PUBLIC_URL}/pics/cylinder.PNG`}
                    />
                </div>
            </div>
        </div>
    );
};

export default CylinderMeasurements;

