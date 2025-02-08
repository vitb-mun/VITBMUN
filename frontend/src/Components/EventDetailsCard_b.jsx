import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import groups from "./../assets/groups.png";
import hash from "./../assets/hash.png";

const EventDetailsCard_b = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const details = [
        { icon: groups, label: 'Participant', value: '' },
        { icon: groups, label: 'Team Size', value: '' },
        { icon: hash, label: 'Rounds', value: '' },
    ];

    return (
        <div className="bg-white border-[3px] h-max w-[320px] border-gray-300 p-4 rounded-xl shadow-sm">
            <div 
                className="flex justify-between items-center cursor-pointer p-2"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-bold">Participants Info</span>
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {isOpen && (
                <div className="space-y-4 mt-3">
                    {details.map((item, index) => (
                        <div key={index} className="flex items-center gap-4 border-[1.5px] py-0 rounded-lg w-max px-3">
                            <img src={item.icon} alt={item.label} className="h-7 filter brightness-[0.3] py-1" />
                            <span className="text-md font-bold">{item.label}:</span>
                            <span className='text-sm'>Details here</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default EventDetailsCard_b;