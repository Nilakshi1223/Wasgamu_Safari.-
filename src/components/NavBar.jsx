import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";

const navLinkClass =
  "relative text-[#386641] font-medium hover:text-[#6a994e] transition duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-6 after:h-[2px] after:bg-[#6a994e] after:transition-all after:duration-300";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileCallOpen, setMobileCallOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-green-700"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Wasgamu Safari
        </Link>

        {/* Desktop Nav Links */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-6">
          <Link
            to="/"
            className={navLinkClass}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Home
          </Link>
          <Link to="/gallery" className={navLinkClass}>
            Gallery
          </Link>
          <Link to="/safari-packages" className={navLinkClass}>
            Packages
          </Link>
          <Link to="/about" className={navLinkClass}>
            About
          </Link>
          <Link to="/contact" className={navLinkClass}>
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-[#386641]"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <div className="flex flex-col space-y-2 bg-white rounded-lg shadow-md p-4">
            <Link
              to="/"
              className={navLinkClass}
              onClick={() => {
                setMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Home
            </Link>
            <Link
              to="/gallery"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/safari-packages"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Packages
            </Link>
            <Link
              to="/about"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
