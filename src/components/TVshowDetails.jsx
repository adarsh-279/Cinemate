import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../utils/Axios";
import Loader from "./Loader";
import { FaArrowLeftLong } from "react-icons/fa6";

const TVshowDetails = () => {
  const { id } = useParams();
  const [tvshow, settvshow] = useState(null);

  const navigate = useNavigate();

  const fetchtvshow = async () => {
    try {
      const { data } = await axios.get(`/tv/${id}`);
      settvshow(data);
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
        </div>
      </div>
    </div>
  );
};

export default TVshowDetails;
