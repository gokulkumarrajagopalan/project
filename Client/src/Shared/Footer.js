import React from "react";
import SocialLinks from "../Shared/SocialLinks";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <h4 className="footer-title">Gdest.in – Get Hired Faster</h4>

        <div className="footer-links">
          <div className="footer-column">
            <p className="footer-column-title">Quick Links</p>
            <ul className="footer-list">
              <li className="footer-list-item">
                <a href="#" className="footer-link">Job Search</a>
              </li>
              <li className="footer-list-item">
                <a href="#" className="footer-link">Post a Job</a>
              </li>
              <li className="footer-list-item">
                <a href="#" className="footer-link">About Us</a>
              </li>
              <li className="footer-list-item">
                <a href="#" className="footer-link">Contact Us</a>
              </li>
              <li className="footer-list-item">
                <a href="#" className="footer-link">FAQs</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <p className="footer-column-title">Resources</p>
            <ul className="footer-list">
              <li className="footer-list-item">
                <a href="#" className="footer-link">Career Tips</a>
              </li>
              <li className="footer-list-item">
                <a href="#" className="footer-link">Resume Guide</a>
              </li>
              <li className="footer-list-item">
                <a href="#" className="footer-link">Interview Preparation</a>
              </li>
              <li className="footer-list-item">
                <a href="#" className="footer-link">Terms of Service</a>
              </li>
              <li className="footer-list-item">
                <a href="#" className="footer-link">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <p className="footer-column-title">Connect with Us</p>
            <ul className="footer-list">
              <li className="footer-list-item">
                <a href="#" className="footer-link">LinkedIn</a>
              </li>
              <li className="footer-list-item">
                <a href="#" className="footer-link">Facebook</a>
              </li>
              <li className="footer-list-item">
                <a href="#" className="footer-link">Gmail</a>
              </li>
              <li className="footer-list-item">
                <a href="#" className="footer-link">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        <SocialLinks />

        <p className="footer-bottom">
          © 2024 Gdest.in | <strong className="footer-bottom-strong">Find Your Dream Job with Ease</strong>
        </p>
      </div>
    </div>
  );
}

export default Footer;
