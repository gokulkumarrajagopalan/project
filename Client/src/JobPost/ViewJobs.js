import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import JobCard from "./JobCard";
import JobScreenNav from "./Navigation/JobScreenNav";
import ViewJobSub from "./ViewJobSub";
import UserDetails from "../Components/UserDetails";
import Filter from "../Components/Filter";
import { API_URLS, API_UI_URLS } from "../config";
import MobileNav from "./Navigation/MobileNav";
import Notification from "../Components/notification";

const ENV = process.env.REACT_APP_ENV || "production";
const API_URL = API_URLS[ENV] + "/addJobPost/listJobPosts";
const API_URL_SIGNOUT = API_URLS[ENV] + "/signOut";
const API_URL_SESSION = API_URLS[ENV] + "/signIn/sessioncheck";

function ViewJobs() {
  const [jobData, setJobData] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [skills, setSkills] = useState("");
  const [company, setCompany] = useState("");
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showSelectedJob, setShowSelectedJob] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [sort, setSort] = useState("");
  const [workMode, setWorkMode] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [salary, setSalary] = useState("");
  const [experience, setExperience] = useState("");
  const [email, setEmail] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showSearch, setShowSearch] = useState(false);
  const jobPostContainerRef = useRef(null);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();
  const { jobid } = useParams();
  const jobIdparam = jobid;

  useEffect(() => {
    const fetchJobData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(API_URL);
        setJobData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching job data:", error);
        setLoading(false);
      }
    };

    fetchJobData();
  }, []);

  useEffect(() => {
    axios.defaults.withCredentials = true;

    const fetchSessionData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(API_URL_SESSION, {});
        const valid = res.data.valid;
        const userEmail = res.data.email;

        if (valid) {
          setEmail(userEmail);
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
      if (!isMobileView) {
        setShowSearch(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (jobid) {
      const fetchJobDetails = async () => {
        try {
          const response = await axios.get(API_URL);
          const job = response.data.find((job) => job.jobID.toString() === jobIdparam); 
          if (job) {
            setSelectedJob(job);
            setShowSelectedJob(true);
          } else {
            console.log("No job found with the given ID");
            setSelectedJob(null);
            setShowSelectedJob(false);
          }
        } catch (error) {
          console.error("Error fetching job details:", error);
        }
      };
      fetchJobDetails();
    }
  }, [jobid, jobIdparam]);

  const handleJobCardClick = (job) => {
    setSelectedJob(job);
    setShowSelectedJob(true);
    navigate(`/viewjobs/${job.jobID}`);
  };

  const handleSearch = (searchValue) => {
    setSearchQuery(searchValue);
  };

  const handleFilter = (
    location,
    skills,
    company,
    sort,
    workMode,
    experience,
    employmentType,
    salary
  ) => {
    setSearchLocation(location);
    setSkills(skills);
    setCompany(company);
    setWorkMode(workMode);
    setExperience(experience);
    setSort(sort);
    setEmploymentType(employmentType);
    setSalary(salary);
    setShowFilter(false);
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
      navigate("/signin");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const toggleNotification = () => {
    setShowNotification(!showNotification);
    setShowUserDetails(false);
    setShowFilter(false);
  };

  const handleSettings = () => {};

  const handleShareJob = (jobID) => {
    const shareLink = `${window.location.origin}/viewjobs/${jobID}`;
    navigator.clipboard.writeText(shareLink)
      .then(() => alert("Job link copied to clipboard!"))
      .catch((err) => console.error("Error copying job link:", err));
  };

  return (
    <>
      <JobScreenNav
        onSearch={handleSearch}
        toggleFilterDetails={toggleFilterDetails}
        toggleUserDetails={toggleUserDetails}
        toggleNotification={toggleNotification}
        showSearch={showSearch}
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
        />
      )}
      {showFilter && (
        <Filter
          showFilter={showFilter}
          onToggleFilter={toggleFilterDetails}
          onFilter={handleFilter}
        />
      )}
      <MobileNav
        onSearch={handleSearch}
        toggleFilterDetails={toggleFilterDetails}
        toggleUserDetails={toggleUserDetails}
        setShowSearch={setShowSearch}
      />

      {showSelectedJob && selectedJob ? (
        <div className="viewjobs_section">
          <ViewJobSub
            job={selectedJob}
            onClose={() => {
              setShowSelectedJob(false);
              navigate("/viewjobs");
            }}
            onShare={handleShareJob}
          />
        </div>
      ) : (
        <div className="Selectedjob">
          <p>No job found with the given ID.</p>
        </div>
      )}
    </>
  );
}

export default ViewJobs;
