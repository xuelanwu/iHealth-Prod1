import { useState, useEffect } from "react";
import axios from "axios";

import { getProviders } from "src/config/urls";
import ButtonsSearchDonate from "./ButtonsSearchDonate";
import ProviderAutocomplete from "./ProviderAutocomplete";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import { FormControlLabel, Checkbox, Button } from "@mui/material";
import PinDropIcon from "@mui/icons-material/PinDrop";
import LocationIcon from "src/Assets/Icons/location-icon.svg";

import "./index.css";

const Provider = () => {
  const [cities, setCities] = useState([]);
  const [specialities, setSpecialities] = useState([]);

  /* This should move to constants folder/file in the future */
  const diseases = ["Neurofibromatosis(NF)", "Select Disease"];

  const GetLocationInfo = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (error) => console.log(error)
    );
  };

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await axios.get(`${getProviders}`);

      const { city, specialty } = res.data.fields;
      setCities(city);
      setSpecialities(specialty);
    };
    fetchProviders();
  }, []);

  return (
    <section className="provider-container">
      <div className="provider-inner-container">
        <h2 className="provider-heading">
          <PersonSearchOutlinedIcon
            sx={{
              "@media (min-width: 480px)": {
                fontSize: "4rem",
              },
              "@media (min-width: 1024px)": {
                fontSize: "2rem",
              },
            }}
          />
          Search & Find a Medical or Wellness Provider
        </h2>
        <form className="provider-form">
          <div className="provider-form-inputs">
            <div className="provider-form-field">
              <ProviderAutocomplete options={diseases} label="Disease" />
              <FormControlLabel
                control={<Checkbox />}
                label="Accepting New Patients"
                style={{ color: "#07235B" }}
                sx={{
                  "@media (max-width: 1023px)": {
                    display: "none",
                  },
                }}
              />
            </div>
            <div className="provider-form-field">
              <ProviderAutocomplete
                options={specialities}
                label="Specialties"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Treats Children"
                style={{ color: "#07235B" }}
                sx={{
                  "@media (max-width: 1023px)": {
                    display: "none",
                  },
                }}
              />
            </div>
            <div className="provider-form-field">
              <ProviderAutocomplete options={cities} label="City" />
              {/* <button onClick={GetLocationInfo} className="provider-location-btn">
              Use My Location
            </button> */}
              <Button
                variant="text"
                startIcon={<PinDropIcon style={{ marginBottom: "5px" }} />}
                style={{ color: "#07235B" }}
                sx={{
                  paddingTop: "9px",
                  "@media (max-width: 1023px)": {
                    display: "none",
                  },
                }}
                onClick={GetLocationInfo}
              >
                Use My Location
              </Button>
            </div>
          </div>
          <ButtonsSearchDonate />
        </form>
      </div>
    </section>
  );
};

export default Provider;
