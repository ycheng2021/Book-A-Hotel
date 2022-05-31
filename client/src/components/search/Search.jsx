import * as React from "react";
import TextField from "@mui/material/TextField";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./search.css";

const Search = () => {
  const [value, setValue] = React.useState([null, null]);

  return (
    <div className="search-container">
      <div className="flex">
        <TextField id="outlined-search" label="Going to" type="search" />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateRangePicker
            startText="Check-in"
            endText="Check-out"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />
        </LocalizationProvider>
        <div className="transportation-options">
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Add a flight"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Add a car"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
