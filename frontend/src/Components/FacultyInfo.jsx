import React from "react";
import vitbmun_logo from "../assets/vitbmun_logo.svg";
import Tauseef from "../assets/TAUSEEF.jpg";
import Feeroz from "../assets/FEEROZ.jpg";
import KKNair from "../assets/kknair.jpg";
import backgroundimage from "../assets/dotted.png";

const FacultyInfo = () => {
  const coordinators = [
    {
      name: "TAUSEEF QAMAR",
      role: "Club Coordinator",

      image: Tauseef,
    },
    {
      name: "FEEROZ BABU",
      role: "Club Co-Coordinator",

      image: Feeroz,
    },
    {
      name: "KK NAIR",
      role: "Faculty Advisor",

      image: KKNair,
    },
  ];

  return (
    <div
      className="responsive-background mx-auto p-4"
      style={{
        backgroundImage: `url(${backgroundimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyInfo;
