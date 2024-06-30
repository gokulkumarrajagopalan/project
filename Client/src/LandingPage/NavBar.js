import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Asset/Logo.png";
import Logotext from "../Asset/LOgoGdest.jpg";
import Button from "../Components/button";
import Job from "../Asset/job.png";

function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignIn = () => {
    window.location.href = "/SignIn";
  };

  const handleSignUp = () => {
    window.location.href = "/SignUp";
  };

  const handleJobspostcreen = () => {
    window.location.href = "/jobPostScreen";
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      <div className="Header">
        {isMobile && (
          <>
            <div
              className={`MobileMenuButton ${isMenuOpen ? "Open" : ""}`}
              onClick={toggleMobileMenu}
            >
              {isMenuOpen ? "✖" : "☰"}
            </div>
            <div className="MobilePortfolioLabel">
              <div className="logo">
                <Link className="logo-link" to="/">
                  <div className="logo-container">
                    <img src={Logo} alt="Code Garbages" className="img_Logo" />
                    <img src={Logotext} alt="GDEST.in" className="logo-text" />
                    {/* <h1 className="logo-text">GDEST.IN</h1> */}
                  </div>
                </Link>
              </div>
            </div>
            <nav>
              <div className={`MobileNavList ${isMenuOpen ? "Open" : ""}`}>
                <div>
                  <Link
                    to="/LearningDefault"
                    onClick={toggleMobileMenu}
                    className="learninglabel"
                  >
                    Learning
                  </Link>
                </div>
                <div>
                  <label onClick={handleSignIn} className="Signinlabel">
                    Sign In
                  </label>
                  {/* <Button text="Sign In" onClick={handleSignIn} className="" /> */}
                </div>
                <div>
                  <label onClick={handleSignUp} className="Signuplabel">
                    Sign Up
                  </label>

                  {/* <Button text="Sign Up" onClick={handleSignUp} className="" /> */}
                </div>
              </div>
            </nav>
          </>
        )}
        {!isMobile && (
          <nav>
            <div className="NavList">
              <div className="logo">
                <Link className="logo-link" to="/">
                  <div className="logo-container">
                    <img src={Logo} alt="Code Garbages" className="img_Logo" />
                    {/* <h1 className="logo-text">CODE GARBAGES</h1> */}
                    <img src={Logotext} alt="Gdest.in" className="logo-text" />
                  </div>
                </Link>
              </div>
              <div className="TopRightItems">
                <div>
                  <img
                    src={Job}
                    alt="Job"
                    className="labellearn"
                    onClick={handleJobspostcreen}
                  />
                </div>
                {/* <div>
                  <Link
                    to="/LearningDefault"
                    onClick={toggleMobileMenu}
                    className="labellearn"
                  >
                    Learning
                  </Link>
                </div> */}
                <div>
                  <Button
                    text="Sign In"
                    onClick={handleSignIn}
                    className="signin_btn"
                  />
                </div>
                <div>
                  <Button
                    text="Sign Up"
                    onClick={handleSignUp}
                    className="signUp_btn"
                  />
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
}
export default NavBar;
