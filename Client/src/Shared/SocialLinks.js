import React from "react";

const socialLinks = [
  {
    name: "Instagram",
    link: "#",
    icon: require("../LandingPage/Img_Source/instagram.png"),
  },
  {
    name: "Twitter",
    link: "#",
    icon: require("../LandingPage/Img_Source/twitter.png"),
  },
  {
    name: "Facebook",
    link: "https://facebook.com",
    icon: require("../LandingPage/Img_Source/facebook.png"),
  },
];

const SocialLinks = () => {
  const handleLinkClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="social-links">
      <ul className="social-list">
        {socialLinks.map((item) => (
          <li key={item.name} className="social-list-item">
            <button
              type="button"
              onClick={() => handleLinkClick(item.link)}
              className="social-button"
            >
              <img
                src={item.icon}
                alt={`${item.name} icon`}
                className="social-icon"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
