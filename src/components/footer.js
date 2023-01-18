import React from "react";
import "./footer.css";
import Github from "./socials/github";
import Linkedin from "./socials/linkedin";

export default function Footer() {
  return (
    <div className="footer">
      <Linkedin />
      <Github />
    </div>
  );
}
