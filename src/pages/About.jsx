import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PageBanner from "../components/PageBanner";
import aboutImg from "../assets/safari2.webp";
import bgPattern from "../assets/bgImg.webp";
import {
  FaUsers,
  FaClock,
  FaMapMarkedAlt,
  FaBinoculars,
  FaLeaf,
  FaSmile,
} from "react-icons/fa";
import CountUp from "react-countup";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  const chooseRef = useRef(null);
  const chooseInView = useInView(chooseRef, { once: true, margin: "-100px" });

  const mapRef = useRef(null);
  const mapInView = useInView(mapRef, { once: true, margin: "-100px" });

  return (
    <>
      <PageBanner
        title="About Wasgamu Safari"
        subtitle="Discover our journey through the wilderness"
        backgroundImage={aboutImg}
      />

      <div className="relative py-12 sm:py-16">
        {/* Background pattern */}
        <div
          className="absolute inset-0 -z-1 opacity-10 bg-repeat bg-cover"
          style={{ backgroundImage: `url(${bgPattern})` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 mb-12 sm:mb-20">
          {/* Stats Cards */}
          <motion.div
            ref={statsRef}
            className="mb-10 sm:mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center"
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
          >
            <StatCard
              icon={<FaUsers className="text-green-700 text-3xl sm:text-4xl" />}
              end={500}
              suffix="+"
              label="Happy Customers"
              variants={fadeUpVariant}
            />
            <StatCard
              icon={<FaClock className="text-green-700 text-3xl sm:text-4xl" />}
              end={15}
              suffix="+"
              label="Years of Experience"
              variants={fadeUpVariant}
            />
            <StatCard
              icon={<FaMapMarkedAlt className="text-green-700 text-3xl sm:text-4xl" />}
              end={100}
              suffix="%"
              label="Local Expertise"
              variants={fadeUpVariant}
            />
          </motion.div>

          {/* About Text */}
          <motion.div
            className="text-gray-800 text-base sm:text-lg leading-relaxed text-justify font-sans max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p>
              Nestled in the heart of Sri Lanka’s Matale and Polonnaruwa districts,
              <b> Wasgamuwa National Park</b> is a hidden gem for nature lovers and
              wildlife enthusiasts. Spanning over 36,000 hectares, this lush sanctuary
              offers breathtaking landscapes—from dense forests and open grasslands to
              serene rivers and ancient ruins. It’s especially famed for its thriving
              elephant population, often seen in majestic herds, along with sloth bears,
              leopards, and over 140 bird species including the vibrant Sri Lankan junglefowl
              and painted stork. Beyond its natural wonders, Wasgamuwa also preserves fragments
              of Sri Lanka’s rich history. Whether you're seeking a thrilling safari, peaceful
              birdwatching, or a glimpse into the island’s cultural past, Wasgamuwa promises
              an unforgettable experience.
            </p>
          </motion.div>

          {/* Why Choose Us Section */}
          <motion.div
            ref={chooseRef}
            className="mt-16 sm:mt-20"
            initial="hidden"
            animate={chooseInView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.25,
                },
              },
            }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-center text-green-800 mb-8">
              Why You Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <ChooseCard
                icon={<FaBinoculars className="text-3xl sm:text-4xl text-green-700" />}
                title="Expert Safari Guides"
                text="Our guides are passionate and knowledgeable, offering the best wildlife spotting experiences."
                variants={fadeUpVariant}
              />
              <ChooseCard
                icon={<FaLeaf className="text-3xl sm:text-4xl text-green-700" />}
                title="Eco-Friendly Tours"
                text="We prioritize sustainability and protect the park’s natural ecosystem during every safari."
                variants={fadeUpVariant}
              />
              <ChooseCard
                icon={<FaSmile className="text-3xl sm:text-4xl text-green-700" />}
                title="Customer Satisfaction"
                text="We go the extra mile to ensure each guest has a memorable and safe adventure with us."
                variants={fadeUpVariant}
              />
            </div>
          </motion.div>

          {/* Map Section */}
          <motion.div
            ref={mapRef}
            className="mt-16 sm:mt-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-center text-green-800 mb-6">
              Find Us in Wasgamuwa
            </h2>
            <div className="w-full h-[280px] sm:h-[320px] rounded-xl overflow-hidden shadow-md">
              <iframe
                title="Wasgamuwa Safari Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63326.38804812131!2d80.8281981!3d7.6536021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae4dd63cf94e6db%3A0x2f2a6e70d91c5e90!2sWasgamuwa%20National%20Park!5e0!3m2!1sen!2slk!4v1691406467845!5m2!1sen!2slk"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

const StatCard = ({ icon, end, suffix, label, variants }) => (
  <motion.div
    variants={variants}
    className="group relative bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl transition-all border border-transparent hover:border-green-300"
  >
    <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full bg-green-100 group-hover:bg-green-200 transition">
      {icon}
    </div>
    <h3 className="text-2xl sm:text-3xl font-semibold text-green-800">
      <CountUp end={end} duration={2} />{suffix}
    </h3>
    <p className="text-gray-600 mt-1 font-medium text-sm sm:text-base">{label}</p>
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-1 bg-green-300 rounded-full opacity-0 group-hover:opacity-100 transition duration-300" />
  </motion.div>
);

const ChooseCard = ({ icon, title, text, variants }) => (
  <motion.div
    variants={variants}
    className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center border border-gray-200 hover:border-green-300"
  >
    <div className="mb-3 sm:mb-4 flex justify-center">{icon}</div>
    <h3 className="text-lg sm:text-xl font-semibold text-green-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm sm:text-base">{text}</p>
  </motion.div>
);

export default About;
