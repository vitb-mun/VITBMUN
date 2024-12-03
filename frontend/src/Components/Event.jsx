import React from "react";
import vitbhopal_logo from "../assets/vitbhopal_logo.png";

const Event = () => {
  return (
    <div className="font-sans bg-white min-h-screen">
      <section className="container mx-auto pl-6 py-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Model Of United Nations
        </h2>
        <p className="text-gray-800 text-lg text-semibold leading-relaxed mb-12">
          Welcome to our MUN Club, where we bring the world of Model United
          Nations to life! In our club, students take on the roles of delegates
          representing diverse countries and organizations, engaging in spirited
          debates, negotiations, and crafting solutions to global challenges. At
          MUN Club, we're more than just a simulation – we're a vibrant
          community dedicated to fostering a deeper understanding of
          international affairs and honing invaluable skills in diplomacy,
          public speaking, and critical thinking. Whether you're a seasoned
          delegate or new to the MUN scene, our club offers a supportive
          environment where members can learn, grow, and make lasting
          connections
        </p>

        {/* Events Section */}
        <div className="event-section">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Events</h2>
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
                className="flex flex-col justify-center items-center gap-3  px-4 mx-auto"
              >
                <div className="event_img w-[80%]">
                  <img
                    src={event.imageSrc}
                    alt={event.title}
                    className="rounded-3xl border-2 border-gray-300 shadow-xl mx-auto"
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
