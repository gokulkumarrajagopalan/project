import React from "react";
import axios from "axios";
import API_URLS from "../config";
const ENV = process.env.REACT_APP_ENV || "production";
const API_URL_SAVE = API_URLS[ENV] + "/addJobPost/saveJob";
function JobPostScreenSub({ job, onClose, onShare }) {
  if (!job) {
    return <div>Select a job to view details.</div>;
  }
  const userId = 1;
  const handleSaveJob = async () => {
    try {
      const response = await axios.post(API_URL_SAVE, {
        userId, // Assuming this is already a string
        jobId: job.jobID.toString(), // Convert jobID to a string
      });
      console.log(job.jobID.toString());
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
    expireon,
    externalLink,
    jobLink,
    Posted_Date,
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
      <button onClick={onClose} className="crossbutton">
        x
      </button>
      <h2>Role criteria</h2>
      <p>Role: {role}</p>
      <p>Company: {companyName}</p>
      <p>Salary: {salary}</p>
      <p>Experience: {experience}</p>
      <p>Skills: {skills}</p>
      <div className="btn-ssa">
        <button onClick={handleApplyJob}>Apply Job</button>
        <button onClick={() => onShare(jobID)}>Share Job</button>
        <button onClick={handleSaveJob}>Save</button>
      </div>
      <div className="Jobdescription">
        <h3>Description</h3>
        <p> Work Mode : {workMode}</p>
        <p> Employment Type: {employmentType}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default JobPostScreenSub;
