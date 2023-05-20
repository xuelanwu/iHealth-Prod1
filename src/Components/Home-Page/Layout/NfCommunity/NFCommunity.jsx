//Import Libraries/Packages
import React from 'react'

//Import Styles
import "./NFTeams.css"

//Import Local Files/Components
import NfCommunityJoin from './SubComponents/NfCommunity-Join/NfCommunity-Join'



function NFCommunity() 
{
  return (
    <>
        <main id='nfcommunity-container'>

          <section id='nfcommunity-header'>
            <p>Neurofibromatosis (NF) Team</p>
            <p>Stronger Together</p>
          </section>
         
          <NfCommunityJoin />

        </main>
    </>
  )
}

export default NFCommunity