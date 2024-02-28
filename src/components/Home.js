import React from 'react';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
    return (
        <div className="container">
            <h2 className="section-title">What We Offer</h2>
            <p className="section-description">We are specialists in ME-C, ME-B and all dual fuel engines</p>
            <div className="row">
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Maintenance of Engine Control system (ECS)</h5>
                            <p className="card-text">Health check of ECS on all engines types, ME-C, ME-B and all Dual fuel engines.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Performance optimization</h5>
                            <p className="card-text">Correct performance adjustment of the engine is crucial for engine reliability, cylinder conditions and to maintain optimized fuel consumption.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Trouble shooting</h5>
                            <p className="card-text">We offer troubleshooting and support in case of malfunction of the engine operation. Trouble shooting tasks can include: Performance evaluation, Operating issues, Issues with auto tuning, DF operating failure, abnormal alarms, start issues.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Modification of cylinder lubricators (ME/Alpha)</h5>
                            <p className="card-text">Modification of cylinder lubricators to increase the frequency of cylinder oil injections. Higher cylinder oil injections frequencies results in fewer dry revolutions, which extend the time between engine overhauls.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Carousel */}
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`${process.env.PUBLIC_URL}/pics/work1.jpeg`}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`${process.env.PUBLIC_URL}/pics/work2.jpeg`}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`${process.env.PUBLIC_URL}/pics/work3.jpeg`}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`${process.env.PUBLIC_URL}/pics/work5.jpeg`}
                        alt="Fourth slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`${process.env.PUBLIC_URL}/pics/work6.jpeg`}
                        alt="Fifth slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`${process.env.PUBLIC_URL}/pics/work7.jpeg`}
                        alt="Sixth slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;

