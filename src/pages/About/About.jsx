import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
import { StoreContext } from "../../context/StoreContext";

const About = () => {
  return(
      <div className="about-us-container">
        <h1>About Us</h1>
        <section>
          <h2>Welcome to FastFeast!</h2>
          <p>
            At FastFeast, our passion is to provide you with delicious, high-quality fast food that’s always ready when you are. Our journey began with a simple idea: to create a place where people can enjoy quick, tasty, and satisfying meals without compromising on quality.
          </p>
        </section>
        <section>
          <h3>Our Mission</h3>
          <p>
            We aim to deliver a delightful dining experience by combining the convenience of fast food with gourmet flavors. Whether you’re grabbing a quick bite or enjoying a feast with friends and family, FastFeast ensures every meal is memorable.
          </p>
        </section>
        <section>
          <h3>Quality Ingredients</h3>
          <p>
            Great food starts with great ingredients. That’s why we use only the freshest and finest ingredients for all our dishes. From our juicy burgers to our crisp salads, every item on our menu is crafted with care.
          </p>
        </section>
        <section>
          <h3>Diverse Menu</h3>
          <p>
            Our menu offers something for everyone. From classic cheeseburgers and spicy wings to hearty sandwiches and refreshing drinks, FastFeast caters to all tastes. We also offer vegetarian and healthy options.
          </p>
        </section>
        <section>
          <h3>Customer Commitment</h3>
          <p>
            Your satisfaction is our top priority. We are dedicated to providing excellent service and a welcoming atmosphere. Our friendly staff ensures you have a pleasant experience, whether dining in, taking out, or ordering online.
          </p>
        </section>
        <section>
          <h3>Join the FastFeast Family</h3>
          <p>
            We’re more than just a fast food restaurant; we’re a community. We love bringing people together through great food and good times. Follow us on social media for the latest offerings, promotions, and events.
          </p>
        </section>
        <p>Thank you for choosing FastFeast. We look forward to serving you!</p>
      </div>
  );
};

export default About;
