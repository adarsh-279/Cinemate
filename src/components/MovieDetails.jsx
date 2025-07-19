import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../utils/Axios";
import Loader from "./Loader";
import { FaArrowLeftLong } from "react-icons/fa6";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setmovie] = useState(null);

  const navigate = useNavigate();

  const fetchmovie = async () => {
    try {
      const { data } = await axios.get(`/movie/${id}`);
      setmovie(data);
      document.title = `Cinemate | ${data.title}`;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchmovie();
  }, [id]);

  if (!movie) return <Loader />;

  return (
    <div className="p-10 text-white">
      <FaArrowLeftLong
        onClick={() => {
          navigate(-1);
        }}
        className="text-6xl"
      />
      <div className="flex items-start justify-center pt-5">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.backdrop_path}
          className="w-70 mt-4 rounded-xl m-10 border-6 border-black"
        />
        <div className="mt-5">
          <h1 className="text-5xl font-bold">{movie.title}</h1>
          <h1 className="text-xl opacity-60 mt-2 italic">{movie.tagline}</h1>
          <h1 className="text-xl opacity-60 mt-2 ">
            {movie.vote_average} / 10
          </h1>
          <h1 className="text-lg opacity-60 mt-2 ">
            {movie.release_date}
          </h1>
          <p className="mt-4 opacity-80">
            {movie.overview || "Overview not available."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
