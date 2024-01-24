import React, { useEffect, useState } from 'react';
import SocialLinks from '../Shared/SocialLinks';
import axios from 'axios';

function Footer() {
  const [siteName ,setSiteName] = useState('');

  useEffect(() => {
    axios('http://localhost:8080/titles')
      .then(res => setSiteName(res.data[0].SiteName))
      .catch(err => console.log(err));
  }, []);

  const styles = {
    footer: {
      backgroundColor: '',
      color: 'black',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '150px',
    },
    section1: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 'auto',
      width: '60%',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '16px',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      margin: '8px',
    },
    description: {
      marginBottom: '16px',
    },
  };

  return (
    <div style={styles.footer}>
      <div style={styles.section1}>
        <h3 style={styles.title}>{siteName}</h3>
        <p style={styles.description}>Get hired faster with {siteName}</p>
        <p style={styles.description}>Our easy-to-use job search platform makes finding your next career move a breeze.</p>
        <SocialLinks />
      </div>
    </div>
  );
}

export default Footer;
