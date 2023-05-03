import React, { useState, useEffect, useRef } from "react";

import PartnerWithUsButton from "src/Components/PartnerWithUsButton";
import PartnerWithUsTextTitle from "src/Components/PartnerWithUsTextTitle";

import {
  PartnerWithHealthSystemTitle,
  PartnerWithProviderTitle,
} from "../../../Constants/PartnerWithUs";
import partnerBabyImg from "../../../Assets/Images/partner-baby.jpg";
import partnerXRayImg from "../../../Assets/Images/partner-x-ray.jpg";
import partnerHeartImg from "../../../Assets/Images/partner-heart.jpg";
import partnerMassageImg from "../../../Assets/Images/partner-massage.jpg";
import partnerElectronicHealthRecordImg from "../../../Assets/Images/partner-electronic-health-record.jpg";
import partnerSmileImg from "../../../Assets/Images/partner-smile.jpg";

import "./index.css";

const PartnerWithUs = () => {
  const [slideInLeft, setSlideInLeft] = useState(false);
  const [slideInRight, setSlideInRight] = useState(false);
  const slideInLeftRef = useRef(null);
  const slideInRightRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const slideInLeftDiv = slideInLeftRef.current;
      const slideInRightDiv = slideInRightRef.current;
      if (slideInLeftDiv && slideInRightDiv) {
        const rectLeft = slideInLeftDiv.getBoundingClientRect();
        const rectRight = slideInRightDiv.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        if (rectLeft.top >= 0 && rectLeft.bottom <= windowHeight) {
          setSlideInLeft(true);
        } else setSlideInLeft(false);
        if (rectRight.top >= 0 && rectRight.bottom <= windowHeight) {
          setSlideInRight(true);
        } else setSlideInRight(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="partner-with-us-container">
      <div className="partner-with-us-title-block">
        <h1 className="partner-with-us-title">
          Revolutionize Your Patient Care
        </h1>
        <h2 className="partner-with-us-subtitle">
          Discover Our Innovative Solutions for Medical and Wellness Practices,
          Providers, and Health Systems
        </h2>
      </div>

      <div className="partner-with-us-inner" ref={slideInLeftRef}>
        <div
          className={`partner-with-us-inner-text-left ${
            slideInLeft ? "slide-in" : ""
          }`}
        >
          <PartnerWithUsTextTitle
            title={PartnerWithProviderTitle.title}
            subtitle={PartnerWithProviderTitle.subtitle}
          />
          <p className="partner-with-us-text-blue">
            As a medical/ wellness provider you have the opportunity to pool
            from our resource of patients who have gone through our system.
          </p>
          <div className="partner-with-us-text-with-checkmark-box">
            <p className="partner-with-us-text-with-checkmark">
              &#10004; Reach patients in your area looking for a new health
              provider
            </p>
            <p className="partner-with-us-text-with-checkmark">
              &#10004; Strengthen your online reputation with verified reviews
            </p>
            <p className="partner-with-us-text-with-checkmark">
              &#10004; Fill last-minute openings in your schedule.
            </p>
          </div>
          <PartnerWithUsButton />
        </div>
        <div className="partner-with-us-inner-img">
          <img
            className="partner-with-us-inner-img-solo"
            src={partnerBabyImg}
          ></img>
          <div className="partner-with-us-img-stack">
            <img src={partnerMassageImg}></img>
            <img src={partnerSmileImg}></img>
          </div>
        </div>
      </div>

      <div className="partner-with-us-inner" ref={slideInRightRef}>
        <div className="partner-with-us-inner-img">
          <div className="partner-with-us-img-stack">
            <img src={partnerElectronicHealthRecordImg}></img>
            <img src={partnerXRayImg}></img>
          </div>
          <img
            className="partner-with-us-inner-img-solo"
            src={partnerHeartImg}
          ></img>
        </div>
        <div
          className={`partner-with-us-inner-text-right ${
            slideInRight ? "slide-in" : ""
          }`}
        >
          <PartnerWithUsTextTitle
            title={PartnerWithHealthSystemTitle.title}
            subtitle={PartnerWithHealthSystemTitle.subtitle}
          />
          <p className="partner-with-us-text-darkblue">
            If you are interested in partnering with us, please contact us to
            discuss potential collaboration opportunities. We look forward to
            hearing from you soon.
          </p>

          <p className="partner-with-us-text-darkblue">
            We are committed to working with health systems in a collaborative
            and transparent manner to achieve our shared goals. We believe that
            by working together, we can create a healthcare system that is more
            efficient, effective, and patient-centered.
          </p>
          <PartnerWithUsButton />
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUs;
