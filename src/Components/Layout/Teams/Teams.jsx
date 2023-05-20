import React, { useState } from 'react'
import "./Teams.css";

const Teams = () => {
  const [type, settype] = useState('NF TEAM')
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
   
    <div className="teams-container">

    
      <button onClick={(e)=>{settype('NF TEAM'),document.querySelector('#NfIHub-container').scrollIntoView({ behavior: "smooth"}); }} className={type == 'NF TEAM' ? 'teams-group-active' : 'teams-group'}>NF TEAM</button>

      <button onClick={()=>{settype('Geriatric Disease Team')}} className={type == 'Geriatric Disease Team' ? 'teams-group-active' : 'teams-group'}>Geriatric Disease Team <p>(Coming soon)</p></button>

      <button onClick={()=>{settype('Cancer Team')}} className={type == 'Cancer Team' ? 'teams-group-active' : 'teams-group'}>Cancer Team <p>(Coming soon)</p></button>
    </div>
  
  );
};

export default Teams;

  {/* {TeamsData.map((data) => (
          <div className="teams-info">
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))} */}