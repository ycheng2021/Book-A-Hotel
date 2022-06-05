import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faDollar } from "@fortawesome/free-solid-svg-icons";

import "./options.css";

const Options = () => {
  return (
    <div className="option-container">
      <h1 className="options-title">Here to help keep you on the move</h1>
      <div className="options-horizontal">
        <div className="options-btn">
          <div className="space-between">
            <h5 className="each-option">Change or cancel a trip</h5>
            <FontAwesomeIcon icon={faPen} />
          </div>
          <span className="small-text">
            Make updates to your itinerary or cancel a booking
          </span>
        </div>
        <div className="options-btn">
          <div className="space-between">
            <h5 className="each-option">Use a credit or coupon</h5>
            <FontAwesomeIcon icon={faDollar} />
          </div>
          <span className="small-text">
            Apply a coupon code or credit to a new trip
          </span>
        </div>
        <div className="options-btn">
          <div className="space-between">
            <h5 className="each-option">Track your refund</h5>
            <FontAwesomeIcon icon={faComments} />
          </div>
          <span className="small-text">
            Track a status of a refund currently in progress
          </span>
        </div>
      </div>
    </div>
  );
};

export default Options;
