import React from "react";
import Footer from "src/Components/Footer";
import Hero from "src/Components/Layout/Hero/Hero";
import OurServices from "../../Components/OurServices";
import HowItWorks from "../../Components/HowItWorks";
import PartnerWithUs from "../../Components/PartnerWithUs";

const index = () => {
  return (
    <>
      <Hero />
      <OurServices />
      <HowItWorks />
      <PartnerWithUs />
      <Footer />
    </>
  );
};

export default index;
