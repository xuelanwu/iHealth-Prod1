import { useState } from "react";
import "./index.css";

const InformationTabs = () => {
  const [type, setType] = useState("NF1");
  const NFTypes = ["NF1", "NF2", "Schwannomatosis (NF3)", "ANY"];
  return (
    <div className="information-tab-container">
      <h2 className="information-tab-heading">
        Select Your Neurofibromatosis(NF) Type:
      </h2>
      <div className="information-tabs">
        {NFTypes.map((typeEl) => (
          <button
            key={typeEl}
            onClick={() => setType(typeEl)}
            className={`${
              typeEl === type ? "information-tab focus" : "information-tab"
            }`}
          >
            {typeEl}
          </button>
        ))}
      </div>
    </div>
  );
};

export default InformationTabs;
