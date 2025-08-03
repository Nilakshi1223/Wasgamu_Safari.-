import React from "react";
import PageBanner from "../components/PageBanner";
import contactImg from "../assets/safari3.webp";
import bgPattern from "../assets/bgImg.webp";

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

              <div className="max-w-4xl mx-auto p-6 mt-12 mb-24">

       

        <form className="grid grid-cols-1 gap-4">
          <input type="text" placeholder="Name" className="p-3 border rounded" />
          <input type="email" placeholder="Email" className="p-3 border rounded" />
          <textarea placeholder="Message" rows="5" className="p-3 border rounded" />
          <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
            Send
          </button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Contact;
