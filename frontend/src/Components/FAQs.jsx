import React, { useState } from "react";
import backgroundimage from "../assets/dotted.png";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Model United Nation?",
      answer:
        "MUN is a Model United Nations conference where students simulate the workings of the United Nations and discuss global issues.",
    },
    {
      question: "Can I engage MUN for just one of the services offered?",
      answer:
        "Yes, MUN offers a variety of services and you can choose to engage for specific ones as needed.",
    },
    {
      question: "What is the cost of MUN's services?",
      answer:
        "The cost varies based on the services and packages selected. Contact MUN for a customized quote.",
    },
    {
      question: "How do I get started with MUN?",
      answer:
        "You can get started by visiting our website, selecting your preferred services, and signing up.",
    },
    {
      question: "Can MUN help with funding or investor connections?",
      answer:
        "Yes, MUN has connections with investors and can provide advice on funding opportunities.",
    },
    {
      question: "Do MUN offer any guarantees on results?",
      answer:
        "MUN provides expert guidance, but we do not guarantee specific results, as they depend on various factors.",
    },
    {
      question: "How flexible are MUN's service packages?",
      answer:
        "MUN's service packages are designed to be flexible and can be customized based on your needs.",
    },
    {
      question:
        "How does working with MUN compare to hiring in-house specialists?",
      answer:
        "MUN offers specialized expertise and a wide range of services, while in-house specialists may focus on specific areas.",
    },
    {
      question: "How does MUN stay ahead in understanding market trends?",
      answer:
        "MUN invests in research and has a dedicated team focused on staying updated with market trends.",
    },
    {
      question: "Do you provide resources or training for startup teams?",
      answer:
        "Yes, MUN offers training and resources to help startup teams grow and succeed.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faqs"
      className="flex justify-center items-start p-6"
      style={{
        backgroundImage: `url(${backgroundimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="border-4 shadow-md rounded-3xl max-w-7xl flex flex-col md:flex-row items-start bg-white overflow-hidden w-full">
        {/* Left Section */}
        <div className="w-full md:w-1/3 p-8">
          <h1
            className="text-5xl font-semibold text-gray-800"
            style={{ fontFamily: "'Host Grotesk', sans-serif" }}
          >
            Any Questions?
          </h1>
        </div>

        {/* Right Section (Accordion) */}
        <div className="w-full border-l rounded-3xl shadow-md md:w-2/3 p-6">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h2 id={`accordion-heading-${index}`}>
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-800 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index ? "true" : "false"}
                  aria-controls={`accordion-body-${index}`}
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`w-3 h-3 ${
                      openIndex === index ? "rotate-180" : ""
                    } shrink-0`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id={`accordion-body-${index}`}
                className={openIndex === index ? "" : "hidden"}
                aria-labelledby={`accordion-heading-${index}`}
              >
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p className="mb-2 text-gray-800 dark:text-gray-400">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
