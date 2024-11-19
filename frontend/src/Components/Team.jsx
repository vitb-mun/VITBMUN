import React from "react";

const OurTeam = () => {
  const teamData = [
    { name: "Secretariat", icon: "👥", isSelected: true },
    { name: "Content", icon: "✏️", isSelected: true },
    { name: "Design", icon: "🎨", isSelected: true },
    { name: "Photography", icon: "📷", isSelected: true },
    { name: "PR", icon: "👥", isSelected: true },
    { name: "Technical", icon: "💻", isSelected: true },
  ];

  return (
    <div className="flex flex-col items-center space-y-12 mt-10">
      <h1 className="text-4xl font-bold text-gray-800">Our Team</h1>
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-8 justify-items-center">
        {teamData.map((team, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center w-32 h-32 p-4 rounded-xl shadow-md transition ${
              team.isSelected
                ? "bg-blue-100 border-2 border-blue-500"
                : "bg-white"
            }`}
          >
            <div className="text-4xl">{team.icon}</div>
            <span
              className={`mt-4 text-lg font-medium ${
                team.isSelected ? "text-blue-500" : "text-gray-700"
              }`}
            >
              {team.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
