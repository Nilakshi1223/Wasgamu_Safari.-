import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import pageBannerImage from "../assets/PageBanner.webp";
import elephant from "../assets/elephent.webp";
import elephant1 from "../assets/elephent1.webp";

const PageBanner = ({ title, subtitle }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="relative h-[400px] bg-cover bg-center transition-all duration-500"
      style={{ backgroundImage: `url(${pageBannerImage})` }}
    >
      {/* Full Black Overlay */}
      <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-10">
        <div className="relative text-white px-20">
          {/* Left Elephant (mirrored) */}
          <motion.img
            src={elephant1}
            alt="Elephant Left"
            initial={{ x: -200, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute left-[-120px] top-1/2 -translate-y-1/2 h-[140px] hidden md:block"
          />

          {/* Right Elephant */}
          <motion.img
            src={elephant}
            alt="Elephant Right"
            initial={{ x: 200, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="absolute right-[-120px] top-1/2 -translate-y-1/2 h-[140px] hidden md:block"
          />

          {/* Text */}
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              {title}
            </h1>
            <p className="text-lg">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
