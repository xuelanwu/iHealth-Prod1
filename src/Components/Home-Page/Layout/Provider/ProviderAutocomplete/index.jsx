import { Autocomplete, TextField } from "@mui/material";
import ArrowDropDownCircleRoundedIcon from "@mui/icons-material/ArrowDropDownCircleRounded";

const ProviderAutocomplete = ({ options, label }) => {
  return (
    <Autocomplete
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
