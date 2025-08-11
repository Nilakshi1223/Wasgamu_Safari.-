import React from "react";
import { motion } from "framer-motion";
import PageBanner from "../components/PageBanner";

// Imported images from src/assets
import bgPattern from "../assets/bgImg.webp";
import safariImage1 from "../assets/safari1.webp";
import safariImage2 from "../assets/safari2.webp";
import safariImage3 from "../assets/safari3.webp";
import safariImage4 from "../assets/safari4.webp";
import safariImage5 from "../assets/safari5.webp";
import safariImage6 from "../assets/safari6.webp";
import safariImage7 from "../assets/safari7.webp";
import safariImage8 from "../assets/safari8.webp";
import safariImage9 from "../assets/safari9.webp";
import safariImage10 from "../assets/safari10.webp";
import safariImage11 from "../assets/safari11.webp";
import safariImage12 from "../assets/safari12.webp";
import packagesImg from "../assets/safari3.webp";

import SEO from "../components/SEO";

const Gallery = () => {
  const safariImages = [
    safariImage1,
    safariImage2,
    safariImage3,
    safariImage4,
    safariImage5,
    safariImage6,
    safariImage7,
    safariImage8,
    safariImage9,
    safariImage10,
    safariImage11,
    safariImage12,
  ];

  return (
    <div>
      <SEO
  title="Gallery – Wasgamu Safari"
  description="Explore breathtaking wildlife and nature photography from Wasgamu Safari tours at Wasgamuwa National Park."
  keywords="Safari Photo Gallery, 
            Wildlife Photos, 
            Wasgamuwa Safari
            wasgamuwa national park photos ,
            Bird Watching Wasgamuwa, 
            elephants Watching Wasgamuwa, 
            bear Watching Wasgamuwa, 
            Elephant Safari Sri Lanka,
            Sri Lanka Jungle Safari,
            Wasgamuwa animals,"
/>

      <PageBanner
        title="Safari Gallery"
        subtitle="Discover the wild through our safari moments."
        backgroundImage={packagesImg}
      />

      {/* Background pattern layer */}
      <div className="relative py-16">
        {/* Background pattern with opacity */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${bgPattern})`,
            backgroundRepeat: "repeat",
            backgroundSize: "cover",
          }}
        />

        {/* Image Grid */}
        <div className="relative max-w-7xl mx-auto px-6 mt-16 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#386641]">
            Wildlife Moments
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
