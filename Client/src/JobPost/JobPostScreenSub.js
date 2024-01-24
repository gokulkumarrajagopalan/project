import React from 'react';
import './JobPostScreen.css';

function JobPostScreenSub({ job }) {
  if (!job) {
    return <div>Select a job to view details.</div>;
  }

  const { role, companyName, salary, experience, skills, description } = job;

  return (
    <div>
      <h2>Job Details</h2>
      <p>Role: {role}</p>
      <p>Company: {companyName}</p>
      <p>Salary: {salary}</p>
      <p>Experience: {experience}</p>
      <p>Skills: {skills}</p>
      
      {/* Apply the jobdescription class to the description section */}
      <div className="Jobdescription">
        <h3>Description</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default JobPostScreenSub;
