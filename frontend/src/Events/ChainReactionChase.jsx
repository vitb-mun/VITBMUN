import React from "react";

const ChainReactionChase = () => {
  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="text-center py-8 bg-white shadow-md" id="event-header">
        <h1 className="text-4xl font-bold">ChainReactionChase</h1>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">
          Register Now
        </button>
      </header>

      {/* Main Content */}
      <div className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Options Section */}
          <div className="md:col-span-1 bg-white rounded shadow p-4">
            <h2 className="text-lg font-bold mb-4">Options</h2>
            <div className="space-y-2">
              <div className="border rounded p-2 hover:bg-gray-50">
                Committee
              </div>
              <div className="border rounded p-2 hover:bg-gray-50">Rules</div>
              <div className="border rounded p-2 hover:bg-gray-50">
                Resources
              </div>
              <div className="border rounded p-2 hover:bg-gray-50">FAQs</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3 bg-white rounded shadow p-6">
            <h2 className="text-xl font-bold mb-4">This MUN Introduces</h2>
            <p className="mb-4 text-sm">
              This MUN introduces several well-thought-of three rounds, designed
              to test teamwork, problem-solving, decision-making, and
              adaptability.
            </p>

            <h3 className="text-lg font-semibold mb-2">Rounds</h3>
            <ol className="list-decimal list-inside mb-4 space-y-2">
              <li>
                <strong>Round 1:</strong> Participants perform tasks involving
                rules clarification, background checks, and analysis.
              </li>
              <li>
                <strong>Round 2:</strong> Group tasks with critical thinking
                problems to be solved in limited time.
              </li>
              <li>
                <strong>Round 3:</strong> Crisis committee with real-time
                decision-making and negotiation tasks.
              </li>
            </ol>

            <h3 className="text-lg font-semibold mb-2">Outcomes</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Leadership and public speaking skills</li>
              <li>Enhanced negotiation and teamwork abilities</li>
              <li>Problem-solving and adaptability experience</li>
            </ul>
          </div>
        </div>

        {/* Winners Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Winners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="h-24 border rounded bg-gray-50 flex items-center justify-center">
              Delegate Name
            </div>
            <div className="h-24 border rounded bg-gray-50 flex items-center justify-center">
              Delegate Name
            </div>
            <div className="h-24 border rounded bg-gray-50 flex items-center justify-center">
              Delegate Name
            </div>
            <div className="h-24 border rounded bg-gray-50 flex items-center justify-center">
              Delegate Name
            </div>
          </div>
        </section>

        {/* Event Highlights */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Event Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="h-24 border rounded bg-gray-50"></div>
            <div className="h-24 border rounded bg-gray-50"></div>
            <div className="h-24 border rounded bg-gray-50"></div>
          </div>
        </section>

        {/* Reviews */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded p-4 bg-white">
              <h3 className="font-semibold">Delegate Name</h3>
              <p className="text-sm text-gray-600">
                "It was a wonderful experience that enhanced my skills and
                understanding of teamwork."
              </p>
            </div>
            <div className="border rounded p-4 bg-white">
              <h3 className="font-semibold">Delegate Name</h3>
              <p className="text-sm text-gray-600">
                "An amazing opportunity to connect, learn, and collaborate with
                others."
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ChainReactionChase;
