import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import html2canvas from 'html2canvas';
import { MyContext } from '../context';
import { API_URLS } from '../config';

const ENV = process.env.REACT_APP_ENV || "production";
const API_URL = API_URLS[ENV] + "/addJobPost/savejobpost";
const API_LIST_URL = API_URLS[ENV] + "/addJobPost/listJobPosts";

const JobPostDetail = () => {
  const { userType, isValid } = useContext(MyContext);
  const navigate = useNavigate();
  const { jobid } = useParams();

  const [jobRole, setJobRole] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [skills, setSkills] = useState('');
  const [qualification, setQualification] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');
  const [workMode, setWorkMode] = useState([]);
  const [employmentType, setEmploymentType] = useState([]);
  const [experience, setExperience] = useState('');
  const [companyImage, setCompanyImage] = useState(null);
  const [description, setDescription] = useState('');
  const [expireon, setExpireon] = useState('');
  const [externalLink, setExternalLink] = useState(false);
  const [jobLink, setJobLink] = useState('');

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const generateMessage = () => {
    const jobMessage = `
  Role: ${jobRole}
  Company: ${companyName}
  Salary: ${salary}
  Experience: ${experience}
  
  🔗 Apply Here: ${jobLink}
  📲 Telegram: [Your Telegram Group Link]
  
  📢 Share this opportunity with friends!
    `;
  
    return encodeURIComponent(jobMessage.trim());
  };
  
  useEffect(() => {
    if (jobid) {
      const fetchJobDetails = async () => {
        try {
          const response = await axios.get(API_LIST_URL);
          const job = response.data.find((job) => job.jobID.toString() === jobid);
          if (job) {
            setJobRole(job.role || "");
            setCompanyName(job.companyName || "");
            setSkills(job.skills || "");
            setQualification(job.qualification || "");
            setLocation(job.location || "");
            setSalary(job.salary || "");
            setWorkMode(job.workMode || []);
            setEmploymentType(job.employmentType || []);
            setExperience(job.experience || "");
            setCompanyImage(job.companyImage || null);
            setDescription(job.description || "");
            setExpireon(formatDate(job.expireon));
            setExternalLink(job.externalLink || false);
            setJobLink(job.jobLink || "");
            console.log("job found: " + job.expireon);
          } else {
            console.log("No job found with the given ID");
          }
        } catch (error) {
          console.error("Error fetching job details:", error);
        }
      };
      fetchJobDetails();
    }
  }, [jobid]);

  useEffect(() => {
    const fetchSessionData = async () => {
      try {
        if (!isValid) {
          // navigate("/NotAuthorize");
        } else {
          if (userType !== "A" && userType !== "R") {
            // navigate("/NotAuthorize");
          }
        }
      } catch (e) {
        console.log(e);
      }
    };

    fetchSessionData();
  }, [isValid, userType, navigate]);

  const handleSalaryChange = (e) => {
    setSalary(e.target.value);
  };

  const handleWorkModeChange = (mode) => {
    setWorkMode((prev) =>
      prev.includes(mode) ? prev.filter((item) => item !== mode) : [...prev, mode]
    );
  };

  const handleEmploymentTypeChange = (type) => {
    setEmploymentType((prev) =>
      prev.includes(type) ? prev.filter((item) => item !== type) : [...prev, type]
    );
  };

  const handleExperienceChange = (e) => {
    setExperience(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!jobRole || !companyName || !location || !description) {
      alert("Please fill out all required fields.");
      return;
    }

    try {
      const response = await axios.post(API_URL, {
        role: jobRole,
        companyName: companyName,
        skills: skills,
        qualification: qualification,
        location: location,
        salary: salary,
        workMode: workMode,
        employmentType: employmentType,
        experience: experience,
        companyImage: companyImage,
        description: description,
        expireon: expireon,
        externalLink: externalLink,
        jobLink: externalLink ? jobLink : ""
      });

      if (response.status === 201) {
        alert("Data Saved Successfully");

        // Generate job card image
        const jobCardImage = await generateJobCard();

        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = jobCardImage;
        link.download = `job_card_${jobRole.replace(/\s+/g, '_')}.png`;

        // Programmatically click the link to trigger the download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        console.log("Job card image generated and download initiated");
      } else {
        throw new Error("Failed to save data");
      }
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to save data");
    }
  };

  const generateJobCard = async () => {
    const jobCard = document.createElement('div');
    jobCard.innerHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Job Card</title>
      </head>
      <body style="margin: 0; font-family: Arial, sans-serif; background-color: #0d1b48; display: flex; justify-content: center; align-items: center; height: 720px; width: 300px;">
        <div style="background-color: #fff; width: 900px; height: 900px; padding: 40px; border-radius: 20px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); text-align: center; display: flex; flex-direction: column; justify-content: center;">
          <h2 style="margin-top: 0; color: #4b4b4b; font-size: 36px; font-weight: bold;">
            <span style="font-weight: normal; color: #0d1b48;">G</span><span style="color: #b83378;">dest</span><span style="color: #0d1b48;">.in</span>
          </h2>
          <p style="margin: 20px 0; font-weight: bold; color: #333; font-size: 28px;">
            Role: ${jobRole}
          </p>
          <p style="margin: 20px 0; color: #333; font-size: 24px;">
            <strong>LOCATION:</strong> ${location.toUpperCase()}
          </p>
          <p style="margin: 20px 0; color: #333; font-size: 24px;">
            <strong>Salary:</strong> ${salary}
          </p>
          <p style="margin: 20px 0; color: #333; font-size: 24px;">
            <strong>Experience:</strong> ${experience}
          </p>
          <a href="https://gdest.in" style="display: inline-block; padding: 15px 30px; background-color: #2749ff; color: white; text-decoration: none; border-radius: 30px; font-size: 24px; margin-top: 30px;">
            Visit our website
          </a>
        </div>
      </body>
      </html>
    `;

    document.body.appendChild(jobCard);
    const canvas = await html2canvas(jobCard);
    document.body.removeChild(jobCard);

    return canvas.toDataURL('image/png');
  };

  return (
    <div className="job-post-detail-container">
      <div className="job-post-detail">
        <form onSubmit={handleSubmit}>
          <table>
            <thead>
              <tr>
                <th>Job Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="td_hover">
                <td>Role</td>
                <td>
                  <input
                    type="text"
                    className="job-input"
                    name="role"
                    value={jobRole}
                    onChange={(e) => setJobRole(e.target.value)}
                  />
                </td>
              </tr>
              <tr className="td_hover">
                <td>Company Name</td>
                <td>
                  <input
                    type="text"
                    className="job-input"
                    name="companyName"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </td>
              </tr>
              <tr className="td_hover">
                <td>Skills</td>
                <td>
                  <input
                    type="text"
                    className="job-input"
                    name="skills"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                  />
                </td>
              </tr>
              <tr className="td_hover">
                <td>Qualification</td>
                <td>
                  <input
                    type="text"
                    className="job-input"
                    name="qualification"
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                  />
                </td>
              </tr>
              <tr className="td_hover">
                <td>Location</td>
                <td>
                  <input
                    type="text"
                    className="job-input"
                    name="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </td>
              </tr>
              <tr className="td_hover">
                <td>Salary</td>
                <td>
                  <select value={salary} onChange={handleSalaryChange}>
                    <option value="">Select salary</option>
                    <option value="1-3 Lakhs">1-3 Lakhs</option>
                    <option value="3-5 Lakhs">3-5 Lakhs</option>
                    <option value="5-8 Lakhs">5-8 Lakhs</option>
                    <option value="8-13 Lakhs">8-13 Lakhs</option>
                    <option value="13-20 Lakhs">13-20 Lakhs</option>
                    <option value="20-40 Lakhs">20-40 Lakhs</option>
                    <option value="40-60 Lakhs">40-60 Lakhs</option>
                    <option value="60+ Lakhs">60+ Lakhs</option>
                  </select>
                </td>
              </tr>
              <tr className="td_hover">
                <td>
                  <label>Work Mode:</label>
                </td>
                <td>
                  <div>
                    <input
                      type="checkbox"
                      checked={workMode.includes("office")}
                      onChange={() => handleWorkModeChange("office")}
                    />
                    <label>Office</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      checked={workMode.includes("remote")}
                      onChange={() => handleWorkModeChange("remote")}
                    />
                    <label>Remote</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      checked={workMode.includes("hybrid")}
                      onChange={() => handleWorkModeChange("hybrid")}
                    />
                    <label>Hybrid</label>
                  </div>
                </td>
              </tr>
              <tr className="td_hover">
                <td>
                  <label>Employment Type:</label>
                </td>
                <td>
                  <div>
                    <input
                      type="checkbox"
                      checked={employmentType.includes("full-time")}
                      onChange={() => handleEmploymentTypeChange("full-time")}
                    />
                    <label>Full-time</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      checked={employmentType.includes("part-time")}
                      onChange={() => handleEmploymentTypeChange("part-time")}
                    />
                    <label>Part-time</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      checked={employmentType.includes("intern")}
                      onChange={() => handleEmploymentTypeChange("intern")}
                    />
                    <label>Intern</label>
                  </div>
                </td>
              </tr>
              <tr className="td_hover">
                <td>Experience</td>
                <td>
                  <input
                    type="text"
                    className="job-input"
                    name="experience"
                    value={experience}
                    onChange={handleExperienceChange}
                  />
                </td>
              </tr>
              <tr className="td_hover">
                <td>Company Image</td>
                <td>
                  <input
                    type="file"
                    onChange={(e) => setCompanyImage(e.target.files[0])}
                  />
                </td>
              </tr>
              <tr className="td_hover">
                <td>Description</td>
                <td>
                  <textarea
                    className="job-input"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </td>
              </tr>
              <tr className="td_hover">
                <td>Expiry Date</td>
                <td>
                  <input
                    type="date"
                    value={expireon}
                    onChange={(e) => setExpireon(e.target.value)}
                  />
                </td>
              </tr>
              <tr className="td_hover">
                <td>External Link</td>
                <td>
                  <input
                    type="checkbox"
                    checked={externalLink}
                    onChange={(e) => setExternalLink(e.target.checked)}
                  />
                </td>
              </tr>
              {externalLink && (
                <tr className="td_hover">
                  <td>Job Link</td>
                  <td>
                    <input
                      type="text"
                      value={jobLink}
                      onChange={(e) => setJobLink(e.target.value)}
                    />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <button type="submit">Save</button>
          <button type="button" onClick={generateJobCard}>Generate Job Card Image</button>
        </form>
      </div>
    </div>
  );
};

export default JobPostDetail;

