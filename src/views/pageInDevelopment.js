import React from "react";
import DownloadResume from "../components/socials/downloadResume";

export default function PageInDevelopment({ title }) {
  return (
    <>
      <div className="page-title">{title}</div>
      <div className="page-description">
        This page is still in development. Please try again later.
      </div>
      <DownloadResume />
      <a className="page-description" href="/">
        Click here to return home.
      </a>
    </>
  );
}
