//Import Libraries/Packages
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


//Import Styles
import "./Provider.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";


//Import Constants 
import { getProviders } from "src/config/urls"; //api url

//Import Local files/components
import SelectDisease from "./SubComponents/SelectDisease/SelectDisease";




const Provider = ({ selected, setSelected }) => 
{
  const [isActive, setIsActive] = useState(false);
  const [city, setCity] = useState([]);
  const [type, setType] = useState([]);

  const options = ["Neurofibromatosis(NF)", "Select Disease"];





  // fetch data from server(api)
  useEffect(() => 
  {
    const getSpecialty = async () => {
      const res = await axios.get(`${getProviders}`);
      setCity(res.data.fields.city);
      setType(res.data.fields.specialty);
    };
    getSpecialty();
  });




  
  return (



    <div className="frame-container">

      <div className="input-wrapper">

        <SelectDisease selectoptions={options} />
       
        <>
 
          <span className="specialty">Specialty</span>
          <select className="type">
            <option selected disabled>
              Select Specialty
            </option>
            {type.map((items) => (
              <option>{items}</option>
            ))}
          </select>
          <span className="city-header">City</span>
          <select className="city">
            <option selected disabled>
              City
            </option>
            {city.map((items) => (
              <option>{items}</option>
            ))}
          </select>

        </>
    
        <div className="search-donate">
          <div className="search-container">
            <button className="search-btn">
              {" "}
              Search{" "}
              <SearchOutlinedIcon sx={{ fontSize: 12, marginLeft: 0.7 }} />{" "}
            </button>
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
