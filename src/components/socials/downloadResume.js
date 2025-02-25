import { Button } from "@mui/material";
import React, { useEffect } from "react";

import "./downloadResume.css";

export default function DownloadResume() {
  useEffect(() => {}, []);
  const handleDownloadClick = () => {
    fetch("Ishan_Jaidka_Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let pdf = document.createElement("a");
        pdf.href = fileURL;
        pdf.download = "IshanJaidkaResume.pdf";
        pdf.click();
      });
    });
  };
  return (
    <Button
      data-aos="fade-up"
      variant="outlined"
      size="large"
      color="warning"
      onClick={handleDownloadClick}
      sx={{ bgcolor: "primary.main" }}
      className="download-button"
    >
      Download Resume
    </Button>
  );
}
