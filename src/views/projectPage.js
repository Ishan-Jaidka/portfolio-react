import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import "./projectPage.css";
import { Stack } from "@mui/system";

export default function ProjectPage() {
  const { projectname } = useParams();
  const [projectData, setProjectData] = useState(null);
  const [status, setStatus] = useState("Loading");

  useEffect(() => {
    axios
      .get(`https://api.github.com/repos/Ishan-Jaidka/${projectname}`)
      .then((res) => {
        if (res.status !== 200) throw new Error(res.statusText);
        setProjectData(res.data);
        setStatus("Success");
        console.log(projectData);
      })
      .catch((err) => {
        setStatus("Error");
        console.error(err);
      });
  }, []);

  return (
    <div className="projectpage">
      <div className="page-title">{projectname}</div>
      {status === "Loading" && (
        <div className="page-description">Loading...</div>
      )}
      {status === "Error" && (
        <div className="page-description">Error getting GitHub repos</div>
      )}
      {status === "Success" && (
        <>
          <div className="page-description">{projectData.description}</div>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              size="small"
              color="primary"
              href={projectData.html_url}
            >
              View On GitHub
            </Button>
            {projectData.homepage && (
              <Button
                variant="contained"
                size="small"
                color="primary"
                background-color="white"
                href={projectData.homepage}
              >
                View Project
              </Button>
            )}
          </Stack>
        </>
      )}
    </div>
  );
}
