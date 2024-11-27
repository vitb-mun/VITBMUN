import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    "What is MUN?",
    "Can I engage MUN for just one of the services offered?",
    "What is the cost of MUN's services?",
    "How do I get started with MUN?",
    "Can MUN help with funding or investor connections?",
    "Do MUN offer any guarantees on results?",
    "How flexible are MUN's service packages?",
    "How does working with MUN compare to hiring in-house specialists?",
    "How does MUN stay ahead in understanding market trends?",
    "Do you provide resources or training for startup teams?",
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex justify-center items-start min-h-screen mt-4 p-10 -mb-8">
      <div className="border-4 shadow-md  rounded-3xl max-w-5xl flex flex-col md:flex-row items-start bg-white  overflow-hidden w-full">
        {/* Left Section */}
        <div className=" w-full md:w-1/3 p-8">
          <h1 className="text-5xl font-semibold text-gray-800 ">
            Any Questions?
          </h1>
        </div>

        {/* Right Section */}
        <div className="w-full border-l rounded-3xl shadow-md md:w-2/3 p-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-400 py-4">
              <button
                className="flex justify-between items-center w-full text-left text-gray-800 font-weight-700"
                onClick={() => toggleFAQ(index)}
              >
                {faq}
                <span className="text-3xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-600 text-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur pellentesque ultricies condimentum.
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
