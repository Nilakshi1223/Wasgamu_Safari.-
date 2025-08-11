import React from "react";
import { motion } from "framer-motion";
import PageBanner from "../components/PageBanner";
import contactImg from "../assets/safari3.webp";
import bgPattern from "../assets/bgImg.webp";
import { FaWhatsapp, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import logo from "../assets/logo.webp";

import SEO from "../components/SEO";

const Contact = () => {
  return (
    <div>
      <SEO
  title="Contact Us – Wasgamu Safari"
  description="Get in touch with Wasgamu Safari to plan your wildlife adventure. Call, email, or message us today!"
  keywords="Contact Wasgamu Safari, 
            Safari Booking, 
            Wildlife Tour Inquiry,
            Wasgamuwa Safari Jeep Booking,
            wasgamuwa bungalow booking,
            Wasgamuwa entrance fee,
            wasgamuwa safari jeep price"
/>

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

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto p-6 mt-12 mb-24 bg-[#a7c957]/30 rounded-lg shadow-md relative z-10 flex flex-col items-center"
        >
          <img src={logo} alt="Wasgamu Safari Logo" className="w-32 mb-6" />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#386641]">
              Get in Touch with Wasgamu Safari
            </h2>
            <p className="text-lg mb-8 text-[#386641]">
              Have questions or ready to book your adventure? Reach out to us
              anytime — we’re here to help you plan the perfect safari experience.
            </p>
          </motion.div>

          {/* Contact Details */}
          <ul className="space-y-6 text-[#386641] text-lg w-full max-w-md">
            <li className="flex items-center gap-4">
              <a
                href="https://wa.me/message/O4GIIGDENVL3M1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-[#253e17]"
              >
                <FaWhatsapp className="text-[#6a994e] text-2xl" />
                +94 77 927 8089
              </a>
            </li>
            <li className="flex items-center gap-4">
              <FiPhone className="text-[#6a994e] text-2xl" />
              <span>+94 71 271 0140</span>
            </li>
            <li className="flex items-center gap-4">
              <FiMail className="text-[#6a994e] text-2xl" />
              <span>Info@wasgamusafari.com</span>
            </li>
            <li className="flex items-center gap-4">
              <FiMapPin className="text-[#6a994e] text-2xl" />
              <span>Wasgamuwa National Park Area, Sri Lanka</span>
            </li>
            <li className="flex items-center gap-4">
              <FaFacebook className="text-[#6a994e] text-2xl" />
              <a
                href="https://www.facebook.com/wasgamusafari"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#253e17]"
              >
                facebook.com/wasgamusafari
              </a>
            </li>
            <li className="flex items-center gap-4">
              <FaYoutube className="text-[#6a994e] text-2xl" />
              <a
                href="https://www.youtube.com/@wasgamusafari"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#253e17]"
              >
                youtube.com/@wasgamusafari
              </a>
            </li>
            <li className="flex items-center gap-4">
              <FaTiktok className="text-[#6a994e] text-2xl" />
              <a
                href="https://www.tiktok.com/@wasgamusafari.com?_t=ZS-8yfrYZ4J4JL&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#253e17]"
              >
                tiktok.com/@wasgamusafari
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
