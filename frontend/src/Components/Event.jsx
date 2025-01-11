import React from "react";
import { Link } from "react-router-dom";
import rajneeti_logo from "../assets/Rajneeti.png";
import upcome from "../assets/upcome.jpg";

import UN_Assembly from "../assets/UN_Assembly.jpg";

const Event = () => {
  return (
    <div>
      {/* Bottom Tagline Section */}
      <div className="text-center mt-4">
        <h1
          className="text-blue-700 font-bold text-5xl"
          style={{ fontFamily: "'Host Grotesk', sans-serif" }}
        >
          Speak up the World will know!
        </h1>
        <p className="text-gray-600 font-medium text-xl mt-1">
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
      <div className="font-sans bg-white ">
        <section className="container mx-auto px-6 py-12">
          <h2
            className="text-5xl font-bold text-gray-800 mb-6"
            style={{ fontFamily: "'Host Grotesk', sans-serif" }}
          >
            Model Of United Nations
          </h2>
          <p className="text-gray-800 text-xl text-bold leading-relaxed mb-12">
            Welcome to our MUN Club, where we bring the world of Model United
            Nations to life! In our club, students take on the roles of
            delegates representing diverse countries and organizations, engaging
            in spirited debates, negotiations, and crafting solutions to global
            challenges. At MUN Club, we're more than just a simulation – we're a
            vibrant community dedicated to fostering a deeper understanding of
            international affairs and honing invaluable skills in diplomacy,
            public speaking, and critical thinking. Whether you're a seasoned
            delegate or new to the MUN scene, our club offers a supportive
            environment where members can learn, grow, and make lasting
            connections.
          </p>

          {/* Events Section */}
          <h2
            className="text-5xl font-bold text-gray-800 mb-6"
            style={{ fontFamily: "'Host Grotesk', sans-serif" }}
          >
            Upcoming Events
          </h2>
          <div className="grid px-1 py-1 grid-cols-1 md:grid-cols-4 gap-6  rounded-3xl border-gray-300">
            {/* Event 1 */}
            <Link to="/RajneetiRangmanch" className="block">
              <div className="bg-white border-black-800 border-2 rounded-lg shadow overflow-hidden">
                <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                  <img
                    src={rajneeti_logo}
                    className="h-full w-full object-cover"
                    alt="VIT Bhopal Logo"
                  />
                </div>
                <h3
                  className="text-2xl flex items-center justify-center font-semibold text-gray-700 p-4"
                  style={{ fontFamily: "'Host Grotesk', sans-serif" }}
                >
                  Rajneeti Rangmanch
                </h3>
              </div>
            </Link>
            <Link to="/MUN-MATE" className="block">
              <div className="bg-white border-black-800 border-2 rounded-lg shadow overflow-hidden">
                <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                  <img
                    src={upcome}
                    className="h-full w-full object-cover"
                    alt="VIT Bhopal Logo"
                  />
                </div>
                <h3
                  className="text-2xl flex items-center justify-center font-semibold text-gray-700 p-4"
                  style={{ fontFamily: "'Host Grotesk', sans-serif" }}
                >
                  MUNMATE'24
                </h3>
              </div>
            </Link>
            <Link to="/VITBMUN" className="block">
              <div className="bg-white border-black-800 border-2 rounded-lg shadow overflow-hidden">
                <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                  <img
                    src={upcome}
                    className="h-full w-full object-cover"
                    alt="VIT Bhopal Logo"
                  />
                </div>
                <h3
                  className="text-2xl flex items-center justify-center font-semibold text-gray-700 p-4"
                  style={{ fontFamily: "'Host Grotesk', sans-serif" }}
                >
                  VITBMUN'24
                </h3>
              </div>
            </Link>
            <Link to="/VITBMUN" className="block">
              <div className="bg-white border-black-800 border-2 rounded-lg shadow overflow-hidden">
                <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                  <img
                    src={upcome}
                    className="h-full w-full object-cover"
                    alt="VIT Bhopal Logo"
                  />
                </div>
                <h3
                  className="text-2xl flex items-center justify-center font-semibold text-gray-700 p-4"
                  style={{ fontFamily: "'Host Grotesk', sans-serif" }}
                >
                  Chain Reaction Chase
                </h3>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Event;
