import { Button } from "@mui/material";
import React from "react";
import DownloadResume from "../components/socials/downloadResume";
import "./pageInDevelopment.css";

export default function PageInDevelopment({ title }) {
  return (
    <>
      <div className="page-title">{title}</div>
      <div className="page-description">
        This page is still in development. Please try again later.
      </div>
      <DownloadResume />
      <div className="page-dev-return-home">
        <Button
          href="/"
          variant="outlined"
          size="large"
          color="warning"
          className="download-button"
          sx={{ bgcolor: "primary.main" }}
        >
          Click here to return home
        </Button>
      </div>
    </>
  );
}
