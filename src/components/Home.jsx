import React, { useEffect, useState } from "react";
import SideNav from "./notloading/SideNav";
import TopNav from "./notloading/TopNav";
import axios from "../utils/Axios";
import Header from "./notloading/Header";
import Cards from "./notloading/Cards";

const Home = () => {
  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);

  const headerWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomWallpaper = data.results[Math.floor(Math.random() * data.results.length)];
      setWallpaper(randomWallpaper);
    } catch (error) {
      console.log(error);
    }    
  };

  const trendingMovies = async () => {
    try {
      const { data } = await axios.get(`/trending/movie/day`);
      setTrending(data.results);
    } catch (error) {
      console.log(error);
    }    
  };

  useEffect(() => {
    !wallpaper && headerWallpaper();
    !trending && trendingMovies();
  }, []);
  
  return wallpaper && trending ? (
    <>
      <SideNav />
      <div className="w-[80%] h-screen bg-[#060137f5] overflow-auto overflow-x-hidden">
        <TopNav />
        <Header data={wallpaper} />
        <Cards data={trending} />
      </div>
    </>
  ) : <h1 className="text-9xl text-black">loading</h1>
};

export default Home;
