import React, { useContext, useState, useEffect, useRef } from "react";
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
import { MyContext } from "../context";

const ENV = process.env.REACT_APP_ENV || "production";
const API_URL_SAVED = API_URLS[ENV] + "/addJobPost/savedJobs";
const API_URL_SIGNOUT = API_URLS[ENV] + "/signOut";
const API_URL_SESSION = API_URLS[ENV] + "/signIn/sessioncheck";

function Saved() {
  const { userType, isValid ,userID } = useContext(MyContext);
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
      if (!isValid || !userID) {
        console.warn("Invalid session. Redirecting to login.");
        //navigate("/SignIn");
        return;
      }
  
      setLoading(true);
      try {
        console.log(`Fetching saved jobs for userID: ${userID}`);
        const response = await axios.get(`${API_URL_SAVED}?userID=${userID}`);
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
  }, [isValid, userID, navigate]);

  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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

  const handleSettings = () => navigate("/Setting");
  const handleProfile = () => navigate("/Profile");
  const handleOnSaved = () => navigate("/Saved");

  const handleShareJob = (jobID) => {
    const shareLink = `${window.location.origin}/viewjobs/${jobID}`;
    navigator.clipboard.writeText(shareLink).then(
      () => alert("Job link copied to clipboard!"),
      (err) => console.error("Error copying job link:", err)
    );
  };

  return (
    <>
      {isMobile ? (
        <MobileNav
          toggleFilterDetails={toggleFilterDetails}
          toggleUserDetails={toggleUserDetails}
        />
      ) : (
        <JobScreenNav
          toggleFilterDetails={toggleFilterDetails}
          toggleUserDetails={toggleUserDetails}
          toggleNotification={toggleNotification}
        />
      )}
      {showNotification && <Notification />}
      {showUserDetails && (
        <UserDetails
          onLogout={handleLogout}
          onSettings={handleSettings}
          onProfile={handleProfile}
          onSaved={handleOnSaved}
        />
      )}
      {showFilter && <Filter onToggleFilter={toggleFilterDetails} />}

      <div className="savedJobsContainer" ref={savedJobsContainerRef}>
        { savedJobs.length === 0 ? (
          <p>No saved jobs found.</p>
        ) : (
          <div className="jobcontainer">
            {savedJobs.map((job) => (
              <div key={job.jobID} onClick={() => handleJobCardClick(job)}>
                <JobCard job={job} />
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedJob && (
       <div
       className="Selectedjob"
       style={{
         paddingLeft: '20px',
         position: 'fixed',
         width: '100%',
         top: '0', 
         left: '0',
         right: '0',
         bottom: '0',
         backgroundColor: 'white',
         zIndex: '998',
         overflowY: 'auto',
         marginBottom: '7%',
       }}
     >
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
