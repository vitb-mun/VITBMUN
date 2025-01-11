import React, { useState, useEffect } from "react";

const Banner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay (e.g., fetching data, loading assets, etc.)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Curtain Effect */}
      {loading && (
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center bg-black z-50 transition-transform duration-1000 transform ${
            !loading ? "translate-y-[-100%]" : ""
          }`}
        >
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-red-400 font-bold">
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10vw]">
              VITB-MUN 2025
            </h1>
          </div>
          <p className="text-white mt-4 text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
            Speak up the World will know{" "}
          </p>
          <p className="text-white mt-14 text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
            ↓{" "}
          </p>
        </div>
      )}

      {/* Main content */}
      {!loading && <div></div>}
    </div>
  );
};

export default Banner;
