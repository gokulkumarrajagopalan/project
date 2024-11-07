import React, { useState } from "react";
import SocialLinks from "../Shared/SocialLinks";

function Footer() {
  const [selectedContent, setSelectedContent] = useState(null);

  const content = {
    aboutUs: (
      <div>
        <h2>About Us</h2>
        <p>
          Gdest.in is dedicated to helping job seekers find employment quickly and efficiently. 
          We connect talented individuals with top companies across various industries, offering 
          a streamlined job application process and insightful resources to boost career success.
        </p>
      </div>
    ),
    contact: (
      <div>
        <h2>Contact Us</h2>
        <p>
          For any inquiries, feel free to reach out to us at: <br />
          <strong>Email:</strong> contact@gdest.in
        </p>
      </div>
    ),
    faqs: (
      <div>
        <h2>FAQs</h2>
        <ul>
          <li><strong>How do I apply for jobs?</strong> Visit the Job Search page, find a job, and click apply.</li>
          <li><strong>Is there a fee to use the platform?</strong> No, Gdest.in is free for job seekers.</li>
          <li><strong>How can I post a job?</strong> Go to the Post a Job page and fill out the form.</li>
        </ul>
      </div>
    ),
    careerTips: (
      <div>
        <h2>Career Tips</h2>
        <p>
          Discover strategies for advancing your career, improving your skills, and making a great 
          impression in interviews. We provide tips on networking, building a professional brand, 
          and navigating career changes.
        </p>
      </div>
    ),
    resumeGuide: (
      <div>
        <h2>Resume Guide</h2>
        <p>
          Learn how to craft a compelling resume that stands out to employers. Our guide covers 
          formatting, language, and key sections to include, with examples tailored to various industries.
        </p>
      </div>
    ),
    interviewPreparation: (
      <div>
        <h2>Interview Preparation</h2>
        <p>
          Ace your interviews with confidence. We offer advice on answering common questions, 
          presenting yourself professionally, and making a lasting impression.
        </p>
      </div>
    ),
    termsOfService: (
      <div>
        <h2>Terms of Service</h2>
        <p>
          Our Terms of Service outline the rules and guidelines for using Gdest.in. By using our platform, 
          you agree to comply with these terms, including respectful behavior and accuracy of information.
        </p>
      </div>
    ),
    privacyPolicy: (
      <div>
        <h2>Privacy Policy</h2>
        <p>
          Your privacy is important to us. This policy explains how we collect, use, and protect your 
          personal information on Gdest.in. We value your trust and prioritize data security.
        </p>
      </div>
    ),
  };

  return (
    <div className="footer">
      <div className="footer-container">
        <h4 className="footer-title">Gdest.in – Get Hired Faster</h4>

        <div className="footer-links">
          <div className="footer-column">
            <p className="footer-column-title">Quick Links</p>
            <ul className="footer-list">
              <li className="footer-list-item">
                <a href="#aboutUs" className="footer-link" onClick={() => setSelectedContent(content.aboutUs)}>About Us</a>
              </li>
              <li className="footer-list-item">
                <a href="#contact" className="footer-link" onClick={() => setSelectedContent(content.contact)}>Contact Us</a>
              </li>
              <li className="footer-list-item">
                <a href="#faqs" className="footer-link" onClick={() => setSelectedContent(content.faqs)}>FAQs</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <p className="footer-column-title">Resources</p>
            <ul className="footer-list">
              <li className="footer-list-item">
                <a href="#careerTips" className="footer-link" onClick={() => setSelectedContent(content.careerTips)}>Career Tips</a>
              </li>
              <li className="footer-list-item">
                <a href="#resumeGuide" className="footer-link" onClick={() => setSelectedContent(content.resumeGuide)}>Resume Guide</a>
              </li>
              <li className="footer-list-item">
                <a href="#interviewPreparation" className="footer-link" onClick={() => setSelectedContent(content.interviewPreparation)}>Interview Preparation</a>
              </li>
              <li className="footer-list-item">
                <a href="#termsOfService" className="footer-link" onClick={() => setSelectedContent(content.termsOfService)}>Terms of Service</a>
              </li>
              <li className="footer-list-item">
                <a href="#privacyPolicy" className="footer-link" onClick={() => setSelectedContent(content.privacyPolicy)}>Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <p className="footer-column-title">Connect with Us</p>
            <ul className="footer-list">
              <li className="footer-list-item">
                <a href="https://www.linkedin.com/company/gdestin" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
              </li>
              <li className="footer-list-item">
                <a href="https://www.facebook.com/gdestin" target="_blank" rel="noopener noreferrer" className="footer-link">Facebook</a>
              </li>
              <li className="footer-list-item">
                <a href="mailto:contact@gdest.in" className="footer-link">Gmail</a>
              </li>
              <li className="footer-list-item">
                <a href="https://www.instagram.com/gdestin" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links Component */}
        <SocialLinks />

        {/* Detailed Content Display */}
        {selectedContent && (
          <div className="footer-content-display">
            {selectedContent}
          </div>
        )}

        <p className="footer-bottom">
          © 2024 Gdest.in | <strong className="footer-bottom-strong">Find Your Dream Job with Ease</strong>
        </p>
      </div>
    </div>
  );
}

export default Footer;
