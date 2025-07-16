import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import TopNav from "./notloading/TopNav";
import axios from "../utils/Axios";
import Loader from "./Loader";

const Trending = () => {
  const navigate = useNavigate();

  const [movie, setMovie] = useState([]);
  const [tv, setTV] = useState([]);

  const trendingMovies = async () => {
    try {
      const { data } = await axios.get(`/trending/all/week`);
      setMovie(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const trendingTV = async () => {
    try {
      const { data } = await axios.get(`/trending/all/week`);
      setTV(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    trendingMovies();
    trendingTV();
  }, []);

  return movie && tv ? (
    <div className="w-full h-full min-h-screen p-10 overflow-auto overflow-x-hidden">
      <div className="w-full flex items-center justify-evenly pb-10">
        <FaArrowLeftLong
          onClick={() => {
            navigate(-1);
          }}
          className="text-6xl"
        />
        <h1 className="text-5xl opacity-90 ml-[5%] font-semibold">Trending</h1>
        <TopNav className="-ml-45.5" />
      </div>
      <div className="border-b-2 pb-10 border-[#ffffff40]">
        <h1 className="text-3xl mt-5 mb-5 font-regular opacity-85">
          Trending Movies
        </h1>
        <div className="flex flex-row flex-wrap ml-4 gap-6 justify-start">
          {movie.map((d, i) => (
            <div key={i} className="w-45 h-60 bg-[#00000040] rounded-2xl">
              <img
                className="w-35 h-35 mt-4 rounded-xl mx-auto overflow-hidden object-cover"
                src={`https://image.tmdb.org/t/p/original/${
                  d.backdrop_path || d.poster_path
                }`}
                alt=""
              />
              <h1 className="text-lg w-[85%] font-semibold mx-auto mt-4 text-center text-[#ffffff95]">
                {d.title || d.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-3xl mt-5 mb-5 font-regular opacity-85">
          Trending TV Shows
        </h1>
        <div className="flex flex-row flex-wrap ml-4 gap-6 justify-start">
          {tv.map((d, i) => (
            <div key={i} className="w-45 h-60 bg-[#00000040] rounded-2xl">
              <img
                className="w-35 h-35 mt-4 rounded-xl mx-auto overflow-hidden object-cover"
                src={`https://image.tmdb.org/t/p/original/${
                  d.backdrop_path || d.poster_path
                }`}
                alt=""
              />
              <h1 className="text-lg w-[85%] font-semibold mx-auto mt-4 text-center text-[#ffffff95]">
                {d.title || d.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : <Loader />
};

export default Trending;
