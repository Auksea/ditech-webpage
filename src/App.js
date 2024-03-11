import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import PreDockingServices from './components/PreDockingServices';
import CylinderMeasurements from './components/CylinderMeasurements';
import AlphaSystem from './components/AlphaSystem';
import DockingServices from './components/DockingServices';
import EngineeringServices from './components/EngineeringServices';
import PerformanceMeasurement from './components/PerformanceMeasurement';
import PressureMeasure from './components/PressureMeasure';
import OnBoardOverhaul from './components/OnBoardOverhaul';
import HealthCheck from './components/HealthCheck';
import LargeRepair from './components/LargeRepair';
import AdjustmentValves from './components/AdjustmentValves';
import ReconditionValves from './components/ReconditionValves';
import OverhaulExhaustt from './components/OverhaulExhaust';
import OverhaulFuel from './components/OverhaulFuel';
import GeneralMaintenance from './components/GeneralMaintenance';
import PumpOverhaul from './components/PumpOvehaul';
import SupplyEngine from './components/SupplyEngine';
import MEengines from './components/MEengines';
import ShaPoLi from './components/ShaPoli';
import DeRating from './components/DeRating';
import TroubleShooting from './components/TroubleShooting';
import MEtraining from './components/MEtraining';
import FuelGasSupply from './components/FuelGasSupply';
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
                    <Route path="/alpha-system" element={<AlphaSystem />} />
                    <Route path="/docking-services" element={<DockingServices />} />
                    <Route path="/engineering-services" element={<EngineeringServices />} />
                    <Route path="/performance-measurement" element={<PerformanceMeasurement />} />
                    <Route path="/pressure-measure" element={<PressureMeasure />} />
                    <Route path="/onboard-overhaul" element={<OnBoardOverhaul />} />
                    <Route path="/health-check" element={<HealthCheck />} />
                    <Route path="/large-repair" element={<LargeRepair />} />
                    <Route path="/adjustment-valves" element={<AdjustmentValves />} />
                    <Route path="/recondition-valves" element={<ReconditionValves />} />
                    <Route path="/overhoal-exhaust" element={<OverhaulExhaustt />} />
                    <Route path="/overhoal-fuel-boosters" element={<OverhaulFuel />} />
                    <Route path="/general-maintenance" element={<GeneralMaintenance />} />
                    <Route path="/pump-overhaul" element={<PumpOverhaul />} />
                    <Route path="/supply-engine" element={<SupplyEngine />} />
                    <Route path="/ME-MC-engines" element={<MEengines />} />
                    <Route path="/ShaPoli" element={<ShaPoLi />} />
                    <Route path="/de-rating" element={<DeRating />} />
                    <Route path="/trouble-shooting" element={<TroubleShooting />} />
                    <Route path="/fuel-gas-supply" element={<FuelGasSupply />} />
                    <Route path="/ME-training" element={<MEtraining />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

