import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footer from "../Shared/Footer";
import Button from "../Components/button";
import SectionFour from "./SectionFour";
import NavBar from "./NavBar";
import JobSearchImg from "../Asset/jobsearchimg.jpg";
function Home() {
  const [jobSearch, setJobSearch] = useState("");
  const classbControls = useAnimation();
  const quoteContainerControls = useAnimation();

  function handleJobSearch(event) {
    setJobSearch(event.target.value);
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

  const quoteContainerRef = useRef(null);
  const classbRef = useRef(null);

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
          <h1>REALIZE YOUR POTENTIAL, GET IN TOUCH WITH OUR SPECIALISTS</h1>
          <h3>AND LOOK THROUGH HUNDREDS OF EMPLOYMENT POSSIBILITIES</h3>
          <h4>FOR THE RIGHT JOB IF YOU WANT TO THRIVE IN YOUR PROFESSION</h4>
          <Button
            text="Apply Jobs"
            onClick={handleApplyJob}
            className="btn_applyJobs"
          />
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
          <span className="quoteText">
            <h3> Steps for Effective Job Pursuit </h3>
            <img
              src={JobSearchImg}
              alt="Job Search"
              className="jobSearchImage"
            />

            <motion.p
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
              initial={{ opacity: 0, x: -100 }}
              animate={quoteContainerControls}
              variants={{
                hidden: { opacity: 0, x: -100 },
                show: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 1.2, delay: 1.0 }}
            >
              Applications: Submit applications promptly, diligently follow up,
              and maintain a positive outlook.
            </motion.p>
          </span>
        </motion.div>
      </div>
      <SectionFour />
      <Footer />
    </div>
  );
}

export default Home;
