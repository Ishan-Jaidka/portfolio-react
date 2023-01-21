import React from "react";
import HeadShot from "../components/headShot";
import "./aboutMe.css";

export default function AboutMe() {
  const text = `I am a software engineer with 1 year of professional full stack development experience, 3 years of programming experience, and 6 years of customer service experience in the outdoor industry.`;
  const text2 = `My passions include learning, interpersonal connections, and all things web development, automation, and robotics. I have a B.S. in Computer Science cum laude and experience with AWS, Node.js, React, Next.js, Javascript, Typescript, HTML/CSS, Java, C++, C#, Kotlin, Python, SQL, Arduino, and C.`;
  return (
    <div className="aboutme">
      <div className="page-title">About Me</div>
      <HeadShot />
      <div className="page-description">{text}</div>
      <div className="aboutme-paragraph">{text2}</div>
    </div>
  );
}
