import React from 'react';
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaTimes,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#262626] text-white font-[Arial] px-6 py-10">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-center text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-gray-700">

        {/* Logo and About */}
        <div className="md:w-1/3 px-4 pb-6 md:pb-0 flex flex-col items-center text-center">
          

          <p className="text-sm text-center mr-8 text-gray-300">
            Experience the wild beauty of Wasgamuwa with Wasgamu Safari — where nature, 
            adventure, and wildlife come together for an unforgettable journey.
          </p>

          <Link to="/termspolicy" className="flex flex-row space-x-4 text-sm text-gray-400 mt-20  md:justify-start">
            <div className="hover:text-white transition-colors duration-200 cursor-pointer">
              Terms & Conditions
            </div>
            <div className="hover:text-white transition-colors duration-200 cursor-pointer">
              Privacy Policy
            </div>
          </Link>
        </div>

        {/* Services */}
        <div className="md:w-1/3 px-6 py-6 md:py-0 text-center">
          <h3 className="text-md font-semibold mb-3 ">Quick Access</h3>
          <ul className="grid gap-x-4 gap-y-4 text-sm text-gray-300">
            <Link to="/" className="hover:text-green-600">Home</Link>
            <Link to="/gallery" className="hover:text-green-600">Gallery</Link>
            <Link to="/safari-packages" className="hover:text-green-600">Packages</Link>
            <Link to="/about" className="hover:text-green-600">About</Link>
            <Link to="/contact" className="hover:text-green-600">Contact</Link>
          </ul>
        </div>

        {/* Contact */}
        <div className="md:w-1/3 px-4 pt-6 md:pt-0 flex flex-col items-center text-center">
          <h3 className="text-md text-center font-semibold mb-3">Contact</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            No. 110/1A, Cotta Road<br />
            Colombo 08, Sri Lanka<br /><br />
            +94 76 123 4567<br />
            wasgamusafari@gmail.com
          </p>
          {/* Social Icons */}
                    <div className="flex items-center mt-11 gap-1 sm:gap-3 md:gap-4 text-base sm:text-lg md:text-xl">
                      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className="cursor-pointer hover:text-gray-200" />
                      </a>
                      <a href="https://wa.me/123" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="cursor-pointer hover:text-gray-200" />
                      </a>
                    </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-800 pt-4">
        © 2025 Wasgamu Safari, Developed by Art Avenue. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
