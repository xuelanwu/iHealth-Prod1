//Import Libraries/Packages
import React from 'react'

//Import Styles
import "./NFInformation.css"

//Import Local Files/Components
import NfTeamSelectNfType from './SubComponents/NfTeam-Select-Nf-Type/NfTeam-Select-Nf-Type'
import NfTeamInfo from './SubComponents/NfTeam-Info/NfTeam-Info'
import NfIHub from './SubComponents/NfIHub/NfIHub'


function NFInformation() 
{
  return (
    <>
        <main id='nfinformation-container'>

          <NfIHub />
          <NfTeamSelectNfType />
          <NfTeamInfo />

        </main>
    </>
  )
}

export default NFInformation