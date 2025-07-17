import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Trending from "../components/Trending";
import Popular from '../components/Popular';
import Movies from '../components/Movies';
import TVshows from '../components/TVshows';
import People from "../components/People";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvshows" element={<TVshows />} />
        <Route path="/people" element={<People />} />
      </Routes>
    </>
  );
};

export default Routing;
