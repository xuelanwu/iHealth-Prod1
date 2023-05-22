//Import Libraries/Packages
import React from "react";

//Import Components
import Hero from "src/Components/Layout/Hero/Hero";
import OurServices from "../../Components/OurServices";
import HowItWorks from "../../Components/HowItWorks";
import PartnerWithUs from "../../Components/PartnerWithUs";
import NFInformation from "src/Components/Home-Page/Layout/NfInformation/NFInformation";
import NFCommunity from "src/Components/Home-Page/Layout/NfCommunity/NFCommunity";

const index = () => {
  return (
    <>
      <Hero />
      <NFCommunity />
      <OurServices />
      <HowItWorks />
      <PartnerWithUs />
      <NFInformation />
    </>
  );
};

export default index;
