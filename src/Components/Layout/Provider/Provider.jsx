import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import "./Provider.css";

const Provider = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);

  const options = [
  
    "Neurofibromatosis(NF)", "Select Disease"];
  const ProviderData = [
    {
      title: "Speciality",
      text: "Select Speciality",
      icon: <ExpandMoreIcon sx={{ fontSize: 18, width: 20 }} />,
    },
    {
      title: "Age ",
      text: "Select Age",
      icon: <ExpandMoreIcon sx={{ fontSize: 16, width: 20 }} />,
    },
    {
      title: "Insurance",
      text: "Select Insurance",
      icon: <ExpandMoreIcon sx={{ fontSize: 16, width: 20 }} />,
    },
   
  ];
  return (
    
    <div className="frame-container">
      
      <div className="input-wrapper">
      <div className="text-disease">
      <small>Disease</small>
        <div className="dropdown">
          <span className="dropdown-text" onClick={(e) => setIsActive(!isActive)}>
            {selected} <ExpandMoreIcon sx={{ fontSize: 16, width:20 }} />
          </span>
          {isActive && (
            <div className="dropdown-content">
              {options.map((option) => (
                <div
                  onClick={(e) => {
                    setSelected(option);
                    setIsActive(false);
                  }} 
                  className="dropdown-item"
                >
                  {option }
                </div>
              ))}
               
            </div>
          )}
        </div>
        </div>
        

        {ProviderData.map((data) => (
          <>        
            <div className="disease">
            <span className="data-text">{data.title} </span>
             <span className="data-title">
             {data.text} {data.icon}
             </span>
             
            </div>
        
          </>
        ))}
         <div className="zip-code">
          <div className="small">
          <small>Zip code</small>
          </div>
          
          <input type="text" placeholder="Enter zipcode" />
        </div>
       
        <div className="search-donate">
          <div className="search-container">
            <button className="search-btn" > Search <SearchOutlinedIcon sx={{fontSize:12, marginLeft:0.7}}/> </button> 
            
          </div>
          <div className="frame-donate">
            <Link to="/donate" className="donate-now">
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provider;