import React from "react";
import arrowIcon from "../../assets/arrow-right-up-line.svg";

const Navbar = () => {
  const navItems = [
    "Home",
    "About Us",
    "Services",
    "Doctors",
    "Programs",
    "Contact Us",
  ];

  const handleClick = (section) => {
    console.log(`Clicked on ${section}`);
  };

  return (
    <div className="w-full bg-[#F5F8FF] flex justify-center py-3">
      <div className="w-full max-w-7xl bg-white rounded-full shadow-md px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
            alt="MedEase Logo"
            className="w-6 h-6"
          />
          <span className="text-sm font-semibold text-[#1F2937]">MedEase</span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className={`transition-colors duration-200 ${
                item === "Home" ? "text-purple-600" : "text-gray-800 hover:text-purple-600"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Book Appointment Button */}
        <button
          onClick={() => handleClick("Book Appointment")}
          className="flex items-center bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-medium px-4 py-2 rounded-full transition-transform hover:scale-105 duration-200"
        >
          Book Appointment
          <img src={arrowIcon} alt="Arrow Icon" className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
