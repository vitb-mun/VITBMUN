import React from "react";
import vitbhopal_logo from "../assets/vitbhopal_logo.png";

const Event = () => {
  return (
    <div className="font-sans bg-white min-h-screen">
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          Model Of United Nations
        </h2>
        <p className="text-gray-800 text-lg text-semibold leading-relaxed mb-12">
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
          connections
        </p>

        {/* Events Section */}
        <h2 className="text-5xl font-bold text-gray-800 mb-6">Events</h2>
        <div className="grid px-6 py-6 grid-cols-1 md:grid-cols-3  gap-6 border-solid border-2 rounded-3xl border-gray-300">
          {/* Event 1 */}
          <a href="/MUN-MATE" className="block">
            <div className="bg-white border-black-800 border-2 rounded-lg shadow overflow-hidden">
              <div className="w-full h-32 bg-gray-200 flex items-center justify-center">
                <img
                  src={vitbhopal_logo}
                  className="h-24 w-auto"
                  alt="VIT Bhopal Logo"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-700 p-4">
                MUN-MATE'24
              </h3>
            </div>
          </a>
          <a href="/VITBMUN" className="block">
            <div className="bg-white border-black-800 border-2 rounded-lg shadow overflow-hidden">
              <div className="w-full h-32 bg-gray-200 flex items-center justify-center">
                <img
                  src={vitbhopal_logo}
                  className="h-24 w-auto"
                  alt="VIT Bhopal Logo"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-700 p-4">
                VITBMUN
              </h3>
            </div>
          </a>
          <a href="/RajneetiRangmanch" className="block">
            <div className="bg-white border-black-800 border-2 rounded-lg shadow overflow-hidden">
              <div className="w-full h-32 bg-gray-200 flex items-center justify-center">
                <img
                  src={vitbhopal_logo}
                  className="h-24 w-auto"
                  alt="VIT Bhopal Logo"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-700 p-4">
                Rajneeti Rangmanch
              </h3>
            </div>
          </a>
          <a href="/ChainReactionChase" className="block">
            <div className="bg-white border-black-800 border-2 rounded-lg shadow overflow-hidden">
              <div className="w-full h-32 bg-gray-200 flex items-center justify-center">
                <img
                  src={vitbhopal_logo}
                  className="h-24 w-auto"
                  alt="VIT Bhopal Logo"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-700 p-4">
                Chain Reaction Chase
              </h3>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Event;
