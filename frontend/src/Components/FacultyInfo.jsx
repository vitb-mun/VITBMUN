import React from "react";
import vitbmun_logo from "../assets/vitbmun_logo.svg";

const FacultyInfo = () => {
  const coordinators = [
    {
      name: "Tauseef Qamar",
      role: "Club Coordinator",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque ultricies condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
    {
      name: "Feeroz Babu",
      role: "Club Co-Coordinator",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque ultricies condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
    {
      name: "KK Nair",
      role: "Faculty Advisor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque ultricies condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
  ];

  return (
    <div>
      <h1 className="text-6xl font-semibold text-gray-800 mb-10 text-center container mx-auto">
        Faculty Coordinators
      </h1>
      <div className="flex flex-wrap justify-center gap-8 p-2 ">
        {coordinators.map((coordinator, index) => (
          <div
            key={index}
            className="w-full sm:w-96 bg-white shadow-lg rounded-lg p-6 text-center"
          >
            <img
              src={vitbmun_logo}
              alt={`Coordinator ${coordinator.name}`}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">{coordinator.name}</h3>
            <p className="text-lg text-gray-600">{coordinator.role}</p>
            <p className="text-gray-600 mt-4">{coordinator.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyInfo;
