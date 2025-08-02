import React, { useState, useEffect } from "react";

import safariImage1 from "../assets/safari1.webp";
import safariImage2 from "../assets/safari2.webp";
import safariImage3 from "../assets/safari3.webp";
import safariImage4 from "../assets/safari4.webp";
import safariImage5 from "../assets/safari5.webp";
import safariImage6 from "../assets/safari6.webp";

const defaultImages = [
  safariImage1,
  safariImage2,
  safariImage3,
  safariImage4,
  safariImage5,
  safariImage6,
];

const PageBanner = ({ title, subtitle, images = defaultImages, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  const currentImage = images[currentIndex];

  return (
    <div
      className="h-[400px] bg-cover bg-center flex items-center justify-center transition-all duration-500"
      style={{ backgroundImage: `url(${currentImage})` }}
    >
      <div className="bg-[#386641]/70 border-4 border-[#6a994e] p-8 rounded-xl text-center text-white max-w-2xl shadow-xl">
        <h1 className="text-4xl font-bold mb-2 text-[#ffc000] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          {title}
        </h1>
        <p className="text-lg text-[#a7c957]">{subtitle}</p>
      </div>
    </div>
  );
};

export default PageBanner;
