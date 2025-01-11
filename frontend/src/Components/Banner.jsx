import React, { useState, useEffect } from "react";

const Banner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay (e.g., fetching data, loading assets, etc.)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 30000000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Curtain Effect */}
      {loading && (
        <div
          className={`absolute inset-0 flex items-center justify-center bg-black z-50 transition-transform duration-1000 transform ${
            !loading ? "translate-y-[-100%]" : ""
          }`}
        >
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-red-400 text-[10vw] font-bold">
            VITB-MUN 2025
          </div>
        </div>
      )}

      {/* Main content */}
      {!loading && <div></div>}
    </div>
  );
};

export default Banner;
