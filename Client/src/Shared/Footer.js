import React  from 'react';
import SocialLinks from '../Shared/SocialLinks';

function Footer() {

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
        <h3 style={styles.title}>CODE GARBAGES</h3>
        <p style={styles.description}>Get hired faster with CODE GARBAGES</p>
        <p style={styles.description}>Our easy-to-use job search platform makes finding your next career move a breeze.</p>
        <SocialLinks />
      </div>
    </div>
  );
}

export default Footer;
