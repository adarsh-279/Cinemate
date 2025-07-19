import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../utils/Axios";
import Loader from "./Loader";
import { FaArrowLeftLong } from "react-icons/fa6";

const PeopleDetails = () => {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [personMovies, setPersonMovies] = useState([]);

  const navigate = useNavigate();

  const fetchPerson = async () => {
    try {
      const { data } = await axios.get(`/person/${id}`);
      setPerson(data);
      const creditsRes = await axios.get(`/person/${id}/movie_credits`);
      setPersonMovies(creditsRes.data.cast);
      document.title = `Cinemate | ${data.name}`;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPerson();
  }, [id]);

  if (!person) return <Loader />;

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
          src={`https://image.tmdb.org/t/p/original/${person.profile_path}`}
          alt={person.name}
          className="w-70 mt-4 rounded-xl m-10 border-6 border-black"
        />
        <div className="mt-5">
          <h1 className="text-4xl font-bold">{person.name}</h1>
          <h1 className="opacity-40 mt-2">
            {person.birthday} - {person.place_of_birth}
          </h1>
          <p className="mt-4 opacity-80">
            {person.biography || "Biography not available."}
          </p>
        </div>
      </div>
      {personMovies.length > 0 && (
        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-6">Known For</h2>
          <div className="flex flex-wrap gap-6 justify-start">
            {personMovies.slice(0, 10).map((movie) => (
              <Link key={movie.id} to={`/movies/details/${movie.id}`}>
                <div className="w-65 h-96 bg-[#00000040] rounded-2xl pt-2">
                  <img
                    className="w-55 h-70 mt-4 rounded-xl mx-auto object-cover"
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
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
  );
};

export default PeopleDetails;
