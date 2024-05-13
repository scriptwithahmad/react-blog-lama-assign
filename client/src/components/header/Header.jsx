import React from "react";
import "./header.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Header() {
  Aos.init({ duration: 2000 });
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitlesSm" data-aos="zoom-in-left">React & Node</span>
        <span className="headerTitlesLg" data-aos="zoom-in-right">Blog</span>
      </div>
      <img
        className="headerImg"
        data-aos="zoom-out-down"
        src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        // src="./Images/home1.jpg"
        alt=""
      />
    </div>
  );
}

export default Header;
