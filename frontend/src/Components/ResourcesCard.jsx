import React, { useState } from 'react'
import hash from "./../assets/hash.png";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

// const ResourcesCard = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const details = [
//     {
//       icon: hash,
//       label: 'Press Releases',
//       value: '',
//     },
//     {
//       icon: hash,
//       label: 'Rule Book',
//       value: '',
//     },
//   ];

//   return (
//     <div className="bg-white border-[3px] border-gray-300 p-4 rounded-xl shadow-sm space-y-4">
//       <div
//         className="flex justify-between items-center cursor-pointer"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <h2 className="text-lg text-center font-semibold mb-4">Resources</h2>
//         <span>{isOpen ? "▲" : "▼"}</span>
//       </div>
//       {isOpen && (
//         <div>
//           {details.map(
//             (item, index) => (
//               <div key={index} className="flex items-center gap-4 border-[1.5px] py-0 rounded-lg w-max px-3">
//                 <img src={item.icon} alt={item.label} className="h-7 filter brightness-[0.3] py-1" />
//                 <span className="text-md font-bold">{item.label}:</span> <span className='text-sm'>Details here</span>
//               </div>
//             )
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

const ResourcesCard = () => {
    const [isOpen, setIsOpen] = useState(false);

    const details = [
        { icon: hash, label: 'Press Releases', value: '' },
        { icon: hash, label: 'Rule Book', value: '' },
    ];

    return (
        <div className="bg-white border-[3px] h-max w-[350px] border-gray-300 p-4 rounded-xl shadow-sm">
            <div 
                className="flex justify-between items-center cursor-pointer p-2"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-bold">Resources</span>
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

export default ResourcesCard;