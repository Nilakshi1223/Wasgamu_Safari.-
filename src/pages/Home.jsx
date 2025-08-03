import React from "react";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";  // Added WhatsApp icon
import Contact from "./Contact";
import Gallery from "./Gallery";
import SafariPackages from "./SafariPackages";
import About from "./About";

const Home = () => {
  return (
    <div className="w-full relative">
      
      {/* Floating Horizontal Glassy Phone & WhatsApp Bar (Bottom Left) */}
      <div
        className="fixed bottom-6 left-6 z-50 backdrop-blur-md bg-white/20 border border-[#a7c957]/60
                   rounded-full shadow-lg shadow-[#6a994e]/40 px-6 py-3 flex items-center gap-4 cursor-pointer
                   hover:bg-white/40 transition-colors duration-300"
        title="Contact Us"
      >
        
        <FaWhatsapp className="text-[#a7c957] text-2xl" />
        <div className="flex flex-col text-[#a7c957] font-semibold leading-tight">
          <span className="text-lg">+94 77 123 4567</span>
          <span className="text-sm opacity-80">+94 71 765 4321</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-[url('../assets/safari1.webp')] bg-cover bg-center h-screen flex items-center justify-center text-white">
        <div className="bg-black/50 p-8 rounded-xl text-center max-w-2xl">
          <h1 className="text-5xl font-bold mb-4">Explore the Wild with Wasgamu Safari</h1>
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
      </section>

      {/* Other Sections */}
      <section id="gallery" className="py-16">
        <Gallery />
      </section>

      <section id="safari-packages" className="py-16 ">
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
