import ConstructionImg from "../../Assets/Images/under-construction.png";
import { Link } from "react-router-dom";

import "./index.css";

const Other = () => {
  return (
    <>
      <div className="construction-container">
        <div className="construction-inner">
          <img src={ConstructionImg} className="construction-img"></img>
          <Link to="/" className="construction-button ">
            Close
          </Link>
        </div>
      </div>
    </>
  );
};

export default Other;
