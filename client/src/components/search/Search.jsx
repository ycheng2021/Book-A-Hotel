import * as React from "react";
import TextField from "@mui/material/TextField";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputAdornment from "@mui/material/InputAdornment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Card from "@mui/material/Card";
import { useState } from "react";
import "./search.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Search() {
  const [activity, setActivity] = useState(0);

  const [date, setDate] = useState([null, null]);

  const handleChange = (event, newActivity) => {
    setActivity(newActivity);
  };

  const [openTravel, setOpenTravel] = useState(false);

  const [options, setOptions] = useState({
    adult: 2,
    children: 0,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="activity-container">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={activity}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Stays" {...a11yProps(0)} />
            <Tab label="Flights" {...a11yProps(1)} />
            <Tab label="Cars" {...a11yProps(2)} />
            <Tab label="Packages" {...a11yProps(3)} />
            <Tab label="Things to do" {...a11yProps(4)} />
            <Tab label="Cruises" {...a11yProps(5)} />
          </Tabs>
        </Box>
        <TabPanel component="div" value={activity} index={0}>
          <div className="flexSearch">
            <div className="size-choice">
              <span
                className="travel-btn"
                onClick={() => setOpenTravel(!openTravel)}
              >
                1 room, {options.adult} travelers
                <FontAwesomeIcon className="downCaret" icon={faAngleDown} />
              </span>
              {openTravel && (
                <Card className="setTravelSize" sx={{ minWidth: 350 }}>
                  <h4 className="travelers">Travelers</h4>
                  <h5 className="room">Room 1</h5>
                  <div className="space-between">
                    <h5>Adults</h5>
                    <div className="traveler-counter">
                      <button
                        disabled={options.adult <= 1}
                        className="counterBtn"
                        onClick={() => handleOption("adult", "d")}
                      >
                        -
                      </button>
                      <span className="guestNum">{options.adult}</span>
                      <button
                        className="counterBtn"
                        onClick={() => handleOption("adult", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="space-between">
                    <div className="left-column">
                      <h5>
                        Children <br></br>
                        <span className="tiny-text">Ages 0 - 17</span>{" "}
                      </h5>
                    </div>
                    <div className="traveler-counter">
                      <button
                        disabled={options.children <= 0}
                        className="counterBtn"
                        onClick={() => handleOption("children", "d")}
                      >
                        -
                      </button>
                      <span className="guestNum">{options.children}</span>
                      <button
                        className="counterBtn"
                        onClick={() => handleOption("children", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex-end">
                    <Button className="addRoomBtn"> Add another room</Button>
                  </div>
                  <div className="center">
                    <Button
                      className="doneBtn"
                      onClick={() => setOpenTravel(!openTravel)}
                    >
                      Done
                    </Button>
                  </div>
                </Card>
              )}
            </div>
            <div>
              <div className="searchInput">
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
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
                    <Grid item xs={12} md={6}>
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
                              <Box sx={{ mx: 2 }}> to </Box>
                              <TextField {...endProps} />
                            </React.Fragment>
                          )}
                        />
                      </LocalizationProvider>
                    </Grid>
                  </Grid>
                </Box>
              </div>
              <div className="transportation-options">
                <FormControlLabel
                  control={<Checkbox defaultunChecked />}
                  label="Add a flight"
                />
                <FormControlLabel
                  control={<Checkbox defaultunChecked />}
                  label="Add a car"
                />
              </div>
              <div className="search-center">
                <Button className="search-btn" variant="contained">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={activity} index={1}>
          Flights
        </TabPanel>
        <TabPanel value={activity} index={2}>
          Cars
        </TabPanel>
        <TabPanel value={activity} index={3}>
          Packages
        </TabPanel>
        <TabPanel value={activity} index={4}>
          Things to do
        </TabPanel>
        <TabPanel value={activity} index={5}>
          Cruises
        </TabPanel>
      </Box>
    </div>
  );
}
