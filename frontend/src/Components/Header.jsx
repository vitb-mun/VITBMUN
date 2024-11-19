import React from "react";
import vitbhopal_logo from "../assets/vitbhopal_logo.png";
import vitbmun_logo from "../assets/vitbmun_logo.svg";
import UN_Assembly from "../assets/UN_Assembly.jpg";

const Header = () => {
  return (
    <div className="bg-white  shadow-sm">
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
              className="text-gray-700 text-lg font-bold hover:text-blue-600"
              style={{
                fontFamily: "'Host Grotesk', 'Inter', 'Montserrat', sans-serif",
              }}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom Tagline Section */}
      <div className="text-center">
        <h1
          className="text-blue-700 font-bold text-3xl"
          style={{ fontFamily: "'Host Grotesk', sans-serif" }}
        >
          "Speak Up the world will know!"
        </h1>
        <p className="text-gray-600 font-medium">
          VITBMUN Club | VIT Bhopal University
        </p>
      </div>

      {/* Image Section */}
      <div className="relative container mx-auto px-2 py-4">
        <img
          src={UN_Assembly}
          alt="Conference Hall"
          className="w-full h-[400px] object-cover rounded-3xl shadow-lg"
        />
      </div>

      {/* Buttons Section */}
      <div className="container mx-auto px-2 py-4 flex justify-center space-x-4">
        {["Vichaar Vivad", "Newsletter"].map((btn) => (
          <button
            key={btn}
            className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg border-black-800 border-2 hover:bg-blue-600"
            style={{
              fontFamily: "'Host Grotesk', 'Inter', 'Montserrat', sans-serif",
            }}
          >
            {btn}
          </button>
        ))}
      </div>
      <br></br>
    </div>
  );
};

export default Header;
