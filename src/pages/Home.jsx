import React from "react";
import Contact from "./Contact";
import Gallery from "./Gallery";
import SafariPackages from "./SafariPackages";
import About from "./About";

const Home = () => {
  return (
    <div className="w-full">
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
