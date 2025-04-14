import { FaComments, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import arrowIcon from "../../assets/arrow-right-up-line.svg";
import { useNavigate } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ContactHero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Book Appointment button clicked");
    navigate("/book-appointment");
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-6 py-16"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight mb-6"
        variants={fadeInUp}
      >
        Revolutionizing the Treatment
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 px-6 py-2 rounded-xl text-[2.8rem] md:text-[3.2rem] font-extrabold inline-block mt-4 shadow-lg drop-shadow-md hover:drop-shadow-xl transition duration-300 ease-in-out">
  Growveil Thrive Hub
</span>

      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8"
        variants={fadeInUp}
      >
        Autism is an adventure, not a limitation.
      </motion.p>

      {/* CTA Button */}
      <motion.button
        onClick={handleClick}
        className="mt-4 flex items-center gap-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-base md:text-lg font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        variants={fadeInUp}
        aria-label="Book an Appointment"
      >
        Book Appointment
        <div className="w-7 h-7 flex items-center justify-center bg-white rounded-full">
          <img src={arrowIcon} alt="Arrow Icon" className="w-4 h-4" />
        </div>
      </motion.button>

      {/* Contact Cards */}
      <motion.div
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl px-4"
        variants={fadeInUp}
      >
        {/* Chat Now */}
        <motion.a
          href="https://api.whatsapp.com/send?phone=+917061738562"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition transform hover:scale-105 text-center"
          whileHover={{ scale: 1.05 }}
          aria-label="Chat on WhatsApp"
        >
          <div className="w-16 h-16 mx-auto flex items-center justify-center bg-green-100 rounded-full">
            <FaComments className="text-green-600 text-3xl" />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-800">Chat Now</h3>
          <p className="text-gray-600">Reach us via WhatsApp</p>
          <button className="mt-4 px-5 py-2 bg-green-500 text-white rounded-full text-sm font-medium hover:bg-green-600 transition">
            Start Chat →
          </button>
        </motion.a>

        {/* Email Us */}
        <motion.a
          href="mailto:growveilthrivehub@gmail.com"
          className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition transform hover:scale-105 text-center"
          whileHover={{ scale: 1.05 }}
          aria-label="Send us an email"
        >
          <div className="w-16 h-16 mx-auto flex items-center justify-center bg-purple-100 rounded-full">
            <FaEnvelope className="text-purple-600 text-3xl" />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-800">Email Us</h3>
          <p className="text-gray-600">Click to send an email</p>
          <p className="mt-2 text-gray-900 font-semibold text-sm">
            growveilthrivehub@gmail.com
          </p>
        </motion.a>

        {/* Call Us */}
        <motion.a
          href="tel:+917061738562"
          className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition transform hover:scale-105 text-center"
          whileHover={{ scale: 1.05 }}
          aria-label="Call us at +91 7061738562"
        >
          <div className="w-16 h-16 mx-auto flex items-center justify-center bg-red-100 rounded-full">
            <FaPhone className="text-red-600 text-3xl" />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-800">Call or Text</h3>
          <p className="text-gray-600">We’re just one call away</p>
          <p className="mt-2 text-gray-900 font-semibold text-sm">
            +91 7061738562
          </p>
        </motion.a>
      </motion.div>

      {/* Footer Note */}
      <motion.p
        className="mt-10 text-sm text-gray-500"
        variants={fadeInUp}
      >
        Our team is available from 8am to 6pm on weekdays. We’ll get back to you as soon as possible!
      </motion.p>
    </motion.div>
  );
};

export default ContactHero;
