import React from "react";
import { Link } from "react-router-dom";

const OurTeam = () => {
  const teamData = [
    {
      name: "Secretariat",
      icon: "👥",
      isSelected: true,
      link: "/SecretariatTeam",
    },
    { name: "Content", icon: "✏️", isSelected: true, link: "/ContentTeam" },
    { name: "Design", icon: "🎨", isSelected: true, link: "/DesignTeam" },
    {
      name: "Photography",
      icon: "📷",
      isSelected: true,
      link: "/PhotographyTeam",
    },
    { name: "PR", icon: "👥", isSelected: true, link: "/PRTeam" },
    { name: "Technical", icon: "💻", isSelected: true, link: "/TechTeam" },
  ];

  return (
    <div className="flex flex-col items-center space-y-12 mt-10">
      <h1 className="text-6xl font-bold text-gray-800">Our Team</h1>
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-8 justify-items-center">
        {teamData.map((team, index) => (
          <Link key={index} to={team.link} className="w-full">
            <div
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
