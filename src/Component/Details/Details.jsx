import { motion } from "framer-motion"; import { FaArrowRight } from "react-icons/fa";

export default function Details() { return ( <div className="bg-gradient-to-br from-blue-50 to-white p-6 md:p-16 min-h-screen font-sans"> <div className="text-center max-w-3xl mx-auto"> <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-2"> Leading Comprehensive Healthcare <br className="hidden md:block" /> with Compassion </h1> <p className="text-gray-600 text-lg md:text-xl"> Our mission is to provide exceptional medical care, focusing on personalized treatment and the well-being of every patient. </p> </div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
      className="rounded-xl overflow-hidden shadow-lg">
      <img src="https://th.bing.com/th/id/R.18735a291346aa7ef27532955596dbcb?rik=EcTZ7NsvaWctZA&riu=http%3a%2f%2fimages.agoramedia.com%2feverydayhealth%2fgcms%2fAUTISM-GUIDE-Treatment-722x406.jpg&ehk=eel%2bcidBy0BFUmnZbboyd7%2fAtSJwslx7IYoFTfEtNMw%3d&risl=&pid=ImgRaw&r=0" alt="Doctors" className="w-full h-56 object-cover" />
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, delay: 0.2 }}
      className="rounded-xl bg-blue-100 p-6 shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800">200+</h2>
      <p className="text-xl font-semibold text-gray-700 mt-2">Qualified Doctors and Nurses</p>
      <p className="text-gray-600 mt-2 text-sm">
        A highly skilled team of experienced professionals, fully committed to your health and well-being, delivering compassionate, personalized care with a focus on innovative treatments, advanced medical practices.
      </p>
      <button className="mt-4 flex items-center gap-2 text-white bg-black px-4 py-2 rounded-full">
        Meet Our Team <FaArrowRight />
      </button>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, delay: 0.4 }}
      className="rounded-xl overflow-hidden shadow-lg">
      <img src="https://post.healthline.com/wp-content/uploads/2020/08/Young-Boy-having-a-Check-Up-732x549-thumbnail.jpg" alt="Scan discussion" className="w-full h-56 object-cover" />
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, delay: 0.6 }}
      className="rounded-xl bg-purple-100 p-6 shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800">13+</h2>
      <p className="text-xl font-semibold text-gray-700 mt-2">Centers Across the Region</p>
      <p className="text-gray-600 mt-2 text-sm">
        Providing seamless access to high-quality healthcare services across multiple convenient locations, ensuring every individual receives exceptional care tailored to their well-being.
      </p>
      <button className="mt-4 flex items-center gap-2 text-white bg-black px-4 py-2 rounded-full">
        View All Locations <FaArrowRight />
      </button>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, delay: 0.8 }}
      className="rounded-xl overflow-hidden shadow-lg">
      <img src="https://tacanow.org/wp-content/uploads/2021/02/finding-a-doctor_photo_1.jpg" alt="Medical team" className="w-full h-56 object-cover" />
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, delay: 1 }}
      className="rounded-xl bg-yellow-100 p-6 shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800">15+</h2>
      <p className="text-xl font-semibold text-gray-700 mt-2">Healthcare Excellence Awards</p>
      <p className="text-gray-600 mt-2 text-sm">
        A dedicated team of experienced professionals, committed to delivering exceptional care and support for your health and well-being, ensuring personalized attention every step of the way.
      </p>
      <button className="mt-4 flex items-center gap-2 text-white bg-black px-4 py-2 rounded-full">
        Our Achievements <FaArrowRight />
      </button>
    </motion.div>
  </div>
</div>

); }