import React, { useEffect, useState } from "react";
import SideNav from "./notloading/SideNav";
import TopNav from "./notloading/TopNav";
import axios from "../utils/Axios";
import Header from "./notloading/Header";
import Cards from "./notloading/Cards";
import Loader from "./Loader";

const Home = ({ movieData, tvData }) => {
  const [wallpaper, setWallpaper] = useState(null);
  const [movie, setMovie] = useState(null);
  const [tv, setTV] = useState(null);

  const headerWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomWallpaper =
        data.results[Math.floor(Math.random() * data.results.length)];
      setWallpaper(randomWallpaper);
    } catch (error) {
      console.log(error);
    }
  };

  const trendingMovies = async () => {
    try {
      const { data } = await axios.get(`/trending/movie/day`);
      setMovie(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const trendingTV = async () => {
    try {
      const { data } = await axios.get(`/trending/tv/day`);
      setTV(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    !wallpaper && headerWallpaper();
    !movie && trendingMovies();
    !tv && trendingTV();
  }, []);

  return wallpaper && movie && tv ? (
    <>
      <SideNav />
      <div className="w-[80%] h-screen bg-[#060137f5] overflow-auto overflow-x-hidden">
        <TopNav />
        <Header data={wallpaper} />
        <Cards movieData={movie} tvData={tv} />
      </div>
    </>
  ) : (
    <Loader />
  );
};

export default Home;
