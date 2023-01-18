import React from "react";
import Github from "../components/socials/github";
import "./projects.css";

export default function Projects() {
  return (
    <div className="projects">
      <div className="page-title">Projects</div>
      <div className="page-description">
        This page is a work in progress. View current projects on my GitHub:
      </div>
      <Github />
    </div>
  );
}
