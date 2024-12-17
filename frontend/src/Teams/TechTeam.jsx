import React, { useEffect } from "react";

const TechTeam = () => {
  // Scroll to top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, []);

  return (
    <div className="  py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header>
          <h1 className="text-4xl font-bold text-gray-800">Tech Team</h1>
          <p className="text-gray-500">VITB MUN Club / Teams </p>
          <hr className="mt-4 border-gray-300" />
        </header>
      </div>
    </div>
  );
};

export default TechTeam;
