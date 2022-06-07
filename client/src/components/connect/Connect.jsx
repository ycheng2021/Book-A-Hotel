import * as React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import "./connect.css";

const Connect = () => {
  const areaCodes = [
    {
      value: "United States of America",
      label: "USA +1",
    },
    {
      value: "Sweden",
      label: "Sweden +46",
    },
    {
      value: "Canada",
      label: "Canada +1",
    },
  ];

  const [areaCode, setAreaCode] = useState("United States of America");

  const handleChange = (event) => {
    setAreaCode(event.target.value);
  };

  return (
    <div className="connect-container">
      <div className="left-image">
        <img
          className="stadium-image"
          src="https://a.travel-assets.com/mad-service/footer/bnaBanners/BEX_ROME_iStock_72dpi.jpg"
          alt="group of people looking at a Roman stadium under the shade"
          height="280px"
        ></img>
      </div>
      <div className="right-text">
        <div className="info-div">
          <h2 className="connect-phrase">Our app takes you further</h2>
          <p className="small-text">
            When you book on the app you can save up to 25% on select hotels
            while earning double the points with every booking. With these app
            deals you'll save even more on trips, and that means you can take
            more trips, and manage it all on the go.
          </p>
          <Button className="switchapp-btn">Switch to the app</Button>
          <h6 className="text-phrase">
            Text yourself a download link for easy access
          </h6>
          <div className="phone-container">
            <TextField
              defaultValue="USA +1"
              className="areacode-select"
              id="filled-select-areacode"
              select
              label="Country code"
              value={areaCode}
              onChange={handleChange}
              variant="outlined"
            >
              {areaCodes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              className="areacode-select"
              id="outlined-search"
              label="Phone Number"
              type="search"
            />
            <Button className="getapp-btn areacode-select">Get the app</Button>
          </div>
          <p className="small-text disclaimer">
            By providing your number, you agree to receive a one-time automated
            text message with a link to get the app. Standard text message rates
            may apply.
          </p>
        </div>
        <div className="qrcode-div">
          <img
            className="qrcode"
            src="https://a.travel-assets.com/mad-service/qr-code/footer_qr_hp/1_QR_FOOTER_BNA_HP.png"
            alt="QR code for a booking deal"
          ></img>
          <p className="scan-phrase">Scan the QR code </p>
        </div>
      </div>
    </div>
  );
};

export default Connect;
