import React from "react";
import "./myName.css";

export default function MyName({ name, title }) {
  return (
    <div>
      <h3 className="about-intro">Hi! I'm</h3>
      <a className="about-name" href="/about">
        {name}
      </a>

      <h3 className="about-title-intro">
        And I'm a{" "}
        <a href="/experience" className="about-title">
          {title}
        </a>
        .
      </h3>
    </div>
  );
}
