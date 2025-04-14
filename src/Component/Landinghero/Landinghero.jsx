import React from "react";
import { motion } from "framer-motion";
import { RiStethoscopeLine, RiUserHeartLine, RiShieldCrossLine } from "react-icons/ri";
import { FaAmbulance } from "react-icons/fa";
import arrowIcon from "../../assets/arrow-right-up-line.svg";

const handleClick = (section) => {
  console.log(`Clicked on ${section}`);
};

const features = [
  {
    title: "Highly Qualified Doctors",
    description:
      "Our team of certified and experienced doctors ensure the best care tailored to your needs.",
    image: "https://img.freepik.com/free-photo/doctor-patient-having-consultation-office_23-2148684357.jpg",
    icon: <RiStethoscopeLine className="text-white text-2xl" />,
  },
  {
    title: "Emergency Care Services",
    description:
      "Round-the-clock emergency services are available for urgent medical attention, saving important time when it matters most.",
    image: "https://img.freepik.com/free-photo/group-doctors-talking-hospital-corridor_23-2148980721.jpg",
    icon: <RiShieldCrossLine className="text-white text-2xl" />,
  },
  {
    title: "Modern Medical Equipment",
    description:
      "We utilize cutting-edge medical technology to provide accurate diagnostics and effective treatments.",
    image: "https://img.freepik.com/free-photo/modern-medical-equipment-hospital-room_23-2148980713.jpg",
    icon: <RiUserHeartLine className="text-white text-2xl" />,
  },
  {
    title: "24/7 Ambulance Services",
    description:
      "Swift and reliable ambulance services, equipped with advanced life support systems for immediate assistance.",
    image: "https://img.freepik.com/free-photo/emergency-room-with-ambulance-night_23-2149204953.jpg",
    icon: <FaAmbulance className="text-white text-2xl" />,
  },
];

const LandingHero = () => {
  return (
    <section className="px-6 md:px-16 py-12 bg-gradient-to-b from-white via-blue-50 to-purple-50">
      {/* Hero */}
      <div className="grid md:grid-cols-2 items-center gap-12 mb-16">
        {/* Left Text Block */}
        <div className="bg-white/30 backdrop-blur-lg p-8 rounded-2xl shadow-md border border-white/30">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Empowering Wellness with Advanced Care
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Connect with top specialists, explore personalized care, and experience a healthier life—all with just a few clicks.
          </p>
          <div className="flex gap-4 mb-4">
            <button className="bg-white border border-gray-300 text-gray-800 px-6 py-2 rounded-full shadow-sm hover:shadow-md transition">
              Explore Services
            </button>
            <button
              onClick={() => handleClick("Consult")}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-5 py-2.5 rounded-full font-semibold shadow-lg hover:scale-105 transition"
            >
              Consult Now
              <div className="bg-white p-1.5 rounded-full">
                <img src={arrowIcon} alt="Arrow" className="w-4 h-4" />
              </div>
            </button>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <img src="https://i.pravatar.cc/40?img=1" className="w-8 h-8 rounded-full border-2 border-white" />
            <img src="https://i.pravatar.cc/40?img=2" className="w-8 h-8 rounded-full border-2 border-white -ml-2" />
            <img src="https://i.pravatar.cc/40?img=3" className="w-8 h-8 rounded-full border-2 border-white -ml-2" />
            <span className="ml-2 text-sm text-gray-600">50K+ Patients Trust Us</span>
          </div>
        </div>

        {/* Right Image Block */}
        <div className="relative overflow-hidden rounded-2xl shadow-xl">
          <img
            src="https://img.freepik.com/free-photo/medium-shot-doctors-wearing-uniform_23-2148980723.jpg"
            alt="Doctor with Family"
            className="object-cover w-full h-[450px]"
          />
          <span className="absolute top-6 left-6 bg-white/80 px-3 py-1 rounded-full text-sm font-medium shadow">Better Health</span>
          <span className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-white/80 px-3 py-1 rounded-full text-sm font-medium shadow">Better Care</span>
          <span className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/80 px-3 py-1 rounded-full text-sm font-medium shadow">Your Health, Our Priority</span>
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-md group"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-transparent bg-opacity-40 p-4 flex flex-col justify-end text-white">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-purple-600 p-2 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold">{feature.title}</h3>
              </div>
              <p className="text-sm leading-snug">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LandingHero;
