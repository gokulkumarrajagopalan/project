import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URLS } from "../config";
import { MyContext } from "../context";

const ENV = process.env.REACT_APP_ENV || "production";
const API_URL_GET_PROFILE = API_URLS[ENV] + "/addProfile/getProfile/";

const UserDetails = ({
  showUserDetails,
  onToggleUserDetails,
  onLogout,
  onSettings,
  onProfile,
  onSaved,
  onJobPost,
}) => {
  const navigate = useNavigate();
  const { isValid, userId, userType } = useContext(MyContext);
  const [profile, setProfile] = useState(null); 

  useEffect(() => {
    const fetchProfile = async () => {
      if (!userId) return; 

      try {
        const response = await axios.get(`${API_URL_GET_PROFILE}${userId}`);
        if (response.data.profile) {
          setProfile(response.data.profile);
        } else {
          console.warn("Profile not found");
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, [userId]);

  return showUserDetails ? (
    <div className="userDetailsContainer">
      <ul>
        <li>Hi, {isValid && profile?.firstName ? profile.firstName : "Anonymous"}</li>
        <li>
          <button className="user-link profile-link" onClick={onProfile}>
            Profile
          </button>
        </li>
        <li>
          {isValid ? (
            <button className="user-link logout-link" onClick={onLogout}>
              Sign Out
            </button>
          ) : (
            <button className="user-link logout-link" onClick={onLogout}>
              Sign In
            </button>
          )}
        </li>
        <li>
          <button className="user-link saved-link" onClick={onSaved}>
            Saved
          </button>
        </li>
        <li>
          <button className="user-link settings-link" onClick={onSettings}>
            Settings
          </button>
        </li>
        {userType === "A" && (
          <li>
            <button className="user-link jobpost-link" onClick={onJobPost}>
              Job Post
            </button>
          </li>
        )}
      </ul>
    </div>
  ) : null;
};

export default UserDetails;
