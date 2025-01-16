import React from "react";
import { motion } from "framer-motion";

import image1 from "../assets/Highlights/discuss.jpg";
import image2 from "../assets/Highlights/grppic.jpg";
import image3 from "../assets/Highlights/winners.jpg";
import image4 from "../assets/Highlights/hall.jpg";
import image5 from "../assets/Highlights/people.jpg";
import image6 from "../assets/Highlights/people2.jpg";
import image7 from "../assets/Highlights/people3.jpg";
import image8 from "../assets/Highlights/intro.jpg";

const Gallery = () => {
  const galleryImages = [
    image8,
    image1,
    image4,
    image5,
    image6,
    image7,
    image3,
    image2,
  ];

  return (
    <div className="mx-auto p-4">
      <h1
        className="text-5xl sm:text-6xl font-semibold text-gray-800 mb-10 text-center"
        style={{ fontFamily: "'Host Grotesk', sans-serif" }}
      >
        Event Highlights
      </h1>
      <div className="flex flex-wrap justify-center gap-8 p-4">
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-96 bg-white shadow-xl rounded-lg transform hover:scale-105 transition-transform duration-300"
            style={{
              transform: "rotate(-5deg)", // Initial tilt effect for Polaroid style
              paddingBottom: "10px",
            }}
            role="region"
            aria-labelledby={`gallery-image-${index}`}
            initial={{
              opacity: 0,
              rotate: -5, // Initial rotation (tilt)
              x: image === image1 ? -100 : 100, // Slide from left (image1) or right (image2)
            }}
            whileInView={{
              opacity: 1,
              rotate: 5, // Final rotation (tilt slightly to the right)
              x: 0, // Reset x-axis (center position)
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.1, // Staggered delay for cascading effect
              type: "spring",
            }}
            viewport={{ once: true }}
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
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
