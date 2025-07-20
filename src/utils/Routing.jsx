import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Trending from "../components/Trending";
import Popular from "../components/Popular";
import Movies from "../components/Movies";
import TVshows from "../components/TVshows";
import People from "../components/People";
import MovieDetails from "../components/MovieDetails";
import TVshowDetails from "../components/TVshowDetails";
import PeopleDetails from "../components/PeopleDetails";
import About from "../components/About";
import Contact from "../components/Contact";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/details/:id" element={<MovieDetails />} />
        <Route path="/tvshows" element={<TVshows />} />
        <Route path="/tvshows/details/:id" element={<TVshowDetails />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/details/:id" element={<PeopleDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Routing;
