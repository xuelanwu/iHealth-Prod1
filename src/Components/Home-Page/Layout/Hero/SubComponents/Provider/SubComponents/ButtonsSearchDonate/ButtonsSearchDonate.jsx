//Import Libraries/Packages
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


//Import Styles
import "./ButtonsSearchDonate.css";



function ButtonsSearchDonate() 
{
  return (
    <>
        
        <div className="search-donate">
            <div className="search-container">
                <button onClick={()=>{document.querySelector('#UnderConst-wrapper').style.display = "flex"}} className="search-btn">Search</button>
            </div>
            <div className="frame-donate">
                <Link onClick={()=>{document.querySelector('#UnderConst-wrapper').style.display = "flex"}} className="donate-now">Donate Now</Link>
            </div>
        </div>
      
    
    </>
  )
}

export default ButtonsSearchDonate