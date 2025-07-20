import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import axios from "../../utils/Axios";
import { useEffect } from "react";
import noimg from "../../assets/noimg.jpg";

const TopNav = () => {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState([]);

  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearch(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearches();
  }, [query]);

  return (
    <div className="w-[100%] h-14 relative flex items-center justify-start ml-45.5 gap-4">
      <BsSearch className="text-2xl" />
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[60%] h-6 px-3 py-4 outline-none text-lg bg-transparent text-white"
        type="text"
        placeholder="Search here..."
      />
      {query.length > 0 ? (
        <RxCross2 onClick={() => setQuery("")} className="text-3xl" />
      ) : null}

      <div className="absolute w-[66.8%] max-h-80 mx-auto top-[88%] font-semibold text-[#ffffff60] bg-[#090137] overflow-y-auto overflow-x-hidden border-l-2 border-r-2 border-b-2 border-[#ffffff40]">
        {search.map((s, i) => {
          return (
            <Link
              key={i}
              to={
                s.media_type === "tv"
                  ? `/tvshows/details/${s.id}`
                  : s.media_type === "movie"
                  ? `/movies/details/${s.id}`
                  : `/people/details/${s.id}`
              }
              className="hover:text-white hover:bg-[#00000040] duration-300 flex items-center justify-start gap-2 w-[95%] mx-auto mt-2 px-4 py-3 border-b-2 overflow-y-auto"
            >
              <img
                className="w-25 h-20 object-cover overflow-hidden mr-5 shadow-md shadow-[#ffffff50]"
                src={
                  s.backdrop_path || s.poster_path || s.profile_path
                    ? `https://image.tmdb.org/t/p/original/${
                        s.backdrop_path || s.poster_path || s.profile_path
                      }`
                    : noimg
                }
                alt=""
              />
              <span className="text-lg ">
                {s.title || s.original_title || s.name || s.original_name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TopNav;
