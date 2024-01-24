import React from 'react';
import './SectionFour.css';

function SectionFour() {
  return (
    <div className="divcontainerfour">
      <div className="containerfour"> 
        <div className="row">
          <div className="col-lg-6">
            <div className="section-4-left  ">
              <span className="section-4-heading text__light">We</span>
              <span className="section-4-heading text__light">Build</span>
              <span className="section-4-heading-bold fw-bolder">career</span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-4-right text-center text-lg-start">
              <div className="sec4-blank"></div>
              <div className="sec4-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus est dolor iure voluptates.
                Facere nostrum porro, velit veniam, architecto veritatis, libero a repellat quod quas atque
                totam accusamus obcaecati delectus dicta! Suscipit ratione qui, nihil voluptates error
                distinctio optio doloremque?
              </div>
              <div className="section-4-button">
                <button className="sec4-btn text-uppercase fw-bold">Build a Career</button>
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
