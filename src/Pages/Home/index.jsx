//Import Libraries/Packages
import React from "react";

//Import Components
import NFTeams from "src/Components/Home-Page/Layout/NFTeams/NFTeams";
import Footer from "src/Components/Footer";
import Hero from "src/Components/Layout/Hero/Hero";
import OurServices from "../../Components/OurServices";
import HowItWorks from "../../Components/HowItWorks";
import PartnerWithUs from "../../Components/PartnerWithUs";

const index = () => {
  return (
    <>
      <Hero />
      <NFTeams />
      <OurServices />
      <HowItWorks />
      <PartnerWithUs />
      <Footer />
    </>
  );
};

export default index;
