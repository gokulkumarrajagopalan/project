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
    onSaved,
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
            <ul>
                <li>Hi, {email}</li>
                <li>
                    <button className="user-link profile-link" onClick={onProfile}>Profile</button>
                </li>
                <li>
                    <button className="user-link logout-link" onClick={onLogout}>Sign Out</button>
                </li>
                <li>
                    <button className="user-link saved-link" onClick={onSaved}>Saved</button>
                </li>
                <li>
                    <button className="user-link settings-link" onClick={onSettings}>Settings</button>
                </li>
            </ul>
        </div>
    ) : null;
    
};

export default UserDetails;