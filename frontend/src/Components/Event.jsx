import React, { useEffect, useState, useRef } from "react";
import rajneeti_logo from "../assets/RajneetiRangmanch.png";
import Diagloue from "../assets/Diagloue.png";
import UN_Assembly from "../assets/finalun.jpg";
import { motion } from "framer-motion";
import Event_Ticket from "./Event_Ticket";

const Event = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  // const [isVisible, setIsVisible] = useState(false);
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

  // Changing The Events In Ticket
  // const [Logo, setLogo] = useState(rajneeti_logo);
  // const [Head, setHeadText] = useState("Rajneeti Rangmanch");
  // const [Desc, setDescText] = useState("Rajneeti Rangmanch will bring together a blend of fun research and power packed debate. Come join us and enjoy an amazing game of discussion, deliberation and discovery.");
  // const [Date, setDateText] = useState("22/02/2025");
  // const [Day, setDayText] = useState("Saturday");
  // const [Time, setTimeText] = useState("09:00 AM - 11:00 AM");

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setLogo((prevText) => (prevText === rajneeti_logo ? Diagloue : rajneeti_logo));
  //     setHeadText((prevText) => (prevText === "Rajneeti Rangmanch" ? "Democracy Dialogue" : "Rajneeti Rangmanch"));
  //     setDescText((prevText) => (prevText === "Rajneeti Rangmanch will bring together a blend of fun research and power packed debate. Come join us and enjoy an amazing game of discussion, deliberation and discovery." ? "Dive into Democracy Dialogue, a dynamic debate designed to deepen dialogue and develop discussions. Discover great mentoring from debate maestros, develop your discourse skills, and discuss ideas with like-minded individuals. Join us at Democracy Dialogue." : "Rajneeti Rangmanch will bring together a blend of fun research and power packed debate. Come join us and enjoy an amazing game of discussion, deliberation and discovery."));
  //     setDateText((prevText) => (prevText === "22/02/2025" ? "22/02/2025" : "22/02/2025"));
  //     setDayText((prevText) => (prevText === "Saturday" ? "Saturday" : "Saturday"));
  //     setTimeText((prevText) => (prevText === "09:00 AM - 11:00 AM" ? "11:00 AM - 01:00 PM" : "09:00 AM - 11:00 AM"));
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);


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
            Upcoming Events
          </h2>
          <Event_Ticket
            ref={eventCardRef}
            Logo={rajneeti_logo}
            Heading={"Rajneeti Rangmanch"}
            Description={"Rajneeti Rangmanch will bring together a blend of fun research and power packed debate. Come join us and enjoy an amazing game of discussion, deliberation and discovery."}
            Date={"22/02/2025"}
            Day={"Saturday"}
            Time={"09:00 AM - 11:00 AM"}
            Venue={"AR 102"}
          />
          <Event_Ticket
            Logo={Diagloue}
            Heading={"Democracy Dialogue"}
            Description={"Join Democracy Dialogue, a dynamic debate to deepen discussions and deliberate democracy’s dilemmas. Engage with diverse voices, gain mentoring, refine skills, and showcase prowess."}
            Date={"22/02/2025"}
            Day={"Saturday"}
            Time={"11:00 AM - 01:00 PM"}
            Venue={"AB 220"}
          />
        </section>
      </div>
    </div>
  );
};

export default Event;
