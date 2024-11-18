import React, { useState, useEffect } from "react";

const EventTimeline = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  const timelineEvents = [
    {
      date: "2021-01-01",
      title: "Event 1",
      description: "Description for event 1.",
    },
    {
      date: "2021-06-15",
      title: "Event 2",
      description: "Description for event 2.",
    },
    {
      date: "2022-02-20",
      title: "Event 3",
      description: "Description for event 3.",
    },
    {
      date: "2023-09-10",
      title: "Event 4",
      description: "Description for event 4.",
    },
  ];

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

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 py-8">
      <h1 className="text-3xl font-bold mb-12 text-gray-800">Event Timeline</h1>
      <div className="relative w-full max-w-4xl">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>

        {timelineEvents.map((event, index) => (
          <div
            key={index}
            data-index={index}
            className={`timeline-item flex flex-col items-center text-center relative mb-10 opacity-0 transition-opacity duration-700 ${
              visibleItems.includes(index.toString()) ? "opacity-100" : ""
            }`}
          >
            {/* Timeline Circle */}
            <div
              className={`bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-transform duration-700 ${
                visibleItems.includes(index.toString())
                  ? "scale-100"
                  : "scale-50"
              }`}
            >
              {index + 1}
            </div>

            {/* Event Card */}
            <div className="bg-white shadow-lg rounded-lg p-5 mt-3 w-3/4 md:w-1/2">
              <h2 className="text-xl font-semibold text-gray-800">
                {event.title}
              </h2>
              <p className="text-sm text-gray-500">{event.date}</p>
              <p className="text-gray-700 mt-2">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventTimeline;
