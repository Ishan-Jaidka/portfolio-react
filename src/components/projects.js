import axios from "axios";
import React, { useEffect, useState } from "react";
import MediaCard from "./mediaCard";
import "./projects.css";

export default function Projects({ project_url, published = false }) {
  const [status, setStatus] = useState("Loading");
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    axios
      .get(project_url)
      .then((res) => {
        if (res.status !== 200) throw new Error(res.statusText);
        let projectArray = [];
        res.data.forEach((proj) => {
          if (published) {
            if (!proj.fork && !proj.archived && proj.homepage) {
              projectArray.push(
                <MediaCard
                  title={proj.name}
                  description={proj.summary ? proj.summary : proj.description}
                  card_action_url={proj.html_url}
                  view_page_url={proj.homepage}
                  data={proj}
                />
              );
            }
          } else {
            if (!proj.fork && !proj.archived) {
              projectArray.push(
                <MediaCard
                  title={proj.name}
                  description={proj.summary ? proj.summary : proj.description}
                  card_action_url={proj.html_url}
                  view_page_url={proj.homepage}
                  data={proj}
                />
              );
            }
          }
        });
        setProjects(projectArray);
        setStatus("Success");
      })
      .catch((err) => {
        setStatus("Error");
        console.error(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {status === "Loading" && <div>Loading...</div>}
      {status === "Error" && (
        <div>Error getting projects. Please check back later.</div>
      )}
      {status === "Success" && (
        <div className="project-cards">{projects.map((proj) => proj)}</div>
      )}
    </div>
  );
}
