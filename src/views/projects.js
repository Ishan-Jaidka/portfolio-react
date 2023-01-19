import axios from "axios";
import React, { useEffect, useState } from "react";
import MediaCard from "../components/mediaCard";
import "./projects.css";

export default function Projects() {
  const [status, setStatus] = useState("Loading");
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/ishan-jaidka/repos")
      .then((res) => {
        if (res.status !== 200) throw new Error(res.statusText);
        let projectArray = [];
        res.data.forEach((proj) => {
          if (!proj.fork || !proj.archived) {
            projectArray.push(
              <MediaCard
                title={proj.name}
                description={proj.description}
                card_action_url={proj.html_url}
                view_page_url={proj.homepage}
              />
            );
          }
        });
        setProjects(projectArray);
        setStatus("Success");
      })
      .catch((err) => {
        setStatus("Error");
        console.error(err);
      });
  }, []);

  return (
    <div className="projects">
      <div className="page-title">Projects</div>
      <div className="page-description">
        This page is a work in progress. Current projects on Github:
      </div>
      {status === "Loading" && <div>Loading...</div>}
      {status === "Error" && <div>Error getting GitHub repos</div>}
      {status === "Success" && (
        <div className="project-cards">{projects.map((proj) => proj)}</div>
      )}
    </div>
  );
}
