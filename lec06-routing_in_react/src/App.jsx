import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
function App() {
  return (
    <>

    <nav style={{padding: "20px"}}>
      <Link className="navLink" to="/about">About</Link>
      <Link className="navLink" to="/services">Services</Link>
      <Link className="navLink" to="/contact">Contact</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>

    </>
  )
}

export default App