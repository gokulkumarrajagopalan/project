import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Components/button';
import axios from 'axios';

function NavBar() {
  const [siteName, setSiteName] = useState('');

  useEffect(() => {
    axios('http://localhost:3000/titles')
      .then(res => setSiteName(res.data[0].SiteName))
      .catch(err => console.log(err));
  }, []);

  const handleSignIn = () => {
    window.location.href = "/SignIn";
  };

  const handleSignUn = () => {
    window.location.href = "/SignUp";
  };

  const styles = {
    header: {
      backgroundColor: 'black',
      color: 'black',
      width: '100%',
    },
    innerWrapper: {
      maxWidth: '100%',
      margin: '0 auto',
      padding: '1rem',
      display: 'flex',
      alignItems: 'center',
    },
    logoLink: {
      color: '#F02422',
      fontSize: '1.5rem',
      textDecoration: 'none',
      fontWeight: 'bold',
      marginLeft: '1rem',
    },
    nav_Link_home: {
      color: 'White',
      fontSize: '1.5rem',
      textDecoration: 'none',
      marginLeft: '3rem',
      marginRight: '3rem',
    },
    signin_btn: {
      fontSize: '1.2rem',
      borderRadius: '15px',
      backgroundColor: 'black',
      color: 'white',
      border: '2px solid white',
      padding: '0.5rem 1rem',
    },
    signUp_btn: {
      fontSize: '1.2rem',
      borderRadius: '15px',
      backgroundColor: 'grey',
      color: 'white',
      border: '2px solid white',
      padding: '0.5rem 0.5rem',
      marginRight: '1rem',
    },
    navbar_home: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 1rem',
      marginLeft: 'auto',
    },
  };

  return (
    <header style={styles.header} id="header">
      <div style={styles.innerWrapper} className="flex-container">
        <div className="logo">
          <Link className="logo-link" style={styles.navLink} to="/">
            {siteName}logo
          </Link>
        </div>
        <div style={styles.navbar_home} className="navbar">
          <Link style={styles.nav_Link_home} to="/LearningDefault">
            Learning
          </Link>
          <Button text="Sign Up" onClick={handleSignUn} style={styles.signUp_btn} className="signUp_btn" />
          <Button text="Sign In" onClick={handleSignIn} style={styles.signin_btn} className="signin_btn" />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
