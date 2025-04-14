import { motion } from "framer-motion";
import { FaUserMd, FaAmbulance, FaComments } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const heroImages = [
  "/images/autism1.jpg",
  "/images/autism2.jpg",
  "/images/autism3.jpg",
  "/images/autism4.jpg",
  "/images/autism5.jpg"
];

export default function AutismHero() {
  return (
    <div className="bg-[#928AFD] font-[DM Sans] min-h-screen flex flex-col">
      <div className="relative">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
        >
          {heroImages.map((src, index) => (
            <div key={index}>
              <img src={src} alt={`Autism support ${index + 1}`} className="h-[80vh] object-cover w-full" />
            </div>
          ))}
        </Carousel>

        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4"
        >
          <h3 className="uppercase tracking-wide text-sm">Welcome To Autism Care</h3>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-2">Support For Autism & Wellbeing</h1>
          <p className="mt-4 max-w-xl mx-auto">
            Empowering individuals with autism through compassionate care, specialized therapy, and inclusive support.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <button className="bg-white text-[#928AFD] font-semibold px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-transform">
              Explore Services
            </button>
            <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#928AFD] transition">
              Book Appointment
            </button>
          </div>
        </motion.div>
      </div>

      <div className="bg-[#1C1C34] text-white grid grid-cols-1 md:grid-cols-3 gap-4 p-8 mt-auto">
        <motion.div whileHover={{ scale: 1.05 }} className="bg-[#2B2B4E] rounded-lg p-6 text-center">
          <FaUserMd className="text-3xl mx-auto mb-2" />
          <h4 className="font-bold text-lg mb-1">Autism Therapists</h4>
          <p>Our team of licensed therapists specialize in autism spectrum disorder interventions.</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-[#2B2B4E] rounded-lg p-6 text-center">
          <FaAmbulance className="text-3xl mx-auto mb-2" />
          <h4 className="font-bold text-lg mb-1">Emergency Support</h4>
          <p>Quick response autism-specific behavioral support and emergency assistance.</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-[#2B2B4E] rounded-lg p-6 text-center">
          <FaComments className="text-3xl mx-auto mb-2" />
          <h4 className="font-bold text-lg mb-1">Free Consultation</h4>
          <p>Book a free consultation to discuss tailored programs for autism care and support.</p>
        </motion.div>
      </div>
    </div>
  );
}
