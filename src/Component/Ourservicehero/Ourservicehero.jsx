import React from "react";
import ServiceHeroBgImage from "/images/ServiceHeroImage.jpg";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTimes,
} from "react-icons/fa";

const Ourservicehero = () => {
  return (
    <div className="relative w-full h-150 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110"
        style={{
          backgroundImage: `url(${ServiceHeroBgImage})`,
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-70 z-0"></div>

      {/* Left Vertical Text */}
      <div className="absolute left-2 top-1/2 -translate-y-1/2 rotate-180 origin-left z-10">
        <p className="text-white text-xs tracking-wider rotate-90 origin-left">
          24/7 EMERGENCY SERVICE
        </p>
      </div>

      {/* Social Icons */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white text-lg">
        <div className="flex flex-col items-center gap-4">
          {[FaInstagram, FaFacebookF, FaTimes, FaYoutube].map((Icon, i) => (
            <a
              href="#"
              key={i}
              className="p-2 rounded-full bg-white bg-opacity-10 backdrop-blur-sm hover:bg-cyan-500 hover:text-white transition-all"
              aria-label="Social link"
            >
              <Icon className="text-cyan-500" />
            </a>
          ))}
        </div>
      </div>

      {/* Call Button */}
      <div className="absolute bottom-6 right-6 z-10">
        <div className="flex items-center bg-cyan-500 text-white rounded-full px-6 py-3 shadow-lg hover:bg-cyan-600 transition-all cursor-pointer">
          <FaPhoneAlt className="mr-2" />
          <span className="font-medium text-lg">+91 73043 26141</span>
        </div>
      </div>

      {/* Centered Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg hover:text-cyan-400 transition-all">
          Services
        </h1>
        <p className="text-sm md:text-base mb-8">
          <span className="text-cyan-400 hover:underline cursor-pointer">Home</span> &gt; Services
        </p>
      </div>
    </div>
  );
};

export default Ourservicehero;
