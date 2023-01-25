import React from "react";

export default function PageInDevelopment({ title }) {
  return (
    <>
      <div className="page-title">{title}</div>
      <div className="page-description">
        This page is still in development. Please try again later.
      </div>
      <a className="page-description" href="/">
        Click here to return home.
      </a>
    </>
  );
}
