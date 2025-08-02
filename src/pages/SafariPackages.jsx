import React from "react";
import PageBanner from "../components/PageBanner";
import packagesImg from "../assets/safari3.webp";

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
    <div
      className="rounded-lg shadow hover:shadow-xl transition overflow-hidden flex flex-col border h-full"
      style={{ borderColor: "#a7c957" }}
    >
      {/* Image with title overlay */}
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute bottom-0 left-0 right-0 p-3"
          style={{ backgroundColor: "rgba(56, 102, 65, 0.7)" }} // #386641 transparent
        >
          <h3 className="text-white text-lg font-semibold">{pkg.title}</h3>
        </div>
      </div>

      {/* Details below image */}
      <div
        className="p-6 flex flex-col flex-grow"
        style={{ backgroundColor: "#f9f9f9" }}
      >
        <p className="mb-1 font-medium" style={{ color: "#6a994e" }}>
          {pkg.time}
        </p>
        <p className="mb-4 text-gray-700 flex-grow">{pkg.note}</p>

        <button
          className="py-2 rounded mb-2 transition mt-auto"
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

        <p className="text-xs" style={{ color: "#6a994e" }}>
          {pkg.footnote}
        </p>
      </div>
    </div>
  );

  return (
    <>
      <PageBanner
        title="Safari Packages"
        subtitle="Choose the perfect adventure for you"
        backgroundImage={packagesImg}
      />
      <div className="max-w-6xl mx-auto px-6 mt-12 mb-24 space-y-12">
        {/* Morning Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
          {morningPackages.map((pkg, idx) => (
            <PackageCard key={idx} pkg={pkg} />
          ))}
        </div>

        {/* Afternoon Row */}
        <div className=" flex grid-cols-1 md:grid-cols-1 gap-6 auto-rows-fr">
          {afternoonPackages.map((pkg, idx) => (
            <PackageCard key={idx} pkg={pkg} />
          ))}
        </div>

        {/* Full Day Row - centered single card */}
        <div className="flex justify-center">
          <div className="w-full max-w-md h-full">
            <PackageCard pkg={fullDayPackage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SafariPackages;
