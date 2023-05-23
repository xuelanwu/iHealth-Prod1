import React, { useState } from "react";

import FooterLinkCard from "./FooterLinkCard";

import { Select, MenuItem } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import SocialMedia from "src/Constants/SocialMedia.js";
import FooterLink from "src/Constants/FooterLink.js";

import "./index.css";

const Footer = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
  return (
    <div className="footer-container">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-top-left">
            <div className="footer-address-block">
              <h3 className="footer-address-company">
                iHealth and Wellness Foundation, Inc.
              </h3>
              <p className="footer-address">
                115 Broadway St. Fl 5, New York, NY 10006, USA
              </p>
            </div>
            <div className="footer-contact-block">
              <h3 className="footer-contact-title">STAY IMFORMED:</h3>
              <div className="footer-contact-subscribe-block">
                <input placeholder="Your email here" />
                <button className="stay-informed-bttn">subscribe</button>
              </div>
            </div>
            <div className="footer-social-media-block">
              <h3 className="footer-social-media-title">SOCIAL:</h3>
              <div className="footer-social-media-icon-block">
                {SocialMedia.map((ele) => {
                  const Icon = ele.icon;
                  return (
                    <a href={ele.url}>
                      <Icon style={{ color: "3D445C", fontSize: "2rem" }} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="footer-top-right">
            {FooterLink.map((ele) => (
              <FooterLinkCard linkCard={ele} />
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-terms-right-block">
          <h5 className="footer-terms-right-content">
            @2023 iHealth and Wellness Foundation, Inc. All rights reserved
          </h5>
        </div>
        <div className="footer-language-block">
          <Select
            value={selectedLanguage}
            onChange={handleChange}
            sx={{
              color: "white",
              border: 0,
              outline: 0,
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(228, 219, 233, 0)",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(228, 219, 233, 00)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(228, 219, 233, 0)",
              },
              "& .MuiSelect-icon": {
                color: "white",
              },
            }}
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="cn">Chinese</MenuItem>
            <MenuItem value="fr">Français</MenuItem>
            <MenuItem value="es">Español</MenuItem>
            <MenuItem value="de">Deutsch</MenuItem>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Footer;
