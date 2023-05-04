import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../Assets/Brand/Confidential-logo.png";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./Navbar.css";
import { red } from "@mui/material/colors";

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
          <NavLink to="/about-us" className="about-us">
            <li>About Us</li>
          </NavLink>
          <NavLink to="/research" className="research">
            <li>Research</li>
          </NavLink>

          <NavLink to="/sign-in" className="signin">
            <li>Sign up or Log In</li>
            <AccountCircleOutlinedIcon
              className="circle-icon"
              sx={{ fontSize: 25, marginLeft: 0.5 }}
            />
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
