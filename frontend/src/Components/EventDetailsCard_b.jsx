import React from 'react'
import groups from "./../assets/groups.png";
import hash from "./../assets/hash.png";

const EventDetailsCard_b = () => {
    const details = [
        {
            icon: groups,
            label: 'Participant',
            value: '',
        },
        {
            icon: groups,
            label: 'Team Size',
            value: '',
        },
        {
            icon: hash,
            label: 'Rounds',
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

export default EventDetailsCard_b