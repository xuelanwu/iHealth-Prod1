//Import Libraries/Packages
import React from 'react'


//Import Styles
import "./SelectDisease.css";


function SelectDisease({selectoptions}) 
{
  
 return (
    <>
      <section className="Select-SFProvider-wrapper">

          <p className='Select-Select-topic'>Disease</p>

          <div className='Select-Select-inputselect'>
            <select name="Diseases" className="Select-selectOptions">
                {selectoptions.map((arg,i)=>
                {
                  return(<option value={arg} key={i+arg}>{arg}</option>)
                })}
            </select>
          </div>

          <div className='Select-Select-additional-info'>
            <input type="checkbox" />
            <label className="Select-additional-info-text">Accepting new patients</label>
          </div>

        </section>
    </>
  )
}

export default SelectDisease