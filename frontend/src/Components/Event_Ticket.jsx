import React from 'react'

export default function Event_Ticket(props) {
    return (
        <div
            className={`
            bg-[url('./assets/TicketC.jpg')] lg:bg-[url('./assets/TicketC.png')] bg-contain
            text-white relative
            sm:h-auto h-lvh
            overflow-hidden bg-repeat object-bottom 
`}
        >
            <div className="flex flex-col md:flex-row md:items-start items-center p-12">
                {/* Image Section */}
                <div className="w-full md:w-1/4 h-48 sm:h-60 md:h-auto bg-gray-300 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                        src={props.Logo}
                        className="h-full w-full object-cover"
                        alt="Rajneeti Rangmanch Logo"
                    />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-2/4 mt-6 md:mt-0 md:ml-6 flex flex-col justify-center">
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
                    <div className="mt-4">
                        <p className="text-gray-300 text-lg sm:text-xl">
                            <span className="font-semibold text-white">Date:</span>{" "}
                            {props.Date}
                        </p>
                        <br />
                        <p className="text-gray-300 text-lg sm:text-xl">
                            <span className="font-semibold text-white">Day:</span>{" "}
                            {props.Day}
                        </p>
                        <br />
                        <p className="text-gray-300 text-lg sm:text-xl">
                            <span className="font-semibold text-white">Time:</span>{" "}
                            {props.Time}
                        </p>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    )
}
