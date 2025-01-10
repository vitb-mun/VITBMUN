import React from "react";
import vitbmun_logo from "../assets/vitbmun_logo.svg";
import Priyanshi from "../assets/Priyanshi.jpg";
import Akhila from "../assets/AKHILA.jpg";
import Dev from "../assets/Dev.jpg";
import Jeremy from "../assets/Jeremy.jpg";
import Pushkar from "../assets/Pushkar.jpg";
import Asmita from "../assets/Asmita.jpg";
import Savita from "../assets/SAVI.jpg";
import Swayam from "../assets/swayam.jpg";

const SecreatryInfo = () => {
  const coordinators = [
    {
      name: "PRIYANSHI SHARMA",
      role: "Secretary General",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque ultricies condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image: Priyanshi, // Placeholder for dynamic image handling
    },
    {
      name: "ASMITA PAL",
      role: "Deputy Secretary General ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque ultricies condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image: Asmita,
    },
    {
      name: "SAVITA UPPAR",
      role: "Deputy Secretary General ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque ultricies condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image: Savita,
    },
    {
      name: "JEREMY ZAC JACOB",
      role: "Head of OC",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque ultricies condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image: Jeremy, // Placeholder for dynamic image handling
    },
    {
      name: "PUSHKAR SINGH",
      role: "Head of OC",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque ultricies condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image: Pushkar,
    },
    {
      name: "SWAYAM VINOD",
      role: "Head of OC",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque ultricies condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image: Swayam,
    },
    {
      name: "AKHILA PURIGILLA",
      role: "Treasurer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque ultricies condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image: Akhila,
    },
    {
      name: "DEV RATHI",
      role: "Director of Public Relations",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque ultricies condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image: Dev,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1
        className="text-5xl sm:text-6xl font-semibold text-gray-800 mb-10 text-center"
        style={{ fontFamily: "'Host Grotesk', sans-serif" }}
      >
        Secretariat 2024-25
      </h1>
      <div className="flex flex-wrap justify-center gap-8 p-4">
        {coordinators.map((coordinator, index) => (
          <div
            key={index}
            className="w-full sm:w-96 bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
            role="region"
            aria-labelledby={`coordinator-${index}-name`}
          >
            <img
              src={coordinator.image || vitbmun_logo}
              alt={`Coordinator ${coordinator.name}`}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-2 border-gray-300"
            />
            <h3
              id={`coordinator-${index}-name`}
              className="text-xl font-semibold text-gray-900"
            >
              {coordinator.name}
            </h3>
            <p className="text-lg text-gray-600 font-medium">
              {coordinator.role}
            </p>
            <p className="text-gray-600 mt-4 line-clamp-3">
              {coordinator.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecreatryInfo;
