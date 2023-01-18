import React from "react";
import "./navBar.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <a className="nav-link" href="/">
        Home
      </a>
      <a className="nav-link" href="/projects">
        Projects
      </a>
      <a className="nav-link" href="/about">
        About Me
      </a>
    </div>
  );
}
