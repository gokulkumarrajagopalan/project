import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import saveIcon from "../Asset/save.png";
import savedIcon from "../Asset/saved.png";
import share from "../Asset/share.png";
import { MyContext } from "../context";
import { API_URLS } from "../config";

const ENV = process.env.REACT_APP_ENV || "production";
const API_URL_SAVE = API_URLS[ENV] + "/addJobPost/saveJob";

function ViewJobSub({ job, onClose }) {
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);
  const { userType, isValid, userId } = useContext(MyContext);

  useEffect(() => {
    const handleBackNavigation = (event) => {
      event.preventDefault();
      navigate(-1);
    };

    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener("popstate", handleBackNavigation);

    return () => {
      window.removeEventListener("popstate", handleBackNavigation);
    };
  }, [navigate]);

  if (!job) {
    return <div>Select a job to view details.</div>;
  }

  const handleSaveJob = async () => {
    try {
      const response = await axios.post(API_URL_SAVE, {
        userId,
        jobId: job.jobID.toString(),
      });
      setIsSaved(true);
      console.log("Job saved successfully:", response.data);
    } catch (error) {
      console.error("Error saving job:", error);
    }
  };

  const handleShare = () => {
    const link = `${window.location.origin}/viewjobs/${job.jobID}`;
    navigator.clipboard.writeText(link).then(() => {
      setShowCopiedMessage(true);
      setTimeout(() => setShowCopiedMessage(false), 3000);
    });
  };

  const handleApplyJob = () => {
    let link = job.jobLink;
    if (!link.startsWith("http://") && !link.startsWith("https://")) {
      link = "http://" + link;
    }
    window.open(link, "_blank");
  };

  const {
    jobID,
    role,
    companyName,
    salary,
    experience,
    workMode,
    employmentType,
    skills,
    description,
    Posted_Date,
  } = job;

  return (
    <div className="headerJobpostsreensub">
      <div className="header-section">
        <h2>Role criteria</h2>
        <button onClick={onClose} className="cross_button">
          x
        </button>
      </div>
      <p>Role: {role}</p>
      <p>Company: {companyName}</p>
      <p>Salary: {salary}</p>
      <p>Experience: {experience}</p>
      <p>Skills: {skills}</p>
      <div className="btn-ssa">
        <button onClick={handleApplyJob} className="btn-apply">
          Apply Job
        </button>

        <button onClick={handleShare} className="btn-save tooltip">
          <img src={share} alt="Share Icon" />
          <span className="tooltip-text">Share</span>
        </button>

        <button onClick={handleSaveJob} className="btn-save tooltip">
          <img src={isSaved ? savedIcon : saveIcon} alt="Save Icon" />
          <span className="tooltip-text">{isSaved ? "Saved" : "Save"}</span>
        </button>
      </div>
      <div className="Jobdescription">
        <h3>Description</h3>
        <p>Work Mode: {workMode}</p>
        <p>Employment Type: {employmentType}</p>
        <p>{description}</p>
      </div>

      {showCopiedMessage && (
        <div className="copied-message">
          Link has been copied!
        </div>
      )}
    </div>
  );
}

export default ViewJobSub;
