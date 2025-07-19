import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import TopNav from "./notloading/TopNav";
import axios from "../utils/Axios";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const Movie = () => {
  document.title = "Cinemate | Movies";
  
  const navigate = useNavigate();

  const [movie, setmovie] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const movieShow = async () => {
    try {
      const { data } = await axios.get(`/discover/movie?page=${page}`);
      if (data.results.length > 0) {
        setmovie((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const refreshHandler = () => {
    if (movie.length === 0) {
      movieShow();
    } else {
      setPage(1);
      setmovie([]);
    }
  };

  useEffect(() => {
    refreshHandler();
  }, []);

  return movie.length > 0 ? (
    <InfiniteScroll
      dataLength={movie.length}
      next={movieShow}
      hasMore={hasMore}
      loader={<Loader />}
    >
      <div className="w-full h-full min-h-screen p-10 overflow-auto overflow-x-hidden">
        <div className="w-full flex items-center justify-evenly pb-10">
          <FaArrowLeftLong
            onClick={() => {
              navigate(-1);
            }}
            className="text-6xl"
          />
          <h1 className="text-5xl opacity-90 ml-[5%] font-semibold">Movies</h1>
          <TopNav className="-ml-45.5" />
        </div>
        <div className="flex flex-row flex-wrap ml-4 gap-6 justify-start">
          {movie.map((d, i) => (
            <Link key={i} to={`/movies/details/${d.id}`}>
              <div key={i} className="w-65 h-96 p-2 bg-[#00000040] rounded-2xl">
                <img
                  className="w-55 h-70 mt-4 rounded-xl mx-auto overflow-hidden object-cover"
                  src={`https://image.tmdb.org/t/p/original/${
                    d.backdrop_path || d.poster_path
                  }`}
                  alt=""
                />
                <h1 className="text-lg w-[85%] font-semibold mx-auto mt-4 text-center text-[#ffffff95]">
                  {d.title || d.name}
                </h1>
                <div className="w-10 h-10 rounded-full bg-[#ffd700] relative flex items-center justify-center -top-[30%]">
                  <h1 className="text-[#000000] font-bold absolute">
                    {Math.round((d.vote_average / 10) * 100)}%
                  </h1>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </InfiniteScroll>
  ) : (
    <Loader />
  );
};

export default Movie;
