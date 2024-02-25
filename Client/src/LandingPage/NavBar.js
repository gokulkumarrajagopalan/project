import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Asset/Logo.png";
import Button from "../Components/button";
import "../GlobalStyles/HomeNav.css";

function NavBar() {
  const handleSignIn = () => {
    window.location.href = "/SignIn";
  };

  const handleSignUp = () => {
    window.location.href = "/SignUp";
  };

  return (
    <header className="header" id="header">
      <div className="innerWrapper flex-container">
        <div className="logo">
          <Link className="logo-link" to="/">
            <div className="logo-container">
              <img src={Logo} alt="Code Garbages" className="img_Logo" />
              <h1 className="logo-text">CODE GARBAGES</h1>
            </div>
          </Link>
        </div>
        <div className="navbar_home navbar">
          <Link className="nav_Link_home" to="/LearningDefault">
            Learning
          </Link>
          <Button
            text="Sign Up"
            onClick={handleSignUp}
            className="signUp_btn"
          />
          <Button
            text="Sign In"
            onClick={handleSignIn}
            className="signin_btn"
          />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
