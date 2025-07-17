import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import TopNav from "./notloading/TopNav";
import axios from "../utils/Axios";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const Popular = () => {
  document.title = "Cinemate | Popular"
  
  const navigate = useNavigate();

  const [popular, setpopular] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const popularShow = async () => {
    try {
      const { data } = await axios.get(`/movie/popular?page=${page}`);
      if (data.results.length > 0) {
        setpopular((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const refreshHandler = () => {
    if (popular.length === 0) {
      popularShow();
    } else {
      setPage(1);
      setpopular([]);
    }
  };

  useEffect(() => {
    refreshHandler();
  }, []);

  return popular.length > 0 ? (
    <InfiniteScroll
      dataLength={popular.length}
      next={popularShow}
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
            Popular
          </h1>
          <TopNav className="-ml-45.5" />
        </div>
        <div className="flex flex-row flex-wrap ml-4 gap-6 justify-start">
          {popular.map((d, i) => (
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

export default Popular;