import React from "react";
import Header from "../components/Header";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-screen w-full relative "> {/* Added overflow-x-hidden */}
      <Header />
      <div className="h-screen relative w-full overflow-hidden bg-cover bg-center bg-[url(/page1bg.jpeg)] backdrop-blur-3xl">
        <div className="w-full bg-opacity-50 backdrop-blur-sm">
          {/* Content inside Hero with backdrop blur */}
          <div className="relative   w-full text-white">
            {/* Main Title Section */}
            <div className="absolute top-50 flex justify-center flex-col items-center  w-full">
              <h1 className="md:text-6xl text-3xl font-Montserrat">
                <span className="text-blue-600 font-bold">Textile</span>Voice
              </h1>
              <h2 className="mt-4 md:text-xl text-[3vw] font-Montserrat">
                Bridging the gap between textile talent and industry leaders.
              </h2>
              <h3 className="font-Montserrat md:text-xl text-[3vw]">
                Find your perfect opportunity today!
              </h3>

              <div
              id="login"
              className=" pt-10 md:pt-20  flex flex-wrap gap-4  md:justify-evenly justify-center items-center w-full"
            >
              {/* Student Login */}
              <div
                id="studentlogin"
                className=" bg-cover opacity-70 flex flex-col gap-4 items-center justify-center py-4  rounded-lg border-2 border-white bg-[url(/loginbg.jpeg)]"
              >
                <img className="md:size-24 size-20" src="./studenticon.svg" alt="Student Icon" />
                <h2 className="font-Montserrat font-bold text-2xl">
                  Looking for a Job?
                </h2>
                <div className="flex pb-4 md:pb-0 gap-6 opacity-100 px-4">
                  <button className="border-3 font-bold md:text-2xl text-white rounded-md px-15 py-1">
                    Sign In
                  </button>
                  <Link href="/Signup" className="border-3 font-bold flex justify-center items-center md:text-2xl text-white rounded-md px-15 py-1">
                    Sign Up
                  </Link>
                </div>
              </div>

              {/* HR Login */}
              <div
                id="Hrlogin"
                className="bg-cover opacity-70 flex flex-col gap-4 items-center justify-center py-4 rounded-lg border-2  border-white  bg-[url(/loginbg.jpeg)]"
              >
                <img className="md:size-24 size-20" src="./studenticon.svg" alt="HR Icon" />
                <h2 className="font-Montserrat font-bold text-2xl opacity-100">
                  Looking to Hire?
                </h2>
                <div className="flex gap-6 pb-4 md:pb-0 opacity-100 px-4">
                  <button className="border-3 font-bold md:text-2xl text-white rounded-md px-15 py-1">
                    Sign In
                  </button>
                  <button className="border-3 font-bold flex justify-center items-center md:text-2xl text-white rounded-md px-15 py-1">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>

            </div>

            {/* Login and Signup Section */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
