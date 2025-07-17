import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import TopNav from "./notloading/TopNav";
import axios from "../utils/Axios";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const TVshows = () => {
  document.title = "Cinemate | TV Shows";

  const navigate = useNavigate();

  const [TVshow, setTVshow] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const TVshowShow = async () => {
    try {
      const { data } = await axios.get(`/discover/tv?page=${page}`);
      if (data.results.length > 0) {
        setTVshow((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const refreshHandler = () => {
    if (TVshow.length === 0) {
      TVshowShow();
    } else {
      setPage(1);
      setTVshow([]);
    }
  };

  useEffect(() => {
    refreshHandler();
  }, []);

  return TVshow.length > 0 ? (
    <InfiniteScroll
      dataLength={TVshow.length}
      next={TVshowShow}
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
          <h1 className="text-5xl opacity-90 ml-[5%] font-semibold">TV Shows</h1>
          <TopNav className="-ml-45.5" />
        </div>
        <div className="flex flex-row flex-wrap ml-4 gap-6 justify-start">
          {TVshow.map((d, i) => (
            <div key={i} className="w-65 h-92 bg-[#00000040] rounded-2xl">
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
            </div>
          ))}
        </div>
      </div>
    </InfiniteScroll>
  ) : (
    <Loader />
  );
};

export default TVshows;
