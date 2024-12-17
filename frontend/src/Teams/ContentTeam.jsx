import React, { useEffect } from "react";

const ContentTeam = () => {
  // Scroll to top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Content Team</h1>
          <p className="text-gray-500">VITB MUN Club / Teams</p>
          <hr className="mt-4 border-gray-300" />
        </header>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* About Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About</h2>
            <div className="bg-gray-200 h-40 rounded-md flex items-center justify-center mb-4">
              <span className="text-gray-500">Group Picture?</span>
            </div>
            <p className="text-gray-700 mb-4">
              The Content Team is dedicated to creating high-quality, engaging
              material that informs and inspires our audience. This team is
              responsible for the following key functions:
            </p>
            <h3 className="font-semibold text-gray-800">
              Skills and Qualities:
            </h3>
            <ul className="list-disc pl-5 text-gray-700 mt-2">
              <li>
                Strong writing and editing skills with attention to detail
              </li>
              <li>Ability to conduct thorough research</li>
              <li>Creative thinking and problem-solving abilities</li>
              <li>
                Familiarity with social media platforms and content management
                systems
              </li>
              <li>Team-oriented mindset and effective communication skills</li>
            </ul>
            <p className="text-gray-700 mt-4">
              The Content Team plays a crucial role in driving our messaging and
              connecting with our audience through thoughtful, well-crafted
              content.
            </p>
          </div>

          {/* Team Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Team</h2>
            <div className="grid grid-cols-3 gap-4">
              {[
                { name: "Member 1", role: "Lead" },
                { name: "Member 1", role: "Co-Lead" },
                { name: "Member 1", role: "Member" },
                { name: "Member 1", role: "Member" },
                { name: "Member 1", role: "Member" },
                { name: "Member 1", role: "Member" },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-gray-200 rounded-lg p-4 flex flex-col items-center"
                >
                  <div className="bg-gray-300 h-16 w-16 rounded-full mb-4"></div>
                  <p className="text-gray-800 font-semibold">{member.name}</p>
                  <p className="text-gray-500 text-sm">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentTeam;
