import axios from "axios";
import React, { useEffect, useState } from "react";
import ResumeHtml from "../components/resumeHtml";
import DownloadResume from "../components/socials/downloadResume";

export default function Experience() {
  const [status, setStatus] = useState("Loading");
  const [experience, setExperience] = useState(null);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_EXPERIENCE)
      .then((res) => {
        if (res.status !== 200) throw new Error(res.statusText);
        setExperience(res.data);
        setStatus("Success");
      })
      .catch((err) => {
        setStatus("Error");
        console.error(err);
      });
  }, []);

  return (
    <>
      <div className="above-title-margin" />
      <div className="page-title">Experience</div>
      <div className="vertical-gap" />
      <DownloadResume />
      <div>
        {status === "Loading" && <div>Loading...</div>}
        {status === "Error" && (
          <div>Error getting experience. Please check back later.</div>
        )}
        {status === "Success" && <ResumeHtml data={experience} />}
      </div>
    </>
  );
}
