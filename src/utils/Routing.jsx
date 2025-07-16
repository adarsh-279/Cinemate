import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Trending from "../components/Trending";
import Popular from '../components/Popular';
import Movies from '../components/Movies';
import TVshows from '../components/TVshows';

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvshows" element={<TVshows />} />
      </Routes>
    </>
  );
};

export default Routing;
