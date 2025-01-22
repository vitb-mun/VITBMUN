import React from 'react'
import calendar from "./../assets/calendar.png";
import building from "./../assets/building.png";
import clock from "./../assets/clock.png";
import currency from "./../assets/currency.png";

const EventDetailsCard_a = () => {
    const details = [
        {
            icon: calendar,
            label: 'Date',
            value: '',
        },
        {
            icon: calendar,
            label: 'Days',
            value: '',
        },
        {
            icon: clock,
            label: 'Time',
            value: '',
        },
        {
            icon: building,
            label: 'Venue',
            value: '',
        },
        {
            icon: currency,
            label: 'Registration Fees',
            value: '',
        },
        {
            icon: currency,
            label: 'Cash Price',
            value: '',
        },
    ]
    return (
        <div className="bg-white border-[3px] border-gray-300 p-4 rounded-xl shadow-sm space-y-4">
            {details.map(
                (item, index) => (
                    <div key={index} className="flex items-center gap-4 border-[1.5px] py-0 rounded-lg w-max px-3">
                        <img src={item.icon} alt={item.label} className="h-7 filter brightness-[0.3] py-1" />
                        <span className="text-md font-bold">{item.label}:</span> <span className='text-sm'>Details here</span>
                    </div>
                )
            )}
        </div>
    )
}

export default EventDetailsCard_a