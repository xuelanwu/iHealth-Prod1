import { useState } from "react";

import "./index.css";

const BenefitBlock = ({ benefit }) => {
  const [showDetail, setShowDetail] = useState(false);

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };
  return (
    <div className="benefit-block">
      <h3 onClick={toggleDetail} className="benefit-title">
        {`${benefit.title} >>`}
      </h3>

      <p className={`benefit-text ${showDetail ? "show" : ""}`}>
        {benefit.content}
      </p>
    </div>
  );
};
export default BenefitBlock;
