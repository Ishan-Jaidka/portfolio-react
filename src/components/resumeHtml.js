import React from "react";
import LanguageIcon from "../images/language-icons";
import MediaCard from "./mediaCard";
import "./resumeHtml.css";

export default function ResumeHtml({ data }) {
  return (
    <div className="resume-outerdiv">
      <h4>{data.about}</h4>
      <hr />
      <hr />
      <h2>Skills</h2>
      <hr className="hr-half-divider" />
      <div>
        {data.skills.map((skill) => (
          <div>{skill}</div>
        ))}
      </div>
      <hr />
      <hr />
      <h2>Experience</h2>
      <hr className="hr-half-divider" />
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
            <hr className="hr-half-divider" />
            <hr className="hr-half-divider" />
            <h3>{exp.company}</h3>
            <h5>{exp.title}</h5>
            <hr className="hr-quarter-divider" />
            <h6>
              {exp.startDate} - {exp.endDate}
            </h6>

            <>
              {exp.description.map((desc) => (
                <h6>{desc}</h6>
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
        <hr />
        <hr />
        <h2>Education</h2>
        <hr className="hr-half-divider" />
        {data.education.map((edu) => (
          <>
            <h3>{edu.school}</h3>
            <h4>{edu.degree}</h4>
            <h6>
              {edu.startDate} - {edu.endDate}
            </h6>
          </>
        ))}
      </div>
    </div>
  );
}
