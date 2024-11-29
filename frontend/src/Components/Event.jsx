import React from "react";
import vitbhopal_logo from "../assets/vitbhopal_logo.png";

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
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Events</h2>
        <div className="grid px-6 py-6 grid-cols-2 md:grid-cols-4 gap-6 border-solid border-[2.5px] rounded-l-3xl border-gray-300 border-r-0">
            {/* Event 1 */}
            <div className="flex flex-col justify-center items-center gap-3 hover:cursor-pointer">
              <div className="event_img w-[80%]">
                <img src={vitbhopal_logo} alt="" className="rounded-3xl border-2 border-gray-300 shadow-xl" />
              </div>
              <h3 className="text-gray-700 text-lg font-semibold p-2 hover:text-blue-600 text-center">
                MUN-MATE'24
              </h3>
            </div>
            {/* Event 2 */}
            <div className="flex flex-col justify-center items-center gap-3 hover:cursor-pointer">
              <div className="event_img w-[80%]">
                <img src={vitbhopal_logo} alt="" className="rounded-3xl border-2 border-gray-300 shadow-xl" />
              </div>
              <h3 className="text-gray-700 text-lg font-semibold p-2 hover:text-blue-600 text-center">
                VITBMUN 3.0
              </h3>
            </div>
            {/* Event 3 */}
            <div className="flex flex-col justify-center items-center gap-3 hover:cursor-pointer">
              <div className="event_img w-[80%]">
                <img src={vitbhopal_logo} alt="" className="rounded-3xl border-2 border-gray-300 shadow-xl" />
              </div>
              <h3 className="text-gray-700 text-lg font-semibold p-2 hover:text-blue-600 text-center">
                Rajneeti Rangmanch
              </h3>
            </div>
            {/* Event 4 */}
            <div className="flex flex-col justify-center items-center gap-3 hover:cursor-pointer">
              <div className="event_img w-[80%]">
                <img src={vitbhopal_logo} alt="" className="rounded-3xl border-2 border-gray-300 shadow-xl" />
              </div>
              <h3 className="text-gray-700 text-lg font-semibold p-2 hover:text-blue-600 text-center">
                Chain Reaction Chase
              </h3>
            </div>
            {/* Event 5 */}
            <div className="flex flex-col justify-center items-center gap-3 hover:cursor-pointer">
              <div className="event_img w-[80%]">
                <img src={vitbhopal_logo} alt="" className="rounded-3xl border-2 border-gray-300 shadow-xl" />
              </div>
              <h3 className="text-gray-700 text-lg font-semibold p-2 hover:text-blue-600 text-center">
                Rajneet '24
              </h3>
            </div>
            {/* Event 6 */}
            <div className="flex flex-col justify-center items-center gap-3 hover:cursor-pointer">
              <div className="event_img w-[80%]">
                <img src={vitbhopal_logo} alt="" className="rounded-3xl border-2 border-gray-300 shadow-xl" />
              </div>
              <h3 className="text-gray-700 text-lg font-semibold p-2 hover:text-blue-600 text-center">
                Event Name
              </h3>
            </div>
            {/* Event 7 */}
            <div className="flex flex-col justify-center items-center gap-3 hover:cursor-pointer">
              <div className="event_img w-[80%]">
                <img src={vitbhopal_logo} alt="" className="rounded-3xl border-2 border-gray-300 shadow-xl" />
              </div>
              <h3 className="text-gray-700 text-lg font-semibold p-2 hover:text-blue-600 text-center">
                Event Name
              </h3>
            </div>
            {/* Event 8 */}
            <div className="flex flex-col justify-center items-center gap-3 hover:cursor-pointer">
              <div className="event_img w-[80%]">
                <img src={vitbhopal_logo} alt="" className="rounded-3xl border-2 border-gray-300 shadow-xl" />
              </div>
              <h3 className="text-gray-700 text-lg font-semibold p-2 hover:text-blue-600 text-center">
                Event 8
              </h3>
            </div>
          </div>
      </section>
    </div>
  );
};

export default Event;
