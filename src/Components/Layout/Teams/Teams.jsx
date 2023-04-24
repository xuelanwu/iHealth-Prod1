import React from "react";
import "./Teams.css";
// import Image from "../../Assets/happy-doctor.jpg";

const Teams = () => {
  const TeamsData = [
    {
      title: "NF TEAM",
      text: "",
    },
    {
      title: "Geriatric Disease Team",
      text: " (Coming soon)",
    },
    {
      title: "Cancer Team",
      text: " (Coming soon)",
    },
  ];
  return (
    <div className="teams-section-wrapper">
      <div className="teams-container">
        {TeamsData.map((data) => (
          <div className="teams-info">
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
