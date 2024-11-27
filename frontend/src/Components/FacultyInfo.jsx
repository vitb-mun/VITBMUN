import React from "react";

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
            className="bg-white shadow-xl border-4 border-gray-300 rounded-3xl w-72 p-4"
          >
            {/* Placeholder for image */}
            <div className="bg-gray-200 h-36 rounded-xl mb-5"></div>

            {/* Name and Role */}
            <h2 className="text-2xl font-semibold text-gray-800">
              {coordinator.name}
            </h2>
            <p className="text-md font-medium text-gray-500 mb-4">
              {coordinator.role}
            </p>

            {/* Description */}
            <p className="text-md text-gray-600 mb-4">
              {coordinator.description}
            </p>

            {/* Learn More Button */}
            <div className="flex justify-between items-center">
              <button className="text-blue-600 font-medium hover:underline">
                Learn More
              </button>
              {/* Placeholder for pagination dots */}
              <div className="flex space-x-1">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyInfo;
