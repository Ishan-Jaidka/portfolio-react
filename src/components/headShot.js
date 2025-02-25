import React from "react";
import ishan from "../images/ishan-square.jpeg";
import "./headShot.css";

export default function HeadShot() {
  return (
    <img
      className="headshot"
      data-aos="fade-up"
      src={ishan}
      alt="Headshot of Ishan Jaidka"
    />
  );
}
