import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import API_URLS from "../config";

const ENV = process.env.REACT_APP_ENV || "production";
const API_URL = API_URLS[ENV] + "/signIn/sessioncheck";

const UserDetails = ({
  showUserDetails,
  onToggleUserDetails,
  onLogout,
  onSettings,
}) => {
  const [email, setemail] = useState("");

  useEffect(() => {
    axios.defaults.withCredentials = true;

    axios
      .get(API_URL)
      .then((res) => {
        console.log(res);
        if (res.data.valid) {
          setemail(res.data.email);
        } else {
          // navigate('/SignIn');
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return showUserDetails ? (
    <div className="userDetailsContainer">
      <h3>User Details</h3>
      <ul>
        <li>Hi,{email}</li>
        <button onClick={onLogout}>SignOut</button>
        <button onClick={onSettings}>Settings</button>
      </ul>
    </div>
  ) : null;
};

export default UserDetails;
