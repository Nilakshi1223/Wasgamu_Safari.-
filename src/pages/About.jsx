import React from "react";
import PageBanner from "../components/PageBanner";
import aboutImg from "../assets/safari2.webp";
import bgPattern from "../assets/bgImg.webp";

const About = () => {
  return (
    <>
      <PageBanner
        title="About Wasgamu Safari"
        subtitle="Discover our journey through the wilderness"
        backgroundImage={aboutImg}
      />

      {/* Background pattern layer */}
      <div
        className="absolute inset-0 opacity-10 -z-10"
        style={{
          backgroundImage: `url(${bgPattern})`,
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
        }}
      />

      {/* About Content */}
      <div className="max-w-3xl mx-auto px-6 mt-12 mb-20">
        <p className="text-lg text-gray-700 leading-relaxed">
          Wasgamu Safari is a family-owned wildlife experience provider based in Sri Lanka. With over
          10 years of guiding tourists through the rich biodiversity of Wasgamuwa National Park,
          we offer safe, sustainable, and immersive safari tours led by local experts.
        </p>
      </div>
    </>
  );
};

export default About;
