import React from "react";
import vitbmun_logo from "../assets/vitbmun_logo.svg";

const FacultyInfo = () => {
  const coordinators = [
    {
      name: "TAUSEEF QAMAR",
      role: "Club Coordinator",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque ultricies condimentum. Class aptent taciti sociosqu ",
      image: null,
    },
    {
      name: "FEEROZ BABU",
      role: "Club Co-Coordinator",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque ultricies condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image: null,
    },
    {
      name: "KK NAIR",
      role: "Faculty Advisor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque ultricies condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image: null,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1
        className="text-5xl sm:text-6xl font-semibold text-gray-800 mb-10 text-center"
        style={{ fontFamily: "'Host Grotesk', sans-serif" }}
      >
        Faculty Coordinators
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
              className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-gray-300"
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

export default FacultyInfo;
