import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    question: "How do I get started with autism support services?",
    answer:
      "You can begin by booking an initial consultation through our website. Our team will assess your needs and recommend personalized therapy or support options best suited for your child or loved one.",
  },
  {
    question: "What types of therapies do you offer for autism?",
    answer:
      "We offer a range of therapies including ABA therapy, speech and language therapy, occupational therapy, and social skills training, all tailored to individual developmental needs.",
  },
  {
    question: "Do you provide online or in-home sessions?",
    answer:
      "Yes, we offer flexible options including virtual sessions and in-home support to make therapy more accessible and comfortable for families.",
  },
  {
    question: "Is parent involvement encouraged during therapy?",
    answer:
      "Absolutely. We strongly encourage parent participation and provide training and guidance to help you support your child's progress at home.",
  },
  {
    question: "Do you offer support for adolescents and young adults with autism?",
    answer:
      "Yes, we offer support for all age groups including transition planning, vocational training, and life skills development for teens and young adults on the spectrum.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Explore our FAQs to find quick solutions and information about our autism support services, appointments, and more.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-full sm:rounded-xl shadow-sm p-4 sm:p-6 transition-all duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <span className="text-gray-800 font-medium text-lg">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <FiChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <FiChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-4 text-gray-600 text-sm sm:text-base border-l border-gray-300 pl-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;