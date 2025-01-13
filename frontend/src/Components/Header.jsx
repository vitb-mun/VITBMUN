import React, { useState } from "react";
import vitbhopal_logo from "../assets/vitbhopal_logo.png";
import vitbmun_logo from "../assets/vitbmun_logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white sticky top-0 z-50 shadow-md">
      {/* Top Header Section */}
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        {/* Logos - Aligned Left */}
        <div className="flex items-center space-x-4">
          <img src={vitbmun_logo} className="h-12 w-auto" alt="VITBMUN Logo" />
          <div className="text-3xl">|</div>
          <img
            src={vitbhopal_logo}
            className="h-14 w-auto"
            alt="VIT Bhopal Logo"
          />
        </div>

        {/* Hamburger Icon - Visible only on small screens */}
        <button
          className="md:hidden text-gray-700 text-3xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        {/* Navigation Links - Aligned Right */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-white shadow-md md:static md:block md:flex md:space-x-8 md:shadow-none`}
        >
          <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 py-4 md:py-0">
            {[
              "About",
              "Events",
              "Coordinators",
              "Team",
              "Sponsors",
              "FAQs",
              "Contact Us",
            ].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(" ", "")}`}
                  className="text-gray-700 text-xl font-bold hover:text-blue-600"
                  style={{
                    fontFamily:
                      "'Host Grotesk', 'Inter', 'Montserrat', sans-serif",
                  }}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
