import React from "react";
import Header from "../components/Header";

const Hero = () => {
  return (
    <div className="h-screen w-full relative">
      <Header />
      <div className="h-screen relative w-full bg-cover bg-center bg-[url(/page1bg.jpeg)] backdrop-blur-3xl">
        <div className="w-full h-full bg-opacity-50 backdrop-blur-sm">
          {/* Content inside Hero with backdrop blur */}
          <div className="relative h-screen w-full text-white">
            <div className="absolute  h-[50vh] w-full top-20 flex justify-center flex-col items-center">
              <h1 className="text-6xl font-Montserrat ">
                <span className="text-blue-600 font-bold">Textile</span>Voice
              </h1>
              <h1 className="mt-4 text-xl font-Montserrat">
                Bridging the gap between textile talent and industry leaders.
              </h1>
              <h1 className=" font-Montserrat text-xl">
                Find your perfect opportunity today!
              </h1>
            </div>

            <div id="login" className=" h-[35vh] flex justify-evenly absolute bottom-18 w-full ">
              <div id="studentlogin" className=" ml-16 bg-cover opacity-70 flex  flex-col gap-4 items-center justify-center pt-4 rounded-lg border-2 border-white h-full w-[40vw] bg-[url(/loginbg.jpeg)]">
                <img className="size-24" src="./studenticon.svg" alt="" />
                <h1 className="font-Montserrat font-bold text-3xl">
                  Looking for a Job?
                </h1>
                <div className="flex gap-6 opacity-100">
                  <button className=" border-3 font-bold text-2xl text-white rounded-md  h-[7vh] w-[18vw]">
                    sign in{" "}
                  </button>
                  <button className=" border-3 font-bold text-2xl  text-white rounded-md  h-[7vh] w-[18vw]">
                    sign up{" "}
                  </button>
                </div>
              </div>
              <div id="Hrlogin" className="mr-16 bg-cover opacity-70 flex  flex-col gap-4 items-center justify-center pt-4 rounded-lg border-2 border-white h-full w-[40vw] bg-[url(/loginbg.jpeg)]">
                <img className="size-24" src="./studenticon.svg" alt="" />
                <h1 className="font-Montserrat font-bold text-3xl opacity-100">
                Looking To Hire?
                </h1>
                <div className="flex gap-6 opacity-100">
                  <button className=" border-3 font-bold text-2xl text-white rounded-md  h-[7vh] w-[18vw]">
                    sign in{" "}
                  </button>
                  <button className=" border-3 font-bold text-2xl  text-white rounded-md  h-[7vh] w-[18vw] opacity-100">
                    sign up{" "}
                  </button>
                </div>
              </div>            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
