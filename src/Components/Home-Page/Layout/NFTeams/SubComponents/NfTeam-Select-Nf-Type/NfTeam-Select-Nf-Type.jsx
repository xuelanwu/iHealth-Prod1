//Import Libraries/Packages
import React, { useState } from 'react'

//Import Styles
import "./NfTeam-Select-Nf-Type.css"

function NfTeamSelectNfType() 
{

  const [type, settype] = useState('NF1')

  return (
    <>
      <section id='nfteam-select-nf-type'>

        <p>Select Your Neurofibromatosis(NF) Type</p>
        <div id='nfteam-select-user-select-group'>
          {/* Depending on the functionality we can change the html elements or add state */}
          <button onClick={()=>{settype('ANY')}} className={type == 'ANY' ? 'nfteam-select-user-select-group-BUTTON-active right-arrow' : 'nfteam-select-user-select-group-BUTTON'}>ANY</button>
          <button onClick={()=>{settype('NF1')}} className={type == 'NF1' ? 'nfteam-select-user-select-group-BUTTON-active right-arrow' : 'nfteam-select-user-select-group-BUTTON'}>NF1</button>
          <button onClick={()=>{settype('NF2')}} className={type == 'NF2' ? 'nfteam-select-user-select-group-BUTTON-active right-arrow' : 'nfteam-select-user-select-group-BUTTON'}>NF2</button>
          <button onClick={()=>{settype('schwannomatosis')}} className={type == 'schwannomatosis' ? 'nfteam-select-user-select-group-BUTTON-active right-arrow' : 'nfteam-select-user-select-group-BUTTON'}>Schwannomatosis</button>
        </div>

      </section>
    </>
  )
}

export default NfTeamSelectNfType