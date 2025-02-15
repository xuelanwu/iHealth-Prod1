import { Autocomplete, TextField } from "@mui/material";
import ArrowDropDownCircleRoundedIcon from "@mui/icons-material/ArrowDropDownCircleRounded";
import "./index.css";
const ProviderAutocomplete = ({ options, label, value, onInputChange }) => {
  return (
    <Autocomplete
      className={`provider-autocomplete ${label}`}
      value={value}
      onChange={(event, newValue) => {
        onInputChange(newValue);
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "0.5rem",
        },
      }}
      disablePortal
      options={options}
      renderInput={(params) => <TextField {...params} label={label} />}
      popupIcon={
        <ArrowDropDownCircleRoundedIcon style={{ color: "#07235B" }} />
      }
    />
  );
};

export default ProviderAutocomplete;
