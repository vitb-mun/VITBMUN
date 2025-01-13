import React, { useState, useEffect } from "react";

const Banner = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);
  const [slideUp, setSlideUp] = useState(false);

  useEffect(() => {
    // Trigger sliding up after 2 seconds
    const timer = setTimeout(() => {
      setSlideUp(true);
      setTimeout(() => setLoading(false), 1000); // Allow sliding animation to complete
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center bg-black z-50 transition-transform duration-1000 transform ${
            slideUp ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-red-400 font-bold">
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10vw]">
              VITB-MUN 2025
            </h1>
          </div>
          <p className="text-white mt-4 text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
            Where Debate Meets Diplomacy
          </p>
          <p className="text-white mt-14 text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
            ↓{" "}
          </p>
        </div>
      )}
    </>
  );
};

export default Banner;
