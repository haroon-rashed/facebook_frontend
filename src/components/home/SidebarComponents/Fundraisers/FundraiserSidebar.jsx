import React, { useState } from 'react';
import { FaSearch, FaQuestionCircle, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { BsList } from 'react-icons/bs';

export default function FundRaiserSidebar() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    "Who can create fundraiser?",
    "How do charities receive donations?",
    "How do taxes work?",
    "How do fees work?"
  ];

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-sm p-4 border rounded-lg bg-white shadow-sm text-gray-800 space-y-4">
      <h2 className="text-2xl font-bold">Fundraisers</h2>

      <div className="relative">
        <FaSearch className="absolute left-3 top-3 text-gray-500" />
        <input
          type="text"
          placeholder="Search fundraisers"
          className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="bg-gray-100 p-3 rounded-lg flex items-center justify-between cursor-pointer">
        <div className="flex items-center space-x-2">
          <FaQuestionCircle className="text-blue-600" />
          <span className="font-medium">Explore fundraisers</span>
        </div>
        <FaChevronDown className="text-gray-500" />
      </div>

      <div className="bg-gray-100 p-3 rounded-lg flex items-center space-x-2 cursor-pointer">
        <BsList className="text-gray-600" />
        <span className="font-medium">Categories</span>
      </div>

      <hr />

      <div>
        <h3 className="text-lg font-semibold">We're here to help</h3>
        <p className="text-sm text-gray-600 mb-2">
          Answers to common questions about fundraisers
        </p>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-200 px-4 py-2 rounded-md cursor-pointer flex items-center justify-between"
              onClick={() => toggleIndex(index)}
            >
              <span>{faq}</span>
              {openIndex === index ? (
                <FaChevronDown className="w-3 h-3" />
              ) : (
                <FaChevronRight className="w-3 h-3" />
              )}
            </div>
          ))}
        </div>
      </div>

      <p className="text-sm mt-4 text-gray-700">
        Learn more about fundraisers in the{' '}
        <a href="#" className="text-blue-600 underline">
          Help Centre
        </a>.
      </p>
    </div>
  );
}
