import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import PreDockingServices from './components/PreDockingServices';
import CylinderMeasurements from './components/CylinderMeasurements';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/pre-docking" element={<PreDockingServices />} />
                    <Route path="/cylinder-measurement" element={<CylinderMeasurements />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

