import React from "react";
import vitbhopal_logo from "../assets/vitbhopal_logo.png";

const FacultyInfo = () => {
  const coordinators = [
    {
      name: "Tauseef Qamar",
      role: "Club Coordinator",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque ultricies condimentum. Duis facilisis eros et interdum pulvinar.",
    },
    {
      name: "Feeroz Babu",
      role: "Club Co-Coordinator",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque ultricies condimentum. Duis facilisis eros et interdum pulvinar.",
    },
    {
      name: "K.K Nair",
      role: "Faculty Advisor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque ultricies condimentum. Duis facilisis eros et interdum pulvinar.",
    },
  ];

  return (
    <div>
      <div className="container mx-auto p-8 max-w-3xl bg-white  rounded-lg">
        <h1 className="text-4xl font-bold mb-10 text-center">
          Faculty Coordinators
        </h1>
        <div className="space-y-6">
          {coordinators.map((coordinator, index) => (
            <div
              key={index}
              className="flex items-center bg-white shadow-lg  border-black-800 border-2 rounded-lg p-6"
            >
              <div className="w-24 h-24 overflow-hidden bg-gray-300 rounded-full mr-6">
                <img
                  src={vitbhopal_logo}
                  className="h-24 w-auto "
                  alt="VIT Bhopal Logo"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{coordinator.name}</h2>
                <p className="text-sm font-medium text-gray-500 mb-2">
                  {coordinator.role}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  {coordinator.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacultyInfo;
