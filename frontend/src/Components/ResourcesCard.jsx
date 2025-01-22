import React from 'react'
import hash from "./../assets/hash.png";

const ResourcesCard = () => {
      const details = [
            {
                icon: hash,
                label: 'Press Releases',
                value: '',
            },
            {
                icon: hash,
                label: 'Rule Book',
                value: '',
            },
        ]
        return (
            <div className="bg-white border-[3px] border-gray-300 p-4 rounded-xl shadow-sm space-y-4">
                <h2 className="text-lg text-center font-semibold mb-4">Resources</h2>
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

export default ResourcesCard