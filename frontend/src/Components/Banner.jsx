import React, { useState, useEffect } from "react";
import backgroundvideo from "../assets/introvideo.mp4";

const Banner = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);
  const [slideUp, setSlideUp] = useState(false);

  useEffect(() => {
    // Trigger sliding up after 1.5 seconds
    const timer = setTimeout(() => {
      setSlideUp(true);
      setTimeout(() => setLoading(false), 1000); // Allow sliding animation to complete
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div
          className={`absolute inset-0 flex items-center justify-center z-50 transition-transform duration-1000 transform ${
            slideUp ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          <video
            autoPlay
            muted
            loop
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src={backgroundvideo} type="video/mp4" />
          </video>
        </div>
      )}
    </>
  );
};

export default Banner;
