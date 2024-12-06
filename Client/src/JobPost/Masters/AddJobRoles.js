import React, { useState } from "react";
import axios from "axios";
import { API_URLS, API_UI_URLS } from "../../config";

const ENV = process.env.REACT_APP_ENV || "production";
const API_URL = API_URLS[ENV] + "/AddMasterSkills";

const AddJobRoles = () => {
  const [JobRole, setJobRole] = useState("");
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setJobRole(event.target.value.trim());
  };

  const handleSaveJobRole = async (e) => {
    e.preventDefault();

    if (JobRole.trim() === "") {
      setError("Please Enter Job Role");
      return;
    }

    try {
      const response = await axios.post(API_URL, { JobRole });

      if (response.status === 201) {
        console.log("Data saved successfully");
      } else {
        throw new Error("Failed to save data");
      }
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to save data");
    }
  };

  return (
    <>
      <h2>Add Job Roles</h2>
      <h5>Enter the Job Role</h5>
      <input type="text" value={JobRole} onChange={handleInputChange} />
      <button onClick={handleSaveJobRole}>Save</button>
      {error && <p>{error}</p>}
    </>
  );
};

export default AddJobRoles;
