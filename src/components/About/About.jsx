import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="left-side">
        <img
          src="https://media.giphy.com/media/kgUoG0kpDycjIRk3Af/giphy.gif"
          alt="Delivery Man Cycling"
        />
      </div>
      <div className="right-side">
        <h2 className="zoom-effect">
          Welcome to Sylhet Spice Cafe Restaurant!{" "}
        </h2>
        <p>Located in the heart of Sylhet🇧🇩....</p>
        <p>
          Partnered with Food Panda, we ensure super-fast delivery, so you can
          enjoy your meals hot and fresh every time⌛
        </p>
      </div>
    </div>
  );
};

export default About;
