import React from "react";
import { FaTv } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaFire } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { MdLocalMovies } from "react-icons/md";
import { TbDeviceTvOld } from "react-icons/tb";
import { IoIosInformationCircle } from "react-icons/io";
import { GrContact } from "react-icons/gr";
import { IoMdPerson } from "react-icons/io";

const SideNav = () => {
  return (
    <div className="w-[20%] h-screen bg-[#090137] border-r-2 border-[#ffffff20] overflow-hidden">
      <h1 className="flex text-3xl justify-center mt-6 gap-5 border-b-2 border-[#ffffff30] w-[70%] mx-auto pb-2">
        <FaTv className="mt-1.5 text-[#ffd700]" />
        <span>Cinemate</span>
      </h1>

      <nav className="w-[60%] mx-auto flex flex-col justify-center mt-6">
        <h1 className="text-2xl text-semibold mb-4">New Feeds</h1>
        <Link
          to="/trending"
          className="p-4 hover:bg-[#ffd900b6] flex gap-2 hover:text-black rounded-lg"
        >
          <FaFire className="mt-1.5" /> Trending
        </Link>
        <Link
          to="/popular"
          className="p-4 hover:bg-[#ffd900b6] flex gap-2 hover:text-black rounded-lg"
        >
          <FaStar className="mt-1.5" /> Popular
        </Link>
        <Link
          to="/movies"
          className="p-4 hover:bg-[#ffd900b6] flex gap-2 hover:text-black rounded-lg"
        >
          <MdLocalMovies className="mt-1.5" /> Movies
        </Link>
        <Link
          to="/tvshows"
          className="p-4 hover:bg-[#ffd900b6] flex gap-2 hover:text-black rounded-lg"
        >
          <TbDeviceTvOld className="mt-1.5" /> TV Shows
        </Link>
        <Link
          to="/people"
          className="p-4 hover:bg-[#ffd900b6] flex gap-2 hover:text-black rounded-lg"
        >
          <IoMdPerson className="mt-1.5" /> People
        </Link>
      </nav>
      <hr className="w-[85%] mt-5 mb-5 mx-auto opacity-30" />
      <nav className="w-[60%] mx-auto flex flex-col justify-center mt-6">
        <h1 className="text-2xl text-semibold mb-4">Information</h1>
        <Link className="p-4 hover:bg-[#36363560] flex gap-2 rounded-lg">
          <IoIosInformationCircle className="mt-1 text-xl" /> About
        </Link>
        <Link className="p-4 hover:bg-[#36363560] flex gap-2 rounded-lg">
          <GrContact className="mt-1.5" /> Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default SideNav;
