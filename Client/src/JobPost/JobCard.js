import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import img1 from './Logo.png';
import CircleButton from '../Components/CircleButton';


function JobCard({ job, skillMatches }) {
  const { role, companyName, salary, experience, workMode, employmentType, skills, description, jobID ,location , expireon,externalLink,jobLink,Posted_Date} = job;

  const [isJobCardClicked, setIsJobCardClicked] = useState(false);

  const truncateDescription = (text, limit) => {
    if (text.length <= limit) {
      return text;
    }
    return text.slice(0, limit) + '...';
  };

  const buttonColor = skillMatches ? 'green' : '#3498db';

  const handleJobCardClick = () => {
    setIsJobCardClicked(true);
  };

  return (
    <div className="jobCard">
      <div onClick={handleJobCardClick} className="jobCardLink">
        <div className="InnerCard">
          <img  alt="Company Logo" className="CompanyLogo" />
          <h2>{role}</h2>
          <h3>{companyName}</h3>
          <h6>Location : {location} </h6>
          <p><strong>Salary: </strong>{salary }</p>
          <p><strong>Experience: </strong>{experience} </p>
          <p><strong>Skills: </strong>{skills}</p>
          <p className="description">Description: {truncateDescription(description, 100)}</p>
        </div>
        <div className="prefer_Section">
          <CircleButton color={buttonColor} />
        </div>
      </div>
    </div>
  );
}

export default JobCard;
