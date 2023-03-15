import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./projectPage.css";
import LanguageIcon from "../images/language-icons";

export default function ExperiencePage() {
  const { company } = useParams();
  const { state } = useLocation();
  const [status, setStatus] = useState("Loading");
  const [languages, setLanguages] = useState(null);

  useEffect(() => {
    let langArray = [];
    state.technologies?.forEach((language) => {
      langArray.push(
        <LanguageIcon language={language} className="language-icon" />
      );
    });
    setLanguages(langArray);
    setStatus("Success");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="projectpage">
      <div className="page-title">{company}</div>
      <>
        <div className="page-description">
          <h3>{state.title}</h3>
          <h4>
            {state.startDate} - {state.endDate}
          </h4>
          <>
            {state.description.map((desc) => (
              <h6>{desc}</h6>
            ))}
          </>
        </div>
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
