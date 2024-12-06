import React, { useState, useEffect } from "react";
import Textbox from "./Textbox"; 
import { API_URLS, API_UI_URLS } from "../config";

const ENV = process.env.REACT_APP_ENV || "production";
const API_URL_GET_PROFILE = API_URLS[ENV] + "/addProfile/getProfile/";
const API_URL_CREATE_PROFILE = API_URLS[ENV] + "/addProfile/createProfile/";

function Profile() {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    jobTitle: "",
    company: "",
    experienceYears: "",
    education: "",
    skills: [],
    resume: null,
    profilePicture: null,
  });

  const [isEditing, setIsEditing] = useState(true);

  
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(API_URL_GET_PROFILE);
        const data = await response.json();
        if (data.profile) {
          
          setProfile(data.profile);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setProfile({
      ...profile,
      [name]: files[0], 
    });
  };

  const handleSkillsChange = (skills) => {
    setProfile({
      ...profile,
      skills,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsEditing(false);
    await saveProfile(profile); 
  };

  const handleEditClick = () => {
    setIsEditing(true); 
  };

  const saveProfile = async (profileData) => {
    try {
      const formData = new FormData();
      Object.keys(profileData).forEach((key) => {
        if (profileData[key] !== null) {
          formData.append(key, profileData[key]);
        }
      });

      const response = await fetch(API_URL_CREATE_PROFILE, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to save profile");
      }

      const result = await response.json();
      console.log("Profile saved successfully:", result);
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  const renderButton = (field) => {
    return (
      <button
        type="button"
        onClick={handleEditClick}
        className="profile-button edit-button"
      >
        {profile[field] ? "Edit" : "Add"}
      </button>
    );
  };

  return (
    <div className="profile-container">
      <div className="profile-picture-container">
        {profile.profilePicture ? (
          <img
            src={URL.createObjectURL(profile.profilePicture)}
            alt="Profile"
            className="profile-picture"
          />
        ) : (
          <div className="empty-profile-picture" />
        )}
      </div>
      {!isEditing ? (
        <button
          onClick={handleEditClick}
          className="profile-button edit-button"
        >
          Edit Profile
        </button>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Your Profile</h2>

          <div className="profile-section">
            <h3>Personal Information</h3>
            {renderButton("firstName")}
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={profile.firstName || ""}
              onChange={handleChange}
              className="profile-input"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={profile.lastName || ""}
              onChange={handleChange}
              className="profile-input"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={profile.phone || ""}
              onChange={handleChange}
              className="profile-input"
            />
          </div>

          <div className="profile-section">
            <h3>Professional Information</h3>
            {renderButton("jobTitle")}
            <input
              type="text"
              name="jobTitle"
              placeholder="Job Title"
              value={profile.jobTitle || ""}
              onChange={handleChange}
              className="profile-input"
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={profile.company || ""}
              onChange={handleChange}
              className="profile-input"
            />
            <input
              type="number"
              name="experienceYears"
              placeholder="Years of Experience"
              value={profile.experienceYears || ""}
              onChange={handleChange}
              className="profile-input"
            />
          </div>

          <div className="profile-section">
            <h3>Education</h3>
            {renderButton("education")}
            <input
              type="text"
              name="education"
              placeholder="Highest Degree"
              value={profile.education || ""}
              onChange={handleChange}
              className="profile-input"
            />
          </div>

          <div className="profile-section">
            <h3>Skills</h3>
            {renderButton("skills")}
            <Textbox
              label="Add Your Skills"
              placeholder="Type and select skills"
              value={profile.skills || []}
              onChange={handleSkillsChange}
            />
          </div>

          <div className="profile-section">
            <h3>Upload Documents</h3>
            <input
              type="file"
              name="resume"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              className="profile-input-file"
            />
            <input
              type="file"
              name="profilePicture"
              onChange={handleFileChange}
              accept=".jpg,.jpeg,.png"
              className="profile-input-file"
            />
          </div>

          <button type="submit" className="profile-button save-button">
            Save Profile
          </button>
        </form>
      )}
    </div>
  );
}

export default Profile;
