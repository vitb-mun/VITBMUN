import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EventTimeline = () => {
  const timelineRef = useRef(null);
  const svgRef = useRef(null);

  const [expandedEvent, setExpandedEvent] = useState({
    index: null,
    content: null,
  });

  const events = [
    {
      title: "Vichar Vivad",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quod cum similique laboriosam accusantium reprehenderit commodi deserunt optio! Ipsam soluta obcaecati voluptatem, minus architecto optio laborum? Impedit esse commodi nobis, eaque modi vitae. Voluptates, laboriosam?",
      date: "September 2024",
      time: "10:00 AM",
      image: "https://via.placeholder.com/150",
      isLatest: true,
    },
    {
      title: "VITBMUN 3.0",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quod cum similique laboriosam accusantium reprehenderit commodi deserunt optio! Ipsam soluta obcaecati voluptatem, minus architecto optio laborum? Impedit esse commodi nobis, eaque modi vitae. Voluptates, laboriosam?",
      date: "June 2024",
      time: "2:00 PM",
      isLatest: false,
    },
    {
      title: "MUN-MATE",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quod cum similique laboriosam accusantium reprehenderit commodi deserunt optio! Ipsam soluta obcaecati voluptatem, minus architecto optio laborum? Impedit esse commodi nobis, eaque modi vitae. Voluptates, laboriosam?",
      date: "March 2024",
      time: "5:00 PM",
      isLatest: false,
    },
    {
      title: "VITBMUN 2.0",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quod cum similique laboriosam accusantium reprehenderit commodi deserunt optio! Ipsam soluta obcaecati voluptatem, minus architecto optio laborum? Impedit esse commodi nobis, eaque modi vitae. Voluptates, laboriosam?",
      date: "January 2024",
      time: "9:00 AM",
      isLatest: false,
    },
  ];

  const handleExpandCard = (index) => {
    const event = events[index];
    setExpandedEvent({
      index,
      content: event,
    });
  };

  useEffect(() => {
    const dots = timelineRef.current.querySelectorAll(".timeline-dot");
    const items = timelineRef.current.querySelectorAll(".timeline-item");
    const lines = svgRef.current.querySelector(".timeline-line");

    items.forEach((item, index) => {
      const dot = dots[index];
      gsap.fromTo(
        dot,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
        }
      );
    });

    const updateLinePosition = () => {
      const dotsArray = Array.from(dots);
      if (dotsArray.length > 1) {
        const firstDot = dotsArray[0];
        const lastDot = dotsArray[dotsArray.length - 1];
        const rectFirst = firstDot.getBoundingClientRect();
        const rectLast = lastDot.getBoundingClientRect();
        const timelineRect = timelineRef.current.getBoundingClientRect();

        const x = rectFirst.left + rectFirst.width / 2 - timelineRect.left;
        const y1 = rectFirst.top + rectFirst.height / 2 - timelineRect.top;
        const y2 = rectLast.top + rectLast.height / 2 - timelineRect.top;

        lines.setAttribute("x1", x);
        lines.setAttribute("x2", x);
        lines.setAttribute("y1", y1);
        lines.setAttribute("y2", y1);

        gsap.fromTo(
          lines,
          { attr: { y2: y1 }, stroke: "transparent" },
          {
            attr: { y2 },
            stroke: "gray",
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: dots[dots.length - 1],
              start: "top 95%",
            },
          }
        );
      }
    };

    updateLinePosition();
    window.addEventListener("resize", updateLinePosition);

    return () => {
      window.removeEventListener("resize", updateLinePosition);
    };
  }, []);

  useEffect(() => {
    const updateLinePosition = () => {
      const dots = timelineRef.current.querySelectorAll(".timeline-dot");
      const lines = svgRef.current.querySelector(".timeline-line");
  
      if (dots.length > 1) {
        const firstDot = dots[0];
        const lastDot = dots[dots.length - 1];
        const rectFirst = firstDot.getBoundingClientRect();
        const rectLast = lastDot.getBoundingClientRect();
        const timelineRect = timelineRef.current.getBoundingClientRect();
  
        const x = rectFirst.left + rectFirst.width / 2 - timelineRect.left;
        const y1 = rectFirst.top + rectFirst.height / 2 - timelineRect.top;
        const y2 = rectLast.top + rectLast.height / 2 - timelineRect.top;
  
        lines.setAttribute("x1", x);
        lines.setAttribute("x2", x);
        lines.setAttribute("y1", y1);
        lines.setAttribute("y2", y2);
      }
    };
  
    updateLinePosition();
    window.addEventListener("resize", updateLinePosition);
  
    return () => {
      window.removeEventListener("resize", updateLinePosition);
    };
  }, [expandedEvent]); // Add expandedEvent as a dependency
  

  return (
    <div className="flex items-center container mx-auto justify-center relative">
      <div className="absolute top-[1rem] left-10">
        <h1 className="text-4xl font-bold text-gray-800">EventTimeline</h1>
      </div>

      <div
        className="timeline-container max-w-min flex flex-col items-center mt-28 mb-10 relative"
        ref={timelineRef}
      >
        <svg className="absolute top-0 left-0 w-[6%] h-full" ref={svgRef}>
          <line className="timeline-line" stroke="gray" strokeWidth="2" />
        </svg>

        {events.map((event, index) => (
          <div
            key={index}
            className="timeline-item items-center flex w-full mb-10 space-x-6"
          >
            <div className="relative flex flex-col items-center">
              <div
                className={`timeline-dot w-6 h-6 rounded-full ${
                  index === 0
                    ? "bg-blue-500 animate-pulse"
                    : "bg-gray-700"
                }`}
              ></div>
            </div>

            <div
              className={`text-container flex-1 bg-white p-6 rounded-3xl shadow-lg transition-all duration-500 min-w-[60vw] border-[2px] border-gray-500 ${
                expandedEvent.index === index ? "h-auto" : "h-max"
              }`}
            >
              {event.isLatest ? (
                <div className="">
                  <div className="flex gap-4 items-center md:space-x-4 flex-col md:flex-row">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-52 h-40 rounded-2xl"
                    />
                    <div className="flex flex-col gap-2 w-[80%]">
                      <h3 className="text-3xl font-bold text-gray-800">
                        {event.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {event.description}
                      </p>
                      <div className="flex justify-between items-center mt-6 flex-col md:flex-row gap-2">
                        <div className="flex-col flex items-start justify-center self-start">
                          <p className="text-xs font-bold text-gray-800">
                            Date: {event.date}
                          </p>
                          <p className="text-xs font-bold text-gray-800">
                            Time: {event.time}
                          </p>
                        </div>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-3xl hover:bg-blue-600 transition duration-300 self-start">
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {event.title}
                  </h3>
                  {expandedEvent.index === index ? (
                    <div className="flex flex-col">
                      <p className="text-sm text-gray-600 mb-2">
                        {expandedEvent.content.description}
                      </p>
                      <p className="text-xs text-gray-500 mb-1 font-semibold">
                        Date: {expandedEvent.content.date}
                      </p>
                      <p className="text-xs text-gray-500 mb-2 font-semibold">
                        Time: {expandedEvent.content.time}
                      </p>
                      <button
                        className="text-blue-500 hover:bg-gray-200 rounded-3xl p-2 px-4 transition duration-300 h-fit self-end"
                        onClick={() =>
                          setExpandedEvent({ index: null, content: null })
                        }
                      >
                        Read Less
                      </button>
                    </div>
                  ) : (
                    <button
                      className="text-blue-500 hover:bg-gray-200 rounded-3xl p-2 px-4 transition duration-300 w-max self-end"
                      onClick={() => handleExpandCard(index)}
                    >
                      Read More
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventTimeline;