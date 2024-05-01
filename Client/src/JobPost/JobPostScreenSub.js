import React from "react";

function JobPostScreenSub({ job, onClose }) {
  if (!job) {
    return <div>Select a job to view details.</div>;
  }

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
      <button onClick={onClose} className="cross-button">
        x
      </button>
      <h2>Job Details</h2>
      <p>Role: {role}</p>
      <p>Company: {companyName}</p>
      <p>Salary: {salary} </p>
      <p>Experience: {experience} </p>
      <p>Skills: {skills}</p>
      <button onClick={handleApplyJob}>Apply Job</button>
      <button>Save</button>
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
