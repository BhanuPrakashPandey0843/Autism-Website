import React from 'react';
import { Link } from 'react-router-dom';
import arrowIcon from "../../assets/arrow-right-up-line.svg";

const Abouthero = () => {
  return (
    <section className="w-full h-[32rem] bg-gradient-to-br from-purple-100 via-white to-pink-100 flex items-center justify-center px-6">
      <div className="max-w-4xl text-center font-[DM Sans]">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6 leading-tight">
          About Autism
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
          We are dedicated to raising awareness and providing support for individuals with autism. 
          Learn more about the condition, its challenges, and the journey toward a more inclusive world.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            to="/book-appointment"
            className="flex items-center gap-3 bg-gradient-to-r from-[#928AFD] to-[#6A60E6] text-white text-sm md:text-base font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Book Appointment
            <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
              <img src={arrowIcon} alt="Arrow Icon" className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Abouthero;
