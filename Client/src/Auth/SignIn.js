import { useRef, useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../LandingPage/NavBar";
import { useNavigate } from "react-router-dom";
import API_URLS from "../config";

const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
//const API_URL = "http://localhost:3700/SignIn";
const ENV = process.env.REACT_APP_ENV || "production";
const API_URL = API_URLS[ENV] + "/SignIn";

const SignIn = () => {
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  const [EmailID, setEmailID] = useState("");
  const [validName, setValidName] = useState(false);
  const [EmailIDFocus, setEmailIDFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(EMAIL_REGEX.test(EmailID));
  }, [EmailID]);

  axios.defaults.withCredentials = true;
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(API_URL, {
        email: EmailID,
        password: pwd,
      });

      if (response.data.Login) {
        navigate("/JobPostScreen");
      } else {
        setErrMsg("Invalid email or password");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <NavBar />
      {success ? (
        <section>
          <h1>Success!...</h1>
          <h3>Welcome {userEmail}</h3>
          <p>
            <a href="#">Sign In</a>
          </p>
        </section>
      ) : (
        <section className="section_card">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1 className="Header_signup">Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="EmailID">Email :</label>
            <input
              className="inputtxt"
              type="text"
              id="txtemailID"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setEmailID(e.target.value)}
              value={EmailID}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setEmailIDFocus(true)}
              onBlur={() => setEmailIDFocus(false)}
            />

            <label htmlFor="password">Password:</label>
            <input
              className="inputtxt"
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <button className="submitbutton">Sign In</button>
          </form>
          <p>
            Forget Password?
            <br />
            <span className="line">
              <a href="SignUp">Sign Up</a>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default SignIn;
