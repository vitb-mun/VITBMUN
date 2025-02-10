import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import calendar from "./../assets/calendar.png";
import building from "./../assets/building.png";
import clock from "./../assets/clock.png";
import currency from "./../assets/currency.png";

const EventDetailsCard_a = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const details = [
        { icon: calendar, label: 'Date', value: props.date ? props.date : 'N/A' },
        { icon: calendar, label: 'Days', value: props.days ? props.days : 'N/A' },
        { icon: clock, label: 'Time', value: props.time ? props.time : 'N/A' },
        { icon: building, label: 'Venue', value: props.venue ? props.venue : 'N/A' },
        { icon: currency, label: 'Registration Fees', value: props.fees ? props.fees : 'N/A' },
        { icon: currency, label: 'Cash Prize', value: props.prize ? props.prize : 'N/A' },
    ];

    return (
        <div className="bg-white border border-gray-300 rounded-lg border-gray-300 p-4 rounded-xl shadow-sm w-auto h-max hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <div 
                className="flex justify-between items-center cursor-pointer p-2"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-bold">Event Details</span>
                <span className={`transition-transform duration-300 `}>
                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </span>
            </div>
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 '} `}>
                <div className="space-y-4 mt-3">
                    {details.filter(item => item.value !== 'N/A').map((item, index) => (
                        <div key={index} className="flex items-center gap-4 border-[1.5px] py-0 rounded-lg w-auto px-3">
                            <img src={item.icon} alt={item.label} className="h-7 filter brightness-[0.3] py-1" />
                            <span className="text-md font-bold">{item.label}:</span>
                            <span className='text-sm'>{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventDetailsCard_a;
