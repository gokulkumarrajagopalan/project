import { useRef, useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../LandingPage/NavBar";
import API_URLS from "../config";
import './Style_Sign.css'; 

const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const ENV = process.env.REACT_APP_ENV || "production";
const API_URL = API_URLS[ENV] + "/users/save_usersData";
const API_URL_UserValidate = API_URLS[ENV] + "/users/list_userdetail";

const Register = () => {
  const userRef = useRef();
  const [EmailID, setEmailID] = useState("");
  const [EmailIDFocus, setEmailIDFocus] = useState(false);
  const [Pwd, setPwd] = useState("");
  const [ValidPwd, setValidPwd] = useState(false);
  const [PwdFocus, setPwdFocus] = useState(false);
  const [MatchPwd, setMatchPwd] = useState("");
  const [ValidMatch, setValidMatch] = useState(false);
  const [MatchFocus, setMatchFocus] = useState(false);
  const [ErrMsg, setErrMsg] = useState("");
  const [Success, setSuccess] = useState(false);
  const [ExistingEmails, setExistingEmails] = useState([]);

  const [hasUpper, setHasUpper] = useState(false);
const [hasLower, setHasLower] = useState(false);
const [hasNumber, setHasNumber] = useState(false);
const [hasSpecial, setHasSpecial] = useState(false);
const [hasMinLength, setHasMinLength] = useState(false);

useEffect(() => {
  setHasUpper(/[A-Z]/.test(Pwd));
  setHasLower(/[a-z]/.test(Pwd));
  setHasNumber(/[0-9]/.test(Pwd));
  setHasSpecial(/[!@#$%]/.test(Pwd));
  setHasMinLength(Pwd.length >= 8 && Pwd.length <= 24);
}, [Pwd]);


  useEffect(() => {
    axios
      .get(API_URL_UserValidate)
      .then((response) => {
        setExistingEmails(response.data.map((user) => user.email));
      })
      .catch((error) => {
        console.error("Error fetching existing emails:", error);
      });
  }, []);

  useEffect(() => {
    const typingTexts = ["Your Journey Begins Here"];
    let textIndex = 0;
    let charIndex = 0;
  
    const typeEffect = () => {
      const element = document.querySelector(".typewriter-text");
      if (element) {
        element.textContent = typingTexts[textIndex].slice(0, charIndex);
        charIndex++;
        if (charIndex > typingTexts[textIndex].length) {
          charIndex = 0;
          textIndex = (textIndex + 1) % typingTexts.length;
        }
        setTimeout(typeEffect, 1200); 
      }
    };
  
    typeEffect();
  }, []);
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Pwd !== MatchPwd) {
      setErrMsg("Passwords do not match");
      return;
    }

    if (ExistingEmails.includes(EmailID)) {
      setErrMsg("Email already exists");
      return;
    }

    // Save users
    try {
      const response = await axios.post(API_URL, { email: EmailID, pwd: Pwd });
      setSuccess(true);
    } catch (error) {
      console.error("Error:", error);
      setErrMsg("Error occurred while saving data");
    }
  };

  return (
    <>
      <NavBar />
      {Success ? (
        <div className="success-message">
          <h1>Success!</h1>
          <p>
            <a href="#">Sign In</a>
          </p>
        </div>
      ) : (
        <div className="Register_container">
          <div className="left-side">
            <div className="typewriter-text-wrapper">
              <h2 className="typewriter-text"></h2>
            </div>
            {/* <p className="sub-text">Join us today and experience seamless integration!</p> */}
          </div>
          <div className="register-card">
            <p className={ErrMsg ? "errmsg" : "offscreen"} aria-live="assertive">
              {ErrMsg}
            </p>
            <h1 className="Header_signup">Sign Up</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="EmailID" className="register_label">Email:</label>
              <input
                type="text"
                id="txtemailID"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setEmailID(e.target.value)}
                value={EmailID}
                required
                aria-invalid={ValidPwd ? "false" : "true"}
                onFocus={() => setEmailIDFocus(true)}
                onBlur={() => setEmailIDFocus(false)}
                className="register-input"
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={Pwd}
                required
                aria-invalid={ValidPwd ? "false" : "true"}
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
                className="register-input"
              />
              <p className={PwdFocus ? "instructions" : "offscreen"}>
  <span className={hasMinLength ? "valid-condition" : "invalid-condition"}>
    8 - 24 characters, 
  </span>
  <span className={hasUpper ? "valid-condition" : "invalid-condition"}>
    Must include uppercase,
  </span>
  <span className={hasLower ? "valid-condition" : "invalid-condition"}>
    Must include lowercase,
  </span>
  <span className={hasNumber ? "valid-condition" : "invalid-condition"}>
    Must include a number,
  </span>
  <span className={hasSpecial ? "valid-condition" : "invalid-condition"}>
    Must include a special character (!@#$%)
  </span>
</p>


              <label htmlFor="confirm_pwd" className="register_label">Confirm Password:</label>
              <input
                type="password"
                id="confirm_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                value={MatchPwd}
                required
                aria-invalid={ValidMatch ? "false" : "true"}
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
                className="register-input"
              />
              <p className={MatchFocus && !ValidMatch ? "instructions" : "offscreen"}>
                Must match the password
              </p>

              <button>Sign Up</button>
            </form>
            <p className="instructions">
              Already registered?
              <br />
              <span className="line">
                <a href="SignIn">Sign In</a>
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
