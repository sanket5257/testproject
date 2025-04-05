import React from "react";
import Institutes from "./components/Institutes";

const Page3 = () => {
  return (
    <div className=" w-full pt-10 md:pt-20">
      <div
        id="upcoming-Exhibition"
        className="md:h-[60vh] h-[20vh] w-full pt-10 flex flex-col justify-center items-center"
      >
        <h1 className="pb-10  text-center md:text-3xl font-Montserrat font-bold text-blue-600">
          {" "}
          Upcoming Exhibition
        </h1>

        <div className="bg-[url(/exhibition.jpeg)] bg-cover bg-center h-full w-[95vw] rounded-xl">
          <div className="h-full  flex justify-between items-end pb-12 pl-14 pr-14 text-white font-Montserrat w-full opacity-0 hover:opacity-100">
            <div>
              <h1 className="font-bold text-3xl">Exhibition NAME</h1>
              <p>
                join our dynamic team as software engineer,where you will be
                resposible for devloping
              </p>
            </div>

            <button className="hover:bg-linear-to-bl from-[#007BFF] to-[#004C99] text-white text-lg font-bold border-2  rounded-md  h-12 w-[13vw]">
              Details
            </button>
          </div>
        </div>
      </div>

      <Institutes />
    </div>
  );
};

export default Page3;
