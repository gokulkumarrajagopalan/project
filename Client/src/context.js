import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import API_URLS from "./config";

const MyContext = createContext({});
const ENV = process.env.REACT_APP_ENV || "production";
const API_URL_SESSION = API_URLS[ENV] + "/signIn/sessioncheck"


const StateContext = ({ children }) => {
  const [userType, setUserType] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(true); 


  useEffect(() => {
    axios.defaults.withCredentials = true;

    const fetchSessionData = async () => {
      try {
        const res = await axios.get(API_URL_SESSION);
         withCredentials: true,
        const valid = res.data.valid;
        const userType = res.data.TypeOfUser;
    
        setUserType(userType);
        setIsValid(valid);
        setIsLoading(false); 
        console.log("isValid", valid); 
        console.log("userType", userType); 

      } catch (error) {
        console.log(error);
        setIsLoading(false); 
      }
    };

    fetchSessionData();
  }, [isValid]); 

  if (isLoading) {
    return null;
  }

  return (
    <MyContext.Provider value={{ userType, isValid }}>
      {children}
    </MyContext.Provider>
  );
};

export { StateContext, MyContext };
