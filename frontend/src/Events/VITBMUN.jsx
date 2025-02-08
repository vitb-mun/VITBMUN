import { React, useState } from "react";
import SponsorsCard from "../Components/SponsorsCard";
import EventDetailsCard_a from "../Components/EventDetailsCard_a";
import EventDetailsCard_b from "../Components/EventDetailsCard_b";
import ResourcesCard from "../Components/ResourcesCard";
import Committees from "../Components/Committees";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const VITBMUN = () => {
  const [speedMUNOpen, setSpeedMUNOpen] = useState(false);
  const [pptKaraokeOpen, setPptKaraokeOpen] = useState(false);
  const [crisisCommitteeOpen, setCrisisCommitteeOpen] = useState(false);
  return (
    <div className="font-sans bg-gray-100 text-gray-800 p-4 px-20">
      {/* Header Section */}
      <header className="flex justify-between items-center mb-6" id="event-header">
        <h1 className="text-4xl font-bold text-blue-gray-800">VITB MUN 3.0</h1>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-500">
          More Events
        </button>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Left Section */}
        <div className="left col-span-1 flex flex-col gap-6">

          {/* Sponsors Section */}
          <SponsorsCard />

          {/* Event Details */}
          <EventDetailsCard_a />
          <EventDetailsCard_b />
          <ResourcesCard />
        </div>

        {/* Right Section */}
        <div className="right col-span-2 flex flex-col gap-6  pt-2">
          {/* Event Description */}
          <div className=" rounded-xl ">
            <p className="text-sm leading-relaxed">
              This <span className="font-bold">fun</span> and <span className="font-bold">interactive event</span> will
              consist of three rounds, designed to test{" "}
              <span className="font-bold">teamwork, problem-solving skills,</span> and{" "}
              <span className="font-bold">diplomacy</span> in an engaging and competitive environment.
            </p>
            <div className="mun-aims mt-5 text-sm">
              <p>
                The aim of <strong>MUN-Mate 2024</strong> is to provide university students, especially freshers, with an opportunity to:
              </p>
              <ul className="pl-5">
                <li>- Develop critical thinking and problem-solving skills through diplomatic simulations.</li>
                <li>- Enhance public speaking and negotiation skills by participating in dynamic MUN rounds.</li>
                <li>- Foster teamwork and adaptability by engaging in activities that require collaboration with peers.</li>
                <li>- Build a global perspective by discussing pressing international issues and forming meaningful diplomatic stances.</li>
                <li>
                  - Promote social interaction and camaraderie within the university community, encouraging a sense of involvement and enthusiasm for MUN activities.
                </li>
              </ul>
            </div>

          </div>



          {/* Rounds Section */}
          <section>
            <div className="rounds-section p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 hover:border-b-4 hover:border-blue-600 w-max">
                Rounds
              </h2>

              {/* SpeedMUN Card */}
              <div className="mb-6 p-4 border border-gray-300 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => setSpeedMUNOpen(!speedMUNOpen)}>
                  <h3 className="text-lg font-semibold hover:text-blue-600 hover:text-xl transition-all duration-200">
                    1. SpeedMUN
                  </h3>
                  <button className="text-gray-600 text-lg focus:outline-none hover:text-black">
                    {speedMUNOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                </div>
                <div className={`transition-all duration-700 ease-in-out overflow-hidden ${speedMUNOpen ? "max-h-[500px] opacity-100 py-2" : "max-h-0 opacity-0 py-0"}`}>
                  <div className="ml-4 mt-2">
                    <p className="mb-2"><strong>Setup:</strong> Participants are divided into four tables (A, B, C, D) with 20 individuals each for a 50-minute round.</p>
                    <p className="font-semibold mb-2">Process:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Round 1:</strong> Each participant shares insights about their assigned country and engages in discussions to understand allies and foreign policies.</li>
                      <li><strong>Rotations:</strong> After 10 minutes, half the participants rotate tables for further discussions, repeating this process for a comprehensive exchange of ideas.</li>
                      <li><strong>Open Lobbying:</strong> A 20-minute session where everyone mingles freely to form pairs, sharing knowledge about their countries.</li>
                    </ul>
                    <p className="mt-2"><strong>Outcome:</strong> Each participant must form a pair with someone from a different country to progress to the next round, fostering collaboration and understanding.</p>
                  </div>
                </div>
              </div>

              {/* PPT Karaoke Card */}
              <div className="mb-6 p-4 border border-gray-300 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => setPptKaraokeOpen(!pptKaraokeOpen)}>
                  <h3 className="text-lg font-semibold hover:text-blue-600 hover:text-xl transition-all duration-200">
                    2. PPT Karaoke
                  </h3>
                  <button className="text-gray-600 text-lg focus:outline-none hover:text-black">
                    {pptKaraokeOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                </div>
                <div className={`transition-all duration-700 ease-in-out overflow-hidden ${pptKaraokeOpen ? "max-h-[500px] opacity-100 py-2" : "max-h-0 opacity-0 py-0"}`}>
                  <div className="ml-4 mt-2">
                    <p className="mb-2"><strong>Setup:</strong> Pairs formed from the previous round (40 pairs total) take the stage for an exciting presentation challenge lasting approximately 2 hours.</p>
                    <p className="font-semibold mb-2">Process:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Each pair receives 5 random slides and must seamlessly present for 2 minutes, switching speakers with each slide.</li>
                      <li>The focus is on coherence, smooth transitions, and creativity.</li>
                    </ul>
                    <p className="mt-2"><strong>Scoring:</strong> After the presentations, 20 pairs are eliminated based on performance, leaving 20 pairs to advance.</p>
                  </div>
                </div>
              </div>

              {/* Crisis Committee Card */}
              <div className="p-4 border border-gray-300 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => setCrisisCommitteeOpen(!crisisCommitteeOpen)}>
                  <h3 className="text-lg font-semibold hover:text-blue-600 hover:text-xl transition-all duration-200">
                    3. Crisis Committee
                  </h3>
                  <button className="text-gray-600 text-lg focus:outline-none hover:text-black">
                    {crisisCommitteeOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                </div>
                <div className={`transition-all duration-700 ease-in-out overflow-hidden ${crisisCommitteeOpen ? "max-h-[500px] opacity-100 py-2" : "max-h-0 opacity-0 py-0"}`}>
                  <div className="ml-4 mt-2">
                    <p className="mb-2"><strong>Setup:</strong> The remaining 40 participants engage in a structured 2-hour committee session without formal roll calls.</p>
                    <p className="font-semibold mb-2">Process:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Preparation: Participants review the crisis agenda for 15 minutes and formulate their stances.</li>
                      <li>Formal Debate: Engage in a 1-hour debate, followed by an hour of lobbying to form alliances and draft directives.</li>
                      <li>Voting: After presenting directives, participants vote on the proposals, culminating in a session adjournment.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="p-4 pl-2 flex flex-col gap-5">
            {/* Crisis Statement */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Crisis Statement</h2>
              <p className="text-gray-700 text-sm">
                This <span className="font-semibold">fun</span> and <span className="font-semibold">interactive event</span> will consist of three rounds, designed to test <span className="font-semibold">teamwork</span>, <span className="font-semibold">problem-solving skills</span>, and <span className="font-semibold">diplomacy</span> in an engaging and competitive environment.
              </p>
            </div>

            {/* Solution Proposed */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Solution Proposed</h2>
              <p className="text-gray-700 text-sm">
                This <span className="font-semibold">fun</span> and <span className="font-semibold">interactive event</span> will consist of three rounds, designed to test <span className="font-semibold">teamwork</span>, <span className="font-semibold">problem-solving skills</span>, and <span className="font-semibold">diplomacy</span> in an engaging and competitive environment.
              </p>
            </div>
          </div>
          {/* Register Button */}
          <div className="flex justify-end">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-500">
              Register Now
            </button>
          </div>
        </div>
      </div>

      <hr className="mt-20 border-t-2 border-gray-400 pb-20" />
      {/* <hr className="mt-10 border-t-2 border-gray-400" /> */}

      {/* Additional Sections */}

      {/* <Committees /> */}

    </div>
  );
};

export default VITBMUN;
