import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./PrivacyPolicy.css";
import { StoreContext } from "../../context/StoreContext";

const PrivacyPolicy = () => {
  return(
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <section>
        <h2>Introduction</h2>
        <p>
          Welcome to FastFeast. We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our services.
        </p>
      </section>
      <section>
        <h3>Information We Collect</h3>
        <p>
          We collect information that you provide to us directly, such as when you create an account, place an order, or contact us for support. This may include your name, email address, phone number, and payment information.
        </p>
        <p>
          We also collect information automatically as you navigate our site. This includes your IP address, browser type, and usage data, which helps us improve our services and user experience.
        </p>
      </section>
      <section>
        <h3>How We Use Your Information</h3>
        <p>
          We use the information we collect to:
          <ul>
            <li>Provide, operate, and maintain our services</li>
            <li>Process and manage your orders</li>
            <li>Improve our website and customer experience</li>
            <li>Send you updates, marketing communications, and other information</li>
            <li>Respond to your comments, questions, and provide customer service</li>
          </ul>
        </p>
      </section>
      <section>
        <h3>How We Share Your Information</h3>
        <p>
          We do not share your personal information with third parties except as necessary to provide our services, comply with the law, or protect our rights. This may include sharing information with payment processors, delivery partners, and other service providers.
        </p>
      </section>
      <section>
        <h3>Your Choices and Rights</h3>
        <p>
          You have the right to access, correct, or delete your personal information. You can update your account information through our website or contact us directly for assistance.
        </p>
        <p>
          You may also opt out of receiving marketing communications from us by following the unsubscribe instructions in those emails.
        </p>
      </section>
      <section>
        <h3>Data Security</h3>
        <p>
          We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee its absolute security.
        </p>
      </section>
      <section>
        <h3>Changes to This Privacy Policy</h3>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the new policy on our website.
        </p>
      </section>
      <section>
        <h3>Contact Us</h3>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p>
          Email: support@fastfeast.com
          <br />
          Address: 123 FastFeast Lane, Foodie City, FC 12345
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
