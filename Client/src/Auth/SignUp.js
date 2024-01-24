import { useRef, useState, useEffect } from "react";
import axios from 'axios';
import './SignUp.css';

const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const API_URL ='http://localhost:8090/saveData';
const API_URL_Validate ='http://localhost:8090/getData';

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [EmailID, setEmailID] = useState('');
  const [validName, setValidName] = useState(false);
  const [EmailIDFocus, setEmailIDFocus] = useState(false);
  const [MatchEmailIDFocus, setMatchEmailIDFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(EMAIL_REGEX.test(EmailID));
  }, [EmailID]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg('');
  }, [EmailID, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = EMAIL_REGEX.test(EmailID);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    
    // try {
    //   console.log('API_URL_Validate'+ API_URL_Validate)
    //   const response = await axios.post(API_URL_Validate, { EmailID });
    //   console.log(response.data);
    // } catch (error) {
    //   console.error('Error:', error);
    // }

    try {
      const response = await axios.post(API_URL, { EmailID, pwd });
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <a href="#">Sign In</a>
          </p>
        </section>
      ) : (
        <section>
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
          <h1 className='Header_signup'>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="EmailID">
              Email :
            </label>
            <input
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

            <label htmlFor="password">
              Password:
            </label>
            <input
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
            <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
              8 - 24 characters<br />
              Must include uppercase, lowercase, number and a special character<br />
            </p>

            <label htmlFor="confirm_pwd">
              Confirm Password:
            </label>
            <input type="password"
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
              Must match the password
            </p>

            <button disabled={!validName || !validPwd || !validMatch}>Sign Up</button>
          </form>
          <p>
            Already registered?<br />
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


