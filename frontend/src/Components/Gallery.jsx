import React from "react";

import image1 from "../assets/Highlights/discuss.jpg";
import image5 from "../assets/Highlights/people.jpg";
import image6 from "../assets/Highlights/people2.jpg";
import image7 from "../assets/Highlights/people3.jpg";

const Gallery = () => {
  const galleryImages = [image1, image5, image6, image7];

  return (
    <div className="mx-auto p-4">
      <h1
        className="text-5xl sm:text-6xl font-semibold text-gray-800 mb-10 text-center"
        style={{ fontFamily: "'Host Grotesk', sans-serif" }}
        id="highlights"
      >
        Event Highlights
      </h1>
      <div className="flex flex-wrap justify-center gap-8 p-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="w-full sm:w-96 bg-white shadow-xl rounded-lg"
            style={{
              transform: "rotate(-5deg)", // Initial tilt effect for Polaroid style
              paddingBottom: "10px",
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
