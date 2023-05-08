import React from "react";
import Footer from "src/Components/Footer";
import Hero from "src/Components/Layout/Hero/Hero";
import HowItWorks from "../../Components/HowItWorks";
import PartnerWithUs from "../../Components/PartnerWithUs";

const index = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <PartnerWithUs />
      <Footer />
    </>
  );
};

export default index;
