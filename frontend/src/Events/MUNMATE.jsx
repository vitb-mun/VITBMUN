import React from "react";
import Winners from "../Components/Winners";
import Highlights from "../Components/Highlights";
import Review from "../Components/Review";
import calendar from "./../assets/calendar.png";
import building from "./../assets/building.png";
import clock from "./../assets/clock.png";
import currency from "./../assets/currency.png";
import groups from "./../assets/groups.png";
import hash from "./../assets/hash.png";

const MunMate = () => {
  return (
    <div className="font-sans bg-gray-100 text-gray-800 p-4 px-20">
      {/* Header Section */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-blue-gray-800">MUN MATE</h1>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-500">
          More Events
        </button>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        {/* Left Section */}
        <div className="left col-span-1 flex flex-col gap-6">
          {/* Sponsors Section */}
          <div className="sponsers bg-white border border-gray-300 p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-blue-gray-800 mb-4">Sponsors</h2>
            <div className="images flex justify-between">
              {[1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className="h-24 w-24 border-4 border-gray-300 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center"
                >
                  <img src="" alt={`Sponsor ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Event Details */}
          <div className="bg-white border border-gray-300 p-4 rounded-xl shadow-md space-y-4">
            {[{ label: "Date", icon: calendar }, { label: "Time", icon: clock }, { label: "Venue", icon: building }].map(
              (item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <img src={item.icon} alt={item.label} className="h-8" />
                  <span className="text-lg font-bold">{item.label}: </span> <span>Details here</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="right col-span-2 flex flex-col gap-6">
          {/* Event Description */}
          <div className="bg-white p-4 rounded-xl shadow-md">
            <p className="text-lg leading-relaxed">
              This <span className="font-bold">fun</span> and <span className="font-bold">interactive event</span> will
              consist of three rounds, designed to test{" "}
              <span className="font-bold">teamwork, problem-solving skills,</span> and{" "}
              <span className="font-bold">diplomacy</span> in an engaging and competitive environment.
            </p>
          </div>

          {/* Rounds Section */}
          <section>
            <h2 className="text-2xl font-bold text-blue-gray-800 mb-4">Rounds</h2>
            <div className="space-y-4">
              {[
                {
                  title: "1. SpeedMUN",
                  description:
                    "Participants are divided into four tables (A, B, C, D) with 20 individuals each for a 50-minute round.",
                },
                {
                  title: "2. PPT Karaoke",
                  description: "Participants will be given random PPT slides on various topics to present.",
                },
                {
                  title: "3. Crisis Committee",
                  description:
                    "Participants will be divided into committees and given a crisis scenario to resolve creatively.",
                },
              ].map((round, index) => (
                <div key={index} className="p-4 bg-white rounded-xl shadow-md">
                  <h3 className="text-lg font-semibold text-blue-gray-800">{round.title}</h3>
                  <p className="mt-2">{round.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Register Button */}
          <div className="flex justify-end">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-500">
              Register Now
            </button>
          </div>
        </div>
      </div>

      <hr className="mt-10 border-t-2 border-gray-400" />

      {/* Additional Sections */}
      <section className="mt-8">
        <Winners />
      </section>
      <section className="mt-8">
        <Highlights />
      </section>
      <section className="mt-8">
        <Review />
      </section>
    </div>
  );
};

export default MunMate;
