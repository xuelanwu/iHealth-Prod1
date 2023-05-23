//Import Libraries/Packages
import React from 'react'

//Import Styles
import "./NFTeams.css"

//Import Local Files/Components
import NfTeamHeader from './SubComponents/NfTeam-Header/NfTeam-Header'
import NfTeamJoin from './SubComponents/NfTeam-Join/NfTeam-Join'
import NfTeamSelectNfType from './SubComponents/NfTeam-Select-Nf-Type/NfTeam-Select-Nf-Type'
import NfTeamInfo from './SubComponents/NfTeam-Info/NfTeam-Info'


function NFTeams() 
{
  return (
    <>
        <main id='nfteam-container'>

          <NfTeamHeader />
          <NfTeamJoin />
          <NfTeamSelectNfType />
          <NfTeamInfo />

        </main>
    </>
  )
}

export default NFTeams