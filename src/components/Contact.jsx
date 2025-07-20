import React from "react";
import { FaEnvelope, FaPhoneAlt, FaGithub, FaInstagram } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const Contact = () => {
        const navigate = useNavigate();

    document.title = "Cinemate | Contact";
    
    return (
      <>
        <Link to="/contact">
          <div className="pt-10 pl-10 text-white">
            <FaArrowLeftLong
              onClick={() => {
                navigate(-1);
              }}
              className="text-6xl"
            />
          </div>
          <div className="w-full min-h-screen ml-65 pl-10 pr-10 -mt-25 text-white flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold mb-6 text-[#ffd700] tracking-wide text-center">
              Get in Touch
            </h1>
            <p className="text-center text-lg opacity-80 max-w-2xl mb-10 leading-relaxed">
              Have suggestions, feedback, or want to collaborate on your
              favorite movie ideas? Reach out through the form below or connect
              via social links—Cinemate loves hearing from fellow movie buffs.
            </p>

            {/* Contact Form */}
            <form className="w-full max-w-xl bg-[#00000040] p-8 rounded-xl backdrop-blur-md space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-md bg-black bg-opacity-40 text-white placeholder:text-[#ffffff80] focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-md bg-black bg-opacity-40 text-white placeholder:text-[#ffffff80] focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 rounded-md bg-black bg-opacity-40 text-white placeholder:text-[#ffffff80] focus:outline-none resize-none"
              />
              <button
                type="submit"
                className="bg-[#ffd700] text-black px-6 py-3 rounded-md font-semibold hover:bg-red-700 hover:text-white transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </Link>
      </>
    );
};

export default Contact;
