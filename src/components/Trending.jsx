import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import TopNav from "./notloading/TopNav";
import axios from "../utils/Axios";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  document.title = "Cinemate | Trending";

  const navigate = useNavigate();

    const [trending, setTrending] = useState([]);
    const [page, setPage] = useState(1)
    const [hasMore, sethasMore] = useState(true)

  const trendingShow = async () => {
    try {
        const { data } = await axios.get(`/trending/all/week?page=${page}`);
        if (data.results.length > 0) {
            setTrending((prev) => [...prev, ...data.results]);
            setPage(page+1) 
        } else {
            sethasMore(false)
        }
    } catch (error) {
      console.log(error);
    }
  };

    const refreshHandler = () => {
        if (trending.length === 0) {
            trendingShow();
        } else {
            setPage(1);
            setTrending([]);
        }
    }
    
  useEffect(() => {
    refreshHandler();
  }, []);

  return trending.length > 0 ? (
    <InfiniteScroll
      dataLength={trending.length}
      next={trendingShow}
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
          <h1 className="text-5xl opacity-90 ml-[5%] font-semibold">
            Trending
          </h1>
          <TopNav className="-ml-45.5" />
        </div>
        <div className="flex flex-row flex-wrap ml-4 gap-6 justify-start">
          {trending.map((d, i) => (
            <Link
              key={i}
              to={
                d.media_type === "tv"
                  ? `/tvshows/details/${d.id}`
                  : `/movies/details/${d.id}`
              }
            >
              <div className="w-65 h-92 p-1 bg-[#00000040] rounded-2xl">
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

export default Trending;
