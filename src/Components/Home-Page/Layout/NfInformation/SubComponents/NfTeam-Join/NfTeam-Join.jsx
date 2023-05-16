//Import Libraries/Packages
import React from 'react'

//Import Styles
import "./NfTeam-Join.css"




function NfTeamJoin() 
{
  return (
    <>
        <section id='nfteam-join-container'>

          <div id='nfteam-join-video'>
            <div>
              <video width="475.48px" height="519.83px" autoPlay muted loop>
                <source src='https://v4.cdnpk.net/videvo_files/video/free/video0455/large_watermarked/_import_609115c00e5a15.53371416_FPpreview.mp4' type='video/mp4' />
              </video>
            </div>
            <div>
              <img /> {/* Design Team will provide background image */}
            </div>
          </div>
          
          <div id='nfteam-join-button-join'>
            <p>Neurofibromatosis (NF) Community</p>
            <p>Join NF Community</p>
            <button>Join</button>
            <p>Connect with other people, Share your story Join<br/> the discussion today</p>
          </div>

        </section>
    </>
  )
}

export default NfTeamJoin