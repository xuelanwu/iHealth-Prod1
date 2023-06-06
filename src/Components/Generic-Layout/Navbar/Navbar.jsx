import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../Assets/Brand/logo transparent.png";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} loading='lazy' alt="confidential" />
          </NavLink>
        </div>

        <ul className="nav-links">
          <NavLink to="/" className="home">
            <li>Home</li>
          </NavLink>
          <NavLink onClick={()=>{document.querySelector('#UnderConst-wrapper').style.display = "flex"}} className="services">
            <li>Services</li>
          </NavLink>
          <NavLink onClick={()=>{document.querySelector('#UnderConst-wrapper').style.display = "flex"}} className="about-us">
            <li>About Us</li>
          </NavLink>
          <NavLink onClick={()=>{document.querySelector('#UnderConst-wrapper').style.display = "flex"}} className="research">
            <li>Research</li>
          </NavLink>

          <NavLink onClick={()=>{document.querySelector('#UnderConst-wrapper').style.display = "flex"}} className="signin">
            <li>Sign up or Log In</li>
            <AccountCircleOutlinedIcon
              className="circle-icon"
              sx={{ fontSize: 25, marginLeft: 0.5 }}
              sm={{ fontSize:30}}
            />
          </NavLink>

          <NavLink onClick={()=>{document.querySelector('#UnderConst-wrapper').style.display = "flex"}} className="donate">
            <li>Donate</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
