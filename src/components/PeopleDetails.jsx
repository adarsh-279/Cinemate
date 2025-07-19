import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../utils/Axios";
import Loader from "./Loader";
import { FaArrowLeftLong } from "react-icons/fa6";

const PeopleDetails = () => {
  const { id } = useParams();
  const [person, setPerson] = useState(null);

  const navigate = useNavigate();

  const fetchPerson = async () => {
    try {
      const { data } = await axios.get(`/person/${id}`);
      setPerson(data);
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
    </div>
  );
};

export default PeopleDetails;
