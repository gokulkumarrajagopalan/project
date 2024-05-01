import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context";

const Homelogin = () => {
  const navigate = useNavigate();
  const { userType, isValid } = useContext(MyContext);
   

  if (!isValid) {
    navigate("/SignIn");
    return null;
  }
  else{

  if (userType !== 'A') {
    return <div>Unauthorized access</div>;
  }
  }
  return (
    <div>
      <p>Welcome to Homelogin!</p>
    </div>
  );
}

export default Homelogin;
