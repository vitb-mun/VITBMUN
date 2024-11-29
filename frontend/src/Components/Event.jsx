import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import vitbhopal_logo from "../assets/vitbhopal_logo.png";
import './css/event.css'

const events = [
  { id: 1, title: "MUN-MATE'24", imageSrc: vitbhopal_logo },
  { id: 2, title: "VITBMUN 3.0", imageSrc: vitbhopal_logo },
  { id: 3, title: "Rajneeti Rangmanch", imageSrc: vitbhopal_logo },
  { id: 4, title: "Chain Reaction Chase", imageSrc: vitbhopal_logo },
  { id: 5, title: "Rajneet '24", imageSrc: vitbhopal_logo },
  { id: 6, title: "Event Name", imageSrc: vitbhopal_logo },
  { id: 7, title: "Event Name", imageSrc: vitbhopal_logo },
  { id: 8, title: "Event 8", imageSrc: vitbhopal_logo },
];

const responsive = {
  superLargeDesktop: {
    // screens >= 1440px
    breakpoint: { max: 3000, min: 1440 },
    items: 3,
  },
  desktop: {
    // screens >= 1024px
    breakpoint: { max: 1440, min: 1024 },
    items: 3,
  },
  tablet: {
    // screens >= 768px
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    // screens < 768px
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const Event = () => {
  return (
    <div className="font-sans bg-white min-h-screen">
      <section className="container mx-auto pl-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Model Of United Nations
        </h2>
        <p className="text-gray-800 text-semibold leading-relaxed mb-12 pr-3">
          Welcome to our MUN Club, where we bring the world of Model United
          Nations to life! In our club, students take on the roles of delegates
          representing diverse countries and organizations, engaging in spirited
          debates, negotiations, and crafting solutions to global challenges.
          At MUN Club, we're more than just a simulation - we're a vibrant
          community dedicated to fostering a deeper understanding of
          international affairs and honing invaluable skills in diplomacy,
          public speaking, and critical thinking. Whether you're a seasoned
          delegate or new to the MUN scene, our club offers a supportive
          environment where members can learn, grow, and make lasting
          connections.
        </p>

        {/* Events Section */}
        <div className="event-section">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Events</h2>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            keyBoardControl={true}
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
            customTransition="transform 300ms ease-in-out"
            arrows={true}
            renderButtonGroupOutside={true}
            className="pt-12"
          >
            {events.map((event) => (
              <div
                key={event.id}
                className="flex flex-col justify-center items-center gap-3  px-4"
              >
                <div className="event_img w-[85%]">
                  <img
                    src={event.imageSrc}
                    alt={event.title}
                    className="rounded-3xl border-2 border-gray-300 shadow-xl h-52"
                  />
                </div>
                <h3 className="text-gray-700 text-lg font-semibold p-2 hover:text-blue-600 hover:cursor-pointer text-center">
                  {event.title}
                </h3>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default Event;
