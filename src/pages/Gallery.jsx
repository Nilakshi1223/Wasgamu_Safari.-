import React from "react";
import { motion } from "framer-motion";

// Imported images from src/assets
import safariImage1 from "../assets/safari1.webp";
import safariImage2 from "../assets/safari2.webp";
import safariImage3 from "../assets/safari3.webp";
import safariImage4 from "../assets/safari4.webp";
import safariImage5 from "../assets/safari5.webp";
import safariImage6 from "../assets/safari6.webp";
import galleryHeaderImage from "../assets/safari1.webp"; // You can replace with another header image

const Gallery = () => {
  const safariImages = [
    safariImage1,
    safariImage2,
    safariImage3,
    safariImage4,
    safariImage5,
    safariImage6,
  ];

  return (
    <div>
      {/* Header Section with Background Image */}
      <div
        className="h-[400px] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: `url(${galleryHeaderImage})` }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery of our Safari</h1>
          <p className="text-lg md:text-xl font-semibold">
            Escape yourself from the busy world to the world of peace
          </p>
        </div>
      </div>

      {/* Image Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-16 mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#386641]">Wildlife Moments</h2>

        <div className="grid md:grid-cols-3 gap-4">
          {safariImages.map((img, index) => (
            <motion.div
              key={`asset-${index}`}
              className="w-full h-64 overflow-hidden rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={img}
                alt={`Safari ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-50"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
