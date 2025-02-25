import React from "react";
import LanguageIcon from "../images/language-icons";
import MediaCard from "./mediaCard";
import "./resumeHtml.css";

export default function ResumeHtml({ data }) {
  return (
    <div className="resume-outerdiv">
      <h4 data-aos="fade-down">{data.about}</h4>
      <hr data-aos="fade-down" />
      <hr data-aos="fade-down" />
      <h2 data-aos="fade-down">Skills</h2>
      <hr data-aos="fade-down" className="hr-half-divider" />
      <div>
        {data.skills.map((skill) => (
          <div data-aos="fade-down">{skill}</div>
        ))}
      </div>
      <hr data-aos="fade-down" />
      <hr data-aos="fade-down" />
      <h2 data-aos="fade-down">Experience</h2>
      <hr data-aos="fade-down" className="hr-half-divider" />
      <div>
        <div className="project-cards">
          {data.experience.map((exp) => (
            <>
              <MediaCard
                title={exp.company}
                description={exp.title}
                data={exp}
                linkto="experience"
              />
            </>
          ))}
        </div>
        {data.experience.map((exp) => (
          <>
            <hr data-aos="fade-down" className="hr-half-divider" />
            <hr data-aos="fade-down" className="hr-half-divider" />
            <h3 data-aos="fade-down">{exp.company}</h3>
            <h5 data-aos="fade-down">{exp.title}</h5>
            <hr data-aos="fade-down" className="hr-quarter-divider" />
            <h6 data-aos="fade-down">
              {exp.startDate} - {exp.endDate}
            </h6>

            <>
              {exp.description.map((desc) => (
                <h6 data-aos="fade-down">{desc}</h6>
              ))}
            </>
            {exp.technologies && (
              <div>
                {exp.technologies.map((tech) => (
                  <LanguageIcon language={tech} className="language-icon" />
                ))}
              </div>
            )}
          </>
        ))}
        <hr data-aos="fade-down" />
        <hr data-aos="fade-down" />
        <h2 data-aos="fade-down">Education</h2>
        <hr data-aos="fade-down" className="hr-half-divider" />
        {data.education.map((edu) => (
          <>
            <h3 data-aos="fade-down">{edu.school}</h3>
            <h4 data-aos="fade-down">{edu.degree}</h4>
            <h6 data-aos="fade-down">
              {edu.startDate} - {edu.endDate}
            </h6>
          </>
        ))}
      </div>
    </div>
  );
}
