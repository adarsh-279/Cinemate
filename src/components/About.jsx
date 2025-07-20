import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const About = () => {

    const navigate = useNavigate();
    
    document.title = "Cinemate | About";

  return (
    <>
      <Link to="/about">
          <div className="pt-10 pl-10 text-white">
            <FaArrowLeftLong
              onClick={() => {
                navigate(-1);
              }}
              className="text-6xl"
            />
          </div>
        <div className="w-full min-h-screen ml-46.5 text-white pl-10 pr-10 -mt-25 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold text-center mb-6 text-[#ffd700] tracking-wide">
            About Cinemate
          </h1>
          <p className="text-lg max-w-4xl text-center opacity-80 leading-relaxed">
            Welcome to
            <span className="text-[#ffd700] font-semibold"> Cinemate</span> —
            your gateway to trending movies and TV shows around the world.
            Powered by modern web technologies like <strong>React</strong>,
            <strong> Tailwind CSS</strong>, and TMDB's robust API, Cinemate
            delivers an immersive browsing experience that's both elegant and
            responsive.
          </p>
          <p className="text-lg max-w-4xl text-center mt-4 opacity-80 leading-relaxed">
            From cast details and trailers to similar recommendations, Cinemate
            lets you explore content effortlessly with features like infinite
            scrolling, dynamic overlays, and interactive design patterns. It's
            not just a catalog—it's a cinematic adventure.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-center">
            <div className="bg-[#00000040] backdrop-blur-md p-6 rounded-xl w-64">
              <h2 className="text-2xl font-semibold text-[#ffd700] mb-2">
                Fast & Dynamic
              </h2>
              <p className="text-sm opacity-70">
                Built with React, Cinemate fetches data on the fly and renders
                UI instantly.
              </p>
            </div>
            <div className="bg-[#00000040] backdrop-blur-md p-6 rounded-xl w-64">
              <h2 className="text-2xl font-semibold text-[#ffd700] mb-2">
                Cinematic UI
              </h2>
              <p className="text-sm opacity-70">
                Designed for impact, every scroll, click, and hover mimics the
                rhythm of cinema.
              </p>
            </div>
            <div className="bg-[#00000040] backdrop-blur-md p-6 rounded-xl w-64">
              <h2 className="text-2xl font-semibold text-[#ffd700] mb-2">
                Powered by TMDB
              </h2>
              <p className="text-sm opacity-70">
                Leveraging The Movie Database for rich, reliable media
                information.
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default About;
