import React, { useState } from 'react';
import CircleButton from '../Components/CircleButton';
import CompanyLogo from "../Asset/office.png";

function JobCard({ job, skillMatches, isActive, onClick }) {
  const { role, companyName, salary, experience, workMode, employmentType, skills, description, jobID, location } = job;

  const truncateDescription = (text, limit) => {
    if (text.length <= limit) {
      return text;
    }
    return text.slice(0, limit) + '...';
  };

  const buttonColor = skillMatches ? 'green' : '#3498db';

  return (
    <div className={`jobCard ${isActive ? 'activeJobCard' : ''}`} onClick={onClick}>
      <div className="InnerCard">
        <img src={CompanyLogo} alt="Company Logo" className="CompanyLogo" />
        <h2>{role}</h2>
        <h3>{companyName}</h3>
        <h6>Location : {location} </h6>
        <p><strong>Salary: </strong>{salary}</p>
        <p><strong>Experience: </strong>{experience}</p>
        <p><strong>Skills: </strong>{skills}</p>
        <p className="description">Description: {truncateDescription(description, 100)}</p>
      </div>
      <div className="prefer_Section">
        <CircleButton color={buttonColor} />
      </div>
    </div>
  );
}

export default JobCard;
