import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Textbox from "../Components/Textbox";
import img1 from "./Img_Source/LandingPage_img1.jpg";
import img2 from "./Img_Source/Statical.jpg";
import img3 from "./Img_Source/Computer.jpg";
import Footer from "../Shared/Footer";
import Button from "../Components/button";
import SectionFour from "./SectionFour";
import NavBar from "./NavBar";
import "../GlobalStyles/HomeNav.css";

function Home() {
  const [jobSearch, setJobSearch] = useState("");
  const quoteContainerRef = useRef(null);

  const handleJobSearch = (event) => {
    setJobSearch(event.target.value);
  };

  function handleApplyJob() {
    window.location.href = "/jobPostScreen";
  }

  return (
    <div className="homeContainer">
      <NavBar />
      <div className="headsec_1">
        <h1 className="classb">
          REALIZE YOUR POTENTIAL, GET IN TOUCH WITH OUR SPECIALISTS
        </h1>
        <h3>AND LOOK THROUGH HUNDREDS OF EMPLOYMENT POSSIBILITIES </h3>
        <h4>FOR THE RIGHT JOB IF YOU WANT TO THRIVE IN YOUR PROFESSION</h4>
        <Button
          text="Apply Jobs"
          onClick={handleApplyJob}
          className="btn_applyJobs"
        />
      </div>

      <div className="jobSearchContainer">
        <div ref={quoteContainerRef} className="quoteContainer">
          <span className="quoteText">
            <ul>
              <li>
                Thoroughly analyze your skills, interests, and values to align
                with ideal job prospects.
              </li>
              <li>
                Create a compelling CV, accentuating accomplishments, and
                qualifications for prospective employers.
              </li>
              <li>
                Explore our extensive databases showcasing premier job openings
                across diverse industries.
              </li>
              <li>
                Research: Gain insights into companies, roles, and trends for a
                well-informed job pursuit.
              </li>
              <li>
                Applications: Submit applications promptly, diligently follow
                up, and maintain a positive outlook.
              </li>
            </ul>
          </span>
        </div>
      </div>

      <div className="IamgeContainer_2">
        <div className="quoteContainer_2">
          <div className="gridContainerStyle">
            <div className="gridItemStyle">
              <h5>
                Assistance provided for designing and developing your career to
                facilitate thoughtful consideration.
              </h5>
            </div>
            <div className="gridItemStyle">
              <h6>
                Pursuing perfection through exercise, Striving for excellence in
                all endeavors.
              </h6>
            </div>
            <div className="gridItemStyle">
              <h6>
                Embrace membership in the team through a seamless application
                and sophisticated recruitment process.
              </h6>
            </div>
            <div className="gridItemStyle">
              <h6>
                Success is not final, Failure is not fatal, it is the courage to
                continue that counts.
              </h6>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
