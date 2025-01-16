import React from "react";
import merch from "../assets/Collabrations/merch.jpg";
import irmun from "../assets/Collabrations/irmun.jpg";
import iitkgp from "../assets/Collabrations/iitkgp.jpg";

const Collaboration = () => {
  return (
    <section>
      <div className="container mx-auto px-4">
        <h1
          className="text-5xl sm:text-6xl font-semibold text-gray-800 mb-10 text-center"
          style={{ fontFamily: "'Host Grotesk', sans-serif" }}
          id="collaborations"
        >
          Our Collaborations
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* First Image */}
          <div className="w-full md:w-1/2">
            <img
              src={iitkgp}
              alt="Collaboration 1"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          {/* Second Image */}
          <div className="w-full md:w-1/2">
            <img
              src={irmun}
              alt="Collaboration 2"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
