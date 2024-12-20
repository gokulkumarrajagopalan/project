import React, { useState, useEffect, useRef, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import JobCard from "../JobPost/JobCard";
import JobScreenNav from "../JobPost/Navigation/JobScreenNav";
import JobPostScreenSub from "../JobPost/JobPostScreenSub";
import UserDetails from "../Components/UserDetails";
import Filter from "../Components/Filter";
import { API_URLS, API_UI_URLS } from "../config";
import { MyContext } from "../context";
import MobileNav from "../JobPost/Navigation/MobileNav";
import Notification from "../Components/notification";
import Loader from "../Components/Loader";

const ENV = process.env.REACT_APP_ENV || "production";
const API_URL_SAVED = API_URLS[ENV] + "/addJobPost/savedJobs";
const API_URL_SIGNOUT = API_URLS[ENV] + "/signOut";

function Saved() {
  const { userType, isValid, userID } = useContext(MyContext);
  const [savedJobs, setSavedJobs] = useState([]);
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showSearch, setShowSearch] = useState(false);
  const jobPostContainerRef = useRef(null);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleBackNavigation = () => {
      if (showSelectedJob) {
        setShowSelectedJob(false);
        document.body.classList.remove("no-scroll");
        navigate("/saved");
      }
    };

    if (showSelectedJob) {
      window.addEventListener("popstate", handleBackNavigation);
    }

    return () => {
      window.removeEventListener("popstate", handleBackNavigation);
    };
  }, [showSelectedJob, navigate]);

  useEffect(() => {
    const fetchSavedJobs = async () => {
      if (!isValid || !userID) {
        console.warn("Invalid session. Redirecting to login.");
        // navigate("/SignIn");
        // return;
      }

      setLoading(true);
      try {
         const response = await axios.get(`${API_URL_SAVED}/${userID}`);
        // const response = await axios.get(`${API_URL_SAVED}/1`);

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
  }, [userID, isValid, navigate]);

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
    const queryParams = new URLSearchParams(location.search);
    const jobID = queryParams.get("jobid");

    if (jobID && savedJobs.length > 0) {
      const selectedJob = savedJobs.find((job) => job.jobID === jobID);

      if (selectedJob) {
        setSelectedJob(selectedJob);
        setShowSelectedJob(true);
        document.body.classList.add("no-scroll");
      }
    }
  }, [location.search, savedJobs]);

  const toggleUserDetails = () => {
    setShowUserDetails(!showUserDetails);
    setShowFilter(false);
    setShowNotification(false);
  };

  const toggleFilterDetails = () => {
    setShowFilter(!showFilter);
    setShowUserDetails(false);
    setShowNotification(false);
    setShowSelectedJob(false);
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
    setShowSelectedJob(false);
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

  const handleJobPost = () => {
    navigate("/JobpostDetail");
  };

  const handleShareJob = (jobID) => {
    const shareLink = `${window.location.origin}/viewjobs/${jobID}`;
    navigator.clipboard
      .writeText(shareLink)
      .then(() => alert("Job link copied to clipboard!"))
      .catch((err) => console.error("Error copying job link:", err));
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

  const filteredJobs = savedJobs.filter((job) => {
    const postedDate = new Date(job.Posted_Date);
    const currentDate = new Date();
    const differenceInDays = Math.floor(
      (currentDate - postedDate) / (1000 * 60 * 60 * 24)
    );

    return (
      job.role.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (searchLocation
        ? job.location.toLowerCase().includes(searchLocation.toLowerCase())
        : true) &&
      (skills ? job.skills.toLowerCase().includes(skills.toLowerCase()) : true) &&
      (company
        ? job.companyName.toLowerCase().includes(company.toLowerCase())
        : true) &&
      (!workMode ||
        workMode.length === 0 ||
        workMode.some((mode) => job.workMode && job.workMode.includes(mode))) &&
      (!employmentType ||
        employmentType.length === 0 ||
        employmentType.some(
          (type) => job.employmentType && job.employmentType.includes(type)
        )) &&
      (experience
        ? job.experience.toLowerCase().includes(experience.toLowerCase())
        : true) &&
      (salary ? job.salary.toLowerCase().includes(salary.toLowerCase()) : true) &&
      (sort === "" || parseInt(sort) === 0 || differenceInDays <= parseInt(sort))
    );
  });

  const showJobContainer = !showNotification && !showFilter;

  const handleJobCardClick = (job) => {
    setSelectedJob(job);
    setShowSelectedJob(true);
    navigate(`/saved?jobid=${job.jobID}`);
    document.body.classList.add("no-scroll");
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
      <div className={`notificationContainer ${showNotification ? "active" : "hidden"}`}>
        {showNotification && (
          <Notification
            showNotification={showNotification}
            ontoggleNotification={toggleNotification}
          />
        )}
      </div>
      {showUserDetails && (
        <UserDetails
          showUserDetails={showUserDetails}
          onToggleUserDetails={toggleUserDetails}
          onLogout={handleLogout}
          onSettings={handleSettings}
          onProfile={handleProfile}
          onSaved={handleOnSaved}
          onJobPost={handleJobPost}
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
      <div
        className={`jobPostContainer ${showFilter ? "inactive" : ""}`}
        ref={jobPostContainerRef}
      >
        {showJobContainer && (
          <div className="jobcontainer">
            <h3 className="center">Saved Jobs</h3>
            {loading ? (
              <Loader/>
            ) : (
              filteredJobs.map((job) => (
                <div key={job.jobID} onClick={() => handleJobCardClick(job)}>
                  <JobCard job={job} />
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {showSelectedJob && selectedJob && (
        <div className="Selectedjob">
          <JobPostScreenSub
            job={selectedJob}
            onClose={() => {
              setShowSelectedJob(false);
              document.body.classList.remove("no-scroll");
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

