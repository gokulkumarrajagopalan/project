import React from 'react';

const socialLinks = [  {    name: 'Instagram',    link: '#',    icon: require('../LandingPage/Img_Source/instagram.png'),  },  {    name: 'Twitter',    link: '#',    icon: require('../LandingPage/Img_Source/twitter.png'),  },  {    name: 'Facebook',    link: 'https://facebook.com',    icon: require('../LandingPage/Img_Source/facebook.png'),  },];


const SocialLinks = () => {                
  const handleLinkClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div style={{ marginLeft: '-0.5rem' }}>
      <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
        {socialLinks.map((item) => (
          <li key={item.name} style={{ display: 'inline-block', marginRight: '0.5rem' }}>
            <button
              type="button"
              onClick={() => handleLinkClick(item.link)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 36,
                height: 36,
                borderRadius: '50%',
                color: 'white',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
              // use :hover pseudo-selector in CSS instead
              // this is not supported in inline styles
              // also, use background instead of backgroundColor
              className="social-button"
            >
              {/* eslint-disable-next-line */}
              <img src={item.icon} alt={`${item.name} icon`} style={{ fill: 'currentColor', width: 22, height: 'auto' }} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
