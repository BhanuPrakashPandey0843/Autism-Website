import React from "react";
import { Link } from 'react-router-dom';
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTimes,
} from "react-icons/fa";

const Ourservicehero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/your-path/f90a789e-3726-4a7d-a99c-b53ffaa210e0.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-80 z-0"></div>

      {/* Left Vertical Text */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 rotate-180 origin-left z-10">
        <p className="text-white text-xs tracking-wider rotate-90 origin-left">
          24/7 EMERGENCY SERVICE
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white text-lg">
        <div className="flex flex-col items-center gap-4">
          <a
            href="#"
            className="p-2 rounded-full bg-white bg-opacity-10 backdrop-blur-sm hover:bg-cyan-500 hover:text-white transition-all">
            <FaInstagram className="text-cyan-500"/>
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-white bg-opacity-10 backdrop-blur-sm hover:bg-cyan-500 hover:text-white transition-all">
            <FaFacebookF className="text-cyan-500"/>
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-white bg-opacity-10 backdrop-blur-sm hover:bg-cyan-500 hover:text-white transition-all">
            <FaTimes className="text-cyan-500"/>
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-white bg-opacity-10 backdrop-blur-sm hover:bg-cyan-500 hover:text-white transition-all">
            <FaYoutube className="text-cyan-500"/>
          </a>
        </div>
      </div>

      {/* Call Button */}
      <div className="absolute bottom-6 right-6 z-10">
        <div className="flex items-center bg-cyan-500 text-white rounded-full px-6 py-3 shadow-lg hover:bg-cyan-600 transition-all cursor-pointer">
          <FaPhoneAlt className="mr-2" />
          <span className="font-medium text-lg">+91 73043 26141</span>
        </div>
      </div>

      {/* Centered Overlay Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg hover:text-cyan-400 transition-all">
          Services
        </h1>
        <p className="text-sm mb-8">
          <span className="text-cyan-400 hover:underline cursor-pointer">
            Home
          </span>{" "}
          &nbsp;&gt;&nbsp; Services
        </p>

        <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl max-w-3xl shadow-xl">
          <h2 className="text-3xl font-bold text-cyan-400 mb-3">
            Understanding Autism
          </h2>
          <p className="text-black text-lg leading-relaxed">
            Autism Spectrum Disorder (ASD) is a lifelong neurodevelopmental condition
            that influences how individuals perceive the world, communicate, and engage
            with others. Each person on the autism spectrum is unique, with their own
            strengths, challenges, and ways of expressing themselves. Creating awareness,
            providing early support, and fostering inclusivity can make a meaningful
            difference in their lives.
          </p>
          <Link
            to={"/about"}
            className="inline-block mt-6 px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full transition-all shadow-md"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ourservicehero;
