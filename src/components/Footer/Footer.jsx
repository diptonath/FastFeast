import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h2 style={{ color: "orangered" }}>Sylhet Spice Cafe</h2>
          <p>
            Sylhet Spice Cafe FastFood is all about reimagining the fast food
            experience for the better. Swing by today and discover a new world
            of flavors and convenience at Yammi FastFood!
          </p>
          <div className="footer-social-icons">
            <a
              href="https://www.facebook.com/khondokar.lazy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>
            <a
              href="https://www.facebook.com/khondokar.lazy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.twitter_icon} alt="Twitter" />
            </a>
            <a
              href="https://www.facebook.com/khondokar.lazy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+8801701883515</li>
            <li>contact@mehraz.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Sylhet Spice Cafe Restaurant - Designed by Mehraz &
        Fahim
      </p>
    </div>
  );
};

export default Footer;
