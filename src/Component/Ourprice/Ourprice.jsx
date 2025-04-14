import React from "react";
import { RiStethoscopeLine } from "react-icons/ri";
import { motion } from "framer-motion";

const packages = [
  {
    title: "Full Body Check-Up",
    description:
      "A thorough check-up to monitor all vital organs and detect potential issues early.",
    price: "$430.00",
    points: [
      "Covers 10+ organ systems.",
      "Detects potential issues before symptoms .",
      "Includes essential tests for heart, liver, and more."
    ],
    image: "https://img.freepik.com/premium-vector/autism-treatment-abstract-concept-vector-illustration_107173-34164.jpg?w=2000",
  },
  {
    title: "Diabetes Health Check-Up",
    description:
      "A focused package for early detection and prevention of diabetes-related complications.",
    price: "$364.00",
    points: [
      "15+ tests for diabetes.",
      "Tracks blood sugar and insulin levels.",
      "Detects early diabetic complications."
    ],
    image: "https://img.freepik.com/premium-vector/autism-treatment-abstract-concept-vector-illustration_107173-20827.jpg?w=2000",
  },
  {
    title: "Heart Health Check-Up",
    description:
      "Essential tests to assess heart function and detect cardiovascular risks.",
    price: "$350.00",
    points: [
      "18 tests for heart health.",
      "Monitors cardiac function and cholesterol.",
      "Detects early cardiovascular risks."
    ],
    image: "https://img.freepik.com/premium-vector/autism-spectrum-disorders-treatment-abstract-concept-vector-illustration_107173-40750.jpg",
  },
];

const Ourprice = () => {
  return (
    <div className="bg-gradient-to-br from-[#f9f9ff] via-[#f4f4ff] to-white py-20 px-4 md:px-16 font-[DM Sans]">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Tailor Your Health Check-Up
        </h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Choose from our tailored packages to monitor your health, prevent risks, and stay on top of your wellness.
        </p>
        <div className="flex flex-wrap justify-center mt-6 gap-3">
          {[
            "All Tests",
            "Diabetes",
            "Heart Health",
            "Cancer Screening",
            "Full body check up",
            "Nutritional & Vitamin",
            "Skin Health",
          ].map((label, idx) => (
            <button
              key={idx}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                idx === 0
                  ? "bg-gradient-to-r from-[#6A60E6] to-[#4a3fc3] text-white shadow-lg"
                  : "bg-white border border-gray-200 text-gray-700 hover:bg-[#6A60E6]/10 hover:text-[#6A60E6]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {packages.map((item, index) => (
          <motion.div
            whileHover={{ y: -8, boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.3 }}
            key={index}
            className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover rounded-t-2xl"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {item.description}
              </p>
              <ul className="text-sm text-gray-700 space-y-2 mb-4">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <RiStethoscopeLine className="text-[#6A60E6] text-base mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between mt-4">
                <div className="text-left">
                  <span className="text-sm text-gray-500">Price</span>
                  <div className="text-xl font-bold text-gray-900">{item.price}</div>
                </div>
                <button className="bg-gradient-to-r from-[#6A60E6] to-[#4a3fc3] hover:from-[#5548e0] hover:to-[#3a32b9] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md transition-all duration-300">
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Ourprice;
