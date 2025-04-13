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
    <div className="w-full bg-[#F5F8FF] flex justify-center py-4">
      <div className="w-full max-w-7xl bg-white rounded-full shadow-lg px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
            alt="MedEase Logo"
            className="w-8 h-8"
          />
          <span className="text-lg font-bold text-[#1F2937] tracking-wide">Growveil Thrive Hub</span>
        </div>

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

        {/* Book Appointment Button */}
        <button
  onClick={() => handleClick("Book Appointment")}
  className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
>
  Book Appointment
  <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
    <img src={arrowIcon} alt="Arrow Icon" className="w-3.5 h-3.5" />
  </div>
</button>

      </div>
    </div>
  );
};

export default Navbar;
