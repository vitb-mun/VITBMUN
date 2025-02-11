import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Model United Nation?",
      answer:
        "Model United Nations (MUN) is an educational simulation for those who aim to excel in arenas such as debates and board meetings. It offers participants with the opportunity to step into the role of delegates representing different countries, engaging in structured debates, negotiations, and decision-making to address and tackle global challenges.",
    },
    {
      question: "What skills does MUN help develop?",
      answer:
        "MUN is the platform to prepare the youth of today to be the leaders of tomorrow. It equips you with the skills of today, that is, the 21st century skills. To name a few: Public speaking, Leadership, Negotiation, Problem-solving, Critical thinking, Collaboration, Research and analysis.",
    },
    {
      question: "What can one gain through MUN?",
      answer:
        "Participating in MUNs give you a hands-on experience of being delegates, mentors, leaders and orators who strive to bring about a change. MUNs give you an opportunity to dive deeper into global issues and gain a better understanding about your rights and responsibilities. It is also a very good chance for participants to connect with like-minded peers and boost their public speaking as well as critical thinking abilities.",
    },
    {
      question: "Who can participate in MUN?",
      answer:
        "Participation in MUNs is open to students from all age groups. The conferences are generally conducted for students at various levels, ranging from elementary schools to universities. These conferences are a great stop for all those who have a zeal for diplomacy, intense debates and for tackling global challenges.",
    },
    {
      question: "How does a typical MUN conference work?",
      answer:
        "MUN conferences mirror the working of the actual United Nations conferences. The breakdown of a typical MUN conference is infused with energy and enthusiasm:•	Opening Ceremonies: The stage is set with an introduction to the conference and keynote speeches. Delegates take the podium and introduce themselves giving short speeches outlining their country’s stance.•	Debate sessions: Delegates discuss issues, propose solutions, and collaborate to draft resolutions.•	Caucus sessions: These are the informal meetings which are conducted for negotiations and drafting resolutions.•	Resolution Voting: Once the debate concludes, delegates cast their votes on the resolutions. Only a majority vote can bring the resolutions into effect.•	Closing Ceremonies: The delegates are often recognized for their phenomenal performances at the end of the conference. Awards are handed out, and the conference is officially concluded.",
    },
    {
      question: "How can I prepare for my first MUN conference?",
      answer:
        "To prepare for a thrilling first MUN conference, you should:•	Research: Understand your assigned country's position and policies, dig into the topics set for discussion at the conference•	Write a Position Paper: Draft an impactful paper describing your country’s stance.•	Learn Rules of Procedure: Familiarize yourself with the specific rules of the conference to be one step ahead.•	Practice Public Speaking: Rehearse opening speeches, master your responses to questions and be ready for any negotiations that may come your way!•	Dress Professionally: MUN conferences usually require formal attire. Dressing appropriately helps in standing out and creating a serious atmosphere. It is an essential part of the experience. So, put on your best attire!",
    },
    {
      question: "How is MUN different from debate club? ",
      answer:
        "MUNs focus on international diplomacy and requires delegates to represent a country’s policies. Whereas, debate club focuses on logical reasoning, public speaking, and argument construction.  MUNs are all about proposing diplomatic solutions, building consensus and passing effective resolutions. It emphasizes collaborative problem-solving. On the other hand, debates have a clear goal of declaring a winner based on effective persuasion and argumentation skills showcased by the participants.",
    },
    {
      question: "What do MUN participants do?",
      answer:
        "MUN participants take on the roles of delegates representing different countries, organizations, or entities, diving into the world of international diplomacy. They research their assigned country’s policies, engage in thrilling discussions, and draft resolutions proposing innovative solutions to the most serious global issues. ",
    },
    {
      question: "What are the rules of procedure in MUN?",
      answer:
        "Rules of procedure outline the conduct of debate, guiding how delegates speak, introduce motions, pose questions, and cast vote on resolutions. The rules of procedure cover everything from voting and motions to points. These rules ensure that business unfolds in a structured manner.",
    },
    {
      question: "What are some of the awards presented at MUN conferences?",
      answer:
        "The awards at MUN conferences are a recognition of exceptional talent and hard work displayed by participants. Awards vary from conference to conference but generally include:•	Best Delegate: Given to the top performing delegate who dominates the committee through their oratorical skills.•	Outstanding Delegate: Given to delegates who significantly contributed to debate and left a lasting impact during discussions.•	Best Delegation: Presented to the team whose delegates collectively excel across all committees.•	Best Position Paper: Given to delegates who craft the most well-researched and articulated position papers.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faqs" className="flex justify-center items-start p-6">
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
                    } shrink-0 transition-transform duration-300`}
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
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                  openIndex === index ? "max-h-screen" : "max-h-0"
                }`}
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
