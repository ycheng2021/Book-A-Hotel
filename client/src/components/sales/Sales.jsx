import * as React from "react";
import Button from "@mui/material/Button";
import "./sales.css";

const Sales = () => {
  return (
    <div className="sales-container">
      <div className="left-center">
        <div className="advertisement">
          <h1 className="ad-phrase">Go someplace new this summer</h1>
          <span className="small-text">
            Take yourself away to someplace extraordinary to celebrate the best
            of what summer has to offer.
          </span>
          <Button className="dive-btn">Dive in</Button>
        </div>
      </div>
    </div>
  );
};

export default Sales;
