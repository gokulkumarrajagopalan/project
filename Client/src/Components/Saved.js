import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import JobCard from "../JobPost/JobCard";
import JobPostScreenSub from "../JobPost/JobPostScreenSub";
import { API_URLS } from "../config";
import { MyContext } from "../context";

const ENV = process.env.REACT_APP_ENV || "production";
const API_URL_SAVED = API_URLS[ENV] + "/addJobPost/savedJobs";

function Saved() {
  const { userType, isValid, userID } = useContext(MyContext);
  const [savedJobs, setSavedJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSavedJobs = async () => {
      if (!isValid || !userID) {
        console.warn("Invalid session. Redirecting to login.");
        navigate("/SignIn");
        return;
      }

      setLoading(true);
      try {
        const response = await axios.get(`${API_URL_SAVED}/userType`);
        if (response.status === 200) {
          setSavedJobs(response.data);
        } else {
          console.warn("Unexpected API response:", response);
        }
      } catch (error) {
        console.error("Error fetching saved jobs:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSavedJobs();
  }, [ userID, navigate]);

  const handleJobCardClick = (job) => {
    setSelectedJob(job);
    navigate(`/saved?jobid=${job.jobID}`);
  };

  return (
    <>
   <div className="jobcontainer">
        {loading ? (
          <p>Loading saved jobs...</p>
        ) : (
          savedJobs.map((job) => (
            <div key={job.jobID} onClick={() => handleJobCardClick(job)}>
              <JobCard job={job} />
            </div>
          ))
        )}
      </div>

      {selectedJob && 
      <div className="Selectedjob">
          <JobPostScreenSub
            job={selectedJob}
            onClose={() => {
              setSelectedJob(null);
              navigate("/Saved");
            }}
          />
          </div>
        
        
      }

      
    </>
  );
}

export default Saved;