//Import Libraries/Packages
import React from 'react'

//Import Styles
import "./NfCommunity-Join.css"




function NfCommunityJoin() 
{
  return (
    <>
        <section id='nfcommunity-join-container'>

          <div id='nfcommunity-join-video'>
            <div>
              <video autoPlay muted loop>
                <source src='https://v4.cdnpk.net/videvo_files/video/free/video0455/large_watermarked/_import_609115c00e5a15.53371416_FPpreview.mp4' type='video/mp4' />
              </video>
            </div>
          </div>
          
          <div id='nfcommunity-join-button-join'>
            <div id='nfcommunity-join-button-container'>
              <p>Join NF Community</p>
              <p>Connect with other people, Share your story Join<br/> the discussion today</p>
              <button>Join</button>
            </div>
          </div>

        </section>
    </>
  )
}

export default NfCommunityJoin