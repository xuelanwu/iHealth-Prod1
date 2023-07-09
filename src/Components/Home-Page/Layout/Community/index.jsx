import { useState } from "react";

import "./index.css";

const Community = () => {
  const [team, setTeam] = useState("NF TEAM");

  return (
    <section className="community-container">
      <h2 className="community-heading">Join Your Community</h2>
      <p className="community-description">
        As a community member, you'll come together with others living with your
        condition to support each other, learn from each other, inspire each
        other, to feel a sense of fellowship, safety and belonging together.
      </p>
      <div className="community-teams">
        <button
          onClick={() => {
            setTeam("NF TEAM");
            document
              .querySelector(".information-container")
              .scrollIntoView({ behavior: "smooth" });
            console.log(document.querySelector(".information-container"));
          }}
          className={
            team === "NF TEAM"
              ? "community-team-btn focus"
              : "community-team-btn"
          }
        >
          NF TEAM
        </button>
        <button
          onClick={() => {
            setTeam("Geriatric Disease Team");
            document.querySelector("#UnderConst-wrapper").style.display =
              "flex";
          }}
          className={
            team === "Geriatric Disease Team"
              ? "community-team-btn focus"
              : "community-team-btn"
          }
        >
          Geriatric Disease Team <p className="coming-soon-p">(Coming soon)</p>
        </button>
        <button
          onClick={() => {
            setTeam("Cancer Team");
            document.querySelector("#UnderConst-wrapper").style.display =
              "flex";
          }}
          className={
            team === "Cancer Team"
              ? "community-team-btn focus"
              : "community-team-btn"
          }
        >
          Cancer Team <p className="coming-soon-p">(Coming soon)</p>
        </button>
      </div>
    </section>
  );
};

export default Community;
