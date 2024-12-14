import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import html2canvas from 'html2canvas';
import { MyContext } from '../context';
import { API_URLS, API_UI_URLS } from '../config';
import Logo from "../Asset/Logo.png";
import Logotext from "../Asset/LOgoGdest.png";

const ENV = process.env.REACT_APP_ENV || "production";
const API_SHARE_URL = API_UI_URLS[ENV] + "/viewjobs/";
const API_URL = API_URLS[ENV] + "/addJobPost/savejobpost";
const API_LIST_URL = API_URLS[ENV] + "/addJobPost/listJobPosts";
const API_UPDATE_URL = API_URLS[ENV] + "/addJobPost/updateJobPost";

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
  const [isUpdateEnabled, setIsUpdateEnabled] = useState(false);
  const [previewImages, setPreviewImages] = useState([]);
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [generatecard, setGeneratecard] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    if (jobid) {
      setIsUpdateEnabled(true);
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
           navigate("/NotAuthorize");
        } else {
          if (userType !== "A" && userType !== "R") {
             navigate("/NotAuthorize");
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
      if (!isUpdateEnabled) {
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
        } else {
          throw new Error("Failed to save data");
        }
      }
      if (isUpdateEnabled) {
        const response = await axios.put(`${API_UPDATE_URL}/${jobid}`, {
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
      
        if (response.status === 200) {
          alert("Job post updated successfully!");
        } else {
          throw new Error("Failed to update the job post.");
        }
      }
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to save data");
    }
  };
  
  const generateJobCards = async () => {
    const jobCardElements = document.querySelectorAll('.job-card-preview');
    const images = [];
    for (let element of jobCardElements) {
      const canvas = await html2canvas(element);
      images.push(canvas.toDataURL('image/png'));
    }
    return images;
  };

  const handleGenerateJobCards = async () => {
    const jobCardImages = await generateJobCards();
    setGeneratecard(true);
    if (jobCardImages.length > 0) {
      setPreviewImages(jobCardImages);
    }
  };

  const handleDownloadJobCards = () => {
    previewImages.forEach((image, index) => {
      const link = document.createElement('a');
      link.href = image;
      link.download = `job_card_${index + 1}_${jobRole.replace(/\s+/g, '_')}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  const handleGenerateMessage = () => {
    const message = `
    Role: ${jobRole}
    Company: ${companyName}
    Salary: ${salary}
    Experience: ${experience}
    
    🔗 Apply Here: ${API_SHARE_URL}${jobid}
📲 Telegram: https://t.me/gdestin

📢 Share this opportunity with friends!
    `;
    setGeneratedMessage(message.trim());
  };

  const JobCardPreview = () => {
    const images = [
      <div className="job-card-preview instagram-post">
        <div className="post-content">
          <div className="logo-container">
            <div className="logo-icon_p" aria-hidden="true">
              <img src={Logo} alt="Logo" className="logo-icon_p" />
            </div>
            <div className="logo-text_p">
              <img src={Logotext} alt="Logotext" className="logo-text_p" />
            </div>
          </div>

          <div className="job-info">
            <h1 className="company-name">{companyName}</h1>
            <p className="hiring-text"> is hiring</p>
          </div>

          <div>
            <div className="button-group">
              <button className="btn_save btn-secondary">
                <svg className="icon" fill="none" stroke="currentColor" viewBox 
                ="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                </svg>
                save for later
              </button>
              <button className="btn_share btn-secondary">
                <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                </svg>
                share now
              </button>
            </div>

            <div className="visit-website">
              <a className="btn_visit btn-primary">visit our website</a>
            </div>
          </div>
        </div>
      </div>,
      <div className="job-card-preview instagram-post">
        <div className="post-content">
          <div className="logo-container">
            <div className="logo-icon_p" aria-hidden="true">
              <img src={Logo} alt="Logo" className="logo-icon_p" />
            </div>
            <div className="logo-text_p">
              <img src={Logotext} alt="Logotext" className="logo-text_p" />
            </div>
          </div>

          <div className="job-details">
            <h2 className="job-role">{jobRole}</h2>
            <p className="job-location">📍 {location}</p>
            <p className="job-salary">💰 {salary}</p>
            <p className="job-experience">👨‍💼 {experience}</p>
          </div>

          <div className="visit-website">
            <a className="btn_visit btn-primary">Apply Now</a>
          </div>
        </div>
      </div>,
      <div className="job-card-preview instagram-post">
        <div className="post-content">
          <div className="logo-container">
            <div className="logo-icon_p" aria-hidden="true">
              <img src={Logo} alt="Logo" className="logo-icon_p" />
            </div>
            <div className="logo-text_p">
              <img src={Logotext} alt="Logotext" className="logo-text_p" />
            </div>
          </div>

          <div className="checkout-message">
            <h2>For more exciting opportunities</h2>
            <p>Check out our website!</p>
          </div>

          <div className="visit-website">
            <a className="btn_visit btn-primary">Visit Website</a>
          </div>
        </div>
      </div>
    ];

    return (
      <div className="preview-container">
        <h3>Preview</h3>
        <div id="job-card-preview">
          {images[currentImageIndex]}
        </div>
        {generatecard && previewImages.length > 0 && (
          <div>
            <h4>Generated Images</h4>
            {previewImages.map((image, index) => (
              <img key={index} src={image} alt={`Job Card Preview ${index + 1}`} style={{ maxWidth: '500px', height: 'auto', marginBottom: '10px' }} />
            ))}
            <button onClick={handleDownloadJobCards}>Download All Job Cards</button>
          </div>
        )}
        <div className="image-navigation">
          <button onClick={() => setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : images .length - 1))}>Previous</button>
          <button onClick={() => setCurrentImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))}>Next</button>
        </div>
      </div>
    );
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
          {isUpdateEnabled && (
            <button type="submit">Update</button>
          )}
          {!isUpdateEnabled && <button type="submit">Save</button>}
        </form>

        <button type="button" onClick={handleGenerateJobCards}>Generate Job Card Images</button>
        <button type="button" onClick={handleGenerateMessage}>Generate Message</button>

        {(generatecard || companyName) && <JobCardPreview />}

        {generatedMessage && (
          <div className="message-container">
            <h3>Generated Message</h3>
            <pre>{generatedMessage}</pre>
          </div>
        )}
      </div>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
        
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
          min-height: 100vh;
          margin: 0;
          padding: 0;
        }
        
        .instagram-post {
          width: 100%;
          max-width: 500px;
          aspect-ratio: 1 / 1;
          background-color: #ffffff;
          border-radius: 32px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
          position: relative;
          overflow: hidden;
          margin-top: 0;
        }
        
        .post-content {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        
        .logo-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
          border-radius: 8px;
          overflow: hidden;
        }
        
        .logo-icon_p img,
        .logo-text_p img {
          max-width: 80px;
          height: auto;
        }
        
        .company-name {
          color: #4052e4;
          font-size: 2rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 0.5rem;
        }
        
        .hiring-text {
          font-family: Georgia, serif;
          font-size: 1.5rem;
 color: #1e2875;
        }
        
        .button-group {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        
        .btn_save,
        .btn_share,
        .btn_visit {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 100px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
        }
        
        .btn_share {
          right: 70px;
          position: relative;
        }
        
        .btn_visit {
          width: 160px;
        }
        
        .btn-secondary {
          background-color: #e8eaf6;
          color: #4052e4;
        }
        
        .btn-primary {
          background-color: #4052e4;
          color: white;
        }
        
        .visit-website {
          text-align: right;
        }
        
        .icon {
          width: 16px;
          height: 16px;
        }
        
        .logo-text_p {
          width: 50px;
        }
        
        .logo-icon_p {
          width: 10px;
        }
        
        .job-details {
          text-align: center;
        }
        
        .job-role {
          font-size: 1.5rem;
          color: #4052e4;
          margin-bottom: 1rem;
        }
        
        .job-location,
        .job-salary,
        .job-experience {
          font-size: 1rem;
          color: #1e2875;
          margin-bottom: 0.5rem;
        }
        
        .checkout-message {
          text-align: center;
          color: #1e2875;
        }
        
        .checkout-message h2 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        
        .checkout-message p {
          font-size: 1rem;
        }
        
        .image-navigation {
          display: flex;
          justify-content: space-between;
          margin-top: 1rem;
        }
        
        .image-navigation button {
          padding: 0.5rem 1rem;
          background-color: #4052e4;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default JobPostDetail;