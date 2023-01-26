import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import "./projectPage.css";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";

export default function ProjectPage() {
  const { projectname } = useParams();
  const { state } = useLocation();

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
      </>
    </div>
  );
}
