//Import Libraries/Packages
import React from 'react'

//Import Styles
import "./NfTeam-Info.css"

//Import Local Files
import {TeamInfo} from "../../../../../../Constants/NFTeams/NFTeam-Info.js"

function NfTeamInfo() 
{

  

  return (
    <>
      <section id='nfteam-info'>

        {
            TeamInfo.map((arg,i) =>
          {
              return (
                <div className='nfteam-info-card-wrapper' key={i+arg.image.alt}>
                  <div className='nfteam-info-card-TOP'>
                    <div><img src={arg.image.src} alt={arg.image.alt}/></div>
                    <p>{arg.imageText}</p>
                  </div>

                  <div className='nfteam-info-card-BOTTOM'>
                    <ol className='nfteam-info-list-wrapper'>
                      <li>{arg.cardText1}</li>
                      <li>{arg.cardText2}</li>
                      <li>{arg.cardText1}</li>
                    </ol>
                  </div>
                  <a href={arg.DetailsLink}>See Details</a>  
                </div>
              )
          })
        }

      </section>
    </>
  )
}

export default NfTeamInfo