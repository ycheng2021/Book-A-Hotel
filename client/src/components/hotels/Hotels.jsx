import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket } from "@fortawesome/free-solid-svg-icons"
import "./hotels.css";

const Hotels = () => {
  const [options, setOptions] = useState("Recommended");

  const handleChange = (event) => {
    setOptions(event.target.value);
  };

  return (
    <div className="hotels-container">
      <div className="left-divider">
        <span>Map</span>
        <span>Search by property name</span>
        <div className="filters">Filters</div>
      </div>
      <div className="right-divider">
        <div className="flex">
          <div className="info">
            <p>Number of properties</p>
            <p>See how we pick recommended properties</p>
          </div>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Sort by</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={options}
              label="Options"
              onChange={handleChange}
            >
              <MenuItem value="Recommended">Recommended</MenuItem>
              <MenuItem value="Price">Price</MenuItem>
              <MenuItem value="Distance from downtown">
                Distance from downtown
              </MenuItem>
              <MenuItem value="Guest rating + our picks">
                Guest rating + our picks
              </MenuItem>
              <MenuItem value="Price + our picks">Price + our picks</MenuItem>
              <MenuItem value="Star rating">Star rating</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="signup-div">
          <FontAwesomeIcon className="ticket-icon" icon={faTicket} />
          <div className="signup-ad">
            <p>You could be seeing lower prices</p>
            <p>With member prices, you could save 10% or more right now on thousands of properties.</p>
            <a className="signup-link" hrel="noopener noreferrer" href="https://www.expedia.com/">Sign up, it's free</a>
            <a className="signin-link" hrel="noopener noreferrer" href="https://www.expedia.com/">Sign in</a>
          </div>
        </div>
        <div className="hotel-list">
          <img
            src="https://images.trvl-media.com/hotels/2000000/1550000/1542300/1542288/49b49893.jpg?impolicy=resizecrop&rw=455&ra=fit"
            alt="Arrowhead Inn"
          ></img>
          <p>Name</p>
          <p>Distance from</p>
          <p>Amenities</p>

          <p>Rating/Reviews</p>
          <p>Rooms left</p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
