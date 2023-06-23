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
      <div className="footer-top">
        <div className="footer-top-left">
          <div className="footer-address-block">
            <h3 className="footer-address-company">
              iHealth and Wellness Foundation, Inc.
            </h3>
            <p className="footer-address">
              115 Broadway St. Fl 5,<span>New York,</span>
              <span>NY 10006, USA</span>
            </p>
          </div>
          <div className="footer-contact-block">
            <h3 className="footer-contact-title">STAY IMFORMED:</h3>
            <div className="footer-contact-subscribe-block">
              <input
                className="footer-stay-informed-input"
                placeholder="Your email here"
              />
              <a
                onClick={() => {
                  document.querySelector("#UnderConst-wrapper").style.display =
                    "flex";
                }}
              >
                <button className="footer-stay-informed-btn">subscribe</button>
              </a>
            </div>
          </div>
          <div className="footer-social-media-block">
            <h3 className="footer-social-media-title">SOCIAL:</h3>
            <div className="footer-social-media-icon-block">
              {SocialMedia.map((ele, idx) => {
                return (
                  <a
                    className="footer-social-media-icon"
                    href={ele.url}
                    onClick={() => {
                      document.querySelector(
                        "#UnderConst-wrapper"
                      ).style.display = "flex";
                    }}
                    key={`social-icon-${idx}`}
                  >
                    <img src={ele.icon} loading='lazy' alt="Social Media Icon" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="footer-top-right">
          {FooterLink.map((ele, idx) => (
            <FooterLinkCard linkCard={ele} key={`footer-link-${idx}`} />
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
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
                "@media (max-width: 768px)": {
                  minWidth: "100px", // Adjust as needed
                },
                "@media (max-width: 576px)": {
                  minWidth: "80px",
                  fontSize: "0.8rem",
                },
              }}
            >
              <MenuItem
                value="en"
                sx={{
                  "@media (max-width: 576px)": {
                    minWidth: "80px",
                    fontSize: "0.8rem",
                  },
                }}
              >
                English
              </MenuItem>
              <MenuItem
                value="cn"
                sx={{
                  "@media (max-width: 576px)": {
                    minWidth: "80px",
                    fontSize: "0.8rem",
                  },
                }}
              >
                Chinese
              </MenuItem>
              <MenuItem
                value="fr"
                sx={{
                  "@media (max-width: 576px)": {
                    minWidth: "80px",
                    fontSize: "0.8rem",
                  },
                }}
              >
                Français
              </MenuItem>
              <MenuItem
                value="es"
                sx={{
                  "@media (max-width: 576px)": {
                    minWidth: "80px",
                    fontSize: "0.8rem",
                  },
                }}
              >
                Español
              </MenuItem>
              <MenuItem
                value="de"
                sx={{
                  "@media (max-width: 576px)": {
                    minWidth: "80px",
                    fontSize: "0.8rem",
                  },
                }}
              >
                Deutsch
              </MenuItem>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
