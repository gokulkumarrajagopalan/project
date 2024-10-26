import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../context";
import axios from "axios";
import API_URLS from "../config";
import { useNavigate } from "react-router-dom";

const ENV = process.env.REACT_APP_ENV || "production";
const API_URL = API_URLS[ENV] + "/addJobPost/savejobpost";

function JobPostDetail() {
  const { userType, isValid } = useContext(MyContext);
  const [jobRole, setJobRole] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [skills, setSkills] = useState("");
  const [qualification, setQualification] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [workMode, setWorkMode] = useState([]);
  const [employmentType, setEmploymentType] = useState([]);
  const [experience, setExperience] = useState("");
  const [companyImage, setCompanyImage] = useState(null);
  const [description, setDescription] = useState("");
  const [expireon, setExpireon] = useState("");
  const [externalLink, setExternalLink] = useState(false);
  const [jobLink, setJobLink] = useState("");
  const navigate = useNavigate();


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

  useEffect(() => {
    const fetchSessionData = async () => {
      try {
        if (!isValid) {
          navigate("/SignIn");
        } else {

          if (userType !== "A" && userType !== "R" ) {
            navigate("/JobPostScreen");
         
        }}
      } catch (e) {
        console.log(e);
      }
    };

    fetchSessionData();
  }, [isValid, userType, navigate]);
  const handleSubmit = async (e) => { 
    e.preventDefault();
  

    if (!jobRole || !companyName || !location || !description) {
      alert("Please fill out all required fields.");
      return;
    }
  
  
  
    try {
  
      const response = await axios.post(API_URL, { role: jobRole, companyName: companyName,
         skills: skills, qualification: qualification, location: location, salary: salary,
        workMode: workMode, 
        employmentType: employmentType, 
        experience: experience,
        companyImage: companyImage,
        description: description,
        expireon: expireon,
        externalLink: externalLink,
        jobLink: externalLink ? jobLink : "" });
  
      if (response.status === 201) {
        alert("Data Saved Successfully");
      } else {
        throw new Error("Failed to save data");
      }
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to save data");
    }
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
                    <label>Work from Office</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      checked={workMode.includes("hybrid")}
                      onChange={() => handleWorkModeChange("hybrid")}
                    />
                    <label>Hybrid</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      checked={workMode.includes("remote")}
                      onChange={() => handleWorkModeChange("remote")}
                    />
                    <label>Remote</label>
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
                      checked={employmentType.includes("part-time")}
                      onChange={() => handleEmploymentTypeChange("part-time")}
                    />
                    <label>Part-time</label>
                  </div>
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
                      checked={employmentType.includes("contract")}
                      onChange={() => handleEmploymentTypeChange("contract")}
                    />
                    <label>Contract</label>
                  </div>
                </td>
              </tr>
              <tr className="td_hover">
                <td>Experience</td>
                <td>
                  <input
                    type="text"
                    className="job-input"
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
                    accept="image/*"
                    onChange={(e) => setCompanyImage(e.target.files[0])}
                  />
                </td>
              </tr>
              <tr className="td_hover">
                <td>Description</td>
                <td>
                  <textarea
                    rows={5}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </td>
              </tr>
              <tr className="td_hover">
                <td>Expire On</td>
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
                      type="url"
                      value={jobLink}
                      onChange={(e) => setJobLink(e.target.value)}
                    />
                  </td>
                </tr>
              )}
              <tr>
                <td colSpan={2}>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}

export default JobPostDetail;
