import React from "react";
import HeadShot from "../components/headShot";
import "./aboutMe.css";

export default function AboutMe() {
  const text = `Hey there! 👋 I'm a software engineer who's just as comfortable in the great outdoors as I am behind a computer screen. With a background in full-stack development and a knack for creating killer automation projects, I bring a unique blend of tech skills and a passion for customer service to the table.`;
  const text2 = `Whether I'm diving into the world of web user interfaces or geeking out over robotics, I love the learning process and thrive on making meaningful connections. Armed with a B.S. in Computer Science, my toolbox includes AWS, Node.js, React, Next.js, Javascript, Typescript, HTML/CSS, Java, C++, C#, Kotlin, Python, SQL, Arduino, and C.`;
  const text3 = `Let's chat code, share outdoor adventure stories, or discuss the latest tech trends. I'm always up for a good conversation!`;
  return (
    <section className="aboutme row">
      <div className="left">
        <HeadShot />
      </div>
      <div className="aboutme col right">
        <div className="page-title" data-aos="fade-up">
          About Me
        </div>
        <div className="page-description" data-aos="fade-down">
          <p>{text}</p>
          <p>{text2}</p>
          <p>{text3}</p>
        </div>
      </div>
    </section>
  );
}
