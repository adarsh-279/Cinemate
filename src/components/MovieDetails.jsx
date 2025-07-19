import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../utils/Axios";
import Loader from "./Loader";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setmovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [trailerKey, setTrailerKey] = useState(null);

  const navigate = useNavigate();

  const fetchmovie = async () => {
    try {
      const { data } = await axios.get(`/movie/${id}`);
      setmovie(data);
      const creditsRes = await axios.get(`/movie/${id}/credits`);
      setCast(creditsRes.data.cast);
      const similarRes = await axios.get(`/movie/${id}/similar`);
      setSimilarMovies(similarRes.data.results);
      const videoRes = await axios.get(`/movie/${id}/videos`);
      const trailer = videoRes.data.results.find(
        (vid) => vid.type === "Trailer" && vid.site === "YouTube"
      );
      setTrailerKey(trailer?.key);
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
      <div>
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
            <h1 className="text-lg opacity-60 mt-2 ">{movie.release_date}</h1>
            <p className="mt-4 opacity-80">
              {movie.overview || "Overview not available."}
            </p>
            {trailerKey && (
              <button
                className="bg-[#ffd700] text-black px-6 py-2 rounded-xl mt-4 hover:bg-red-700 hover:text-white transition flex items-center gap-2"
                onClick={() =>
                  window.open(
                    `https://www.youtube.com/watch?v=${trailerKey}`,
                    "_blank"
                  )
                }
              >
                <FaPlay /> Play Trailer
              </button>
            )}
          </div>
        </div>
        {cast.length > 0 && (
          <div className="mt-10">
            <h2 className="text-4xl font-bold mb-6">Cast</h2>
            <div className="flex flex-wrap gap-6 items-center justify-center">
              {cast.slice(0, 10).map((person) => (
                <div key={person.cast_id} className="w-50 text-center">
                  <img
                    className="w-36 h-36 rounded-full mx-auto object-cover border-2 border-white"
                    src={`https://image.tmdb.org/t/p/original/${person.profile_path}`}
                    alt={person.name}
                  />
                  <h3 className="mt-2 text-lg font-semibold">{person.name}</h3>
                  <p className="text-sm text-[#ffffff95]">{person.character}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {similarMovies.length > 0 && (
          <div className="mt-10">
            <h2 className="text-3xl font-bold mb-6">Similar Movies</h2>
            <div className="flex flex-wrap gap-6">
              {similarMovies.map((movie) => (
                <Link key={movie.id} to={`/movies/details/${movie.id}`}>
                  <div className="w-65 h-96 p-2 bg-[#00000040] rounded-2xl">
                    <img
                      className="w-55 h-70 mt-4 rounded-xl mx-auto object-cover"
                      src={`https://image.tmdb.org/t/p/original/${
                        movie.poster_path || movie.backdrop_path
                      }`}
                      alt={movie.title}
                    />
                    <h1 className="text-lg w-[85%] font-semibold mx-auto mt-4 text-center text-[#ffffff95]">
                      {movie.title}
                    </h1>
                    <div className="w-10 h-10 rounded-full bg-[#ffd700] relative flex items-center justify-center -top-[30%]">
                      <h1 className="text-[#000000] font-bold absolute">
                        {Math.round((movie.vote_average / 10) * 100)}%
                      </h1>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
