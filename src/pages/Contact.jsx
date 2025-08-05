import React from "react";
import { motion } from "framer-motion";
import PageBanner from "../components/PageBanner";
import contactImg from "../assets/safari3.webp";
import bgPattern from "../assets/bgImg.webp";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import logo from "../assets/logo.webp";

const Contact = () => {
  return (
    <div>
      <PageBanner
        title="Get in Touch"
        subtitle="Reach out and start your wild adventure"
        backgroundImage={contactImg}
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

        {/* Animated contact info container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto p-6 mt-12 mb-24 bg-white bg-opacity-10 rounded-lg shadow-md relative z-10 flex flex-col items-center"
        >
          {/* Logo image */}
          <img src={logo} alt="Wasgamu Safari Logo" className="w-32 mb-6" />

          <h2 className="text-3xl font-semibold mb-8 text-green-700 text-center">
            Contact Details
          </h2>
          <ul className="space-y-6 text-gray-800 text-lg w-full max-w-md">
            <li className="flex items-center gap-4">
              <FiPhone className="text-green-600 text-2xl" />
              <span>+94 77 123 4567</span>
            </li>
            <li className="flex items-center gap-4">
              <FiPhone className="text-green-600 text-2xl" />
              <span>+94 71 765 4321</span>
            </li>
            <li className="flex items-center gap-4">
              <FiMail className="text-green-600 text-2xl" />
              <span>contact@wasgamusafari.com</span>
            </li>
            <li className="flex items-center gap-4">
              <FiMapPin className="text-green-600 text-2xl" />
              <span>Wasgamuwa National Park Area, Sri Lanka</span>
            </li>
            <li className="flex items-center gap-4">
              <FaWhatsapp className="text-green-600 text-2xl" />
              <span>+94 77 123 4567 (WhatsApp)</span>
            </li>
            <li className="flex items-center gap-4">
              <FaFacebook className="text-green-600 text-2xl" />
              <a
                href="https://www.facebook.com/wasgamusafari"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-green-700"
              >
                facebook.com/wasgamusafari
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
