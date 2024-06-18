import React, { useState, useEffect } from "react";
import axios from "axios";
import JobCard from "./JobCard";
import JobScreenNav from "./Navigation/JobScreenNav";
import JobPostScreenSub from "./JobPostScreenSub";
import UserDetails from "../Components/UserDetails";
import Filter from "../Components/Filter";
import API_URLS from "../config";
import MobileNav from "./Navigation/MobileNav";
import Notification from "../Components/notification";

const ENV = process.env.REACT_APP_ENV || "production";
const API_URL = API_URLS[ENV] + "/addJobPost/listJobPosts";
const API_URL_SIGNOUT = API_URLS[ENV] + "/signOut";
const API_URL_SESSION = API_URLS[ENV] + "/signIn/sessioncheck"

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
  const [showJobContainer, setShowJobContainer] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [sort, setSort] = useState("");
  const [workMode, setWorkMode] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [salary, setSalary] = useState("");
  const [experience, setExperience] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await axios.get(API_URL);
        setJobData(response.data);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    fetchJobData();
  }, []);

  useEffect(() => {
    axios.defaults.withCredentials = true;

    const fetchSessionData = async () => {
      try {
        const res = await axios.get(API_URL_SESSION, {
          withCredentials: true, // Ensure this is within the config object
        });
        const valid = res.data.valid;
        const userEmail = res.data.email; // use userEmail to avoid shadowing

        if (valid) {
          setEmail(userEmail);
          console.log("email", userEmail);
        } else {
          // Handle invalid session
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchSessionData();
  }, []);
  const handleJobCardClick = (job) => {
    setSelectedJob(job);
    setShowSelectedJob(true);
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
    setShowJobContainer(true);
    setShowNotification(false);
  };

  const toggleUserDetails = () => {
    setShowUserDetails(!showUserDetails);
    setShowFilter(false);
    setShowJobContainer(true);
    setShowNotification(false);
  };

  const toggleFilterDetails = () => {
    setShowFilter(!showFilter);
    setShowUserDetails(false);
    setShowJobContainer(!showJobContainer);
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
    setShowJobContainer(!showJobContainer);
    setShowUserDetails(false);
    setShowFilter(false);
    setShowUserDetails(false);
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

  return (
    <>
      <JobScreenNav
        onSearch={handleSearch}
        toggleFilterDetails={toggleFilterDetails}
        toggleUserDetails={toggleUserDetails}
        toggleNotification={toggleNotification}
      />

      {showNotification && (
        <Notification
          showNotification={showNotification}
          ontoggleNOtificaton={toggleNotification}
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
      />
      <div className="jobPostContainer">
      Hi,{email}
        {showJobContainer && (
          <div className="jobcontainer">
            {filteredJobs.map((job) => (
              <div key={job.jobID} onClick={() => handleJobCardClick(job)}>
                <JobCard job={job} />
              </div>
            ))}
          </div>
        )}
        {showSelectedJob && (
          <div className="Selectedjob">
            <JobPostScreenSub
              job={selectedJob}
              onClose={() => setShowSelectedJob(false)}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default JobPostScreen;
