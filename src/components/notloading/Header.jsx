import React from "react";


const Header = ({ data }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.6),rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.poster_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-[80vw] h-[60vh] flex flex-col justify-end p-10"
    >
      
    </div>
  );
};

export default Header;
