import React from "react";
import vitbhopal_logo from "../assets/vitbhopal_logo.png";
import vitbmun_logo from "../assets/vitbmun_logo.svg";

const Header = () => {
  return (
    <div className="bg-white sticky top-0 z-50 shadow-md">
      {/* Top Header Section */}
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        {/* Logos */}
        <div className="flex items-center space-x-4">
          <img src={vitbmun_logo} className="h-12 w-auto" alt="VITBMUN Logo" />
          <div className="text-3xl">|</div>
          <img
            src={vitbhopal_logo}
            className="h-14 w-auto"
            alt="VIT Bhopal Logo"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-4 mt-4 md:mt-0">
          {[
            "About",
            "Events",
            "Coordinators",
            "Team",
            "Sponsors",
            "FAQs",
            "Contact Us",
          ].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "")}`}
              className="text-gray-700 text-xl font-bold hover:text-blue-600"
              style={{
                fontFamily: "'Host Grotesk', 'Inter', 'Montserrat', sans-serif",
              }}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
