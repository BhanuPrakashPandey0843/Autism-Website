import React, { useState } from "react";
<<<<<<< HEAD
=======
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
>>>>>>> 99e254e416bf780c2049ce05577ad96e3ad854f5
import arrowIcon from "../../assets/arrow-right-up-line.svg";
import Modal from "../Modal/Modal.jsx";
import BookingForm from "../BookingForm/BookingForm.jsx";

const Navbar = () => {
<<<<<<< HEAD
  const [isModalOpen, setModalOpen] = useState(false);
=======
  const [mobileOpen, setMobileOpen] = useState(false);
>>>>>>> 99e254e416bf780c2049ce05577ad96e3ad854f5

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Programs", path: "/programs" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
<<<<<<< HEAD
      <div className="w-full bg-[#F5F8FF] flex justify-center py-4">
        <div className="w-full max-w-7xl bg-white rounded-full shadow-lg px-8 py-3 flex items-center justify-between">
=======
      {/* Main Navbar */}
      <div className="w-full bg-[#F5F8FF] flex justify-center py-4 px-4 md:px-8">
        <div className="w-full max-w-7xl bg-white rounded-full shadow-lg px-6 py-3 flex items-center justify-between">
>>>>>>> 99e254e416bf780c2049ce05577ad96e3ad854f5
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
              alt="MedEase Logo"
              className="w-8 h-8"
            />
            <span className="text-lg font-bold text-[#1F2937] tracking-wide">
              Growveil Thrive Hub
            </span>
          </div>

<<<<<<< HEAD
          {/* Navigation Links */}
          <div className="hidden md:flex gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleClick(item)}
                className={`relative group transition-colors duration-200 ${
                  item === "Home"
                    ? "text-purple-600"
                    : "text-gray-700 hover:text-purple-600"
                }`}
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* ✅ Book Appointment Button with Modal Trigger */}
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Book Appointment
            <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
              <img src={arrowIcon} alt="Arrow Icon" className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>

      {/* ✅ Modal with BookingForm inside */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <BookingForm />
      </Modal>
=======
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative group transition-colors duration-200 text-gray-700 hover:text-purple-600"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link
              to="/book-appointment"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Book Appointment
              <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
                <img src={arrowIcon} alt="Arrow Icon" className="w-3.5 h-3.5" />
              </div>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white z-50 px-6 py-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
                alt="Logo"
                className="w-8 h-8"
              />
              <span className="text-lg font-bold text-[#1F2937]">Growveil Thrive Hub</span>
            </div>
            <button onClick={() => setMobileOpen(false)}>
              <FiX size={28} />
            </button>
          </div>

          <nav className="flex flex-col gap-6 text-lg font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className="text-gray-800 hover:text-purple-600"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/book-appointment"
              onClick={() => setMobileOpen(false)}
              className="mt-4 flex items-center gap-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold px-5 py-3 rounded-full shadow-md transition-all hover:scale-105"
            >
              Book Appointment
              <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
                <img src={arrowIcon} alt="Arrow Icon" className="w-3.5 h-3.5" />
              </div>
            </Link>
          </nav>
        </div>
      )}
>>>>>>> 99e254e416bf780c2049ce05577ad96e3ad854f5
    </>
  );
};

export default Navbar;
