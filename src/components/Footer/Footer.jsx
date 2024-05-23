import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h2 style={{ color: "tomato" }}>About FastFeast</h2>
          <p>At FastFeast, we believe that great food should be fast, fresh, and flavorful. Our mission is to deliver mouth-watering meals that satisfy your cravings and fit your busy lifestyle. Whether you're in the mood for a quick snack or a hearty feast, we've got you covered. Experience the perfect blend of speed and taste with FastFeast. Your satisfaction is our top priority!
          </p>
          <div className="footer-social-icons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.twitter_icon} alt="Twitter" />
            </a>
            <a
              href="https://www.linkdin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Quick Links</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Contact Us</h2>
          <ul>
            <li>Call: +8801729364608</li>
            <li>Call: +8801729364608</li>
            <li>Email: info@fastfeast.com</li>
            <li>Address: Shibgonj,Sylhet</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © FastFeast - Designed by Tushar & Dipto
      </p>
    </div>
  );
};

export default Footer;
