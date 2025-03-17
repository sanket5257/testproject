import React from "react";
import Header from "../components/Header";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-screen w-full relative "> {/* Added overflow-x-hidden */}
      <Header />
      <div className="h-screen relative w-full overflow-hidden bg-cover bg-center bg-[url(/page1bg.jpeg)] backdrop-blur-3xl">
        <div className="w-full h-full bg-opacity-50 backdrop-blur-sm">
          {/* Content inside Hero with backdrop blur */}
          <div className="relative  h-screen w-full text-white">
            {/* Main Title Section */}
            <div className="absolutetop-0 md:top-20 flex justify-center flex-col items-center h-[50vh] w-full">
              <h1 className="md:text-6xl text-3xl font-Montserrat">
                <span className="text-blue-600 font-bold">Textile</span>Voice
              </h1>
              <h2 className="mt-4 md:text-xl text-[3vw] font-Montserrat">
                Bridging the gap between textile talent and industry leaders.
              </h2>
              <h3 className="font-Montserrat md:text-xl text-[3vw]">
                Find your perfect opportunity today!
              </h3>
            </div>

            {/* Login and Signup Section */}
            <div
              id="login"
              className="h-[35vh] p-3 md:p-0 flex flex-col md:flex-row md:justify-evenly absolute md:bottom-18 bottom-[30vh] w-full"
            >
              {/* Student Login */}
              <div
                id="studentlogin"
                className="md:ml-16 bg-cover opacity-70 flex flex-col gap-4 items-center justify-center pt-4 m-2 md:m-0 rounded-lg border-2 border-white h-[40vh] md:w-[35vw] bg-[url(/loginbg.jpeg)]"
              >
                <img className="md:size-24 size-20" src="./studenticon.svg" alt="Student Icon" />
                <h2 className="font-Montserrat font-bold text-2xl">
                  Looking for a Job?
                </h2>
                <div className="flex pb-4 md:pb-0 gap-6 opacity-100">
                  <button className="border-3 font-bold md:text-2xl text-white rounded-md h-[5vh] w-[35vw] md:h-[6vh] md:w-[15vw]">
                    Sign In
                  </button>
                  <Link href="/Signup" className="border-3 font-bold flex justify-center items-center md:text-2xl text-white rounded-md h-[5vh] w-[35vw] md:h-[6vh] md:w-[15vw]">
                    Sign Up
                  </Link>
                </div>
              </div>

              {/* HR Login */}
              <div
                id="Hrlogin"
                className="md:mr-16 bg-cover opacity-70 flex flex-col gap-4 items-center justify-center pt-4 rounded-lg border-2 m-2 md:m-0 border-white h-[40vh] md:w-[35vw] bg-[url(/loginbg.jpeg)]"
              >
                <img className="md:size-24 size-20" src="./studenticon.svg" alt="HR Icon" />
                <h2 className="font-Montserrat font-bold text-2xl opacity-100">
                  Looking to Hire?
                </h2>
                <div className="flex gap-6 pb-4 md:pb-0 opacity-100">
                  <button className="border-3 font-bold md:text-2xl text-white rounded-md h-[5vh] w-[35vw] md:h-[6vh] md:w-[15vw]">
                    Sign In
                  </button>
                  <button className="border-3 font-bold flex justify-center items-center md:text-2xl text-white rounded-md h-[5vh] w-[35vw] md:h-[6vh] md:w-[15vw]">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
