import React from "react";
import SocialLinks from "../Shared/SocialLinks";

function Footer() {
  return (
    <div className="footer">
  <div class="footer-container">
    <h4>Gdest.in – Get Hired Faster</h4>

    <div class="footer-links">
      <div class="footer-column">
        <h5>Quick Links</h5>
        <ul>
          <li><a href="#">Job Search</a></li>
          <li><a href="#">Post a Job</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h5>Resources</h5>
        <ul>
          <li><a href="#">Career Tips</a></li>
          <li><a href="#">Resume Guide</a></li>
          <li><a href="#">Interview Preparation</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h5>Connect with Us</h5>
        <ul>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
    </div>

    <p class="footer-bottom">© 2024 Gdest.in | <strong>Find Your Dream Job with Ease</strong></p>
  </div>

        <SocialLinks />
      </div>
  
  );
}

export default Footer;