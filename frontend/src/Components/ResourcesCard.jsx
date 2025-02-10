import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import hash from "./../assets/hash.png";

const ResourcesCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const details = [
    { icon: hash, label: "Press Releases", value: "" },
    { icon: hash, label: "Rule Book", value: "" },
  ];

  return (
    <div className="bg-white border border-gray-300 rounded-lg h-max w-auto border-gray-300 p-4 rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-300">
      <div
        className="flex justify-between items-center cursor-pointer p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold">Resources</span>
        <span className={`transition-transform duration-300`}>
          <FaChevronDown className={`${isOpen ? "hidden" : "block"}`} />
          <FaChevronUp className={`${isOpen ? "block" : "hidden"}`} />
        </span>
      </div>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-4 mt-3">
          {details.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 border-[1.5px] py-0 rounded-lg w-auto px-3 hover:bg-gray-100 transition-colors duration-300"
            >
              <img
                src={item.icon}
                alt={item.label}
                className="h-7 filter brightness-[0.3] py-1"
              />
              <span className="text-md font-bold">{item.label}:</span>
              <span className="text-sm">Details here</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesCard;
