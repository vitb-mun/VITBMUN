import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Rajneeti from "../assets/RajneetiRangmanch.png";
import chainchase from "../assets/chainchase.png";
import Munmate from "../assets/munmate.png";
import Vitbmun from "../assets/VITBMUN.png";
import { Link } from "react-router-dom";

const EventTimeline = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const timelineEvents = [
    {
      name: "MUN-MATE",
      title: "MUN-MATE'24",
      image: Munmate,
      url: "/MUN-MATE",
    },
    {
      name: "VITBMUN",
      title: "VITBMUN 3.0",
      image: Vitbmun,
      url: "/VITBMUN",
    },
    {
      name: "RajneetiRangmanch",
      title: "Rajneeti Rangmanch",
      image: Rajneeti,
      url: "/RajneetiRangmanch",
    },
    {
      name: "ChainReactionChase",
      title: "Chain Reaction Chase",
      image: chainchase,
      url: "/ChainReactionChase",
    },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [
              ...new Set([...prev, entry.target.dataset.index]),
            ]);
          }
        });
      },
      { threshold: 0.5 }
    );

    const elements = document.querySelectorAll(".timeline-item");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleLearnMoreClick = (eventName) => {
    navigate(`/${eventName}`);
  };
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  const redirectToEventPage = (url) => {
    window.location.href = url; // Redirect to the respective event page
  };

  return (
    <div className="flex flex-col items-center px-4 py-8">
      <h1
        className="text-6xl font-bold text-gray-800 mb-10 text-center container mx-auto"
        style={{ fontFamily: "'Host Grotesk', sans-serif" }}
        id="eventtimeline"
      >
        Events Timeline
      </h1>

      <div className="relative w-full max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>

        {timelineEvents.map((event, index) => (
          <div
            key={index}
            data-index={index}
            className={`timeline-item flex flex-col md:flex-row items-center relative mb-16 ${
              visibleItems.includes(index.toString())
                ? "opacity-100"
                : "opacity-0"
            } transition-opacity duration-700`}
          >
            {/* Timeline Circle */}
            <div
              className={`bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-transform duration-700 ${
                visibleItems.includes(index.toString())
                  ? "scale-100"
                  : "scale-50"
              } absolute top-0 left-1/2 transform -translate-x-1/2`}
            >
              {index + 1}
            </div>

            {/* Event Card */}
            <div
              className={`bg-white shadow-lg border-black-800 border-2 rounded-lg p-5 mt-12 w-3/4 md:w-5/12 ${
                index % 2 === 0 ? "md:ml-12 md:mr-auto" : "md:mr-12 md:ml-auto"
              }`}
            >
              <div className="w-full h-auto bg-gray-200 rounded-t-lg overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full object-cover md:h-auto"
                  style={{ height: "auto", maxHeight: "350px" }}
                  onClick={() => openModal(event.image)} // Open modal on click
                />
              </div>
              <h2 className="text-2xl flex justify-center font-semibold  text-gray-800 mt-4">
                {event.title}
              </h2>

              <div className="mt-4 flex justify-center">
                <Link
                  to={event.url} // Use the URL from your `timelineEvents`
                  className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600"
                  onClick={() => handleLearnMoreClick(event.name)}
                  style={{
                    fontFamily:
                      "'Host Grotesk', 'Inter', 'Montserrat', sans-serif",
                  }}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Image */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Full-size"
              className="max-w-full max-h-screen object-contain"
            />
            <button
              className="absolute top-0 right-0 p-4 text-white text-xl"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventTimeline;
