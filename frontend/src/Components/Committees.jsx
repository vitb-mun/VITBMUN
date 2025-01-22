import React from 'react';
import userLogo from '../assets/userLogo.jpg'; // Import static assets

const Committees = () => {
    const CommitteesDetails = [
        {
            img: userLogo,
            participantName: "John Doe",
            position: "Winner",
        },
        {
            img: userLogo,
            participantName: "Jane Smith",
            position: "Runner-up",
        },
        {
            img: userLogo,
            participantName: "Alex Johnson",
            position: "Third Place",
        },
        {
            img: userLogo,
            participantName: "Emily Davis",
            position: "Fourth Place",
        },
        {
            img: userLogo,
            participantName: "Michael Brown",
            position: "Fifth Place",
        },
    ];

    return (
        <div className="h-auto p-6 bg-gray-100 rounded-md">
            <h2 className="text-2xl font-bold mb-6">Committees</h2>
            {/* Updated layout */}
            <div className="flex flex-wrap gap-4 py-4">
                {CommitteesDetails.map((Committee, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center w-48" // Adjust width if needed
                    >
                        <img
                            src={Committee.img}
                            alt={Committee.participantName}
                            className="w-40 h-40 object-cover mb-4 border-2 rounded-3xl border-gray-300"
                        />
                        <h4 className="text-md font-bold text-gray-800">
                            {Committee.participantName}
                        </h4>
                        <h6 className="text-sm font-medium text-gray-600">
                            {Committee.position}
                        </h6>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Committees;
