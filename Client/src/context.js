import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { API_URLS, API_UI_URLS } from "./config";

const MyContext = createContext({});
const ENV = process.env.REACT_APP_ENV || "production";
const API_URL_SESSION = API_URLS[ENV] + "/signIn/sessioncheck"


const StateContext = ({ children }) => {
  const [userType, setUserType] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    axios.defaults.withCredentials = true;

    const fetchSessionData = async () => {
      try {
        const res = await axios.get(API_URL_SESSION, {
          withCredentials: true,
        });
        const userId = res.data.userid;
        const valid = res.data.valid;
        const userType = res.data.TypeOfUser;

        setUserType(userType);
        setUserId(userId);
        setIsValid(valid);
        setIsLoading(false);
        //console.log("isValid", valid);
        //console.log("userType", userType);
        //console.log("userId", userId);
      } catch (error) {
        //console.log(error);
        setIsLoading(false);
      }
    };

    fetchSessionData();
  }, [isValid]);

  if (isLoading) {
    return null;
  }

  return (
    <MyContext.Provider value={{ userType, isValid ,userId }}>
      {children}
    </MyContext.Provider>
  );
};

export { StateContext, MyContext };
