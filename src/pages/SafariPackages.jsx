import React from "react";
import { motion } from "framer-motion";
import PageBanner from "../components/PageBanner";
import packagesImg from "../assets/safari3.webp";
import bgPattern from "../assets/bgImg.webp";
import elephantIcon from "../assets/elephent1.webp"; // 👈 Imported elephant icon

const SafariPackages = () => {
  const packages = [
    {
      title: "Morning Package",
      time: "06.00 AM TO 10.00 A.M",
      note: "SPECIAL BIRDS",
      features: [
        "Private Safari Jeep",
        "Professional Safari Driver",
        "Park Entrance Ticket",
        "Driver & Jeep Entrance Fee",
        "Service fee with VAT",
      ],
      image: packagesImg,
    },
    {
      title: "Evening Package",
      time: "1.00 PM TO 6.00 P.M",
      note: "ELEPHANT ZONE",
      features: [
        "Private Safari Jeep",
        "Experienced Safari Driver",
        "Park Ticket Included",
        "Driver + Jeep Fee",
        "Snacks & VAT Included",
      ],
      image: packagesImg,
    },
    {
      title: "Full Day Package",
      time: "06.00 AM TO 06.00 P.M",
      note: "BIRDS, ELEPHANTS, TIGERS, BEARS",
      features: [
        "Full-Day Jeep Hire",
        "All Park & Driver Fees",
        "Lunch + Soft Drink",
        "Spot Rare Animals",
        "Best Value Deal",
      ],
      image: packagesImg,
    },
  ];

  const PackageCard = ({ pkg }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden border flex flex-col p-4
           max-w-full sm:max-w-[320px] md:max-w-[380px] mx-auto"
    >
      {/* Image with overlaid title */}
      <div className="relative w-full h-64">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute bottom-0 w-full bg-yellow-400 bg-opacity-90 text-center py-2 rounded-b-lg">
          <h3 className="text-[#386641] font-bold text-lg uppercase">
            {pkg.title}
          </h3>
        </div>
      </div>

      {/* Features List */}
      <div className="py-4 text-sm flex-grow">
        <ul className="space-y-1 text-gray-700">
          {pkg.features.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <img
                src={elephantIcon}
                alt="Elephant Icon"
                className="w-6 h-6 mt-1"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Wavy Note Ribbon */}
      <div className="relative w-full bg-[#45433f] text-[#ffc000] text-sm text-center py-2 font-semibold shadow-md shadow-black/20 overflow-hidden mt-4">
        <svg
          className="absolute top-0 left-0 h-full w-8"
          viewBox="0 0 20 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 0 Q10 50 20 100 L0 100 L0 0 Z" fill="#45433f" />
        </svg>
        <div className="relative z-10 mx-8">{pkg.note}</div>
        <svg
          className="absolute top-0 right-0 h-full w-8 rotate-180"
          viewBox="0 0 20 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 0 Q10 50 20 100 L0 100 L0 0 Z" fill="#45433f" />
        </svg>
      </div>

      {/* Time */}
      <div className="text-center text-sm py-1 text-[#386641] font-medium mt-2">
        {pkg.time}
      </div>

      {/* Button */}
      <button
        className="bg-yellow-400 text-[#386641] font-bold py-2 text-sm mt-3 hover:bg-[#a7c957] hover:text-white transition rounded-md"
      >
        BOOK NOW!
      </button>
    </motion.div>
  );

  return (
    <>
      <PageBanner
        title="Safari Packages"
        subtitle="Choose the perfect adventure for you"
        backgroundImage={packagesImg}
      />

      <div className="relative py-16">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${bgPattern})`,
            backgroundRepeat: "repeat",
            backgroundSize: "cover",
          }}
        />

        {/* Foreground content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {packages.map((pkg, idx) => (
              <PackageCard key={idx} pkg={pkg} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SafariPackages;
