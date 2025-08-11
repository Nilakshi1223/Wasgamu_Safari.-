import React, { useState, useEffect, Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

//import homebackground from "../assets/homeBg1.webp";
import homebackground1 from "../assets/homeBg.webp";
import homebackground2 from "../assets/homeBg1.webp";
import homebackground3 from "../assets/homeBg00.webp";

// import reel1 from "../assets/reelImage1.webp";
// import reel2 from "../assets/reelImage2.webp";
// import reel3 from "../assets/reelImage3.webp";
// import reel4 from "../assets/reelImage4.webp";
// import reel5 from "../assets/reelImage5.webp";
// import reel6 from "../assets/reelImage6.webp";
// import reel7 from "../assets/reelImage7.webp";
// import reel8 from "../assets/reelImage8.webp";

import SEO from "../components/SEO";

// Lazy loading
const Contact = lazy(() => import("./Contact"));
const Gallery = lazy(() => import("./Gallery"));
const SafariPackages = lazy(() => import("./SafariPackages"));
const About = lazy(() => import("./About"));

const Home = () => {
  // const reelImages = [
  //   reel1, reel2, reel3, reel4, reel5, reel6, reel7, reel8,
  //   reel1, reel2, reel3, reel4, reel5, reel6, reel7, reel8
  // ];

  const images = [homebackground1, homebackground2, homebackground3];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5000ms = 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  const [isSticky, setIsSticky] = useState(false);

  // Mobile sticky logic
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (!hero || window.innerWidth >= 768) return;

      const heroBottom = hero.getBoundingClientRect().bottom;
      setIsSticky(heroBottom <= 72);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      <SEO
        title="Wasgamu Safari – Best Wildlife Safari Tours in Wasgamuwa National Park, Sri Lanka"
        description="Explore the wild beauty of Wasgamuwa National Park with thrilling jeep safaris, expert guides, and unforgettable wildlife experiences. Book your Sri Lankan safari adventure with Wasgamu Safari today!"
        keywords={`Wasgamu Safari, 
          Polonnaruwa safari, 
          Wasgamuwa hotels, 
          what to do in wasgamuwa,
          wasgamuwa hotels, 
          wasgamuwa national park photos ,
          Wasgamuwa National Park, 
          Jeep Safari Sri Lanka, 
          Wildlife Safari Tours, 
          Safari in Sri Lanka, 
          Sri Lanka Safari Packages, 
          Elephant Safari Sri Lanka, 
          Leopard Safari, 
          Sri Lanka Wildlife Tours, 
          Nature Tours Sri Lanka, 
          Bird Watching Wasgamuwa, 
          Eco Tourism Sri Lanka, 
          Best Safari Sri Lanka, 
          Safari Booking Sri Lanka, 
          Family Safari Sri Lanka, 
          Wildlife Adventure Sri Lanka, 
          Wasgamuwa Safari Jeep Booking,
          wasgamuwa bungalow booking , 
          Wasgamuwa Jeep Tours, 
          National Parks in Sri Lanka, 
          Sri Lanka Jungle Safari`}
      />

      {/* Desktop Vertical Left Reel
      <div className="reel-container left-4 hidden md:block">
        <div className="reel-track">
          {reelImages.map((img, index) => (
            <img
              key={`left-${index}`}
              src={img}
              alt={`Reel Left ${index}`}
              className="reel-image"
            />
          ))}
        </div>
      </div> */}

      {/* Desktop Vertical Right Reel
      <div className="reel-container right-4 hidden md:block">
        <div className="reel-track reverse">
          {reelImages.map((img, index) => (
            <img
              key={`right-${index}`}
              src={img}
              alt={`Reel Right ${index}`}
              className="reel-image"
            />
          ))}
        </div>
      </div> */}

      {/* Hero Section */}
      <section
        id="hero"
      className="relative h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      
        }}
      >
        <div className="absolute inset-0 bg-black/20 z-10"></div>

        {/* Mobile Top Horizontal Reel
        <div className="md:hidden absolute top-16 left-0 right-0 overflow-hidden z-20 bg-black/30">
          <div className="flex animate-scroll-horizontal gap-2 px-4 py-2">
            {reelImages.map((img, index) => (
              <img
                key={`top-${index}`}
                src={img}
                alt={`Top Reel ${index}`}
                className="h-24 rounded-md object-cover border border-white/20"
              />
            ))}
          </div>
        </div> */}

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4 py-20">
          <div className="bg-black/60 p-6 md:p-8 rounded-xl max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Explore the Wild with Wasgamu Safari
            </h1>
            <p className="text-base md:text-lg mb-6">
              Unforgettable wildlife tours in Sri Lanka's Wasgamuwa National Park
            </p>

            <Link
              to="/safari-packages"
              className="bg-green-500 text-white px-5 py-2 rounded-md text-sm md:text-base font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
            >
              View Packages
            </Link>
          </div>
        </div>

        {/* Mobile Bottom Horizontal Reel
        <div className="md:hidden absolute bottom-0 left-0 right-0 overflow-hidden z-20 bg-black/30">
          <div className="flex animate-scroll-horizontal-reverse gap-2 px-4 py-2">
            {reelImages.map((img, index) => (
              <img
                key={`bottom-${index}`}
                src={img}
                alt={`Bottom Reel ${index}`}
                className="h-24 rounded-md object-cover border border-white/20"
              />
            ))}
          </div>
        </div> */}

        {/* Mobile Buttons at bottom of Hero */}
        <div className="md:hidden absolute bottom-5 left-0 right-0 z-30 flex justify-between 
             bg-white/30 backdrop-blur-md py-2"
  style={{ opacity: 10 }}>
          <div
            className="backdrop-blur-md bg-white/20 border border-[#a7c957]/60
                       rounded-full shadow-lg shadow-[#6a994e]/40 px-3 py-1 gap-2 cursor-pointer
                       hover:bg-white/40 transition-colors duration-300 flex items-center"
            title="Chat on WhatsApp"
          >
            <FaWhatsapp className="text-[#ffc000] text-lg" />
            <a
              href="https://wa.me/message/O4GIIGDENVL3M1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#386641] text-white font-bold text-sm md:text-base px-3 py-1 rounded-full hover:bg-[#8fae47] transition"
            >
              +94 77 927 8089
            </a>
          </div>
          <div
            className="backdrop-blur-md bg-white/20 border border-[#a7c957]/60
                       rounded-full shadow-lg shadow-[#6a994e]/40 px-3 py-1 gap-2 cursor-pointer
                       hover:bg-white/40 transition-colors duration-300 flex items-center"
            title="Call Us"
          >
            <a
              href="tel:+94779278089"
              className="bg-[#ffc000] text-white font-bold text-sm md:text-base px-3 py-1 rounded-full hover:bg-[#ffc000] transition"
            >
              +94 71 271 0140
            </a>
            <FiPhone className="text-[#386641] text-lg ml-1" />
          </div>
        </div>
      </section>

      {/* Desktop Floating Buttons */}
      <div
        className="fixed bottom-6 left-6 z-50 hidden md:flex backdrop-blur-md bg-white/20 border border-[#a7c957]/60
                   rounded-full shadow-lg shadow-[#6a994e]/40 px-3 py-1 gap-2 cursor-pointer
                   hover:bg-white/40 transition-colors duration-300 items-center"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-[#ffc000] text-xl md:text-2xl" />
        <a
          href="https://wa.me/message/O4GIIGDENVL3M1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#386641] text-white font-bold text-lg md:text-base px-3 py-1 rounded-full hover:bg-[#8fae47] transition"
        >
          +94 77 927 8089
        </a>
      </div>

      <div
        className="fixed bottom-6 right-6 z-50 hidden md:flex backdrop-blur-md bg-white/20 border border-[#a7c957]/60
                   rounded-full shadow-lg shadow-[#6a994e]/40 px-3 py-1 gap-1 cursor-pointer
                   hover:bg-white/40 transition-colors duration-300 items-center"
        title="Call Us"
      >
        <a
          href="tel:+94779278089"
          className="bg-[#ffc000] text-white font-bold text-lg md:text-base px-3 py-1 rounded-full hover:bg-orange-600 transition"
        >
          +94 71 271 0140
        </a>
        <FiPhone className="text-[#386641] text-xl md:text-2xl ml-1" />
      </div>

      {/* Mobile Buttons */}
      <div
        className={`md:hidden z-40 w-full transition-all duration-300 ${
          isSticky
            ? "fixed top-[4rem] left-0 bg-white/60 backdrop-blur-md shadow-md py-2"
            : "absolute bottom-4 left-0"
        } flex justify-around px-4`}
      >
        {/* WhatsApp */}
        <div
          className="backdrop-blur-md bg-white/20 border border-[#a7c957]/60
                     rounded-full shadow-lg shadow-[#6a994e]/40 px-3 py-1 gap-2 cursor-pointer
                     hover:bg-white/40 transition-colors duration-300 flex items-center"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-[#ffc000] text-lg" />
          <a
            href="https://wa.me/message/O4GIIGDENVL3M1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#386641] text-white font-bold text-sm md:text-base px-3 py-1 rounded-full hover:bg-[#8fae47] transition"
          >
            +94 77 927 8089
          </a>
        </div>

        {/* Phone */}
        <div
          className="backdrop-blur-md bg-white/20 border border-[#a7c957]/60
                     rounded-full shadow-lg shadow-[#6a994e]/40 px-3 py-1 gap-2 cursor-pointer
                     hover:bg-white/40 transition-colors duration-300 flex items-center"
          title="Call Us"
        >
          <a
            href="tel:+94779278089"
            className="bg-[#ffc000] text-white font-bold text-sm md:text-base px-3 py-1 rounded-full hover:bg-[#ffc000] transition"
          >
            +94 71 271 0140
          </a>
          <FiPhone className="text-[#386641] text-lg ml-1" />
        </div>
      </div>

      {/* Other Sections */}
      <Suspense fallback={<div className="text-center py-10 text-lg">Loading Gallery...</div>}>
        <section id="gallery" className="py-16">
          <Gallery />
        </section>
      </Suspense>

      <Suspense fallback={<div className="text-center py-10 text-lg">Loading Packages...</div>}>
        <section id="safari-packages" className="py-16">
          <SafariPackages />
        </section>
      </Suspense>

      <Suspense fallback={<div className="text-center py-10 text-lg">Loading About Section...</div>}>
        <section id="about" className="py-16">
          <About />
        </section>
      </Suspense>

      <Suspense fallback={<div className="text-center py-10 text-lg">Loading Contact Form...</div>}>
        <section id="contact" className="py-16">
          <Contact />
        </section>
      </Suspense>
    </div>
  );
};

export default Home;
