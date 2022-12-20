/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Send from "assets/send.svg";
import Hero from "assets/hero1.svg";

const Banner = () => {
  return (
    <div>
      <section className="section1">
        <div className="back">
          <div className="hero-left">
            <h1>Don't miss our daily amazing deals.</h1>
            <h5>Save up to 60% off on your first order</h5>

            <div className="subscribe-container">
              <div className="subscribe-bar">
                <img src={Send} />
                <input
                  className="search"
                  placeholder="Enter you email address"
                />
              </div>

              <h3>Subscribe</h3>
            </div>
          </div>

          <div className="hero-right">
            <img src={Hero} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
