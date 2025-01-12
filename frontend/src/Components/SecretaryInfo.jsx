import React from "react";
import { motion } from "framer-motion";
import vitbmun_logo from "../assets/vitbmun_logo.svg";
import Priyanshi from "../assets/Secretary Photos/Priyanshi.jpg";
import Akhila from "../assets/Secretary Photos/AKHILA.jpg";
import Dev from "../assets/Secretary Photos/Dev.jpg";
import Jeremy from "../assets/Secretary Photos/Jeremy.jpg";
import Pushkar from "../assets/Secretary Photos/Pushkar.jpg";
import Asmita from "../assets/Secretary Photos/Asmita.jpg";
import Savita from "../assets/Secretary Photos/SAVI.jpg";
import Swayam from "../assets/Secretary Photos/swayam.jpg";

const SecreatryInfo = () => {
  const coordinators = [
    {
      name: "PRIYANSHI SHARMA",
      role: "Secretary General",
      image: Priyanshi,
    },
    {
      name: "ASMITA PAL",
      role: "Deputy Secretary General ",
      image: Asmita,
    },
    {
      name: "SAVITA UPPAR",
      role: "Deputy Secretary General ",
      image: Savita,
    },
    {
      name: "JEREMY ZAC JACOB",
      role: "Head of OC",
      image: Jeremy,
    },
    {
      name: "PUSHKAR SINGH",
      role: "Head of OC",
      image: Pushkar,
    },
    {
      name: "SWAYAM VINOD",
      role: "Head of OC",
      image: Swayam,
    },
    {
      name: "AKHILA PURIGILLA",
      role: "Treasurer",
      image: Akhila,
    },
    {
      name: "DEV RATHI",
      role: "Director of Public Relations",
      image: Dev,
    },
  ];

  return (
    <div className="mx-auto p-4">
      <h1
        className="text-5xl sm:text-6xl font-semibold text-gray-800 mb-10 text-center"
        style={{ fontFamily: "'Host Grotesk', sans-serif" }}
      >
        Secretariat 2024-25
      </h1>
      <div className="flex flex-wrap justify-center gap-8 p-4">
        {coordinators.map((coordinator, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-96 bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
            role="region"
            aria-labelledby={`coordinator-${index}-name`}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -100 : 100, // Alternating fade-in directions
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.1, // Staggered animations
            }}
            viewport={{ once: true }}
          >
            <img
              src={coordinator.image || vitbmun_logo}
              alt={`Coordinator ${coordinator.name}`}
              className="w-48 h-48 object-cover rounded-full mx-auto mb-10 border-2 border-gray-300"
            />
            <h3
              id={`coordinator-${index}-name`}
              className="text-xl font-semibold text-gray-900"
            >
              {coordinator.name}
            </h3>
            <p className="text-lg text-gray-800 font-medium">
              {coordinator.role}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SecreatryInfo;
