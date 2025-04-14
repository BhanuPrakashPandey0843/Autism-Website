import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const testimonials = [
  {
    name: "Vishal Yadav",
    location: "India",
    text: "The autism specialists here are outstanding. They took time to understand our child’s unique needs and provided a personalized care plan that made a real difference.",
    img: "/images/VishalPhoto.jpg",
  },
  {
    name: "Bhanu Pandey",
    location: "New York",
    text: "From the initial consultation to therapy sessions, the experience has been seamless. Our family finally feels supported and informed throughout this journey.",
    img: "/images/BhanuPhoto.jpg",
  },
  {
    name: "Vikas Yadav",
    location: "San Francisco",
    text: "The therapists are knowledgeable and compassionate. They helped my son communicate better and gain confidence in school and social settings. Grateful for this team!",
    img: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    name: "Vishal Boss",
    location: "Boston",
    text: "I cannot express how helpful the online therapy sessions have been. Flexible, friendly, and professional – they truly prioritize the child’s well-being.",
    img: "/images/VishalPhoto.jpg",
  },
  {
    name: "Aayush Mishra",
    location: "Russia",
    text: "As a parent, I was anxious and overwhelmed. But their autism support services provided clarity and care. Every session is a step forward for my daughter.",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Anshika Singh",
    location: "America",
    text: "We’ve tried multiple centers, but this one stood out. Their commitment to autism care, education, and parent guidance is unmatched.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Testimonials = () => {
  const controls = useAnimation();

  const startAnimation = () => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    });
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <div className="bg-white py-16 px-6 md:px-12 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Patients Are Saying</h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Real experiences from Real Patients impacted by autism who found support, care, and progress through our services.
        </p>
      </div>

      <div
        className="overflow-hidden"
        onMouseEnter={() => controls.stop()}
        onMouseLeave={startAnimation}
      >
        <motion.div className="flex space-x-6 w-max" animate={controls}>
          {testimonials.concat(testimonials).map((t, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-xl p-6 w-80 shadow-md flex-shrink-0"
            >
              <p className="text-gray-700 mb-4">"{t.text}"</p>
              <div className="flex items-center mt-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">{t.name}</p>
                  <p className="text-sm text-gray-500">Location: {t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;