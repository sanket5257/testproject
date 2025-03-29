"use client";

import React, { useState } from "react";
import Signin from "./Signin";

const Header = () => {
  // State to toggle mobile navigation visibility
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [showModel, setShowModel] = useState(false);

  const closeSignin = () => {
    setIsOpen(false);
  };

  // Toggle navigation visibility
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };


  return (
    <div   className="bg-white w-full z-50 absolute text-black">
      <div className="h-[10vh] bg-white w-full flex justify-between items-center px-5 md:px-10">
        {/* Logo */}
        <div className="h-full flex items-center justify-start w-1/3">
          <div className="h-full p-2">
            <img className="h-full w-full object-cover p-4" src="./logo.jpg" alt="" />
          </div>
        </div>

        {/* Mobile Navigation Button */}
        <div className="lg:hidden flex items-center justify-end">
          <button
            onClick={toggleNav}
            className="text-black text-3xl focus:outline-none"
          >
            &#9776; {/* Hamburger icon */}
          </button>
        </div>

        {/* Navigation (for md and above) */}
        <div className="hidden lg:flex lg:text-sm justify-evenly items-center w-1/3">
          <h1>Home</h1>
          <h1>Blog</h1>
          <h1>Community</h1>
          <h1>Exhibitions</h1>
        </div>

        {/* Right section (sign up, sign in, and phone number) */}
        <div className="hidden lg:flex items-center justify-end gap-3 w-1/3">
          <div className="hidden lg:block text-black">
            <a href="">8308463462 </a>
          </div>
          <button
            onClick={() => setShowModel(true)}
            className="bg-gradient-to-bl from-[#007BFF] to-[#004C99] text-white rounded-md md:h-9 md:w-24"
          >
            Sign In
          </button>
          <button className="bg-gradient-to-bl from-[#007BFF] to-[#004C99] text-white rounded-md md:h-9 md:w-24">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile View Navigation */}
      {isNavVisible && (
        <div className="lg:hidden w-full bg-white absolute top-[7vh] left-0 px-5 py-3 flex flex-col items-center gap-3">
          <h1>Home</h1>
          <h1>Article & Blog</h1>
          <h1>Community</h1>
          <h1>Exhibitions</h1>
          <div className="flex flex-col gap-2 justify-center items-center w-full">
            <button className="bg-gradient-to-bl from-[#007BFF] to-[#004C99] text-white rounded-md h-9 w-[35vw]">
              Sign Up
            </button>
            <button className="bg-gradient-to-bl from-[#007BFF] to-[#004C99] text-white rounded-md h-9 w-[35vw] ">
              Sign In
            </button>
          </div>
        </div>
      )}

      {/* Render Signin Modal */}
      {showModel && <Signin Close={showModel}/>}
    </div>
  );
};

export default Header;
