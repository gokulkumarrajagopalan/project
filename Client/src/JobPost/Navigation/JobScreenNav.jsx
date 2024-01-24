import React from 'react';
import userImage from './user.png';
import SearchButton from '../../Components/SearchInput';


const JobScreenNav = () => {

  const handleprofileclick = () =>{
    
  }


  return (
    <div className="jobScreenNavContainer">
      <div className="brandLogo">Your Brand Logo</div>
      <div className="searchBar"> < SearchButton /></div>
      <img src={userImage} alt="User" className="userIcon" onClick={handleprofileclick}/>
    </div>
  );
};

export default JobScreenNav;
