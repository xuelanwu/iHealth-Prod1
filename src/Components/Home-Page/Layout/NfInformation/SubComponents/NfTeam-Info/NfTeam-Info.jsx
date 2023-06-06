//Import Libraries/Packages
import React from "react";

//Import Styles
import "./NfTeam-Info.css";

//Import Local Files
import { TeamInfo } from "../../../../../../Constants/NFTeams/NFTeam-Info.js";

function NfTeamInfo() {
  return (
    <>
      <section id="nfteam-info">
        {TeamInfo.map((arg, i) => {
          return (
            <div className="nfteam-info-card-wrapper" key={i + arg.image.alt}>
              <div className="nfteam-info-card-TOP">
                <div>
                  <img src={arg.image.src} loading='lazy' alt={arg.image.alt} />
                </div>
                <p>{arg.imageText}</p>
              </div>

              <div className="nfteam-info-card-BOTTOM">
                <ol className="nfteam-info-list-wrapper">
                  <li>{arg.cardText1}</li>
                  <li>{arg.cardText2}</li>
                  <li>{arg.cardText3}</li>
                </ol>
              </div>

              <div className={`nfteam-info-card-Details nfteam-info-card-Details${i}`}>
                <a onClick={() => {document.querySelector("#UnderConst-wrapper").style.display ="flex";}}>
                {arg.Details.text}
                </a>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default NfTeamInfo;
