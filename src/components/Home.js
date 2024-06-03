import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const LazyLoadedCarousel = lazy(() => import('react-bootstrap/Carousel'));

const Home = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex === 5 ? 0 : prevIndex + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home-container">
            <Helmet>
                <title>Marine Engineering Services | What We Offer - Di-Tech Marine Engineering</title>
                <meta name="description" content="Two Stroke Engine Maintenance. Specialists in ME-C, ME-B, and all dual fuel engines. Maintenance, performance optimization, troubleshooting, and more." />
                <meta name="keywords" content="marine engineering, marine engine services, ME-C, ME-B, two stroke engines, maintenance, performance optimization, troubleshooting" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Marine Engineering Services | What We Offer - Di-Tech Marine Engineering" />
                <meta property="og:description" content="Specialists in ME-C, ME-B, and all dual fuel engines. Maintenance, performance optimization, troubleshooting, and more." />
                <meta property="og:url" content="https://di-tech.eu/" />
                <meta property="og:type" content="website" />
            </Helmet>

            <h2 className="section-title">What We Offer</h2>
            <p className="section-description">We are specialists in ME-C, ME-B, and all dual fuel engines</p>
            <div className="row">
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Maintenance of Engine Control system (ECS)</h3>
                            <p className="card-text">Health check of ECS on all engines types, ME-C, ME-B and all Dual fuel engines.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Performance optimization</h4>
                            <p className="card-text">Correct performance adjustment of the engine is crucial for engine reliability, cylinder conditions, and to maintain optimized fuel consumption.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Troubleshooting</h4>
                            <p className="card-text">We offer troubleshooting and support in case of malfunction of the engine operation. Troubleshooting tasks can include: Performance evaluation, Operating issues, Issues with auto tuning, DF operating failure, abnormal alarms, start issues.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Modification of cylinder lubricators (ME/Alpha)</h4>
                            <p className="card-text">Modification of cylinder lubricators to increase the frequency of cylinder oil injections. Higher cylinder oil injection frequencies result in fewer dry revolutions, which extend the time between engine overhauls.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Suspense fallback={<div>Loading Carousel...</div>}>
                <LazyLoadedCarousel activeIndex={index} onSelect={() => {}} controls={false} indicators={false}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={`${process.env.PUBLIC_URL}/pics/background.webp`}
                            title="Di-Tech Marine Engineering"
                            loading="lazy"
                            alt="marine engineers"
                            height="400"
                            width="600"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={`${process.env.PUBLIC_URL}/pics/work12.webp`}
                            title="Di-Tech Marine Engineering Services"
                            loading="lazy"
                            alt="marine engineering services denmark"
                            height="400"
                            width="600"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={`${process.env.PUBLIC_URL}/pics/work5.webp`}
                            title="Di-Tech Marine Engineering repair and maintenance"
                            loading="lazy"
                            alt="ship repair and maintenance services"
                            height="400"
                            width="600"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={`${process.env.PUBLIC_URL}/pics/work14.webp`}
                            title="Di-Tech Marine Engineering repair and maintenance"
                            loading="lazy"
                            alt="ship repair and maintenance services"
                            height="400"
                            width="600"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={`${process.env.PUBLIC_URL}/pics/work10.webp`}
                            title="Di-Tech Marine Engineering repair and maintenance"
                            loading="lazy"
                            alt="ship repair services"
                            height="400"
                            width="600"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={`${process.env.PUBLIC_URL}/pics/work20.webp`}
                            title="Di-Tech Marine Engineering repair and maintenance"
                            loading="lazy"
                            alt="ship maintenance company"
                            height="400"
                            width="600"
                        />
                    </Carousel.Item>
                </LazyLoadedCarousel>
            </Suspense>
        </div>
    );
};

export default Home;



