import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact"
import Careers from "./pages/Careers"
import Blog from "./pages/Blog"
import CaseStudies from "./pages/CaseStudies"
import GuidesAndReport from './pages/GuidesAndReport';
import AbisentaryAcademy from './pages/AbisentaryAcademy';
import Financial from "./pages/Financial"
import SME from "./pages/SME"
import Healthcare from "./pages/Healthcare"
import Government from "./pages/Government"
import SampleReport from './pages/SampleReport';
import TechAdvisor from './pages/TechAdvisor';
import SecurityAssess from './pages/SecurityAssess';
import ComplianceReady from './pages/ComplianceReady';
import ManagedDectec from './pages/ManagedDectec';
import FractionalV from './pages/FractionalV';
import AbiScan from './pages/AbiScan';
import ChaseFraud from './pages/ChaseFraud';
import AbiQr from "./pages/AbiQr"
import AbiMirror from "./pages/AbiMirror"
import AbiComplyStarter from "./pages/AbiComplyStarter"
import AbiMail from './pages/AbiMail';


function App() {
 

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/career" element={<Careers />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/casestudy" element={<CaseStudies />} />
      <Route path="/guides" element={<GuidesAndReport />} />
      <Route path="/academy" element={<AbisentaryAcademy />} />
      <Route path="/financial" element={<Financial />} />
      <Route path="/smes" element={<SME />} />
      <Route path="/health" element={<Healthcare />} />
      <Route path="/govern" element={<Government />} />
      <Route path="/resources/samplereport" element={<SampleReport />} />
      <Route path="/techadvisor" element={<TechAdvisor />} />
      <Route path="/securityassess" element={<SecurityAssess />} />
      <Route path="/compliance" element={<ComplianceReady />} />
      <Route path="/detection" element={<ManagedDectec />} />
      <Route path="/fractional" element={<FractionalV />} />
      <Route path="/abiscan" element={<AbiScan />} />
      <Route path="/chasefraud" element={<ChaseFraud />} />
      <Route path="/abiqr" element={<AbiQr />} />
      <Route path="/abimirror" element={<AbiMirror />} />
      <Route path="/abicomply" element={<AbiComplyStarter />} />
      <Route path="/abimail" element={<AbiMail />} />
    </Routes>
  );
}

export default App
