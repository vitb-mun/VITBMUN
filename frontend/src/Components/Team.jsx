import React, { useState } from "react";
import { Link } from "react-router-dom";
import tech_team_1 from "../assets/Team Photos/Tech_Team.jpg";
import tech_team_2 from "../assets/Team Photos/Tech_Team.jpg";
import photo_team_1 from "../assets/Team Photos/Photo_Team.jpg";
import photo_team_2 from "../assets/Team Photos/Photo_Team.jpg";
import pr_Team_1 from "../assets/Team Photos/PR_Team.jpg";
import pr_Team_2 from "../assets/Team Photos/PR_Team.jpg";
import content_Team_1 from "../assets/Team Photos/Content_Team.jpg";
import content_Team_2 from "../assets/Team Photos/Content_Team.jpg";
import design_Team_1 from "../assets/Team Photos/Design_Team.jpg";
import design_Team_2 from "../assets/Team Photos/Design_Team.jpg";

const OurTeam = () => {
  // State for each team's image index
  const [contentIndex, setContentIndex] = useState(0);
  const [designIndex, setDesignIndex] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [prIndex, setPrIndex] = useState(0);
  const [techIndex, setTechIndex] = useState(0);

  // Array of team images
  const teams = [
    {
      images: [content_Team_1, design_Team_2],
      title: "Content Team",
      setIndex: setContentIndex,
      index: contentIndex,
    },
    {
      images: [design_Team_1, photo_team_1],
      title: "Design Team",
      setIndex: setDesignIndex,
      index: designIndex,
    },
    {
      images: [photo_team_1, design_Team_2],
      title: "Photography Team",
      setIndex: setPhotoIndex,
      index: photoIndex,
    },
    {
      images: [pr_Team_1, photo_team_1],
      title: "PR Team",
      setIndex: setPrIndex,
      index: prIndex,
    },
    {
      images: [tech_team_1, design_Team_2],
      title: "Technical Team",
      setIndex: setTechIndex,
      index: techIndex,
    },
  ];

  // Function to go to the next image
  const nextImage = (setIndex, currentIndex, images) => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = (setIndex, currentIndex, images) => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col items-center space-y-12 mt-10 mb-12">
      <h1
        className="text-6xl font-bold text-gray-800"
        style={{ fontFamily: "'Host Grotesk', sans-serif" }}
      >
        Our Teams
      </h1>
      <section className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-8 rounded-3xl border-gray-300">
          {teams.map((team, index) => (
            <div
              key={index}
              className="relative bg-white border-black-800 border-2 rounded-lg shadow overflow-hidden"
            >
              {/* Image container */}
              <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                <img
                  src={team.images[team.index]}
                  className="h-full w-full object-cover"
                  alt={team.title}
                />
              </div>

              {/* Title */}
              <h3
                className="text-2xl flex items-center justify-center font-semibold text-gray-800 p-4"
                style={{ fontFamily: "'Host Grotesk', sans-serif" }}
              >
                {team.title}
              </h3>

              {/* Arrow buttons */}
              <button
                onClick={() =>
                  prevImage(team.setIndex, team.index, team.images)
                }
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
              >
                &#60;
              </button>
              <button
                onClick={() =>
                  nextImage(team.setIndex, team.index, team.images)
                }
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
              >
                &#62;
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
