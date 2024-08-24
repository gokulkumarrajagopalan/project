import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footer from "../Shared/Footer";
import SectionFour from "./SectionFour";
import NavBar from "./NavBar";
import JobSearchImg from "../Asset/jobsearchimg.jpg";
import { Helmet } from "react-helmet";

function Home() {
  const [jobSearch, setJobSearch] = useState("");
  const [location, setLocation] = useState("");
  const [activeButton, setActiveButton] = useState("Job");
  const [isRemote, setIsRemote] = useState(false);
  const [isOffline, setIsOffline] = useState(false);

  const classbControls = useAnimation();
  const quoteContainerControls = useAnimation();
  const quoteContainerRef = useRef(null);
  const classbRef = useRef(null);
  const navigate = useNavigate();

  function handleJobSearch(event) {
    setJobSearch(event.target.value);
  }

  function handleLocationChange(event) {
    setLocation(event.target.value);
  }

  function handleRemoteChange() {
    setIsRemote(!isRemote);
  }

  function handleOfflineChange() {
    setIsOffline(!isOffline);
  }

  function handleSearch() {
    navigate("/jobPostScreen", {
      state: {
        jobSearch,
        location,
        isRemote,
        isOffline,
        activeButton,
      },
    });
  }

  useEffect(() => {
    classbControls.start("show");
  }, [classbControls]);

  useEffect(() => {
    const handleScroll = () => {
      if (quoteContainerRef.current) {
        const { top, bottom } =
          quoteContainerRef.current.getBoundingClientRect();
        const isVisible = top < window.innerHeight && bottom >= 0;
        quoteContainerControls.start(isVisible ? "show" : "hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, [quoteContainerControls]);

  useEffect(() => {
    const handleScroll = () => {
      if (classbRef.current) {
        const { top, bottom } = classbRef.current.getBoundingClientRect();
        const isVisible = top < window.innerHeight && bottom >= 0;
        classbControls.start(isVisible ? "show" : "hidden");
      }
    };
  }, [classbControls]);

  return (
    <>
      <Helmet>
        <title>GDest</title>
        <meta
          name="description"
          content="Welcome to GDest.In, your go-to platform for job searches and career opportunities. Explore our listings and find your dream job today."
        />
        <meta
          name="keywords"
          content="GDest.In,GDest,gdest job search, careers, employment, job opportunities, home,LinkedIn,Naukri,freshersworld,indeed,fiver,workday,"
        />
        <meta property="og:title" content="Home - GDest.In" />
        <meta
          property="og:description"
          content="Welcome to GDest.In, your go-to platform for job searches and career opportunities. Explore our listings and find your dream job today."
        />
        <meta property="og:url" content="https://www.gdest.in/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.gdest.in/Asset/Logo.jpg"
        />
        <link rel="canonical" href="https://www.gdest.in/" />
      </Helmet>

      <div className="homeContainer">
        <NavBar />
        <div className="headsec_1">
          <motion.div
            className="classb"
            initial={{ opacity: 0, y: 40 }}
            animate={classbControls}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1.2, delay: 0.4 }}
            ref={classbRef}
          >
            <div className="container1">
              <div className="button-group">
                <div
                  className={`custom-button ${activeButton === "Job" ? "active" : ""}`}
                  onClick={() => setActiveButton("Job")}
                >
                  Job
                </div>
                <div
                  className={`custom-button ${activeButton === "Internship" ? "active" : ""}`}
                  onClick={() => setActiveButton("Internship")}
                >
                  Internship
                </div>
              </div>
              {activeButton === "Job" && (
                <div className="job-section">
                  <input
                    type="text"
                    value={jobSearch}
                    onChange={handleJobSearch}
                    placeholder="Enter Job Title "
                    className="textbox"
                  />
                  <input
                    type="text"
                    value={location}
                    onChange={handleLocationChange}
                    placeholder="Enter Location"
                    className="textbox"
                  />
                  <button onClick={handleSearch} className="search-button">
                    Search
                  </button>
                </div>
              )}
              {activeButton === "Internship" && (
                <div className="internship-section">
                  <input
                    type="text"
                    value={jobSearch}
                    onChange={handleJobSearch}
                    placeholder="Enter job title or keyword"
                    className="textbox"
                  />
                  <div className="work-type-options">
                    <label>
                      <input
                        type="checkbox"
                        value="Remote"
                        checked={isRemote}
                        onChange={handleRemoteChange}
                      />
                      Remote
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        value="Offline"
                        checked={isOffline}
                        onChange={handleOfflineChange}
                      />
                      Offline
                    </label>
                  </div>
                  <button onClick={handleSearch} className="search-button">
                    Search
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
        <div className="headsec_2" ref={quoteContainerRef}>
          <motion.div
            className="quoteContainer"
            initial={{ opacity: 0, x: -100 }}
            animate={quoteContainerControls}
            variants={{
              hidden: { opacity: 0, x: -100 },
              show: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="quoteText">
              <h3> Steps for Effective Job Pursuit </h3>
              <img
                src={JobSearchImg}
                alt="Job Search"
                className="jobSearchImage"
              />
              <motion.p
                className="quote-p"
                initial={{ opacity: 0, x: -100 }}
                animate={quoteContainerControls}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  show: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Thoroughly analyze your skills, interests, and values to align
                with ideal job prospects.
              </motion.p>
              <motion.p
                className="quote-p"
                initial={{ opacity: 0, x: -100 }}
                animate={quoteContainerControls}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  show: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Create a compelling CV, accentuating accomplishments, and
                qualifications for prospective employers.
              </motion.p>
              <motion.p
                className="quote-p"
                initial={{ opacity: 0, x: -100 }}
                animate={quoteContainerControls}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  show: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Explore our extensive databases showcasing premier job openings
                across diverse industries.
              </motion.p>
              <motion.p
                className="quote-p"
                initial={{ opacity: 0, x: -100 }}
                animate={quoteContainerControls}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  show: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Research: Gain insights into targeted organizations, including
                their culture and potential roles.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
      <SectionFour />
      <Footer />
    </>
  );
}

export default Home;
