import React from "react";
import { FaTv } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaFire } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { MdLocalMovies } from "react-icons/md";
import { TbDeviceTvOld } from "react-icons/tb";

const SideNav = () => {
  return (
    <div className="w-[20%] h-screen bg-[#090137] border-r-2 border-[#ffffff20]">
      <h1 className="flex text-3xl justify-center mt-6 gap-5 border-b-2 border-[#ffffff30] w-[70%] mx-auto pb-2">
        <FaTv className="mt-1.5 text-[#ffd700]" />
        <span>Cinemate</span>
      </h1>

      <nav className="w-[60%] mx-auto flex flex-col justify-center mt-6">
        <h1 className="text-2xl text-semibold mb-4">New Feeds</h1>
        <Link className="p-4 hover:bg-[#ffd900b6] hover:text-black rounded-lg">
          <FaFire /> Trending
        </Link>
        <Link className="p-4 hover:bg-[#ffd900b6] hover:text-black rounded-lg">
          <FaStar /> Popular
        </Link>
        <Link className="p-4 hover:bg-[#ffd900b6] hover:text-black rounded-lg">
          <MdLocalMovies /> Movies
        </Link>
        <Link className="p-4 hover:bg-[#ffd900b6] hover:text-black rounded-lg">
          <TbDeviceTvOld /> TV Shows
        </Link>
      </nav>
    </div>
  );
};

export default SideNav;
