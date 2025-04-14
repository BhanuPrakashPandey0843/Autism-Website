import React from "react";
import arrowIcon from "../../assets/arrow-right-up-line.svg";
import { motion } from "framer-motion";
import {
  RiHandHeartLine,
  RiPulseLine,
  RiRunLine,
  RiFootballLine,
  RiHotelBedLine,
  RiFlashlightLine,
  RiCalendarCheckLine,
  RiArrowRightLine,
} from "react-icons/ri";

const offers = [
  {
    title: "Manual Therapy",
    icon: <RiHandHeartLine className="text-3xl" />,
    description:
      "Relieve pain and restore function with expert manual physiotherapy care tailored to your needs.",
    active: true,
  },
  {
    title: "Chronic Pain",
    icon: <RiPulseLine className="text-3xl" />,
    description:
      "Long-term relief strategies for ongoing discomfort and pain with personalized plans.",
  },
  {
    title: "Hand Therapy",
    icon: <RiRunLine className="text-3xl" />,
    description:
      "Specialized care to restore hand and wrist strength for everyday and athletic use.",
  },
  {
    title: "Sports Therapy",
    icon: <RiFootballLine className="text-3xl" />,
    description:
      "Focused recovery plans for sports injuries to get you back to peak performance.",
  },
  {
    title: "Cupping Therapy",
    icon: <RiHotelBedLine className="text-3xl" />,
    description:
      "Traditional therapy to improve circulation and relieve tension throughout the body.",
  },

];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const handleClick = (section) => {
  console.log(`Clicked on ${section}`);
};

const Ouroffer = () => {
  return (
    <div className="py-20 px-6 md:px-20 bg-white text-black font-[DM Sans]">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#1C1C1E]">
          How Growveil Thrive Hub Helps Autistics
        </h2>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
          Discover personalized therapies crafted to improve everyday life, wellness, and growth for individuals on the spectrum.
        </p>
      </div>

      {/* Offers Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8"
      >
        {[...offers, { cta: true }].map((offer, index) =>
          offer.cta ? (
            <motion.div
              key={"cta"}
              variants={cardVariants}
              className="rounded-2xl backdrop-blur-lg border border-[#928AFD]/30 bg-white/70 p-6 shadow-[0_8px_30px_rgba(146,138,253,0.25)] flex flex-col justify-between hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4 text-[#6A60E6]">
                <RiCalendarCheckLine className="text-4xl" />
                <h4 className="font-bold text-xl text-black leading-snug">
                  Ready to start your journey to recovery?
                </h4>
              </div>
              <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                Schedule a consultation today and let our experts guide your path to a healthier, pain-free life.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleClick("Consult")}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#928AFD] to-[#6A60E6] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-indigo-300 transition-all duration-300"
              >
                Consult Now
                <div className="bg-white p-1.5 rounded-full">
                  <img src={arrowIcon} alt="Arrow" className="w-4 h-4" />
                </div>
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 shadow-md ${
                offer.active
                  ? "bg-gradient-to-br from-[#928AFD] to-[#6A60E6] text-white border-none"
                  : "bg-white text-black border-gray-200"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  offer.active ? "bg-white/20" : "bg-[#928AFD]/10 text-[#6A60E6]"
                }`}
              >
                {offer.icon}
              </div>
              <h4 className="font-bold text-lg mb-2">{offer.title}</h4>
              <p className="text-sm leading-relaxed">
                {offer.description}
              </p>
              <div
                className={`w-9 h-9 flex items-center justify-center mt-5 rounded-full ${
                  offer.active ? "bg-white/20" : "bg-[#928AFD]/10"
                }`}
              >
                <RiArrowRightLine
                  className={`text-lg ${offer.active ? "text-white" : "text-[#6A60E6]"}`}
                />
              </div>
            </motion.div>
          )
        )}
      </motion.div>
    </div>
  );
};

export default Ouroffer;
