import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <div className="sheader">
        <h1>Explore Our FastFeast Menu</h1>
        <p className="explore-menu-test" style={{textAlign: "center"}}>
        Dive into a world of flavors with our diverse and delectable menu. From juicy burgers and crispy fries to fresh salads and indulgent desserts, FastFeast has something for everyone. Our dishes are crafted with the finest ingredients to ensure every bite is a burst of deliciousness. Check out our menu and satisfy your cravings today!
        </p>
      </div>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
