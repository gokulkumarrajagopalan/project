import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import JobCard from "../JobPost/JobCard";
import JobScreenNav from "../JobPost/Navigation/JobScreenNav";
import MobileNav from "../JobPost/Navigation/MobileNav";
import Notification from "../Components/notification";
import Filter from "../Components/Filter";
import API_URLS from "../config";
import JobPostScreenSub from "../JobPost/JobPostScreenSub";
import UserDetails from "../Components/UserDetails";

const ENV = process.env.REACT_APP_ENV || "production";
const API_URL_SAVED = API_URLS[ENV] + "/savedJobs";
const API_URL_SIGNOUT = API_URLS[ENV] + "/signOut";
const API_URL_SESSION = API_URLS[ENV] + "/signIn/sessioncheck";

function Saved() {
  const [savedJobs, setSavedJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [email, setEmail] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [loading, setLoading] = useState(true);

  const savedJobsContainerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSavedJobs = async () => {
      setLoading(true);
      try {
        const response = await axios.get(API_URL_SAVED);
        setSavedJobs(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching saved jobs:", error);
        setLoading(false);
      }
    };

    fetchSavedJobs();
  }, []);

  useEffect(() => {
    axios.defaults.withCredentials = true;

    const fetchSessionData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(API_URL_SESSION);
        const valid = res.data.valid;
        const userEmail = res.data.email;

        if (valid) {
          setEmail(userEmail);
          console.log("email", userEmail);
        }
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchSessionData();
  }, [navigate]);

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleJobCardClick = (job) => {
    setSelectedJob(job);
    navigate(`/saved?jobid=${job.jobID}`);
  };

  const toggleUserDetails = () => {
    setShowUserDetails(!showUserDetails);
    setShowFilter(false);
    setShowNotification(false);
  };

  const toggleFilterDetails = () => {
    setShowFilter(!showFilter);
    setShowUserDetails(false);
    setShowNotification(false);
  };

  const handleLogout = async () => {
    try {
      await axios.get(API_URL_SIGNOUT);
      navigate("/SignIn");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const toggleNotification = () => {
    setShowNotification(!showNotification);
    setShowUserDetails(false);
    setShowFilter(false);
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

  const handleShareJob = (jobID) => {
    const shareLink = `${window.location.origin}/viewjobs/${jobID}`;
    navigator.clipboard
      .writeText(shareLink)
      .then(() => alert("Job link copied to clipboard!"))
      .catch((err) => console.error("Error copying job link:", err));
  };

  return (
    <>
      <JobScreenNav
        toggleFilterDetails={toggleFilterDetails}
        toggleUserDetails={toggleUserDetails}
        toggleNotification={toggleNotification}
      />

      {showNotification && (
        <Notification
          showNotification={showNotification}
          ontoggleNotification={toggleNotification}
        />
      )}

      {showUserDetails && (
        <UserDetails
          showUserDetails={showUserDetails}
          onToggleUserDetails={toggleUserDetails}
          onLogout={handleLogout}
          onSettings={handleSettings}
          onProfile={handleProfile}
          onSaved={handleOnSaved}
        />
      )}

      {showFilter && (
        <Filter
          showFilter={showFilter}
          onToggleFilter={toggleFilterDetails}
        />
      )}

      <MobileNav
        toggleFilterDetails={toggleFilterDetails}
        toggleUserDetails={toggleUserDetails}
      />

      <div className="savedJobsContainer" ref={savedJobsContainerRef}>
        <div className="jobcontainer">
          {savedJobs.map((job) => (
            <div key={job.jobID} onClick={() => handleJobCardClick(job)}>
              <JobCard job={job} />
            </div>
          ))}
        </div>
      </div>

      {selectedJob && (
        <div className="Selectedjob">
          <JobPostScreenSub
            job={selectedJob}
            onClose={() => {
              setSelectedJob(null);
              navigate("/Saved");
            }}
            onShare={handleShareJob}
          />
        </div>
      )}
    </>
  );
}

export default Saved;
