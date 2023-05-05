import Services from "src/Constants/OurServices";
import OurServicesCard from "./OurServicesCard";

import "./index.css";

const OurServices = () => {
  console.log(Services);
  return (
    <div className="home-page-our-services-container">
      <div className="home-page-our-services-title-block">
        <h2>Our Services</h2>
      </div>
      <div className="home-page-our-services-inner">
        {Services.map((service) => (
          <OurServicesCard service={service} />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
