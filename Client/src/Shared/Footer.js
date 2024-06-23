import React from "react";
import SocialLinks from "../Shared/SocialLinks";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-section1">
        <h3 className="footer-title">Gdest.in</h3>
        <p className="footer-description">Get hired faster with Gdest.in</p>
        <p className="footer-description">
          Our easy-to-use job search platform makes finding your next career
          move a breeze.
        </p>
        <SocialLinks />
      </div>
    </div>
  );
}

export default Footer;
