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
    <div className="bg-gray-50 py-16 px-6">
      {/* Header */}
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
        Sponsorship Package
      </h2>

      {/* Packages Section */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-8">
        {/* Silver Package */}
        <div className="w-full md:w-1/3 bg-gradient-to-b from-blue-500 to-indigo-600 shadow-xl rounded-lg p-6 text-white">
          <h3 className="text-2xl font-semibold">Silver</h3>
          <p className="mt-2 text-sm text-gray-100">
            Some description that is this and not this, but could be that thus
            not being this.
          </p>
          <ul className="mt-4 space-y-2">
            <li>✅ Social Media: 5 promoted posts</li>
            <li>✅ Branding: Logo displayed on all platforms</li>
            <li>✅ Website Features: Premium spotlight</li>
            <li>✅ Event Recognition</li>
            <li>✅ Special Feature</li>
          </ul>
          <button className="mt-6 bg-white text-indigo-600 py-2 px-4 rounded-lg hover:bg-gray-100">
            Join us
          </button>
        </div>

        {/* Gold Package */}
        <div className="w-full md:w-1/3 bg-gradient-to-b from-blue-500 to-indigo-600 shadow-xl rounded-lg p-6 text-white">
          <h3 className="text-2xl font-semibold">Gold</h3>
          <p className="mt-2 text-sm text-gray-100">
            Some description that is this and not this, but could be that thus
            not being this.
          </p>
          <ul className="mt-4 space-y-2">
            <li>✅ Social Media: 5 promoted posts</li>
            <li>✅ Branding: Logo displayed on all platforms</li>
            <li>✅ Website Features: Premium spotlight</li>
            <li>✅ Event Recognition</li>
            <li>✅ Special Feature</li>
          </ul>
          <button className="mt-6 bg-white text-indigo-600 py-2 px-4 rounded-lg hover:bg-gray-100">
            Join us
          </button>
        </div>

        {/* Platinum Package */}
        <div className="w-full md:w-1/3 bg-gradient-to-b from-blue-500 to-indigo-600 shadow-xl rounded-lg p-6 text-white">
          <h3 className="text-2xl font-semibold">Platinum</h3>
          <p className="mt-2 text-sm text-gray-100">
            Some description that is this and not this, but could be that thus
            not being this.
          </p>
          <ul className="mt-4 space-y-2">
            <li>✅ Social Media: 5 promoted posts</li>
            <li>✅ Branding: Logo displayed on all platforms</li>
            <li>✅ Website Features: Premium spotlight</li>
            <li>✅ Event Recognition</li>
            <li>✅ Special Feature</li>
          </ul>
          <button className="mt-6 bg-white text-indigo-600 py-2 px-4 rounded-lg hover:bg-gray-100">
            Join us
          </button>
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Sponsors
        </h2>

        {/* Carousel */}
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
  );
};

export default Sponsors;
