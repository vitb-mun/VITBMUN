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
          {`Speak up, the world will know.`.split(" ").map((word, index) => (
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
            We at the VITB-MUN club take pride in standing as a beacon for
            students who want to make a difference in the world, and aim to
            showcase the power of critical thinking, research and teamwork.{" "}
            <br></br>
            <br></br>The club embodies the idea of "Vox populi, vox Dei" which
            translates to “the voice of the people is the voice of God” and
            firmly believes that our generation has the power and guile to
            change the world and aims to make students realise the importance of
            voicing their opinions. VITBMUN is one of the most prestigious
            conferences in Central India and is renowned for its unique events.
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
                  className="text-2xl sm:text-4xl font-bold"
                  style={{ fontFamily: "'Host Grotesk', sans-serif" }}
                >
                  Rajneeti Rangmanch
                </h3>
                <p className="text-gray-400 mt-2 text-sm sm:text-xl leading-relaxed">
                  Rajneeti Rangmanch will bring together a blend of fun research
                  and power packed debate. Come join us and enjoy an amazing
                  game of discussion, deliberation and discovery.
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
