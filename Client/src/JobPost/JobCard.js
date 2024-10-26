import React from 'react';
import CircleButton from '../Components/CircleButton';
import CompanyLogo from "../Asset/office.png";

function JobCard({ job, skillMatches, isActive, onClick }) {
  const { role, companyName, salary, experience, workMode, employmentType, skills, description, jobID, location, Posted_Date } = job;

  // Function to calculate the posted time and return style based on time
  const getFormattedPostedTime = (postedDate) => {
    const now = new Date();
    const posted = new Date(postedDate);
    const diffTime = Math.abs(now - posted);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));

    let timeString;
    let className = '';

    if (diffHours < 24) {
      timeString = `${diffHours} hours ago`;
    } else if (diffDays < 7) {
      timeString = `${diffDays} days ago`;
    } else if (diffDays < 30) {
      const weeks = Math.floor(diffDays / 7);
      timeString = `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    } else {
      const weeks = Math.floor(diffDays / 7);
      timeString = `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    }

    // Set class name based on the difference in days
    if (diffDays < 15) {
      className = 'recentPosted';
    }

    return { timeString, className };
  };

  const truncateDescription = (text, limit) => {
    if (text.length <= limit) {
      return text;
    }
    return text.slice(0, limit) + '...';
  };

  const buttonColor = skillMatches ? 'green' : '#3498db';
  const { timeString, className } = getFormattedPostedTime(Posted_Date);

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
      <div className="jobFooter">
        <div className="prefer_Section">
          <CircleButton color={buttonColor} />
        </div>
        <p className={`postedTime ${className}`}>{timeString}</p>
      </div>
    </div>
  );
}

export default JobCard;
