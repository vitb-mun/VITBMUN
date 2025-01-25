import React from "react";
import vitbmun_logo from "../assets/vitbmun_logo.svg";

const Sponsors = () => {
  const sponsorLogos = [
    vitbmun_logo,
    vitbmun_logo,
    vitbmun_logo,
    vitbmun_logo,
    vitbmun_logo,
    vitbmun_logo,
  ];
  return (
    <div>
      {/* 
      Here Change the width and height for all images in the sponsor-slider
      */}
      <div
        className="sponsor-slider"
        style={{
          "--width": "100px",
          "--height": "100px",
          "--quantity": sponsorLogos.length,
        }}
      >
        <div className="list">
          {sponsorLogos.map((logo, index) => (
            <div className="item" style={{ "--position": index }}>
              <img src={logo} alt={`Sponsor ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="py-10 px-6 mb-5">
        {/* Centered Section */}
        <div className="flex flex-col items-center">
          {/* Header */}
          <h2
            id="sponsors"
            className="text-6xl font-bold text-center text-gray-800 mb-8"
            style={{ fontFamily: "'Host Grotesk', sans-serif" }}
          >
            Sponsorship Packages
          </h2>

          {/* Packages Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-6xl">
            {/* Silver Plan */}
            <div className="bg-white border-2 border-gray-300 rounded-xl shadow-md p-6 flex flex-col items-center">
              <h2 className="text-2xl font-bold text-blue-600">Silver</h2>
              <p className="text-5xl font-bold text-gray-900 mt-4">₹5000/-</p>

              <hr className="w-full my-4 border-gray-300" />
              <ul className="text-gray-800 space-y-2">
                <li>
                  ✔ <span className="font-semibold">Social Media:</span> 1
                  promotional reel on official MUN social media.
                </li>
                <li>
                  ✔ <span className="font-semibold">Branding:</span> Logo
                  displayed on a standee at the event
                </li>
                <li>
                  ✔ <span className="font-semibold">Website Mention:</span>{" "}
                  Company name and brief description on the MUN club's website.
                </li>
                <li>
                  ✔ <span className="font-semibold">Event Recognition:</span>{" "}
                  Mention during the closing session of the event.
                </li>
                <li>
                  ✔ <span className="font-semibold">Promotional Content:</span>{" "}
                  Logo placement in the MUN event report.
                </li>
                <li>
                  ✔ <span className="font-semibold">Newsletter:</span> Included
                  in a single newsletter or email distributed to participants.
                </li>
              </ul>
            </div>

            {/* Gold Plan */}
            <div className="bg-blue-600 text-white border-2 border-blue-600 rounded-xl shadow-lg p-6 flex flex-col items-center">
              <h2 className="text-2xl font-bold">Gold</h2>
              <p className="text-5xl font-bold mt-4">₹12000/-</p>

              <hr className="w-full my-4 border-blue-300" />
              <ul className="space-y-2">
                <li>
                  ✔ <span className="font-semibold">Social Media:</span> 2
                  promotional reels posted on MUN club’s social media.
                </li>
                <li>
                  ✔ <span className="font-semibold">Branding:</span> Logo
                  displayed on a standee at the event.
                </li>
                <li>
                  ✔ <span className="font-semibold">Website Mention:</span>{" "}
                  Company profile highlighted on the MUN club’s website.
                </li>
                <li>
                  ✔ <span className="font-semibold">Event Recognition:</span>{" "}
                  Mention during both opening and closing ceremonies.
                </li>
                <li>
                  ✔ <span className="font-semibold">Promotional Content:</span>{" "}
                  Logo featured on posters displayed around the campus.
                </li>

                <li>
                  ✔ <span className="font-semibold">Special Feature:</span>{" "}
                  Highlighted in a dedicated “Sponsor Spotlight” social media
                  post.
                </li>
              </ul>
            </div>

            {/* Platinum Plan */}
            <div className="bg-white border-2 border-gray-300 rounded-xl shadow-md p-6 flex flex-col items-center">
              <h2 className="text-2xl font-bold text-blue-600">Platinum</h2>
              <p className="text-5xl font-bold text-gray-900 mt-4">₹20000/-</p>

              <hr className="w-full my-4 border-gray-300" />
              <ul className="text-gray-800 space-y-2">
                <li>
                  ✔ <span className="font-semibold">Social Media:</span> 3
                  promotional reels shared across all MUN club social media
                  platforms.
                </li>
                <li>
                  ✔ <span className="font-semibold">Branding:</span> Logo on
                  standees, flyers, posters, and banners around the campus.
                </li>
                <li>
                  ✔ <span className="font-semibold">Website Mention:</span>{" "}
                  Detailed feature in the MUN club’s website sponsor section.
                </li>
                <li>
                  ✔ <span className="font-semibold">Event Recognition:</span>{" "}
                  Acknowledgment in all key event sessions
                </li>
                <li>
                  ✔ <span className="font-semibold">Promotional Content:</span>{" "}
                  Opportunity to include promotional material in delegate kits.
                </li>
                <li>
                  ✔ <span className="font-semibold">Campus Recognition:</span>{" "}
                  Logo on digital screens or notice boards on campus
                  during the event.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
