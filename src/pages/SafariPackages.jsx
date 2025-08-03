import React from "react";
import { motion } from "framer-motion";
import PageBanner from "../components/PageBanner";
import packagesImg from "../assets/safari3.webp";
import bgPattern from "../assets/bgImg.webp";

const SafariPackages = () => {
  const morningPackages = [
    {
      title: "6 Hours Safari (Morning)",
      time: "6.00 am - 12.00 pm",
      note: "Best for Bird watching",
      footnote: "*Soft drink is added",
      image: packagesImg,
    },
    {
      title: "4 Hours Safari (Morning)",
      time: "6.00 am - 10.00 am",
      note: "Best for Bird watching",
      footnote: "*Soft drink is added",
      image: packagesImg,
    },
  ];

  const afternoonPackages = [
    {
      title: "6 Hours Safari (Afternoon)",
      time: "12.00 pm - 6.00 pm",
      note: "Best for elephants watching",
      footnote: "*Soft drink is added",
      image: packagesImg,
    },
    {
      title: "4 Hours Safari (Afternoon)",
      time: "2.00 pm - 6.00 pm",
      note: "Best for elephants watching",
      footnote: "*Soft drink is added",
      image: packagesImg,
    },
  ];

  const fullDayPackage = {
    title: "Full Day - 12 Hours Safari",
    time: "6.00 am - 6.00 pm",
    note:
      "Opportunities to observe a variety of wildlife, including birds, elephants, deer, leopards, and occasionally bears",
    footnote: "*Soft drink and Lunch",
    image: packagesImg,
  };

  const PackageCard = ({ pkg }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="rounded-lg shadow hover:shadow-xl transition overflow-hidden flex flex-col h-full border"
      style={{ borderColor: "#a7c957" }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute bottom-0 left-0 right-0 p-3"
          style={{ backgroundColor: "rgba(56, 102, 65, 0.7)" }}
        >
          <h3 className="text-white text-lg font-semibold">{pkg.title}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow bg-[#f9f9f9]">
        <p className="mb-1 font-medium text-[#6a994e]">{pkg.time}</p>
        <p className="mb-4 text-gray-700 flex-grow">{pkg.note}</p>

        <button
          className="py-2 rounded mb-2 mt-auto transition"
          style={{
            backgroundColor: "#ffc000",
            color: "#386641",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#a7c957";
            e.currentTarget.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#ffc000";
            e.currentTarget.style.color = "#386641";
          }}
        >
          Book Now
        </button>

        <p className="text-xs text-[#6a994e]">{pkg.footnote}</p>
      </div>
    </motion.div>
  );

  return (
    <>
      <PageBanner
        title="Safari Packages"
        subtitle="Choose the perfect adventure for you"
        backgroundImage={packagesImg}
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

        {/* Foreground content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-12">
          {/* Morning Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 auto-rows-fr">
            {morningPackages.map((pkg, idx) => (
              <div key={idx} className="h-full">
                <PackageCard pkg={pkg} />
              </div>
            ))}
          </div>

          {/* Afternoon Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 auto-rows-fr">
            {afternoonPackages.map((pkg, idx) => (
              <div key={idx} className="h-full">
                <PackageCard pkg={pkg} />
              </div>
            ))}
          </div>

          {/* Full Day Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 auto-rows-fr">
            <div className="h-full md:col-span-2 flex justify-center">
              <div className="w-full md:w-1/2 h-full">
                <PackageCard pkg={fullDayPackage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SafariPackages;
