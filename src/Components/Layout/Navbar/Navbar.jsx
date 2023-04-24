import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../Assets/Brand/Confidential-SN.jpg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="confidential" />
          </NavLink>
        </div>

        <ul className="nav-links">
          <NavLink to="/" className="home">
            <li>Home</li>
          </NavLink>
          <NavLink to="/services" className="services">
            <li>Services</li>
          </NavLink>
          <NavLink to="/who-we-are" className="who-we-are">
            <li>Who We Are</li>
          </NavLink>
          <NavLink to="/research" className="research">
            <li>Research</li>
          </NavLink>
          <NavLink to="/signin" className="signin">
            <li>Sign In</li>
          </NavLink>
          <NavLink to="/donate" className="donate">
            <li>Donate</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
