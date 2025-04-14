import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import arrow from '../../assets/arrow-right-up-line.svg';

const description = () => {
  const destinations = [
    {
      image: "https://thumbs.dreamstime.com/z/autism-early-signs-syndrome-children-vector-illus-illustration-spectrum-disorder-asd-icons-symptoms-child-such-as-adhd-125807450.jpg",
      title: "Lapland, Finland",
      description: "Escape to the snowy landscapes of Lapland for the Northern Lights.",
      linkTo: "/newyork",
    },
    {
      image: "https://th.bing.com/th/id/OIP.7KEoQMMKt9YrSjXkNL3JPgHaFj?w=248&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      title: "Paris, France",
      description: "Lose yourself in Paris, from iconic landmarks to fine art and food.",
      linkTo: "/newyork",
    },
    {
      image: "https://img.freepik.com/premium-photo/ai-generated-high-quality-world-autism-day-images_1158970-68.jpg",
      title: "New York City, USA",
      description: "Experience the excitement and culture of the Big Apple.",
      linkTo: "/newyork",
    },
    {
      image: "https://th.bing.com/th/id/OIP.Zf5_q3sSVkZoaLLRyKy83QHaFj?rs=1&pid=ImgDetMain",
      title: "Tokyo, Japan",
      description: "Modern city life meets ancient traditions in Tokyo.",
      linkTo: "/newyork",
    },
    {
      image: "https://i.pinimg.com/originals/30/b5/bd/30b5bdaadbe89d0771eaa5f0745587ad.jpg",
      title: "Bali, Indonesia",
      description: "Relax on Bali’s beaches and explore vibrant culture.",
      linkTo: "/newyork",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        type: "spring",
      },
    }),
  };

  const renderCard = (destination, index, isBig = false) => (
    <Link to={destination.linkTo} key={index}>
      <motion.div
        className={`relative rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-all duration-300 ${
          isBig ? "h-[600px]" : "h-[280px]"
        }`}
        style={{
          backgroundImage: `url(${destination.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        custom={index}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img
          src={arrow}
          alt="arrow"
          className="w-6 h-6 absolute top-2 right-2 p-1 bg-white rounded-full shadow-md"
        />
        <div className="absolute bottom-0 left-0 w-full text-white py-4 px-4 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
          <h3 className="text-lg font-semibold">{destination.title}</h3>
          <p className="text-sm">{destination.description}</p>
        </div>
      </motion.div>
    </Link>
  );
  
  return (
    <div className="py-16 px-4 md:px-16 bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-black">How Growveil Thrive Hub Helps Autistic's.</h2>
        <p className="text-gray-700 mt-2 text-lg">
          Explore travel tips, hidden gems, and guides to elevate your adventures.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - 2 small cards */}
        <div className="flex flex-col gap-6">
          {renderCard(destinations[0], 0)}
          {renderCard(destinations[1], 1)}
        </div>

        {/* Middle column - 1 large card */}
        <div className="flex flex-col justify-center">
          {renderCard(destinations[2], 2, true)}
        </div>

        {/* Right column - 2 small cards */}
        <div className="flex flex-col gap-6">
          {renderCard(destinations[3], 3)}
          {renderCard(destinations[4], 4)}
        </div>
      </div>
    </div>
  );
};

export default description;

