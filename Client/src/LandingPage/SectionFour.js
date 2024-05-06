import React, { useEffect, useState } from "react";
import { Cursor } from "react-simple-typewriter";
import webDesignicon from "../Asset/webdesign.png";
import webDevelopementicon from "../Asset/WebDevelopmenticon.png";
import SEOicon from "../Asset/SEOicon.png";
import ecommerceicon from "../Asset/e-commerceicon.png";
import maintenanceicon from "../Asset/maintenanceicon.png";
import hostingicon from "../Asset/hostingicon.png";
import supporticon from "../Asset/supporticon.png";
import mobileappicon from "../Asset/mobileappicon.png";

function SectionFour() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const words = ["Websites"];

  useEffect(() => {
    let timer = setTimeout(() => {
      if (text.length === words[index].length) {
        setTimeout(() => {
          setIndex((index + 1) % words.length);
          setText("");
        }, 3000);
      } else {
        setText((prevText) => prevText + words[index][prevText.length]);
      }
    }, 250);

    return () => clearTimeout(timer);
  }, [index, text]);

  return (
    <div className="divcontainerfour">
      <div className="containerfour">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-4-left">
              <span className="section-4-heading text__light">We</span>
              <span className="section-4-heading text__light">Build</span>
              <span className="section-4-heading-bold fw-bolder">
                {text} <Cursor />
              </span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-4-right text-center text-lg-start">
              <div className="sec4-blank"></div>
              <div className="sec4-text">
                We are experts in web design and development, specializing in
                creating stunning, user-friendly websites tailored to your
                unique needs. Whether you're a small business, a startup, or an
                established enterprise, our team is dedicated to crafting
                engaging online experiences that captivate your audience. From
                sleek and modern designs to powerful e-commerce solutions, we
                are committed to helping you succeed in the digital world. Let's
                collaborate and elevate your online presence together. Explore
                our websites and discover the possibilities today.
              </div>

              <div className="skills-container">
                <h2 className="title ">OUR SERVICES</h2>

                <div className="technology-section">
                  <div className="skills-list">
                    <div className="skill">
                      <img src={webDesignicon} alt="Web Design" />
                      <span>Web Design</span>
                    </div>
                    <div className="skill">
                      <img src={SEOicon} alt="SEO Optimization" />
                      <span>SEO Optimization</span>
                    </div>
                    <div className="skill">
                      <img src={ecommerceicon} alt="E-Commerce" />
                      <span>E-Commerce</span>
                    </div>
                  </div>
                </div>

                {/* Development Section */}
                <div className="technology-section">
                  <h3>Development</h3>
                  <div className="skills-list">
                    <div className="skill">
                      <img
                        src={webDevelopementicon}
                        alt="Website Development"
                      />
                      <span>Website Development</span>
                    </div>
                    <div className="skill">
                      <img src={mobileappicon} alt="Mobile App" />
                      <span>Mobile App Development</span>
                    </div>
                  </div>
                </div>

                {/* Backend/Frameworks Section */}
                <div className="technology-section">
                  <h3>Back-end Support</h3>
                  <div className="skills-list">
                    <div className="skill">
                      <img src={supporticon} alt="Support" />
                      <span>24*7 Free Support</span>
                    </div>
                    <div className="skill">
                      <img src={maintenanceicon} alt="Maintanance" />
                      <span>Maintanance</span>
                    </div>
                    <div className="skill">
                      <img src={hostingicon} alt="Hosting" />
                      <span>Hosting</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section-4-button">
                <button className="sec4-btn text-uppercase fw-bold">
                  Build a Website
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bold-line sec4"></div>
    </div>
  );
}

export default SectionFour;
