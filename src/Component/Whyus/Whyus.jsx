import { motion } from 'framer-motion';
import { FaUserMd, FaHeartbeat, FaRegQuestionCircle, FaAward } from 'react-icons/fa';
import preparing from "../../../public/images/AboutusImageWorkingpeople.jpg";

const features = [
  {
    title: 'More Experience',
    desc: 'We offer a wide range of health services to meet all your needs.',
    icon: <FaAward className="text-[#00C9E0] w-5 h-5" />,
  },
  {
    title: 'Seamless care',
    desc: 'We offer a wide range of health services to meet all your needs.',
    icon: <FaHeartbeat className="text-[#00C9E0] w-5 h-5" />,
  },
  {
    title: 'The right answers?',
    desc: 'We offer a wide range of health services to meet all your needs.',
    icon: <FaRegQuestionCircle className="text-[#00C9E0] w-5 h-5" />,
  },
  {
    title: 'Unparalleled expertise',
    desc: 'We offer a wide range of health services to meet all your needs.',
    icon: <FaUserMd className="text-[#00C9E0] w-5 h-5" />,
  },
];

export default function Whyus() {
  return (
    <section className="bg-[#0A1647] text-white py-20 px-4 md:px-10 font-['DM Sans']">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Left Side */}
        <div className="relative w-full">
          <img
            src={preparing}
            alt="Doctor with family"
            className="rounded-2xl shadow-2xl w-full h-auto object-cover"
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="absolute bottom-[-28px] left-8 bg-[#00C9E0] text-white rounded-2xl px-6 py-4 shadow-xl"
          >
            <div className="text-3xl font-bold">20+</div>
            <div className="text-sm uppercase tracking-wide">Years Experienced</div>
          </motion.div>
        </div>

        {/* Right Side */}
        <div>
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-10 leading-snug"
          >
            Why Choose Us For Your{' '}
            <span className="text-[#00C9E0]">Health Care</span> Needs
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-5"
              >
                <div className="flex items-center gap-3 mb-2">
                  {item.icon}
                  <h3 className="text-base font-semibold">{item.title}</h3>
                </div>
                <p className="text-sm text-white/80 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
