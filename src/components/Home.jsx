import React from 'react'
import SideNav from './notloading/SideNav'
import TopNav from './notloading/TopNav';

const Home = () => {
  return (
    <>
      <SideNav />
      <div className="w-[80%] bg-[#060137f5]">
        <TopNav />
      </div>
    </>
  );
}

export default Home