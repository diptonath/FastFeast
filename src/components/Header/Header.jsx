import React from "react";
import "./Header.css";

const Header = () => {
  const handleViewMenuClick = () => {
    const exploreMenu = document.getElementById("explore-menu");
    if (exploreMenu) {
      exploreMenu.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header">
      <div className="header-contents">
        <h2>Welcome to FastFeast</h2>
        <h4>Delicious Fast Food, Delivered Fast</h4>
        <button onClick={handleViewMenuClick} style={{ cursor: "pointer" }}>
          View menu
        </button>
      </div>
    </div>
  );
};

export default Header;
