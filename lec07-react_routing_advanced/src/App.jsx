import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Students from "./pages/Students";
import StudentDetails from "./StudentDetails";

function App() {
  return (
    <>
      <nav style={{ padding: "20px" }}>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navLink active" : "navLink"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? "navLink active" : "navLink"
          } to="/about">
          About
        </NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? "navLink active" : "navLink"
          } to="/services">
          Services
        </NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? "navLink active" : "navLink"
          } to="/students">
          Students
        </NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? "navLink active" : "navLink"
          } to="/contact">
          Contact
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/students" element={<Students />} />

        {/* Dynamic Routing */}
        <Route path="/students/:id" element={<StudentDetails />} />

        {/* Not Found */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
