"use client";
import React, { useState } from "react";

const Header2 = () => {
    // State to toggle mobile navigation visibility
    const [isNavVisible, setIsNavVisible] = useState(false);
  
    // Toggle navigation visibility
    const toggleNav = () => {
      setIsNavVisible(!isNavVisible);
    };
  return (
    <div className="bg-white w-full overflow-x-hidden">
      <div className="h-[7vh] bg-white w-full flex justify-between items-center px-5 md:px-10">
        {/* Logo */}
        <div className="h-full flex items-center justify-start w-1/3">
          <h1 className="text-[4vw] md:text-[2vw] text-black font-Montserrat font-light">
            <span className="text-blue-600 font-medium">Textile</span>Voice
          </h1>
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
          <h1>Article & Blog</h1>
          <h1>Community</h1>
          <h1>Exhibitions</h1>
        </div>

        {/* Right section (sign up, sign in, and phone number) */}
        <div className="hidden lg:flex items-center justify-end gap-3 w-1/3">
          {/* For small screens: Phone number */}
          

          {/* Sign up and sign in buttons */}
          <div className="hidden lg:flex gap-3 items-center">
            <div className="hidden lg:block text-black">
            <a href="">999999999</a>
          </div>
            <button className="bg-gradient-to-bl from-[#007BFF] to-[#004C99] text-white rounded-md md:h-9 md:w-24">
              Sign Up
            </button>
            <button className="bg-gradient-to-bl from-[#007BFF] to-[#004C99] text-white rounded-md md:h-9 md:w-24">
              Sign In
            </button>
          </div>
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
    
<div className="font-Montserrat h-[22vh] px-4 bg-[#021F3C] flex justify-start items-center ">
	<div className="container md:w-[75vw]  md:pl-25 ">
		<form>
			<h1 className="font-Montserrat md:font-bold text-2xl text-white md:text-4xl pt-4 ">Find Your Dream Job Here </h1>
				<div className="mt-5 flex items-center outline-2 outline-white rounded-3xl overflow-hidden px-2 py-1 justify-between">
					<input className="text-base text-white flex-grow outline-none px-2 " type="text" placeholder="Search job , company or skills" />
					<div className="ms:flex items-center px- rounded-lg space-x-4 mx-auto ">
						
						<button className="bg-white text-[#004C99]  rounded-3xl md:px-6 md:py-2 px-2 py-1 ">find jobs</button>
					</div>
				</div>
		</form>
	</div>
</div>
    </div>
  )
}

export default Header2