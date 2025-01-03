import React from "react";
import { Link } from "react-router-dom";
import diagloue_logo from "../assets/Diagloue.png";
import rajneeti_logo from "../assets/Rajneeti.png";

const Event = () => {
  return (
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
          Nations to life! In our club, students take on the roles of delegates
          representing diverse countries and organizations, engaging in spirited
          debates, negotiations, and crafting solutions to global challenges. At
          MUN Club, we're more than just a simulation – we're a vibrant
          community dedicated to fostering a deeper understanding of
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
          Events
        </h2>
        <div className="grid px-1 py-1 grid-cols-1 md:grid-cols-4 gap-6  rounded-3xl border-gray-300">
          {/* Event 1 */}
          <Link to="/MUN-MATE" className="block">
            <div className="bg-white border-black-800 border-2 rounded-lg shadow overflow-hidden">
              <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                <img
                  src={diagloue_logo}
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
                  src={rajneeti_logo}
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
          <Link to="/RajneetiRangmanch" className="block">
            <div className="bg-white border-black-800 border-2 rounded-lg shadow overflow-hidden">
              <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                <img
                  src={diagloue_logo}
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
          <Link to="/ChainReactionChase" className="block">
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
                Chain Reaction Chase
              </h3>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Event;
