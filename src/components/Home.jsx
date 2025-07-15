import React, { useEffect, useState } from "react";
import SideNav from "./notloading/SideNav";
import TopNav from "./notloading/TopNav";
import axios from "../utils/Axios";
import Header from "./notloading/Header";

const Home = () => {
  const [wallpaper, setWallpaper] = useState(null);

  const headerWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomWallpaper = data.results[Math.floor(Math.random() * data.results.length)];
      setWallpaper(randomWallpaper);
    } catch (error) {
      console.log(error);
    }    
  };

  useEffect(() => {
    !wallpaper && headerWallpaper();
  }, []);
      console.log(wallpaper);

  return wallpaper ? (
    <>
      <SideNav />
      <div className="w-[80%] bg-[#060137f5]">
        <TopNav />
        <Header data={wallpaper} />
      </div>
    </>
  ) : <h1>loading</h1>
};

export default Home;
