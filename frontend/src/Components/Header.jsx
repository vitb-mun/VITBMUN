import React from "react";
import vitbhopal_logo from "../assets/vitbhopal_logo.png";
import vitbmun_logo from "../assets/vitbmun_logo.svg";

const Header = () => {
  return (
    <div className="bg-white border-b shadow-sm">
      {/* Top Header Section */}
      <div className="flex items-center justify-between container mx-auto px-4 py-3">
        {/* Left Logos */}
        <div className="flex items-center space-x-4">
          <img src={vitbhopal_logo} className="h-12 w-auto" />
          <img src={vitbmun_logo} className="h-12 w-auto" />
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-8">
          <a href="#about" className="text-gray-700 hover:text-blue-500">
            About
          </a>
          <a
            href="#events"
            className="text-blue-600 font-semibold border-b-2 border-blue-500"
          >
            Events
          </a>
          <a href="#team" className="text-gray-700 hover:text-blue-500">
            Team
          </a>
          <a href="#sponsors" className="text-gray-700 hover:text-blue-500">
            Sponsors
          </a>
          <a href="#faqs" className="text-gray-700 hover:text-blue-500">
            FAQs
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-500">
            Contact Us
          </a>
        </nav>
      </div>

      {/* Bottom Tagline Section */}
      <div className="text-center py-6">
        <h1 className="text-blue-600 font-bold text-2xl">
          "Speak Up the world will know!"
        </h1>
        <p className="text-gray-600 font-medium">
          VITBMUN Club | VIT Bhopal University
        </p>
      </div>
    </div>
  );
};

export default Header;
