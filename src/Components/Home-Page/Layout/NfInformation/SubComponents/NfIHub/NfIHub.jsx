//Import Libraries/Packages
import React from 'react'

//Import Styles
import "./NfIHub.css"

//import local assets/files
import ePic from "../../../../../../Assets/Images/Rectangle39492.png"


function NfIHub() 
{
  return (
    <>
        <section id='NfIHub-container'>

          <div id='NfIHub-hubInfo'>
            <div id='NfIHub-hubInfo-frame'>
              <p>Information Hub</p>
            </div>

            <div id='NfIHub-pic'>
              <img src={ePic} loading='lazy' alt='human head with visible nerves' />
            </div>
          </div>
          

        </section>
    </>
  )
}

export default NfIHub