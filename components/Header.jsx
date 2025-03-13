import React from "react";

const Header = () => {
  return (
    <div className="bg-white w-full z-50 absolute">
      <div className=" h-[7vh]  bg-white w-full flex justify-center items-center ">
        <div className="h-full flex items-center justify-start pl-10 w-1/3 ">
          <h1 className="text-2xl text-black font-Montserrat font-light">  <span className="text-blue-600 font-medium"> Textile</span>Voice</h1>
        </div>
        <div className=" h-full text-black flex justify-evenly   items-center  w-1/3">
          <h1>Home</h1>
          <h1>Artical & Blog</h1>
          <h1>community</h1>
          <h1>Exhibitions</h1>
        </div>
        <div className=" h-full w-1/3 flex gap-3 items-center justify-end pr-10 ">
        <a className="text-black" href=""> 999999999</a>
          <button className=" bg-linear-to-bl from-[#007BFF] to-[#004C99] text-white rounded-md  h-9 w-24">
            sign up{" "}
          </button>
          <button className="bg-linear-to-bl from-[#007BFF] to-[#004C99] text-white rounded-md  h-9 w-24">
            sign in{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
