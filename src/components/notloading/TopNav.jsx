import React from 'react'
import { BsSearch } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const TopNav = () => {
  return (
    <div className="w-full h-18 relative flex items-center justify-center gap-4">
      <BsSearch className="text-2xl" />
      <input
        className="w-[60%] h-6 px-3 py-4 outline-none text-lg bg-transparent text-white"
        type="text"
        placeholder="Search here..."
      />
          <RxCross2 className="text-3xl" />
          
         
    </div>
  );
}

export default TopNav