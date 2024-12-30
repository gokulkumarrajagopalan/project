import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import Textbox from "./Textbox";
import { MyContext } from "../context";
import { API_URLS } from "../config";
import NavBar from "../JobPost/Navigation/JobScreenNav";
import Calendar from "./Calendar";
import UserDetails from "./UserDetails";


const ENV = process.env.REACT_APP_ENV || "production";
const API_URL_GET_PROFILE = `${API_URLS[ENV]}/addProfile/getProfile`;
const API_URL_CREATE_PROFILE = `${API_URLS[ENV]}/addProfile/createProfile/`;

function Profile() {
  const { isValid, userId } = useContext(MyContext);
  const [showUserDetails ,setShowUserDetails] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    skills: [],
    qualifications: [
      {
        degree: "",
        institution: "",
        speciation:"",
        startDate: "",
        endDate: "",
      },
    ],
    experiences: [
      {
        title: "",
        company: "",
        startDate: "",
        endDate: "",
      },
    ],
  });

  const navigate = useNavigate();

  const handleChange = (field, value) => {
    setProfile({ ...profile, [field]: value });
  };

  const handleQualificationChange = (index, field, value) => {
    const updatedQualifications = [...profile.qualifications];
    updatedQualifications[index][field] = value;
    setProfile((prevProfile) => ({ ...prevProfile, qualifications: updatedQualifications }));
  };

  const addQualification = () => {
    setProfile({
      ...profile,
      qualifications: [
        ...profile.qualifications,
        { degree: "", institution: "", startDate: "", endDate: "" },
      ],
    });
  };

  const removeQualification = (index) => {
    const updatedQualifications = profile.qualifications.filter((_, i) => i !== index);
    setProfile({ ...profile, qualifications: updatedQualifications });
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperiences = [...profile.experiences];
    updatedExperiences[index][field] = value;
    setProfile((prevProfile) => ({ ...prevProfile, experiences: updatedExperiences }));
  };

  const addExperience = () => {
    setProfile({
      ...profile,
      experiences: [
        ...profile.experiences,
        { title: "", company: "", startDate: "", endDate: "" },
      ],
    });
  };

  const removeExperience = (index) => {
    const updatedExperiences = profile.experiences.filter((_, i) => i !== index);
    setProfile({ ...profile, experiences: updatedExperiences });
  };

  const handleSkillsChange = (skills) => {
    setProfile({ ...profile, skills });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL_CREATE_PROFILE, profile);
      alert(response.data.message);
    } catch (error) {
      console.error("Error saving profile:", error);
      alert("Failed to save profile.");
    }
  };

  const toggleUserDetails = () => {
    setShowUserDetails(!showUserDetails);
  };

  const handleSettings = () => {
    navigate("/Setting");
  };

  const handleProfile = () => {
    navigate("/Profile");
  };

  const handleOnSaved = () => {
    navigate("/Saved");
  };
  const handleLogout = () => {
    navigate("/SignIn");
  }

  const handleJobPost = () =>{
    navigate("/JobpostDetail");
  }
  return (
    <>
      <NavBar
      toggleUserDetails={toggleUserDetails}
       />
      {showUserDetails && (
        <UserDetails
          showUserDetails={showUserDetails}
          onToggleUserDetails={toggleUserDetails}
          onLogout={handleLogout}
          onSettings={handleSettings}
          onProfile={handleProfile}
          onSaved={handleOnSaved}
          onJobPost ={handleJobPost}
        />
      )}
      <div className="profile-container">
        <form onSubmit={handleSubmit} className="profile-form">
          <h2 className="form-title">Your Profile</h2>

          <div className="section">
            <h3 className="section-title">Personal Details</h3>
            <div className="grid-container">
              <input
                type="text"
                placeholder="First Name"
                value={profile.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                className="form-input"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={profile.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                className="form-input"
              />
              <input
                type="text"
                placeholder="Phone"
                value={profile.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="form-input"
              />
              <input
                type="text"
                placeholder="Address"
                value={profile.address}
                onChange={(e) => handleChange("address", e.target.value)}
                className="form-input"
              />
              <input
                type="text"
                placeholder="City"
                value={profile.city}
                onChange={(e) => handleChange("city", e.target.value)}
                className="form-input"
              />
              <input
                type="text"
                placeholder="State"
                value={profile.state}
                onChange={(e) => handleChange("state", e.target.value)}
                className="form-input"
              />
              <input
                type="text"
                placeholder="Country"
                value={profile.country}
                onChange={(e) => handleChange("country", e.target.value)}
                className="form-input"
              />
              <input
                type="text"
                placeholder="Zip Code"
                value={profile.zipCode}
                onChange={(e) => handleChange("zipCode", e.target.value)}
                className="form-input"
              />
            </div>
          </div>

          <div className="section">
            <h3 className="section-title">Skills</h3>
            <Textbox
              label="Add Your Skills"
              placeholder="Type and select skills"
              value={profile.skills || []}
              onChange={handleSkillsChange}
            />
            <div className="skill-list">
              {profile.skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="section">
            <h3 className="section-title">Qualifications</h3>
            {profile.qualifications.map((qualification, index) => (
              <div key={index} className="qualification-item">
                <input
                  type="text"
                  placeholder="Degree"
                  value={qualification.degree}
                  onChange={(e) => handleQualificationChange(index, "degree", e.target.value)}
                  className="form-inputs"
                />
                <input
                  type="text"
                  placeholder="Institution"
                  value={qualification.institution}
                  onChange={(e) => handleQualificationChange(index, "institution", e.target.value)}
                  className="form-inputs"
                />
                <input
                  type="text"
                  placeholder="speciation"
                  value={qualification.speciation}
                  onChange={(e) => handleQualificationChange(index, "institution", e.target.value)}
                  className="form-inputs"
                />
                <Calendar
                  value={qualification.startDate}
                  onChange={(date) => handleQualificationChange(index, "startDate", date)}
                  placeholder="Start Date"
                />
                <Calendar
                  value={qualification.endDate}
                  onChange={(date) => handleQualificationChange(index, "endDate", date)}
                  placeholder="End Date"
                />
                <button
                  type="button"
                  onClick={() => removeQualification(index)}
                  className="remove-button"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addQualification}
              className="add-button"
            >
              Add Qualification
            </button>
          </div>

          <div className="section">
            <h3 className="section-title">Work Experience</h3>
            {profile.experiences.map((experience, index) => (
              <div key={index} className="experience-item">
                <input
                  type="text"
                  placeholder="Job Title"
                  value={experience.title}
                  onChange={(e) => handleExperienceChange(index, "title", e.target.value)}
                  className="form-inputs"
                />
                <input
                  type="text"
                  placeholder="Company"
                  value={experience.company}
                  onChange={(e) => handleExperienceChange(index, "company", e.target.value)}
                  className="form-inputs"
                />
                <Calendar
                  value={experience.startDate}
                  onChange={(date) => handleExperienceChange(index, "startDate", date)}
                  placeholder="Start Date"
                />
                <Calendar
                  value={experience.endDate}
                  onChange={(date) => handleExperienceChange(index, "endDate", date)}
                  placeholder="End Date"
                />
                <button
                  type="button"
                  onClick={() => removeExperience(index)}
                  className="remove-button"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addExperience}
              className="add-button"
            >
              Add Experience
            </button>
          </div>

          <button
            type="submit"
            className="submit-button"
          >
            Save Profile
          </button>
        </form>
      </div>
    </>
  );
}

export default Profile;
