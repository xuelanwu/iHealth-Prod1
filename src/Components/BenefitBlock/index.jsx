import { useState } from "react";
import { ArrowRight, ArrowDropDown } from "@mui/icons-material";

import "./index.css";

const BenefitBlock = ({ benefit }) => {
  const [showDetail, setShowDetail] = useState(false);

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };
  return (
    <div className="benefit-block">
      <div className="benefit-title-box">
        <h3 onClick={toggleDetail} className="benefit-title">
          {benefit.title}
          <span></span>
        </h3>
        {showDetail ? <ArrowDropDown /> : <ArrowRight />}
      </div>

      <p className={`benefit-text ${showDetail ? "show" : ""}`}>
        {benefit.content}
      </p>
    </div>
  );
};
export default BenefitBlock;
