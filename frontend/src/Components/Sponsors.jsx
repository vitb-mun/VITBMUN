import React from "react";

const Sponsors = () => {
  const sponsorLogos = [
    "/images/deloitte.png", // Replace these paths with your logo image paths
    "/images/maersk.png",
    "/images/hp.png",
    "/images/accenture.png",
    "/images/mcdonalds.png",
  ];
  return (
    <div>
      <div className="py-10 px-6 -mb-16 ">
        {/* Sponsors Section */}
        <div className="">
          <div className="overflow-hidden relative">
            <div className="flex items-center justify-evenly space-x-8 animate-marquee">
              {sponsorLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Sponsor ${index + 1}`}
                  className="h-20 w-auto object-contain"
                />
              ))}
              {sponsorLogos.map((logo, index) => (
                <img
                  key={`duplicate-${index}`}
                  src={logo}
                  alt={`Sponsor ${index + 1}`}
                  className="h-20 w-auto object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 px-6 mb-5">
        {/* Centered Section */}
        <div className="flex flex-col items-center">
          {/* Header */}
          <h2 className="text-6xl font-bold text-center text-gray-800 mb-8">
            Sponsorship Packages
          </h2>

          {/* Packages Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-6xl">
            {/* Personal Plan */}
            <div className="bg-white border-2 border-gray-300 rounded-xl shadow-md p-6 flex flex-col items-center">
              <h2 className="text-xl font-bold text-blue-600">Silver</h2>
              <p className="text-5xl font-bold text-gray-900 mt-4">
                $59<span className="text-lg font-normal">/year</span>
              </p>
              <p className="text-gray-600 text-center mt-4">
                Perfect for using in a personal website or a client project.
              </p>
              <hr className="w-full my-4 border-gray-300" />
              <ul className="text-gray-800 space-y-2">
                <li>1 User</li>
                <li>All UI components</li>
                <li>Lifetime access</li>
                <li>Free updates</li>
                <li>Use on 1 project</li>
                <li>3 Months support</li>
              </ul>
              <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                Choose Personal
              </button>
            </div>

            {/* Business Plan */}
            <div className="bg-blue-600 text-white border-2 border-blue-600 rounded-xl shadow-lg p-6 flex flex-col items-center">
              <h2 className="text-xl font-bold">Gold</h2>
              <p className="text-5xl font-bold mt-4">
                $199<span className="text-lg font-normal">/year</span>
              </p>
              <p className="text-center mt-4">
                Perfect for using in a Business website or a client project.
              </p>
              <hr className="w-full my-4 border-blue-300" />
              <ul className="space-y-2">
                <li>5 Users</li>
                <li>All UI components</li>
                <li>Lifetime access</li>
                <li>Free updates</li>
                <li>Use on 3 projects</li>
                <li>4 Months support</li>
              </ul>
              <button className="mt-6 w-full bg-white text-blue-600 py-2 px-4 rounded-lg hover:bg-gray-100">
                Choose Business
              </button>
            </div>

            {/* Professional Plan */}
            <div className="bg-white border-2 border-gray-300 rounded-xl shadow-md p-6 flex flex-col items-center">
              <h2 className="text-xl font-bold text-blue-600">Platinum</h2>
              <p className="text-5xl font-bold text-gray-900 mt-4">
                $256<span className="text-lg font-normal">/year</span>
              </p>
              <p className="text-gray-600 text-center mt-4">
                Perfect for using in a Professional website or a client project.
              </p>
              <hr className="w-full my-4 border-gray-300" />
              <ul className="text-gray-800 space-y-2">
                <li>Unlimited Users</li>
                <li>All UI components</li>
                <li>Lifetime access</li>
                <li>Free updates</li>
                <li>Use on unlimited projects</li>
                <li>12 Months support</li>
              </ul>
              <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                Choose Professional
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
