import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../../Asset/homeicon.png";
import SearchIcon from "../../Asset/search_icon.png";
import FilterIcon from "../../Asset/filtericon.png";
import UserIcon from "../../Asset/user.png";
import LearningIcon from "../../Asset/learningicon.png";

const MobileNav = ({
  toggleFilterDetails,
  setShowSearch,
  toggleUserDetails,
}) => {
  const handleFilterClick = () => {
    toggleFilterDetails();
  };

  const handleSearchClick = () => {
    setShowSearch((prev) => !prev);
  };

  const toggleUserPanel = () => {
    toggleUserDetails();
  };

  return (
    <div>
      <div className="mobileNavContainer">
        <Link to="/">
          <img src={HomeIcon} alt="Home Icon" className="navIcon" />
        </Link>
        <img
          src={SearchIcon}
          alt="Search Icon"
          className="navIcon"
          onClick={handleSearchClick}
        />
        <img
          src={FilterIcon}
          alt="Filter Icon"
          className="navIcon"
          onClick={handleFilterClick}
        />
        <Link className="Linkk" > 
        {/* LearningDefault */}
          <img src={LearningIcon} alt="Learning Icon" className="navIcon" />
        </Link>
        <img
          src={UserIcon}
          alt="User Icon"
          className="navIcon"
          onClick={toggleUserPanel}
        />
      </div>
    </div>
  );
};

export default MobileNav;
