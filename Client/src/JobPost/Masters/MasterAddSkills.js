import React, { useState } from "react";
import axios from "axios";
import { API_URLS, API_UI_URLS } from "../../config";

const ENV = process.env.REACT_APP_ENV || "production";
const API_URL = API_URLS[ENV] + "/AddMasterSkills";

const MasterAddSkills = () => {
  const [Skills, setSkills] = useState("");
  const [error, setError] = useState(null);

  const handleInputSkill = (e) => {
    setSkills(e.target.value.trim());
  };

  const handleInputSave = async (e) => {
    e.preventDefault();

    if (Skills.trim() === "") {
      setError("Please enter a skill");
      return;
    }

    try {
      const response = await axios.post(API_URL, {
        Skills,
      });

      if (response.status === 201) {
        console.log("Data saved successfully");
        setSkills(""); // Clear input field after saving
      } else {
        throw new Error("Failed to save the data");
      }
    } catch (error) {
      console.log("Failed to save the data", error);
      setError("Failed to save the data");
    }
  };

  return (
    <>
      <h2>Add Skills</h2>
      <h5>Enter the Skills</h5>
      <input type="text" value={Skills} onChange={handleInputSkill} />

      <button onClick={handleInputSave}>Save</button>

      {error && <p>{error}</p>}
    </>
  );
};

export default MasterAddSkills;
