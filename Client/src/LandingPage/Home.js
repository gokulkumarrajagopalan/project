
import React, { useState,useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Textbox from '../Components/Textbox';
import img1 from './Img_Source/LandingPage_img1.jpg';
import img2 from './Img_Source/Statical.jpg';
import img3 from './Img_Source/Computer.jpg';
import Footer from '../Shared/Footer';
import Button from '../Components/button';
import SectionFour from './SectionFour';
import NavBar from './NavBar'
import './Home.css';
function Home() {
  const [jobSearch, setJobSearch] = useState('');
  const quoteContainerRef = useRef(null);
  
  const handleJobSearch = (event) => {
    setJobSearch(event.target.value);
  };

function handleApplyJob() {
  window.location.href = "/jobPostScreen";
}
const styles = {
  homeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  },

    jobSearchContainer: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '50px',
    },
    jobSearchImg: {
      width: '30%',
      height: 'auto',
      objectFit: 'cover',
      padding: '15px',
      float: 'left',
    },
    // quoteContainer: {
    //   display: 'flex',
    //   alignItems: 'center',
    //   justifyContent: 'flex-end',
    //   width: '70%',
    //   height: 'auto',
    //   padding: '15px',
    //   float: 'right',
    // },
    // quoteText: {
    //   fontSize: '24px',
    //   fontWeight: 'bold',
    // },
    IamgeContainer_2: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '60px',
        backgroundColor: '#b6bfc8',
    },
    Statical: {
      width: ' 50%',
      height: 'auto',
      objectFit: 'cover',
      padding: '15px',
      float: 'right',
    },
    quoteContainer_2: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '70%',
      height: 'auto',
      padding: '15px',
      float: 'left',
   
    },
    quoteText_2: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    jobSearchInputContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '90%',
      maxWidth: '400px',
      height: 'auto',
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '25px',
      boxShadow: '0px 0px 10px rgba(221, 221, 221, 1)',
      marginTop: '50px',
    },
    jobSearchInput: {
      display: 'inline-block',
      verticalAlign: 'middle',
      width: '100%',
      height: '40px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      paddingLeft: '10px',
      fontSize: '16px',
      marginBottom: '20px',
    },
    lblFind: {
      color: 'black',
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    btnGo: {
      fontSize: '1.2rem',
      borderRadius: '15px',
      backgroundColor: 'white',
      color: 'black',
      border: '2px solid black',
      padding: '0.5rem 1rem',
    },
    btn_applyJobs: {
      backgroundColor: "rgba(255,255,255,0.5)",
      backdropFilter: "blur(5px)",
      marginTop: '50px',
      marginBottom: '20px',
      width: '90%',
      maxWidth: '400px',
      fontSize: '1.2rem',
      borderRadius: '15px',
      // backgroundColor: 'black',
      color: 'white',
      padding: '0.5rem 1rem',
      border: 'none',
      display: 'block',
      margin: '0 auto',
    },
    headsec_1: {
      backgroundImage: `url(${img3})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '610px',
      backdropFilter: 'blur(15px)', 
    },
 gridContainerStyle :{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    gap: '10px',
    height: '300px', 
  },

 gridItemStyle : {
   
    padding: '20px',
  },
  classb :{
    textAlign: 'center',
  }
 
};
  return (  
    <div style={styles.homeContainer}>
        < NavBar/>
      <div style={styles.headsec_1}>
        <h1 style={styles.classb}> Opportunities Don't Happen </h1>
        <h1 style={styles.classb}>You Create Them</h1>
        <Button text="Apply Jobs" onClick={handleApplyJob} style={styles.btn_applyJobs} className="btn_applyJobs"/>
      </div>

      <div style={styles.jobSearchContainer}>
        <img src={img1} alt="JobSearchimg" style={styles.jobSearchImg} />

        <div ref={quoteContainerRef} className="quoteContainer">
          <span className="quoteText">
            <ul>
              <li> Thoroughly analyze your skills, interests, and values to align with ideal job prospects.</li>
              <li>Create a compelling CV, accentuating accomplishments, and qualifications for prospective employers.</li>
              <li>Explore our extensive databases showcasing premier job openings across diverse industries.</li>
              <li>Research: Gain insights into companies, roles, and trends for a well-informed job pursuit.</li>
              <li>Applications: Submit applications promptly, diligently follow up, and maintain a positive outlook.</li>
            </ul>
          </span>
        </div>
      </div>

      <div style={styles.IamgeContainer_2}>
        <div style={styles.quoteContainer_2}>
        <div style={styles.gridContainerStyle}>
      <div style={styles.gridItemStyle}><h5>Assistance provided for designing and developing your career to facilitate thoughtful conssideration</h5></div>
      <div style={styles.gridItemStyle}> <h6>Pursuing perfection through exercise,Straving for excellence in all endeavors</h6></div>
      <div style={styles.gridItemStyle}> <h6>Embrace membership in the team through a seamless application and sophisticated recruitment process</h6></div>
      <div style={styles.gridItemStyle}><h6>Sucess is not final, Failure is not fatal,it is the courage to continue that counts.</h6></div>
    </div>
        </div>
        <img src={img2} alt="Statical" style={styles.Statical} />
      </div>
      <br />
      <div className="Sec4">
      < SectionFour />
      </div>
      <Footer />
    </div>
  
  );
}

export default Home;
 