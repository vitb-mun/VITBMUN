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
          {`Speak up the World will know!`.split(" ").map((word, index) => (
            <span
              key={index}
              className="inline-block mr-2"
              style={{
                animation: `fadeIn 0.5s ease ${index * 0.19}s forwards`,
                opacity: 0,
              }}
            >
              {word}
            </span>
          ))}
        </h1>
        <p className="text-gray-600 font-medium text-xl mt-1">
          VITBMUN Club | VIT Bhopal University
        </p>
      </div>

      <style>
        {`
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`}
      </style>

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
            Upcoming Event
          </h2>
          <div className="bg-gray-900 text-white border border-gray-700 rounded-3xl shadow-md p-6">
            <div className="flex flex-col md:flex-row md:items-start items-center">
              {/* Image Section */}
              <div className="w-full md:w-1/3 h-48 sm:h-60 md:h-auto bg-gray-300 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={rajneeti_logo}
                  className="h-full w-full object-cover"
                  alt="Rajneeti Rangmanch Logo"
                />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-2/3 mt-6 md:mt-0 md:ml-6 flex flex-col justify-center">
                <h3
                  className="text-3xl sm:text-4xl font-bold"
                  style={{ fontFamily: "'Host Grotesk', sans-serif" }}
                >
                  Rajneeti Rangmanch
                </h3>
                <p className="text-gray-400 mt-2 text-lg sm:text-xl leading-relaxed">
                  Welcome to our MUN Club, where we bring the world of Model
                  United Nations to life! In our club, students take on the
                  roles of delegates representing diverse countries and
                  organizations, engaging in spirited debates, negotiations, and
                  crafting solutions to global challenges.
                </p>
                {/* Additional Event Details */}
                <div className="mt-4">
                  <p className="text-gray-300 text-lg sm:text-xl">
                    <span className="font-semibold text-white">Date:</span>{" "}
                    05/08/2024
                  </p>
                  <br></br>
                  <p className="text-gray-300 text-lg sm:text-xl">
                    <span className="font-semibold text-white">Day:</span>{" "}
                    Monday
                  </p>
                  <br></br>
                  <p className="text-gray-300 text-lg sm:text-xl">
                    <span className="font-semibold text-white">Time:</span>{" "}
                    10:00 AM - 06:00 PM
                  </p>
                  <br></br>
                  <p className="text-gray-300 text-lg sm:text-xl">
                    <span className="font-semibold text-white">
                      Registration Fee:
                    </span>{" "}
                    ₹199
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Event;
