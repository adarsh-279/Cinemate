import React from 'react'

const Cards = ({data}) => {
  return (
    <div className="w-full h-auto p-5 ">
      <div className="mb-5">
        <h1 className="text-4xl mt-5 mb-2 text-center font-semibold opacity-85">
          Trending
        </h1>
      </div>
      <div className="w-[100%] h-full p-2 gap-5 flex flex-row flex-nowrap overflow-x-auto">
        {data.map((d, i) => (
          <div key={i} className="min-w-50 h-70 bg-[#00000040] rounded-lg">
            <img
              className="w-45 h-45 mt-4 rounded-xl mx-auto overflow-hidden object-cover"
              src={`https://image.tmdb.org/t/p/original/${
                d.backdrop_path || d.poster_path
              }`}
              alt=""
            />
            <h1 className="text-lg w-[85%] font-semibold mx-auto mt-2 text-center text-[#ffffff95]">
              {d.title || d.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards