import React from "react";
import vitbhopal_logo from "../assets/vitbhopal_logo.png";
import vitbmun_logo from "../assets/vitbmun_logo.svg";
import UN_Assembly from "../assets/UN_Assembly.jpg";

import { HashLink } from 'react-router-hash-link';

const Header = () => {
 
  return (
    // div for header
    <nav className="bg-white sticky top-0 z-50 shadow-md event-header" >
      <HashLink className="home-link-mobile" to="/#">
        <img src={vitbmun_logo} alt="VITBMUN Logo" />
        <h1>|</h1>
        <img src={vitbhopal_logo} alt="VIT Bhopal Logo" />
      </HashLink>
      <HashLink className="event-nav-mobile text-gray-700 font-bold" to="/#eventtimeline">
        Back </HashLink>
      
     
      <label id="overlay" htmlFor="sidebar-active"></label>
      <div className="links-container">
       
        <HashLink className="home-link" to="/#">
          <img src={vitbmun_logo} alt="VITBMUN Logo" />
          <h1>|</h1>
          <img src={vitbhopal_logo} alt="VIT Bhopal Logo" />
        </HashLink>
    
        <HashLink className="event-nav text-gray-700 font-bold" to="/#eventtimeline">
        Back </HashLink>
      </div>
    </nav>
  );
};

export default Header;
