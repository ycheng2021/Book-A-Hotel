import * as React from "react";
import TextField from "@mui/material/TextField";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./header.css";

const Header = () => {
  const [date, setDate] = useState([null, null]);

  return (
    <div className="list-searchbar">
      <div className="searchInput">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOnIcon />
                    </InputAdornment>
                  ),
                }}
                id="outlined-search"
                placeholder="Going to"
                type="search"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateRangePicker
                  startText="Check-in"
                  endText="Check-out"
                  style={{ width: "100%" }}
                  value={date}
                  onChange={(newDate) => {
                    setDate(newDate);
                  }}
                  renderInput={(startProps, endProps) => (
                    <React.Fragment>
                      <TextField {...startProps} />
                      <Box sx={{ mx: 1 }}></Box>
                      <TextField {...endProps} />
                    </React.Fragment>
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} md={2}>
              <button className="traveler-btn">
                <FontAwesomeIcon className="user-icon" icon={faUser}/>
                <div className="flex-column">
                  <span>Travelers </span>
                  <span style={{ fontSize: "16px"}}>1 room, 2 travelers</span>
                </div>
              </button>
            </Grid>
            <Grid item xs={12} md={2}>
              <button className="search-btn">Search</button>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Header;
