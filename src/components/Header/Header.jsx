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
        <h2 className="scrolling-text">
          Sylhet Spice Cafe-এ বিকাশ পেমেন্ট করলেই 15% ডিসকাউন্ট!
        </h2>
        <p>
          Discover our diverse Sylheti menu! Order easily, with flexible
          delivery and pickup options By Food Panda, ensuring your meal arrives
          just the way you like it.
        </p>
        <button onClick={handleViewMenuClick} style={{ cursor: "pointer" }}>
          View menu
        </button>
      </div>
    </div>
  );
};

export default Header;
