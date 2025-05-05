"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  // State to toggle mobile navigation visibility
  const [isNavVisible, setIsNavVisible] = useState(false);

  // const closeSignin = () => {
  //   setIsOpen(false);
  // };

  // Toggle navigation visibility
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div className="bg-white w-full z-50 absolute text-black">
      <div className="h-[10vh] bg-white w-full flex justify-between items-center px-5 md:px-10">
        {/* Logo */}
        <div className="h-full flex items-center justify-start w-1/3">
          <div className="h-full p-2">
            <Link href="/">
              <Image
                className="h-full w-full object-cover p-4"
                src="/logo.jpg"
                alt=""
                width={50}
                height={50}
              />
            </Link>
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
          <Link href="/">Home</Link>
          <h1>Blog</h1>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=918308463462&text&type=phone_number&app_absent=0"
          >
            Community
          </a>
          <Link href="#exhibition">Exhibitions</Link>
        </div>

        {/* Right section (sign up, sign in, and phone number) */}
        <div className="hidden lg:flex items-center justify-end gap-3 w-1/3">
          <div className="hidden lg:block text-black">
            <a href="">8308463462 </a>
          </div>
          <a
            href="/signin"
            className="bg-[#0866FF] flex justify-center items-center text-white rounded-md md:h-9 md:w-24"
          >
            Sign In
          </a>
          <a
            href="/getstarted"
            className="bg-[#0866FF] flex justify-center items-center text-white rounded-md md:h-9 md:w-24"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* Mobile View Navigation */}
      {isNavVisible && (
        <div className="lg:hidden w-full bg-white absolute top-[7vh] left-0 px-5 py-3 flex flex-col items-center gap-3">
          <Link href="/">Home</Link>
          <h1>Blog</h1>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=918308463462&text&type=phone_number&app_absent=0"
          >
            Community
          </a>
          <a href="/#exhibition">Exhibitions</a>
          <div className="flex flex-col gap-2 justify-center items-center w-full">
            <a
              href="/getstarted"
              className="bg-gradient-to-bl flex justify-center items-center from-[#007BFF] to-[#004C99] text-white rounded-md h-9 w-[35vw]"
            >
              Sign Up
            </a>
            <a
              href="/signin"
              className="bg-gradient-to-bl from-[#007BFF] flex justify-center items-center to-[#004C99] text-white rounded-md h-9 w-[35vw] "
            >
              Sign In
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
