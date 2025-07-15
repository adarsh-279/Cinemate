import React from "react";
import { SlCalender } from "react-icons/sl";
import { MdAlbum } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.6),rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.poster_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-[80vw] h-[60vh] flex flex-col justify-end p-10"
    >
      <h1 className="text-5xl font-semibold w-[70%] mb-2 text-[#ffffff95]">
        {data.title || data.name}
      </h1>
      <p className="text-sm w-[60%] text-[#ffffff60]">{data.overview}</p>
      <div className="flex flex-row gap-2 text-[#ffffff80]">
        <h1 className="flex flex-row items-center justify-center gap-2">
          <SlCalender className="text-[#ffd700]" /> {data.release_date || "No Information"}
        </h1>
        <h1 className="flex flex-row items-center justify-center gap-2">
          <MdAlbum className="text-xl text-[#ffd700]" />{" "}
          {data.media_type.toUpperCase()}
        </h1>
      </div>
      <Link className="px-4 py-3 bg-[#ffd700] w-29 rounded-lg text-black mt-2 text-sm font-semibold">Watch Trailer</Link>
    </div>
  );
};

export default Header;
