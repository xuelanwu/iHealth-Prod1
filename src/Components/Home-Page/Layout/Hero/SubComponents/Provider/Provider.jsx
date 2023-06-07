//Import Libraries/Packages
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


//Import Styles
import "./Provider.css";


//Import Constants 
import { getProviders } from "src/config/urls"; //api url

//Import Local files/components
import SelectDisease from "./SubComponents/SelectDisease/SelectDisease";
import SelectSpecialty from "./SubComponents/SelectSpecialty/SelectSpecialty";
import SelectCity from "./SubComponents/SelectCity/SelectCity";
import ButtonsSearchDonate from "./SubComponents/ButtonsSearchDonate/ButtonsSearchDonate";




const Provider = () => 
{
  const [cityList, setCityList] = useState([]);
  const [specialityType, setSpecialityType] = useState([]);



  /* This should move to constants folder/file in the future */
  const options = ["Neurofibromatosis(NF)", "Select Disease"];
  /* This should move to constants folder/file in the future */





  // fetch data from server(api)
  useEffect(() => 
  {
    const getSpecialty = async () => {
      const res = await axios.get(`${getProviders}`);
      setCityList(res.data.fields.city);
      setSpecialityType(res.data.fields.specialty);
    };
    getSpecialty();
  },[]);


  
  return (
    <>
      <section className="frame-container">

        <div className="input-wrapper">
          <SelectDisease selectoptions={options} />
          <SelectSpecialty specialityOptions={specialityType} />
          <SelectCity cityList={cityList} />
        </div>

        <div className="buttons-wrapper">
          <ButtonsSearchDonate />
        </div>

      </section>
    </>
  );
};

export default Provider;
