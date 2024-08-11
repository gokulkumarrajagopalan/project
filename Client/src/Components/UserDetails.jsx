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
    onProfile,
}) => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.defaults.withCredentials = true;

        axios
            .get(API_URL)
            .then((res) => {
                console.log(res);
                if (res.data.valid) {
                    setEmail(res.data.email);
                } else {
                    
                }
            })
            .catch((err) => console.log(err));
    }, [navigate]);

    return showUserDetails ? (
        <div className="userDetailsContainer">
            <h3>User Details</h3>
            <ul>
                <li>Hi, {email}</li>
                <li>
                    <button onClick={onProfile}>Profile</button>{" "}
                </li>
                <li>
                    <button onClick={onLogout}>Sign Out</button>{" "}
                </li>
                <li>
                    <button onClick={onSettings}>Settings</button>{" "}
                </li>
            </ul>
        </div>
    ) : null;
};

export default UserDetails;
