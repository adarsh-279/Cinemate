import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const TopNav = () => {
    const [query, setQuery] = useState("");
    console.log(query);
    

  return (
    <div className="w-[100%] h-18 relative flex items-center justify-start ml-45.5 gap-4">
      <BsSearch className="text-2xl" />
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[60%] h-6 px-3 py-4 outline-none text-lg bg-transparent text-white"
        type="text"
        placeholder="Search here..."
      />
      {query.length > 0 ? (
        <RxCross2 onClick={() => setQuery("")} className="text-3xl" />
      ) : null}

      <div className="absolute w-[66.8%] h-80 mx-auto top-[88%] font-semibold text-[#ffffff60] bg-[#090137] overflow-y-auto overflow-x-hidden">
        <Link className="hover:text-white hover:bg-[#00000020] duration-300 flex items-center justify-center gap-2 w-[95%] mx-auto mt-2 px-4 py-3 border-b-2 overflow-y-auto">
          <img src="" alt="" />
          <span className="text-lg ">hdfhfh</span>
        </Link>
        <Link className="hover:text-white hover:bg-[#00000020] duration-300 flex items-center justify-center gap-2 w-[95%] mx-auto mt-2 px-4 py-3 border-b-2 overflow-y-auto">
          <img src="" alt="" />
          <span className="text-lg ">hdfhfh</span>
        </Link>
        <Link className="hover:text-white hover:bg-[#00000020] duration-300 flex items-center justify-center gap-2 w-[95%] mx-auto mt-2 px-4 py-3 border-b-2 overflow-y-auto">
          <img src="" alt="" />
          <span className="text-lg ">hdfhfh</span>
        </Link>
        <Link className="hover:text-white hover:bg-[#00000020] duration-300 flex items-center justify-center gap-2 w-[95%] mx-auto mt-2 px-4 py-3 border-b-2 overflow-y-auto">
          <img src="" alt="" />
          <span className="text-lg ">hdfhfh</span>
        </Link>
        <Link className="hover:text-white hover:bg-[#00000020] duration-300 flex items-center justify-center gap-2 w-[95%] mx-auto mt-2 px-4 py-3 border-b-2 overflow-y-auto">
          <img src="" alt="" />
          <span className="text-lg ">hdfhfh</span>
        </Link>
        <Link className="hover:text-white hover:bg-[#00000020] duration-300 flex items-center justify-center gap-2 w-[95%] mx-auto mt-2 px-4 py-3 border-b-2 overflow-y-auto">
          <img src="" alt="" />
          <span className="text-lg ">hdfhfh</span>
        </Link>
        <Link className="hover:text-white hover:bg-[#00000020] duration-300 flex items-center justify-center gap-2 w-[95%] mx-auto mt-2 px-4 py-3 border-b-2 overflow-y-auto">
          <img src="" alt="" />
          <span className="text-lg ">hdfhfh</span>
        </Link>
        <Link className="hover:text-white hover:bg-[#00000020] duration-300 flex items-center justify-center gap-2 w-[95%] mx-auto mt-2 px-4 py-3 border-b-2 overflow-y-auto">
          <img src="" alt="" />
          <span className="text-lg ">hdfhfh</span>
        </Link>
        <Link className="hover:text-white hover:bg-[#00000020] duration-300 flex items-center justify-center gap-2 w-[95%] mx-auto mt-2 px-4 py-3 border-b-2 overflow-y-auto">
          <img src="" alt="" />
          <span className="text-lg ">hdfhfh</span>
        </Link>
        <Link className="hover:text-white hover:bg-[#00000020] duration-300 flex items-center justify-center gap-2 w-[95%] mx-auto mt-2 px-4 py-3 border-b-2 overflow-y-auto">
          <img src="" alt="" />
          <span className="text-lg ">hdfhfh</span>
        </Link>
        <Link className="hover:text-white hover:bg-[#00000020] duration-300 flex items-center justify-center gap-2 w-[95%] mx-auto mt-2 px-4 py-3 border-b-2 overflow-y-auto">
          <img src="" alt="" />
          <span className="text-lg ">hdfhfh</span>
        </Link>
        <Link className="hover:text-white hover:bg-[#00000020] duration-300 flex items-center justify-center gap-2 w-[95%] mx-auto mt-2 px-4 py-3 border-b-2 overflow-y-auto">
          <img src="" alt="" />
          <span className="text-lg ">hdfhfh</span>
        </Link>
        <Link className="hover:text-white hover:bg-[#00000020] duration-300 flex items-center justify-center gap-2 w-[95%] mx-auto mt-2 px-4 py-3 border-b-2 overflow-y-auto">
          <img src="" alt="" />
          <span className="text-lg ">hdfhfh</span>
        </Link>
        <Link className="hover:text-white hover:bg-[#00000020] duration-300 flex items-center justify-center gap-2 w-[95%] mx-auto mt-2 px-4 py-3 border-b-2 overflow-y-auto">
          <img src="" alt="" />
          <span className="text-lg ">hdfhfh</span>
        </Link>
      </div>
    </div>
  );
};

export default TopNav;
