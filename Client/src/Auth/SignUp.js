import { useRef, useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../LandingPage/NavBar";
import API_URLS from "../config";
import './Style_Sign.css'; 
import { Cursor } from "react-simple-typewriter";

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
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  const [hasUpper, setHasUpper] = useState(false);
  const [hasLower, setHasLower] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSpecial, setHasSpecial] = useState(false);
  const [hasMinLength, setHasMinLength] = useState(false);

  const words = ["Join Us", "Create Your Account"];

  useEffect(() => {
    setHasUpper(/[A-Z]/.test(Pwd));
    setHasLower(/[a-z]/.test(Pwd));
    setHasNumber(/[0-9]/.test(Pwd));
    setHasSpecial(/[!@#$%]/.test(Pwd));
    setHasMinLength(Pwd.length >= 8 && Pwd.length <= 24);
    setValidPwd(PWD_REGEX.test(Pwd));
    setValidMatch(Pwd === MatchPwd);
  }, [Pwd, MatchPwd]);

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
    const timer = setTimeout(() => {
      if (text.length === words[index].length) {
        setTimeout(() => {
          setIndex((index + 1) % words.length);
          setText("");
        }, 3000);
      } else {
        setText((prevText) => prevText + words[index][prevText.length]);
      }
    }, 280);
    return () => clearTimeout(timer);
  }, [text, index]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (ExistingEmails.includes(EmailID)) {
      setErrMsg("Email already exists");
      return;
    }

    try {
      await axios.post(API_URL, { email: EmailID, pwd: Pwd });
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
              <h2 className="typewriter-text">
                {text}
                <Cursor />
              </h2>
            </div>
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
                <span className={hasMinLength ? "valid-condition" : "invalid-condition"}>8 - 24 characters, </span>
                <span className={hasUpper ? "valid-condition" : "invalid-condition"}>Uppercase, </span>
                <span className={hasLower ? "valid-condition" : "invalid-condition"}>Lowercase, </span>
                <span className={hasNumber ? "valid-condition" : "invalid-condition"}>Number, </span>
                <span className={hasSpecial ? "valid-condition" : "invalid-condition"}>Special character (!@#$%)</span>
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
