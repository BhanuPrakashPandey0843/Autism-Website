import React from "react";
import { motion } from "framer-motion";
import './Uppernav.css';
import whatsappicon from "../../assets/whatsapp-line.svg";
import facebookicon from "../../assets/facebook-line.svg";
import linkedinicon from "../../assets/linkedin-line.svg";

const Uppernav = () => {
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 12, delay: 0.2 }}
      className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs sm:text-sm py-2 z-[1000]"
    >
      <div
        className="max-w-7xl mx-auto flex items-center justify-between gap-6 px-4 tracking-wide font-medium"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* Left Side: Working Hours and Email */}
        <div className="flex items-center gap-6 flex-wrap sm:flex-nowrap w-full sm:w-auto">
          <motion.div
            className="flex items-center gap-1 shrink-0"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 12, delay: 0.3 }}
          >
            <span className="opacity-90">Working Hour:</span>
            <span>08:00 PM - 09:00 PM</span>
          </motion.div>

          <motion.div
            className="flex items-center gap-1 shrink-0"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 12, delay: 0.4 }}
          >
            <span className="opacity-90">Email:</span>
            <a
              href="mailto:bhanuandey0843@gmail.com"
              className="hover:underline transition duration-200"
            >
              bhanuandey0843@gmail.com
            </a>
          </motion.div>
        </div>

        {/* Right Side: Social Icons and Contact */}
        <div className="flex items-center gap-6 flex-wrap sm:flex-nowrap justify-end w-full sm:w-auto">
          <motion.div
            className="flex items-center gap-3 shrink-0"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 12, delay: 0.5 }}
          >
            <a
              href="https://wa.me/917061738562"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              title="WhatsApp"
            >
              <img src={whatsappicon} alt="WhatsApp" className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://www.facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              title="Facebook"
            >
              <img src={facebookicon} alt="Facebook" className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              title="LinkedIn"
            >
              <img src={linkedinicon} alt="LinkedIn" className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </motion.div>

          <motion.div
            className="flex items-center gap-1 shrink-0"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 12, delay: 0.6 }}
          >
            <span className="opacity-90">Contact:</span>
            <a
              href="tel:+917061738562"
              className="hover:underline transition duration-200"
            >
              +91 7061738562
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Uppernav;
