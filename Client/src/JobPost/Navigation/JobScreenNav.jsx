import React from "react";
import userImage from "./user.png";
import Logo from "../../Asset/Logo.png";
import SearchButton from "../../Components/SearchInput";
import { Link } from "react-router-dom";

const JobScreenNav = () => {
  const handleprofileclick = () => {};

  return (
    <div className="jobScreenNavContainer">
      <div className="brandLogo">
        <Link to="/">
          <img src={Logo} alt="Code Garbages" className="img_Logo" />
        </Link>
      </div>
      <div className="searchBar">
        <SearchButton />
      </div>
      <img
        src={userImage}
        alt="User"
        className="userIcon"
        onClick={handleprofileclick}
      />
    </div>
  );
};

export default JobScreenNav;
