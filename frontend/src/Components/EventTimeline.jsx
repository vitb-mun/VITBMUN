import React, { useState, useEffect } from "react";

const EventTimeline = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  const timelineEvents = [
    {
      date: "Date: 2023-01-01",
      time: "Time: 9:00 - 12:00",
      title: "MUN-MATE'24",
      description:
        "Welcome to our MUN Club, where we bring the world of Model United Nations to life! In our club,ganizations, engaging in spirited debates, negotiation.",
    },
    {
      date: "Date: 2023-06-15",
      time: "Time: 9:00 - 12:00",
      title: "VITBMUN 3.0",
      description:
        "Welcome to our MUN Club, where we bring the world of Model United Nations to life! In our club,ganizations, engaging in spirited debates, negotiation.",
    },
    {
      date: "Date: 2023-02-20",
      time: "Time: 9:00 - 12:00",
      title: "Rajneeti Rangmanch",
      description:
        "Welcome to our MUN Club, where we bring the world of Model United Nations to life! In our club,ganizations, engaging in spirited debates, negotiation.",
    },
    {
      date: "Date: 2023-09-10",
      time: "Time: 9:00 - 12:00",
      title: "Chain Reaction Chase",
      description:
        "Welcome to our MUN Club, where we bring the world of Model United Nations to life! In our club,ganizations, engaging in spirited debates, negotiation.",
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
    <div className="min-h-screen bg-white  flex flex-col items-center px-4 py-8">
      <h1 className="text-4xl font-bold mb-10 text-gray-800">Event Timeline</h1>
      <div className="relative w-full max-w-4xl">
        {/* Vertical Line */}
        <div className="absolute  left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>

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
            <div className="bg-white shadow-lg  border-black-800 border-2 rounded-lg p-5 mt-3 w-3/4 md:w-1/2">
              <h2 className="text-xl font-semibold text-gray-800">
                {event.title}
              </h2>
              <p className="text-sm text-gray-500">{event.date}</p>
              <p className="text-sm text-gray-500">{event.time}</p>
              <p className="text-gray-700 mt-2">{event.description}</p>
              <div className="container mx-auto px-2 py-4 flex justify-center space-x-4">
                {["More"].map((btn) => (
                  <button
                    key={btn}
                    className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg border-black-800 border-2 hover:bg-blue-600"
                    style={{
                      fontFamily:
                        "'Host Grotesk', 'Inter', 'Montserrat', sans-serif",
                    }}
                  >
                    {btn}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventTimeline;
