import React, { useEffect, useState, useRef } from "react";
import rajneeti_logo from "../assets/Rajneeti.png";
import UN_Assembly from "../assets/finalun.jpg";
import { motion } from "framer-motion";

const Event = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const eventCardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Intersection Observer to detect when the card is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger fade-in when the event card comes into view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in the viewport
    );

    if (eventCardRef.current) {
      observer.observe(eventCardRef.current);
    }

    return () => {
      if (eventCardRef.current) {
        observer.unobserve(eventCardRef.current);
      }
    };
  }, []);

  return (
    <div>
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
                animation: `fadeIn 0.5s ease ${2 + index * 0.19}s forwards`,
                opacity: 0,
              }}
            >
              {word}
            </span>
          ))}
        </h1>
        <motion.p
          className="text-gray-700 font-medium text-xl mt-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3 }}
        >
          VITBMUN Club | VIT Bhopal University
        </motion.p>
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

      {/* Image Section with Scroll Zoom */}
      <div
        className="relative container mx-auto px-2 py-4 overflow-hidden"
        style={{
          height: "400px",
        }}
      >
        <img
          src={UN_Assembly}
          alt="Conference Hall"
          className="w-full h-full object-cover rounded-3xl shadow-lg"
          style={{
            transform: `scale(${1 + scrollPosition / 1000})`, // Zoom effect
            transition: "transform 0.1s ease-out", // Smooth transition
          }}
        />
      </div>

      {/* Main Content Section */}
      <div className="font-sans bg-white">
        <section className="container mx-auto px-6 py-12">
          <motion.h2
            id="about"
            className="text-5xl font-bold text-gray-800 mb-6"
            style={{ fontFamily: "'Host Grotesk', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3 }}
          >
            Model United Nations
          </motion.h2>
          <motion.p
            className="text-gray-800 text-xl text-bold leading-relaxed mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 3 }}
          >
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
          </motion.p>

          {/* Events Section */}
          <h2
            className="text-5xl font-bold text-gray-800 mb-6"
            style={{ fontFamily: "'Host Grotesk', sans-serif" }}
          >
            Upcoming Event
          </h2>
          <div
            ref={eventCardRef}
            className={` text-white relative overflow-hidden bg-repeat object-bottom 
            bg-[url('./assets/TicketC.jpg')] lg:bg-[url('./assets/TicketC.png')] bg-contain sm:h-auto h-lvh ${
              isVisible
                ? "opacity-100 transition-opacity duration-1000"
                : "opacity-0"
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-start items-center p-10 ">
              {/* Image Section */}
              <div className="w-full md:w-1/4 h-48 sm:h-60 md:h-auto bg-gray-300 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={rajneeti_logo}
                  className="h-full w-full object-cover"
                  alt="Rajneeti Rangmanch Logo"
                />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-2/4 mt-6 md:mt-0 md:ml-6 flex flex-col justify-center">
                <h3
                  className="text-3xl sm:text-4xl font-bold"
                  style={{ fontFamily: "'Host Grotesk', sans-serif" }}
                >
                  Rajneeti Rangmanch
                </h3>
                <p className="text-gray-400 mt-2 text-lg sm:text-xl leading-relaxed">
                  Welcome to our MUN Club, where we bring the world of Model
                  United Nations to life! In our club, ates, negotiations, and
                  crafting solutions to global challenges.
                </p>

                {/* Additional Event Details */}
                <div className="mt-4">
                  <p className="text-gray-300 text-lg sm:text-xl">
                    <span className="font-semibold text-white">Date:</span>{" "}
                    05/08/2024
                  </p>
                  <br />
                  <p className="text-gray-300 text-lg sm:text-xl">
                    <span className="font-semibold text-white">Day:</span>{" "}
                    Monday
                  </p>
                  <br />
                  <p className="text-gray-300 text-lg sm:text-xl">
                    <span className="font-semibold text-white">Time:</span>{" "}
                    10:00 AM - 06:00 PM
                  </p>
                  <br />
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
