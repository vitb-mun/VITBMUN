import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Why should I join this club?",
      answer:
        "Welcome to our MUN Club, where we bring the world of Model United Nations to life! In our club, students take on the roles of delegates.",
    },
    {
      question: "Do I have to pay a registration fee to join?",
      answer: "No, joining the club is completely free!",
    },
    {
      question: "What does this club offer?",
      answer:
        "The club offers a platform to engage in debates, develop public speaking skills, and network with peers.",
    },
    {
      question: "How will this affect me?",
      answer:
        "You will gain invaluable skills in diplomacy, public speaking, and critical thinking.",
    },
  ];

  return (
    <div className="flex flex-col items-center p-8 mt-4 space-y-10">
      <h1 className="text-4xl font-bold text-gray-800">FAQ’s</h1>
      <div className="w-full max-w-4xl  space-y-6">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="rounded-lg border-black-800 border-2 shadow-md  border-gray-200"
          >
            <button
              className="w-full flex items-center justify-between p-4 text-left text-gray-800 font-medium hover:bg-blue-100"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className="text-2xl">
                {openIndex === index ? "▲" : "➕"}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-100 text-gray-900">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
