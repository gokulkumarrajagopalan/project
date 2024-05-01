import { useRef, useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../LandingPage/NavBar";
import API_URLS from "../config";

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
      //console.log(response.data);
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
        <section>
          <h1>Success!</h1>
          <p>
            <a href="#">Sign In</a>
          </p>
        </section>
      ) : (
        <section>
          <p className={ErrMsg ? "errmsg" : "offscreen"} aria-live="assertive">
            {ErrMsg}
          </p>
          <h1 className="Header_signup">Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="EmailID">Email :</label>
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
            />
            <p className={PwdFocus && !ValidPwd ? "instructions" : "offscreen"}>
              8 - 24 characters
              <br />
              Must include uppercase, lowercase, number and a special character
              <br />
            </p>

            <label htmlFor="confirm_pwd">Confirm Password:</label>
            <input
              type="password"
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              value={MatchPwd}
              required
              aria-invalid={ValidMatch ? "false" : "true"}
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              className={
                MatchFocus && !ValidMatch ? "instructions" : "offscreen"
              }
            >
              Must match the password
            </p>

            <button>Sign Up</button>
          </form>
          <p>
            Already registered?
            <br />
            <span className="line">
              <a href="SignIn">Sign In</a>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default Register;
