import React from "react";

export default function Event_Ticket(props) {
  return (
    <a href={props.link}>
      <div
        className={`
            bg-[url('./assets/TicketC1.jpg')] lg:bg-[url('./assets/TicketC.png')] bg-cover sm:bg-contain
            text-white relative
            sm:h-auto h-5/6
            overflow-hidden bg-repeat object-bottom mt-10
            transition-transform duration-300 hover:scale-105
            group
        `}
      >
        <div className="flex flex-col md:flex-row md:items-start items-center p-12 relative">
          {/* Image Section */}
          <div className="w-full md:w-1/4 h-78 sm:h-60 md:h-auto bg-gray-300 rounded-lg overflow-hidden flex-shrink-0">
            <img
              src={props.Logo}
              className="h-full w-full object-cover"
              alt="Rajneeti Rangmanch Logo"
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-2/4 mt-6 md:mt-0 md:ml-6 flex flex-col justify-center group-hover:text-2xl transition-all duration-300">
            <h3
              className="text-2xl sm:text-4xl font-bold"
              style={{ fontFamily: "'Host Grotesk', sans-serif" }}
            >
              {props.Heading}
            </h3>
            <p className="text-gray-400 mt-2 text-sm sm:text-xl leading-relaxed">
              {props.Description}
            </p>

            {/* Additional Event Details */}
            <div className="mt-4 text-sm">
              <p className="text-gray-300 text-base sm:text-xl">
                <span className="font-semibold text-white">Date:</span>{" "}
                {props.Date}
              </p>
              <br />
              <p className="text-gray-300 text-base sm:text-xl">
                <span className="font-semibold text-white">Day:</span>{" "}
                {props.Day}
              </p>
              <br />
              <p className="text-gray-300 text-base sm:text-xl">
                <span className="font-semibold text-white">Time:</span>{" "}
                {props.Time}
              </p>
              <br />
              <p className="text-gray-300 text-base sm:text-xl">
                <span className="font-semibold text-white">Venue:</span>{" "}
                {props.Venue}
              </p>
              <br />
                {/* Place here */}
                <a
                  href={props.link}
                  className="text-white hover:text-rainbow transition-colors duration-300 text-xl sm:text-xl"
                >
                  Click here to book &rarr;
                </a>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
