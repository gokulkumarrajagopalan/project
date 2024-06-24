import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footer from "../Shared/Footer";
import Button from "../Components/button";
import SectionFour from "./SectionFour";
import NavBar from "./NavBar";
import JobSearchImg from "../Asset/jobsearchimg.jpg";

import { Helmet } from "react-helmet";

function Home() {
  const [jobSearch, setJobSearch] = useState("");
  const [location, setLocation] = useState("");
  const [activeButton, setActiveButton] = useState("Job");
  const [rentedHouseType, setRentedHouseType] = useState("");
  const [sharingOption, setSharingOption] = useState("");
  const [gender, setGender] = useState("");

  const classbControls = useAnimation();
  const quoteContainerControls = useAnimation();
  const quoteContainerRef = useRef(null);
  const classbRef = useRef(null);

  function handleJobSearch(event) {
    setJobSearch(event.target.value);
  }

  function handleLocationChange(event) {
    setLocation(event.target.value);
  }

  function handleRentedHouseTypeChange(event) {
    setRentedHouseType(event.target.value);
    setSharingOption("");
    setGender("");
  }

  function handleSharingOptionChange(event) {
    setSharingOption(event.target.value);
  }

  function handleGenderChange(event) {
    setGender(event.target.value);
  }

  function handleSearch() {
    // Implement search functionality here
    console.log(`Searching for ${jobSearch} in ${location}`);
    if (activeButton === "Rented House") {
      console.log(`Searching for ${rentedHouseType} in ${location}`);
      if (rentedHouseType === "PG") {
        console.log(`Gender: ${gender}, Sharing Option: ${sharingOption}`);
      } else {
        console.log(`Sharing Option: ${sharingOption}`);
      }
    }
  }

  function handleApplyJob() {
    window.location.href = "/jobPostScreen";
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [quoteContainerControls]);

  useEffect(() => {
    const handleScroll = () => {
      if (classbRef.current) {
        const { top, bottom } = classbRef.current.getBoundingClientRect();
        const isVisible = top < window.innerHeight && bottom >= 0;
        classbControls.start(isVisible ? "show" : "hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
          content="GDest.In,GDest,gdest job search, careers, employment, job opportunities, home"
        />
        <meta property="og:title" content="Home - dest.In" />
        <meta
          property="og:description"
          content="Welcome to GDest.In, your go-to platform for job searches and career opportunities. Explore our listings and find your dream job today."
        />
        <meta property="og:url" content="https://www.gdest.in/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.dest.in/Asset/Logo.jpg"
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
                {/* <div
                  className={`custom-button ${activeButton === "Rented House" ? "active" : ""}`}
                  onClick={() => setActiveButton("Rented House")}
                >
                  Rented House
                </div> */}
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
                  <input
                    type="text"
                    value={location}
                    onChange={handleLocationChange}
                    placeholder="Enter location"
                    className="textbox"
                  />
                  <button onClick={handleSearch} className="search-button">
                    Search
                  </button>
                </div>
              )}
              {/* {activeButton === "Rented House" && (
                <div className="rented-house-section">
                  <input
                    type="text"
                    value={location}
                    onChange={handleLocationChange}
                    placeholder="Enter location"
                    className="textbox"
                  />
                  <div className="rented-house-options">
                    <label>
                      <input
                        type="radio"
                        value="Full House"
                        checked={rentedHouseType === "Full House"}
                        onChange={handleRentedHouseTypeChange}
                      />
                      Full House
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="PG"
                        checked={rentedHouseType === "PG"}
                        onChange={handleRentedHouseTypeChange}
                      />
                      PG
                    </label>
                  </div>
                  {rentedHouseType === "Full House" && (
                    <div className="sharing-options">
                      <label>
                        <input
                          type="checkbox"
                          value="1 BHK"
                          checked={sharingOption === "1 BHK"}
                          onChange={handleSharingOptionChange}
                        />
                        1 BHK
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          value="2 BHK"
                          checked={sharingOption === "2 BHK"}
                          onChange={handleSharingOptionChange}
                        />
                        2 BHK
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          value="3 BHK"
                          checked={sharingOption === "3 BHK"}
                          onChange={handleSharingOptionChange}
                        />
                        3 BHK
                      </label>
                    </div>
                  )}
                  {rentedHouseType === "PG" && (
                    <div className="pg-options">
                      <div className="gender-options">
                        <label>
                          <input
                            type="radio"
                            value="Male"
                            checked={gender === "Male"}
                            onChange={handleGenderChange}
                          />
                          Male
                        </label>
                        <label>
                          <input
                            type="radio"
                            value="Female"
                            checked={gender === "Female"}
                            onChange={handleGenderChange}
                          />
                          Female
                        </label>
                      </div>
                      <div className="sharing-options">
                        <label>
                          <input
                            type="checkbox"
                            value="1 Sharing"
                            checked={sharingOption === "1 Sharing"}
                            onChange={handleSharingOptionChange}
                          />
                          1 Sharing
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            value="2 Sharing"
                            checked={sharingOption === "2 Sharing"}
                            onChange={handleSharingOptionChange}
                          />
                          2 Sharing
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            value="3 Sharing"
                            checked={sharingOption === "3 Sharing"}
                            onChange={handleSharingOptionChange}
                          />
                          3 Sharing
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            value="3+ Sharing"
                            checked={sharingOption === "3+ Sharing"}
                            onChange={handleSharingOptionChange}
                          />
                          3+ Sharing
                        </label>
                      </div>
                    </div>
                  )}
                  <button onClick={handleSearch} className="search-button">
                    Search
                  </button>
                </div>
              )} */}
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
            transition={{ duration: 1.2, delay: 0.2 }}
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
                transition={{ duration: 1.2, delay: 0.2 }}
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
                transition={{ duration: 1.2, delay: 0.4 }}
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
                transition={{ duration: 1.2, delay: 0.6 }}
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
                transition={{ duration: 1.2, delay: 0.8 }}
              >
                Research: Gain insights into companies, roles, and trends for a
                well-informed job pursuit.
              </motion.p>
              <motion.p
                className="quote-p"
                initial={{ opacity: 0, x: -100 }}
                animate={quoteContainerControls}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  show: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 1.2, delay: 1.0 }}
              >
                Networking: Cultivate connections with peers and professionals
                for guidance and opportunities.
              </motion.p>
            </div>
          </motion.div>
        </div>
        <SectionFour />
        <Footer />
      </div>
    </>
  );
}

export default Home;
