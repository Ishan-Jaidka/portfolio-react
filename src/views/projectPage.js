import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import "./projectPage.css";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";
import axios from "axios";
import LanguageIcon from "../images/language-icons";

export default function ProjectPage() {
  const { projectname } = useParams();
  const { state } = useLocation();
  const [status, setStatus] = useState("Loading");
  const [languages, setLanguages] = useState(null);

  useEffect(() => {
    if (!state.type) {
      const project_url = `https://api.github.com/repos/${process.env.REACT_APP_GITHUB_USER}/${projectname}/languages`;
      axios
        .get(project_url)
        .then((res) => {
          if (res.status !== 200) throw new Error(res.statusText);
          let langArray = [];
          Object.keys(res.data).forEach((language) => {
            langArray.push(
              <LanguageIcon language={language} className="language-icon" />
            );
          });
          setLanguages(langArray);
          setStatus("Success");
        })
        .catch((err) => {
          setStatus("Error");
          console.error(err);
        });
    } else if (state.type === "current") {
      let langArray = [];
      Object.keys(state.languages).forEach((language) => {
        langArray.push(
          <LanguageIcon language={language} className="language-icon" />
        );
      });
      setLanguages(langArray);
      setStatus("Success");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="projectpage">
      <div className="page-title">{projectname}</div>
      <>
        <div className="page-description">
          <Typography
            variant="body"
            color="white"
            align="left"
            sx={{ whiteSpace: "pre-line" }}
          >
            {state.summary
              ? `${state.summary}\n\n${state.description}`
              : state.description}
          </Typography>
        </div>
        <Stack direction="row" spacing={2}>
          {state.html_url && (
            <Button
              variant="contained"
              size="small"
              color="primary"
              href={state.html_url}
            >
              View On GitHub
            </Button>
          )}
          {state.homepage && (
            <Button
              variant="contained"
              size="small"
              color="primary"
              background-color="white"
              href={state.homepage}
            >
              View Page
            </Button>
          )}
          {state.awards && (
            <Button
              variant="contained"
              size="small"
              color="primary"
              background-color="white"
              href={state.awards}
            >
              View Awards
            </Button>
          )}
        </Stack>
        <br /> <br />
        <div className="languages-outerdiv">
          {status === "Loading" && <div>Loading...</div>}
          {status === "Success" && (
            <div className="languages-list">
              {languages.map((language) => language)}
            </div>
          )}
        </div>
      </>
    </div>
  );
}
