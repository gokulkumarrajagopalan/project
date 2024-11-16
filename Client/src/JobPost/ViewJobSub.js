import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import saveIcon from "../Asset/save.png";
import savedIcon from "../Asset/saved.png";
import share from "../Asset/share.png";
import API_URLS from "../config";

const ENV = process.env.REACT_APP_ENV || "production";
const API_URL_SAVE = API_URLS[ENV] + "/addJobPost/saveJob";

function ViewJobSub({ job, onClose, onShare }) {
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);
  const [hovered, setHovered] = useState(false);

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

  const userId = 1;
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
    externalLink,
    jobLink,
  } = job;

  const handleApplyJob = () => {
    let link = jobLink;
    if (externalLink && jobLink) {
      if (!jobLink.startsWith("http://") && !jobLink.startsWith("https://")) {
        link = "http://" + jobLink;
      }
      window.open(link, "_blank");
    } else {
      console.log("Applying for the job...");
    }
  };

  return (
    <div>
      <div className="header-section">
        <h2>Role criteria</h2>
        <button onClick={onClose} className="crossbutton">x</button>
      </div>
      <p>Role: {role}</p>
      <p>Company: {companyName}</p>
      <p>Salary: {salary}</p>
      <p>Experience: {experience}</p>
      <p>Skills: {skills}</p>
      <div className="btn-ssa">
        <button onClick={handleApplyJob} className="btn-apply">Apply Job</button>
        <button onClick={() => onShare(jobID)} className="btn-save">
        <img src={share} alt="Share Icon" />
        </button>
        <button
          onClick={handleSaveJob}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="btn-save"
        >
          <img src={isSaved ? savedIcon : saveIcon} alt="Save Icon" />
          {hovered && (isSaved ? "Saved" : "Save")}
        </button>
      </div>
      <div className="Jobdescription">
        <h3>Description</h3>
        <p>Work Mode: {workMode}</p>
        <p>Employment Type: {employmentType}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
export default ViewJobSub;
