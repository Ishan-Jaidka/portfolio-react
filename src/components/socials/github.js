import React from "react";
import github from "../../images/github-logo.png";

export default function Github() {
  return (
    <a href="https://github.com/Ishan-Jaidka" target="_blank" rel="noreferrer">
      <img className="socials" src={github} alt="GitHub Logo" />
    </a>
  );
}
