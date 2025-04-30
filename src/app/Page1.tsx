"use client";

import React from "react";
import { useState, useEffect } from "react";
import api from "./services/api_service";
import { log } from "console";
const Page1 = () => {
  interface Data {
    name: string;
    description: string;
    image_url: string;
    url: string;
  }
  const [data, setData] = useState<Data[]>([
    { name: "", description: "", image_url: "", url: "" },
  ]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.getHotHiring();
      const result = await response.json();
      console.log(result);
      setData(result);
    }
    fetchData();
  }, []);
  return (
    <div className=" w-full pb-10">
      <div
        id="Hothiring"
        className="h-[25vh] md:h-[60vh] w-full pt-10 flex flex-col justify-center items-center"
      >
        <h1 className="pb-10  text-center md:text-3xl font-Montserrat font-bold text-blue-600">
          {" "}
          HOT HIRING
        </h1>

        <div className="bg-[url({/hirebg.jpeg})] bg-cover bg-center h-full w-[95vw] rounded-xl">
          <div></div>
          <div className="h-full w-full">
            <div className="h-full opacity-0 flex justify-between items-end hover:opacity-100 overflow-hidden rounded-2xl text-white font-Montserrat w-full ">
              <div className="bg-black opacity-30 h-full w-full"></div>
              <div className="absolute w-[90vw] px-20 py-10 flex justify-between">
                <div>
                  <h1 className="font-bold text-3xl">{data[0].name}</h1>
                  <p>{data[0].description}</p>
                </div>

                <button className="hover:bg-linear-to-bl from-[#007BFF] to-[#004C99] text-white text-lg font-bold border-2  rounded-md  h-12 w-[13vw]">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
