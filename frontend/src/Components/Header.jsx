import React, { useState } from "react";
import vitbhopal_logo from "../assets/vitbhopal_logo.png";
import vitbmun_logo from "../assets/vitbmun_logo.svg";

const Header = () => {
  React.useEffect(() => {
    const sidebar = document.getElementById("sidebar-active");
    const overlay = document.getElementById("overlay");
    overlay.addEventListener("click", () => {
      sidebar.checked = false;
    });
    document.querySelectorAll("nav a").forEach((element) => {
      element.addEventListener("click", () => {
        sidebar.checked = false;
      });
    });
  }, []);
  return (
    // div for header
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <a className="home-link-mobile" href="#">
        <img src={vitbmun_logo} alt="VITBMUN Logo" />
        <h1>|</h1>
        <img src={vitbhopal_logo} alt="VIT Bhopal Logo" />
      </a>
      <input type="checkbox" name="t" id="sidebar-active" />
      <label htmlFor="sidebar-active" className="open-sidebar-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000000"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </label>
      <label id="overlay" htmlFor="sidebar-active"></label>
      <div className="links-container">
        <label htmlFor="sidebar-active" className="close-sidebar-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000000"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </label>
        <a className="home-link" href="#">
          <img src={vitbmun_logo} alt="VITBMUN Logo" />
          <h1>|</h1>
          <img src={vitbhopal_logo} alt="VIT Bhopal Logo" />
        </a>
        {[
          "About",
          "Collaborations",
          "Event Timeline",
          "Coordinators",
          "Team",
          "FAQs",
          "Sponsors",
          "Contact Us",
        ].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(" ", "")}`}
            className="text-gray-700 font-bold hover:text-blue-600"
            style={{
              fontFamily: "'Host Grotesk', 'Inter', 'Montserrat', sans-serif",
            }}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
};
export default Header;
