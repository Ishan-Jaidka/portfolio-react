import React from "react";
import linkedin from "../../images/linkedin-logo.png";

export default function Linkedin() {
  return (
    <a
      href="https://www.linkedin.com/in/ishanjaidka/"
      target="_blank"
      rel="noreferrer"
    >
      <img className="socials" src={linkedin} alt="LinkedIn Logo" />
    </a>
  );
}
