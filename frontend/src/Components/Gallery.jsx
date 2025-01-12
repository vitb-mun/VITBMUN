import React from "react";

import image2 from "../assets/Highlights/image2.jpg";
import image3 from "../assets/Highlights/image3.jpg";

const Gallery = () => {
  const galleryImages = [
    image2,
    image3,
    image2,
    image3,
    image3,
    image2,
    image3,
    image2,
  ];

  return (
    <div className="mx-auto p-4">
      <h1
        className="text-5xl sm:text-6xl font-semibold text-gray-800 mb-10 text-center"
        style={{ fontFamily: "'Host Grotesk', sans-serif" }}
      >
        Highlights
      </h1>
      <div className="flex flex-wrap justify-center gap-8 p-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="w-full sm:w-96 bg-white shadow-xl rounded-lg transform hover:scale-105 transition-transform duration-300"
            style={{
              transform: "rotate(-5deg)", // Slight tilt effect for Polaroid style
              paddingBottom: "15px",
            }}
            role="region"
            aria-labelledby={`gallery-image-${index}`}
          >
            <div
              className="polaroid-photo-wrapper relative overflow-hidden rounded-lg"
              style={{
                marginBottom: "20px",
                border: "5px solid #fff", // Polaroid-style border
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)", // Shadow effect
              }}
            >
              <img
                className="w-full h-auto object-cover"
                src={image}
                alt={`Gallery Image ${index + 1}`}
              />
            </div>
            <div className="polaroid-caption text-center text-sm text-gray-700 font-semibold">
              Image {index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
