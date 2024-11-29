import React from "react";

const MUNMATE = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-md p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-600">MUNMATE</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Main Events
          </button>
        </header>
        <div className="mb-6">
          <p className="text-lg">
            This fun and interactive event will consist of three rounds,
            designed to test <strong>teamwork</strong>,{" "}
            <strong>problem-solving skills</strong>, and{" "}
            <strong>diplomacy</strong> in an engaging and competitive
            environment.
          </p>
          <p className="mt-2">
            The aim of <strong>MUN-State 2024</strong> is to provide university
            students, especially freshmen, with an opportunity to:
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            <li>
              Develop critical thinking and problem-solving skills through
              diplomatic simulations.
            </li>
            <li>
              Enhance public speaking and negotiation skills by participating in
              meaningful discussions.
            </li>
            <li>
              Foster global collaboration by engaging in activities that require
              collaboration with peers.
            </li>
            <li>
              Gain a global perspective by discussing pressing international
              issues and forming meaningful diplomatic networks.
            </li>
            <li>
              Promote intellectual camaraderie within the university community,
              encouraging a sense of involvement and enthusiasm for MUN
              activities.
            </li>
          </ul>
        </div>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">Rounds</h2>
          <div className="mb-4">
            <h3 className="text-lg font-bold">1. SpeedMUN</h3>
            <p>
              <strong>Setup:</strong> Participants are divided into four tables
              (A, B, C, D), with 20 individuals each for a 50-minute round.
            </p>
            <p className="mt-2">
              <strong>Process:</strong>
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              <li>
                Round 1: Each participant shares insights about their assigned
                country and engages in discussions to understand allies and
                foreign policies.
              </li>
              <li>
                Rotations: After 10 minutes, half the participants rotate tables
                for further discussions, repeating this process for a
                comprehensive exchange of ideas.
              </li>
              <li>
                Open Lobbying: A 10-minute session where everyone mingles freely
                to form pairs, sharing knowledge about their countries.
              </li>
            </ul>
            <p className="mt-2">
              <strong>Outcome:</strong> Each participant must form a pair with
              someone from a different country to progress to the next round,
              fostering collaboration and understanding.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold">2. PPT Karaoke</h3>
            <p>
              <strong>Setup:</strong> Pairs formed from the previous round (40
              pairs total) take the stage for an exciting presentation challenge
              lasting approximately 2 hours.
            </p>
            <p className="mt-2">
              <strong>Process:</strong>
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              <li>
                Each pair receives 5 random slides and must seamlessly present
                for 2 minutes, switching speakers with each slide.
              </li>
              <li>
                The focus is on coherence, smooth transitions, and creativity.
              </li>
              <li>
                After the presentation, 20 pairs are eliminated based on
                performance, leaving 20 pairs to advance.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">3. Crisis Committee</h3>
            <p>
              <strong>Setup:</strong> The remaining 40 participants engage in a
              structured 2-hour committee session without formal pairs.
            </p>
            <p className="mt-2">
              <strong>Process:</strong>
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              <li>
                Preparation: Participants review the crisis agenda for 15
                minutes and formulate their stances.
              </li>
              <li>
                Debate: Engaging in a 1-hour debate, followed by an hour of
                lobbying to form alliances and draft proposals.
              </li>
              <li>
                Closing: After presenting directives, participants vote on the
                proposals, culminating in a session outcome.
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">
            Committees
          </h2>
          <div className="grid grid-cols-4 gap-4 mb-6">
            {Array(8)
              .fill("Committee")
              .map((text, index) => (
                <div
                  key={index}
                  className="bg-gray-200 h-20 flex items-center justify-center rounded-md"
                >
                  {text}
                </div>
              ))}
          </div>
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">Winners</h2>
          <div className="grid grid-cols-4 gap-4">
            {Array(8)
              .fill("Participant")
              .map((text, index) => (
                <div
                  key={index}
                  className="bg-gray-200 h-20 flex items-center justify-center rounded-md"
                >
                  {text}
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MUNMATE;
