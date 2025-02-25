import React from "react";
import "./myName.css";

export default function MyName({ name, title }) {
  return (
    <div>
      <h3 className="about-intro" data-aos="fade-up">
        Hi! I'm
      </h3>
      <a className="about-name" data-aos="fade-up" href="/about">
        {name}
      </a>

      <h3 className="about-title-intro" data-aos="fade-down">
        And I'm a{" "}
        <a href="/experience" data-aos="fade-down" className="about-title">
          {title}
        </a>
        .
      </h3>
    </div>
  );
}
