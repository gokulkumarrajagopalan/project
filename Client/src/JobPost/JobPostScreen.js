import React, { useState } from 'react';
import JobCard from './JobCard'; 
import './JobPostScreen.css';
import JobScreenNav from './Navigation/JobScreenNav';
import JobPostScreenSub from './JobPostScreenSub'; 

function JobPostScreen() {
  const [jobData, setJobData] = useState([
    {
      jobID: '1',
      role: 'Software Developer',
      companyName: 'ABC Company',
      salary: '$80,000 - $100,000',
      experience: '3-5 years',
      skills: 'React, JavaScript, HTML, CSS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      jobID: '2',
      role: 'Software Engineer',
      companyName: 'Icomm Company',
      salary: '$70,000 - $90,000',
      experience: '2-4 years',
      skills: 'Node.js, MongoDB, Express',
      description: 'A job description is a useful, plain-language tool that explains the tasks, duties, function and responsibilities of a position. It details who performs a specific type of work, how that work is to be completed, and the frequency and the purpose of the work as it relates to the organizations mission and goals. Job descriptions are used for a variety of reasons, such as determining salary levels, conducting performance reviews, clarifying missions, establishing titles and pay grades, and creating reasonable accommodation controls, and as a tool for recruiting. Job descriptions are useful in career planning, offering training exercises and establishing legal requirements for compliance purposes. A job description gives an employee a clear and concise resource to be used as a guide for job performance. Likewise, a supervisor can use a job description as a measuring tool to ensure that the employee is meeting job expectations.Step 1 Perform a Job AnalysisThis process of gathering, examining and interpreting data about the jobs tasks will supply accurate information about the job so that an organization can perform efficiently. Performing a job analysis includes the following steps:Interviewing employees to find out exactly what tasks are being performed. Observing how tasks are performed. employees fill out questionnaires or worksheets.Collecting data on jobs from other resources such as salary surveys and the Occupational Outlook Handbook. The results should be documented and reviewed by the employee who is currently in the position—and his or her supervisor—for any changes regarding the knowledge, skills, abilities, physical characteristics, environmental factors and credentials/experience of the position:Knowledge—comprehension of a body of information acquired by experience or study.Skill—a present, observable competence to perform a learned activity.Ability—competence to perform an observable behavior or a behavior that results in an observable product.Physical characteristics—the physical attributes an employee must have to perform the job duties with or without a reasonable accommodation.Environmental factors—working conditions (inside or outside the office). Credentials/experience—the minimum level of education, experience and certifications acceptable for the position. ',
    },
    // Add more job data as needed
  ]);

  // State to track the selected job
  const [selectedJob, setSelectedJob] = useState(null);

  // Function to handle the job card click
  const handleJobCardClick = (job) => {
    setSelectedJob(job);
  };

  return (
    <div className="jobPostContainer">
       <JobScreenNav />
      <div className="centerPart">
        {jobData.map((job) => (
          <div
            key={job.jobID}
            onClick={() => handleJobCardClick(job)} // Handle click event
          >
            <JobCard job={job} />
          </div>
        ))}
      </div>

      <div className="rightSide">
        <JobPostScreenSub job={selectedJob} />
      </div>
    </div>
  );
}

export default JobPostScreen;
