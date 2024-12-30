import React, { useState } from "react";
import userImage from "../../Asset/user.png";
import Logo from "../../Asset/Logo.png";
import searchicon from "../../Asset/search_icon.png";
import Filtericon from "../../Asset/filtericon.png";
import NotificationIcon from "../../Asset/notificationicon.png";
import { Link } from "react-router-dom";
import Logotext from "../../Asset/LOgoGdest.png";

const JobScreenNav = ({
  onSearch,
  toggleFilterDetails,
  toggleUserDetails,
  toggleNotification,
  showSearch,
  setShowSearch,
  showFilters,
  setShowFilters,
  showNotifications,
  setShowNotifications,

}) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInput = (e) => {
    const inputValue = e.target.value;
    setSearchValue(inputValue);
  };

  const handleSearch = () => {
    onSearch(searchValue);
  };

  const toggleUserPanel = () => {
    toggleUserDetails();
  };

  const toggleFilterPanel = () => {
    toggleFilterDetails();
  };

  const toggleNotificationPanel = () => {
    toggleNotification();
  };

  return (
    <div className="jobScreenNavContainer">
      <div className="brandLogo">
        <Link to="/">
          <img src={Logo} alt="Code Garbages" className="img_Logo" />
        </Link>
      </div>
      <div className="search-container">
        {!showSearch && ( 
          <img src={Logotext} alt="GDEST.in" className="logotexts" />
        )}
        {showSearch && ( 
          <>
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={searchValue}
              onChange={handleSearchInput}
            />
            <button className="Searchbutton" onClick={handleSearch}>
              <img src={searchicon} alt="Search Icon" className="iconStyle" />
            </button>
          </>
        )}
        { showFilters && <button className="Filterbutton" onClick={toggleFilterPanel}>
          <img src={Filtericon} alt="Filtericon" className="iconStyle" />
        </button>}
       {showNotifications && <button
          className="Notificationbutton"
          onClick={toggleNotificationPanel}
        >
          <img
            src={NotificationIcon}
            alt="Notificationicon"
            className="iconStyle"
          />
        </button> }
      </div>
      <img
        src={userImage}
        alt="User"
        className="userIcon"
        onClick={toggleUserPanel}
      />
    </div>
  );
};

export default JobScreenNav;
