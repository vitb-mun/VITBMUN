import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import SponsorsCard from "../Components/SponsorsCard";
import EventDetailsCard_a from "../Components/EventDetailsCard_a";
import EventDetailsCard_b from "../Components/EventDetailsCard_b";
import ResourcesCard from "../Components/ResourcesCard";

const ChainReactionChase = () => {
  const [speedMUNOpen, setSpeedMUNOpen] = useState(false);
  const [pptKaraokeOpen, setPptKaraokeOpen] = useState(false);
  const [crisisCommitteeOpen, setCrisisCommitteeOpen] = useState(false);

  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="text-center py-8 bg-white shadow-md" id="event-header">
        <h1 className="text-4xl font-bold">ChainReactionChase</h1>
        <a href="#">
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">
            Register Now
          </button>
        </a>
      </header>

      {/* Main Content */}
      <div className="container mx-auto p-4 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Options Section */}
          <div className="md:col-span-1 bg-white rounded shadow p-4">
            <div className="space-y-2">
              <SponsorsCard 
              sponsor1="https://picsum.photos/200/300"
              sponsor2="https://picsum.photos/200/300"
              sponsor3="https://picsum.photos/200/300"
              />
              <h3 className="text-xl font-bold mb-4">Event Details</h3>
              <EventDetailsCard_a 
              date="22nd Feb,2025"
              days="3"
              time="10:00AM - 5:00PM"
              venue="VIT Bhopal University"
              fees="₹500"
              prize="₹10,000"
              />
              <EventDetailsCard_b 
              participant = "100"
              teamSize = "2"
              rounds = "3"
              />
              <ResourcesCard 
              pressReleases = "Press Releases"
              pressReleasesLink = "https://www.google.com"
              ruleBook = "Rule Book"
              ruleBookLink = "https://www.google.com"
              
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 bg-white rounded shadow p-6">
            <h2 className="text-xl font-bold mb-4">This MUN Introduces</h2>
            <p className="mb-4 text-sm">
              This MUN introduces several well-thought-of three rounds, designed
              to test teamwork, problem-solving, decision-making, and
              adaptability.
            </p>
            {/* Rounds */}
            <section>
              <div className="rounds-section p-4 overflow:hidden y-2">
                <h2 className="text-2xl font-bold mb-4 hover:border-b-4 hover:border-blue-600 w-max">
                  Rounds
                </h2>

                {/* SpeedMUN Card */}
                <div className="mb-6 p-4 border border-gray-300 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer bg-white">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setSpeedMUNOpen(!speedMUNOpen)}
                  >
                    <h3 className="text-lg font-semibold hover:text-blue-600 hover:text-xl transition-all duration-200">
                      1. SpeedMUN
                    </h3>
                    <button className="text-gray-600 text-lg focus:outline-none hover:text-black">
                      {speedMUNOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                  </div>
                  <div
                    className={`transition-all duration-700 ease-in-out overflow-hidden ${
                      speedMUNOpen
                        ? "max-h-[500px] opacity-100 py-2"
                        : "max-h-0 opacity-0 py-0"
                    }`}
                  >
                    <div className="ml-4 mt-2">
                      <p className="mt-2">
                        <strong>Scoring:</strong> After the presentations, 20
                        pairs are eliminated based on performance, leaving 20
                        pairs to advance.
                      </p>
                    </div>
                  </div>
                </div>
                {/* PPT Karaoke Card */}
                <div className="mb-6 p-4 border border-gray-300 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setPptKaraokeOpen(!pptKaraokeOpen)}
                  >
                    <h3 className="text-lg font-semibold hover:text-blue-600 hover:text-xl transition-all duration-200">
                      2. PPT Karaoke
                    </h3>
                    <button className="text-gray-600 text-lg focus:outline-none hover:text-black">
                      {pptKaraokeOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                  </div>
                  <div
                    className={`transition-all duration-700 ease-in-out overflow-hidden ${
                      pptKaraokeOpen
                        ? "max-h-[500px] opacity-100 py-2"
                        : "max-h-0 opacity-0 py-0"
                    }`}
                  >
                    <div className="ml-4 mt-2">
                      <p className="mb-2">
                        <strong>Setup:</strong> Pairs formed from the previous
                        round (40 pairs total) take the stage for an exciting
                        presentation challenge lasting approximately 2 hours.
                      </p>
                      <p className="font-semibold mb-2">Process:</p>
                      <ul className="list-disc list-inside space-y-2">
                        <li>
                          Each pair receives 5 random slides and must seamlessly
                          present for 2 minutes, switching speakers with each
                          slide.
                        </li>
                        <li>
                          The focus is on coherence, smooth transitions, and
                          creativity.
                        </li>
                      </ul>
                      <p className="mt-2">
                        <strong>Scoring:</strong> After the presentations, 20
                        pairs are eliminated based on performance, leaving 20
                        pairs to advance.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Crisis Committee Card */}
                <div className="p-4 border border-gray-300 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer bg-white">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setCrisisCommitteeOpen(!crisisCommitteeOpen)}
                  >
                    <h3 className="text-lg font-semibold hover:text-blue-600 hover:text-xl transition-all duration-200">
                      3. Crisis Committee
                    </h3>
                    <button className="text-gray-600 text-lg focus:outline-none hover:text-black">
                      {crisisCommitteeOpen ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </button>
                  </div>
                  <div
                    className={`transition-all duration-700 ease-in-out overflow-hidden ${
                      crisisCommitteeOpen
                        ? "max-h-[500px] opacity-100 py-2"
                        : "max-h-0 opacity-0 py-0"
                    }`}
                  >
                    <div className="ml-4 mt-2">
                      <p className="mb-2">
                        <strong>Setup:</strong> The remaining 40 participants
                        engage in a structured 2-hour committee session without
                        formal roll calls.
                      </p>
                      <p className="font-semibold mb-2">Process:</p>
                      <ul className="list-disc list-inside space-y-2">
                        <li>
                          Preparation: Participants review the crisis agenda for
                          15 minutes and formulate their stances.
                        </li>
                        <li>
                          Formal Debate: Engage in a 1-hour debate, followed by
                          an hour of lobbying to form alliances and draft
                          directives.
                        </li>
                        <li>
                          Voting: After presenting directives, participants vote
                          on the proposals, culminating in a session
                          adjournment.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <h3 className="text-lg font-semibold mb-2">Outcomes</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Leadership and public speaking skills</li>
              <li>Enhanced negotiation and teamwork abilities</li>
              <li>Problem-solving and adaptability experience</li>
            </ul>
          </div>
        </div>

        {/* Event Highlights */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Event Highlights</h2>
        </section>

        {/* Image Section */}
        <section className="bg-white mt-8 p-4 md:p-8 rounded shadow">
          <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
              <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
                >
                  <img
                    src="https://picsum.photos/2940/1960?random=1"
                    alt="img1"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    img1
                  </h3>
                </a>
              </div>
              <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
                >
                  <img
                    src="https://picsum.photos/2940/1960?random=2"
                    alt="img2"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    img2
                  </h3>
                </a>
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                  <a
                    href=""
                    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                  >
                    <img
                      src="https://picsum.photos/2940/1960?random=3"
                      alt="img3"
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                      img3
                    </h3>
                  </a>
                  <a
                    href=""
                    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                  >
                    <img
                      src="https://picsum.photos/2940/1960?random=4"
                      alt="img4"
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                      img4
                    </h3>
                  </a>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
                >
                  <img
                    src="https://picsum.photos/2940/1960?random=5"
                    alt="img5"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    img5
                  </h3>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        </section>
        <div className="p-5 pt-8 border ignore border-gray-200 not-prose dark:border-gray-800 relative bg-white dark:bg-gray-800 rounded shadow-sm">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 not-prose">
              <a
                href="#"
                target="_blank"
                className="relative flex flex-col items-start justify-between p-6 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 dark:bg-black bg-white group hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-between w-full mb-4">
                  <h4 className="text-2xl font-bold mb-4">
                    ChainReactionChase
                  </h4>
                </div>
                <span className="relative text-xs md:text-sm text-gray-600 dark:text-gray-400">
                  DigitalOcean offers a simple and reliable cloud hosting
                  solution that enables developers to get their website or
                  application up and running quickly.
                </span>
              </a>
              <a
                href="#"
                target="_blank"
                className="relative flex flex-col items-start justify-between p-6 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 dark:bg-black bg-white group hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-between w-full mb-4">
                  <h4 className="text-2xl font-bold mb-4">
                    ChainReactionChase
                  </h4>
                </div>
                <span className="relative text-xs md:text-sm text-gray-600 dark:text-gray-400">
                  The official Laravel job board. Find the best and most
                  talented Laravel developers by posting your job on the
                  official Laravel job board.
                </span>
              </a>
              <a
                href="#"
                target="_blank"
                className="relative flex flex-col items-start justify-between p-6 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 dark:bg-black bg-white group hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-between w-full mb-4">
                  <h4 className="text-2xl font-bold mb-4">
                    ChainReactionChase
                  </h4>
                </div>
                <span className="relative text-xs md:text-sm text-gray-600 dark:text-gray-400">
                  Learn how to code your own blockchain and create your own
                  crypto-currency with the CoinCamp interactive and fun online
                  training platform.
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChainReactionChase;
