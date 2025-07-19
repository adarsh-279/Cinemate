import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../utils/Axios";
import Loader from "./Loader";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";

const TVshowDetails = () => {
  const { id } = useParams();
  const [tvshow, settvshow] = useState(null);
  const [cast, setCast] = useState([]);
  const [similarTV, setSimilarTV] = useState([]);
  const [trailerKey, setTrailerKey] = useState(null);

  const navigate = useNavigate();

  const fetchtvshow = async () => {
    try {
      const { data } = await axios.get(`/tv/${id}`);
      settvshow(data);
      const creditsRes = await axios.get(`/tv/${id}/credits`);
      setCast(creditsRes.data.cast);
      const similarRes = await axios.get(`/tv/${id}/similar`);
      setSimilarTV(similarRes.data.results);
      const videoRes = await axios.get(`/tv/${id}/videos`);
      const trailer = videoRes.data.results.find(
        (vid) => vid.type === "Trailer" && vid.site === "YouTube"
      );
      setTrailerKey(trailer?.key);
      document.title = `Cinemate | ${data.name}`;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchtvshow();
  }, [id]);

  if (!tvshow) return <Loader />;

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
            src={`https://image.tmdb.org/t/p/original/${tvshow.poster_path}`}
            alt={tvshow.backdrop_path}
            className="w-70 mt-4 rounded-xl m-10 border-6 border-black"
          />
          <div className="mt-5">
            <h1 className="text-5xl font-bold">{tvshow.name}</h1>
            <h1 className="text-xl opacity-60 mt-2 italic">{tvshow.tagline}</h1>
            <h1 className="text-xl opacity-60 mt-2 ">
              {tvshow.vote_average} / 10
            </h1>
            <p className="mt-4 opacity-80">
              {tvshow.overview || "Overview not available."}
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
        {similarTV.length > 0 && (
          <div className="mt-10">
            <h2 className="text-3xl font-bold mb-6">Similar TV Shows</h2>
            <div className="flex flex-wrap gap-6">
              {similarTV.map((tv) => (
                <Link key={tv.id} to={`/tv/details/${tv.id}`}>
                  <div className="w-65 h-96 p-2 bg-[#00000040] rounded-2xl">
                    <img
                      className="w-55 h-70 mt-4 rounded-xl mx-auto object-cover"
                      src={`https://image.tmdb.org/t/p/original/${
                        tv.poster_path || tv.backdrop_path
                      }`}
                      alt={tv.title}
                    />
                    <h1 className="text-lg w-[85%] font-semibold mx-auto mt-4 text-center text-[#ffffff95]">
                      {tv.name}
                    </h1>
                    <div className="w-10 h-10 rounded-full bg-[#ffd700] relative flex items-center justify-center -top-[30%]">
                      <h1 className="text-[#000000] font-bold absolute">
                        {Math.round((tv.vote_average / 10) * 100)}%
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

export default TVshowDetails;
