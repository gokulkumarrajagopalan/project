import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import JobCard from "./JobCard";
import JobScreenNav from "./Navigation/JobScreenNav";
import JobPostScreenSub from "./JobPostScreenSub";
import UserDetails from "../Components/UserDetails";
import Filter from "../Components/Filter";
import API_URLS from "../config";
import MobileNav from "./Navigation/MobileNav";
import Notification from "../Components/notification";
import Loader from "../Loader";

const ENV = process.env.REACT_APP_ENV || "production";
const API_URL = API_URLS[ENV] + "/addJobPost/listJobPosts";
const API_URL_SIGNOUT = API_URLS[ENV] + "/signOut";
const API_URL_SESSION = API_URLS[ENV] + "/signIn/sessioncheck";

function JobPostScreen() {
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

  useEffect(() => {
    const fetchJobData = async () => {
      setLoading(true); // Start loading
      try {
        const response = await axios.get(API_URL);
        setJobData(response.data);
        setLoading(false); // Stop loading
      } catch (error) {
        console.error("Error fetching job data:", error);
        setLoading(false); // Stop loading on error
      }
    };

    fetchJobData();
  }, []);

  useEffect(() => {
    axios.defaults.withCredentials = true;

    const fetchSessionData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(API_URL_SESSION, {
          withCredentials: true,
        });
        const valid = res.data.valid;
        const userEmail = res.data.email;

        if (valid) {
          setEmail(userEmail);
          console.log("email", userEmail);
        } else {
          // Handle invalid session
        }
        setLoading(false); // Stop loading
      } catch (err) {
        console.log(err);
        setLoading(false); // Stop loading on error
      }
    };

    fetchSessionData();
  }, []);

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

  const handleJobCardClick = (job) => {
    setSelectedJob(job);
    setShowSelectedJob(true);
    document.body.classList.add("no-scroll"); // Prevent background scroll
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
    salary,
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

  const filteredJobs = jobData.filter((job) => {
    const postedDate = new Date(job.Posted_Date);
    const currentDate = new Date();
    const differenceInDays = Math.floor(
      (currentDate - postedDate) / (1000 * 60 * 60 * 24),
    );

    return (
      job.role.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (searchLocation
        ? job.location.toLowerCase().includes(searchLocation.toLowerCase())
        : true) &&
      (skills
        ? job.skills.toLowerCase().includes(skills.toLowerCase())
        : true) &&
      (company
        ? job.companyName.toLowerCase().includes(company.toLowerCase())
        : true) &&
      (!workMode ||
        workMode.length === 0 ||
        workMode.some((mode) => job.workMode && job.workMode.includes(mode))) &&
      (!employmentType ||
        employmentType.length === 0 ||
        employmentType.some(
          (type) => job.employmentType && job.employmentType.includes(type),
        )) &&
      (experience
        ? job.experience.toLowerCase().includes(experience.toLowerCase())
        : true) &&
      (salary
        ? job.salary.toLowerCase().includes(salary.toLowerCase())
        : true) &&
      (sort === "" ||
        parseInt(sort) === 0 ||
        differenceInDays <= parseInt(sort))
    );
  });

  const showJobContainer = !showUserDetails && !showNotification && !showFilter;

  if (loading) {
    return <Loader />;
  }

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
      <div className="jobPostContainer" ref={jobPostContainerRef}>
        Hi, {email}
        {showJobContainer && (
          <div className="jobcontainer">
            {filteredJobs.map((job) => (
              <div key={job.jobID} onClick={() => handleJobCardClick(job)}>
                <JobCard job={job} />
              </div>
            ))}
          </div>
        )}
      </div>

      {showSelectedJob && (
        <div className="Selectedjob">
          <JobPostScreenSub
            job={selectedJob}
            onClose={() => {
              setShowSelectedJob(false);
              document.body.classList.remove("no-scroll"); // Allow background scroll
            }}
          />
        </div>
      )}
    </>
  );
}

export default JobPostScreen;
