import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Contact from "./Contact";
import Gallery from "./Gallery";
import SafariPackages from "./SafariPackages";
import About from "./About";
import homebackground from "../assets/homeBg.webp";
import HomeBg from "../assets/HomeBg.mp4";

const Home = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="w-full relative">
      {/* Floating WhatsApp Bar – visible only on md and up */}
      <div
        className="fixed bottom-6 left-6 z-50 backdrop-blur-md bg-white/20 border border-[#a7c957]/60
                   rounded-full shadow-lg shadow-[#6a994e]/40 px-6 py-3 gap-4 cursor-pointer
                   hover:bg-white/40 transition-colors duration-300 hidden md:flex items-center"
        title="Contact Us"
      >
        <FaWhatsapp className="text-[#a7c957] text-2xl" />
        <div className="flex flex-col text-[#a7c957] font-semibold leading-tight">
          <span className="text-lg">+94 77 123 4567</span>
          <span className="text-sm opacity-80">+94 71 765 4321</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background image fallback */}
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat transition-opacity duration-700"
          style={{ backgroundImage: `url(${homebackground})` }}
        ></div>

        {/* Background video */}
        <video
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source src={HomeBg} type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Content */}
        <div className="relative z-20 flex items-center justify-center h-full text-white text-center px-4">
          <div className="bg-black/50 p-8 rounded-xl max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">
              Explore the Wild with Wasgamu Safari
            </h1>
            <p className="text-lg mb-6">
              Unforgettable wildlife tours in Sri Lanka's Wasgamuwa National Park
            </p>
            <a
              href="/safari-packages"
              className="bg-green-500 px-6 py-2 rounded hover:bg-green-600 transition"
            >
              View Packages
            </a>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <section id="gallery" className="py-16">
        <Gallery />
      </section>

      <section id="safari-packages" className="py-16">
        <SafariPackages />
      </section>

      <section id="about" className="py-16">
        <About />
      </section>

      <section id="contact" className="py-16">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
