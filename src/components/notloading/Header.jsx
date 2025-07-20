import React, { useEffect, useState } from "react";
import { SlCalender } from "react-icons/sl";
import { MdAlbum } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import axios from "../../utils/Axios";

const Header = ({ data }) => {

  const [trailerKey, setTrailerKey] = useState(null);

  const fetchmovie = async () => {
    try {
      const { data: videoData } = await axios.get(
        `/${data.media_type}/${data.id}/videos`
      );
      const trailer = videoData.results.find(
        (vid) => vid.type === "Trailer" && vid.site === "YouTube"
      );
      setTrailerKey(trailer?.key);
      document.title = `Cinemate`;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchmovie();
  }, []);

  return (
    <>
      <Link
        to={
          data.media_type === "tv"
            ? `/tvshows/details/${data.id}`
            : `/movies/details/${data.id}`
        }
      >
        <div
          style={{
            background: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.6),rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original/${
              data.backdrop_path || data.poster_path
            })`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="w-[80vw] h-[60vh] flex flex-col justify-end p-10 overflow-auto overflow-x-hidden overflow-y-auto"
        >
          <h1 className="text-5xl font-semibold w-[70%] mb-2 text-[#ffffff95]">
            {data.title || data.name}
          </h1>
          <p className="text-sm w-[60%] text-[#ffffff60]">{data.overview}</p>
          <div className="flex flex-row gap-2 text-[#ffffff80]">
            <h1 className="flex flex-row items-center justify-center gap-2">
              <SlCalender className="text-[#ffd700]" />{" "}
              {data.release_date || "No Information"}
            </h1>
            <h1 className="flex flex-row items-center justify-center gap-2">
              <MdAlbum className="text-xl text-[#ffd700]" />{" "}
              {data.media_type.toUpperCase()}
            </h1>
          </div>
          {trailerKey && (
            <button
              className="bg-[#ffd700] w-37 text-black px-6 py-2 rounded-xl mt-4 hover:bg-red-700 hover:text-white transition flex items-center gap-2"
              onClick={() =>
                window.open(
                  `https://www.youtube.com/watch?v=${trailerKey}`,
                  "_blank"
                )
              }
            >
              <FaPlay /> Play Trailer
            </button>
          )}
        </div>
      </Link>
    </>
  );
};

export default Header;
