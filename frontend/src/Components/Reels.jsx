import React from "react";

const Reels = () => {
  const reels = [
    "https://www.instagram.com/p/DEPqTO_PyNO/",
    "https://www.instagram.com/p/DCgdaWnvn3E/",
    "https://www.instagram.com/reel/DCv4t2fP3v3/",
  ];

  return (
    <section>
      <div className="container mx-auto px-4 mt-4 mb-6">
        <h1
          className="text-5xl sm:text-6xl font-semibold text-gray-800 mb-10 text-center"
          style={{ fontFamily: "'Host Grotesk', sans-serif" }}
        >
          Behind the Scenes
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Looping through each reel */}
          {reels.map((reel, index) => (
            <div key={index} className="w-full md:w-1/3">
              <iframe
                src={`${reel}embed`}
                width="100%"
                height="400"
                className="rounded-lg shadow-lg"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                allowFullScreen
                title={`Instagram Reel ${index + 1}`}
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reels;
