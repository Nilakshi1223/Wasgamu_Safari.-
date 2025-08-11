import React from "react";
import { motion } from "framer-motion";
import PageBanner from "../components/PageBanner";
import MorningPackage from "../assets/MorningPackage.webp";
import EveningPackage from "../assets/EveningPackage.webp";
import FullDayPackage from "../assets/FullDayPackage.webp";
import bgPattern from "../assets/bgImg.webp";
import elephantIcon from "../assets/elephent1.webp"; 

import SEO from "../components/SEO";

const SafariPackages = () => {
  const whatsappURL = "https://wa.me/94779278089";

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
      image: MorningPackage,
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
      image: EveningPackage,
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
      image: FullDayPackage,
    },
  ];

  const PackageCard = ({ pkg }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden border flex flex-col p-4 max-w-full sm:max-w-[320px] md:max-w-[380px] mx-auto"
    >
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

      <div className="py-4 text-sm flex-grow">
        <ul className="space-y-1 text-[#386641]">
          {pkg.features.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <img src={elephantIcon} alt="Icon" className="w-6 h-6 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative w-full bg-[#45433f] text-[#ffc000] text-sm text-center py-2 font-semibold shadow-md shadow-[black/20] overflow-hidden mt-4">
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

      <div className="text-center text-sm py-1 text-[#386641] font-medium mt-2">
        {pkg.time}
      </div>

      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3"
      >
        <button className="w-full bg-yellow-400 text-[#386641] font-bold py-2 text-sm hover:bg-[#a7c957] hover:text-white transition rounded-md">
          BOOK NOW!
        </button>
      </a>
    </motion.div>
  );

  const InfoSection = ({ title, description, btnText }) => (
    <section className="relative bg-[#fdfbec] py-16 overflow-hidden mt-12">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${bgPattern})`,
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-[#386641] mb-4"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-700 text-md sm:text-lg max-w-3xl mx-auto"
        >
          {description}
        </motion.p>

        {btnText && (
          <motion.a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            viewport={{ once: true }}
            className="inline-block mt-8"
          >
            <button className="bg-yellow-400 hover:bg-[#a7c957] text-[#386641] hover:text-white font-bold px-6 py-3 rounded-full shadow-md transition">
              {btnText}
            </button>
          </motion.a>
        )}
      </div>
    </section>
  );

  return (
    <>
    <SEO
  title="Safari Packages – Wasgamu Safari"
  description="Choose from a variety of safari packages including full-day, half-day, and customized wildlife tours in Wasgamuwa National Park."
  keywords="Safari Packages,
            wasgamuwa safari jeep price,
            Wasgamuwa Safari Jeep Booking,
            wasgamuwa bungalow booking , 
            Wasgamuwa Jeep Tours, 
            Jeep Safari Deals, 
            Wasgamuwa Tours,
            Wasgamuwa Safari Jeep Booking,
            wasgamuwa bungalow booking "
/>

      <PageBanner
        title="Safari Packages"
        subtitle="Choose the perfect adventure for you"
        backgroundImage={MorningPackage}
      />

      {/* Safari Package Cards */}
      <div className="relative py-16">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${bgPattern})`,
            backgroundRepeat: "repeat",
            backgroundSize: "cover",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {packages.map((pkg, idx) => (
              <PackageCard key={idx} pkg={pkg} />
            ))}
          </div>
        </div>
      </div>

      {/* Bungalow Booking Section */}
      <InfoSection
        title="Stay Inside the Wild!"
        description={
          <>
            Wasgamuwa National Park has 3 beautiful bungalows named{" "}
            <span className="font-semibold text-[#6a994e]">Kadurupitiya</span>,{" "}
            <span className="font-semibold text-[#6a994e]">Mahaweli</span>, and{" "}
            <span className="font-semibold text-[#6a994e]">Wavulambe</span>. If you wish to
            stay overnight surrounded by nature, we can help you book your perfect
            wilderness getaway.
          </>
        }
        btnText="INQUIRE BUNGALOW BOOKING"
      />

      {/* Hotel Room Booking Section */}
      <InfoSection
        title="Hotel Room Booking Outside the Park"
        description="We can book the number of hotel rooms you want outside the national park, ensuring you have comfortable and convenient accommodations near your safari adventure."
        btnText="BOOK HOTEL ROOMS"
      />

      {/* Riveston Safari Section */}
      <InfoSection
        title="Safari for Riveston Journey"
        description="We provide safaris for the Riveston journey — the adventurous route that guests taking the Wasgamuwa journey love. Experience a unique safari with us!"
        btnText="BOOK RIVESTON SAFARI"
      />
    </>
  );
};

export default SafariPackages;
