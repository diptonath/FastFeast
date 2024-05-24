import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const navigate = useNavigate(); // Access the navigate function

  // Handle cart button click
  const handleCartClick = () => {
    // Redirect to the cart page
    navigate("/cart");
  };

  return (
    <div className="navbar">
      <Link to="/">
        <h1
          className="logo"
          style={{
            color: "tomato",
            fontWeight: "bold",
            fontSize: "42px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            letterSpacing: "1px",
            textDecoration: "none",

          }}
        >
          FastFeast
        </h1>
      </Link>
      <ul className="navbar-menu">
        <Link to="/" className="menu-item">
          Home
        </Link>
        <a href="/about" className="menu-item">
          About
        </a>
        <a href="#explore-menu" className="menu-item">
          Menu
        </a>
        <a href="/contact" className="menu-item">
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <button className="cart-button" onClick={handleCartClick}>
          Cart
        </button>
        {isAuthenticated ? (
          <div className="user-info">
            {/* <img  alt={user.name} className="user-avatar" /> */}
            <span className="user-name">{user.name}</span>
            <Link to="/profile" className="profile-link"></Link>
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Log out
            </button>
          </div>
        ) : (
          <button onClick={() => loginWithRedirect()}>Log in</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
