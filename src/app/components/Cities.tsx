"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";

import api from "../services/api_service";
import { AxiosResponse } from "axios";

const Cities = () => {

  interface Data {
        city: string;
        image_url: string;
        url: string;
        ID:string;
        
      }
      
      const [data, setData] = useState([
        { city: "", image_url: "", url: "", ID: "" },
      ]);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const response: AxiosResponse<Data[]> = await api.getMajorCities();
          setData(response.data);
          console.log(data)
        } catch (error) {
          console.error("Error fetching top companies:", error);
        }
      }
      fetchData();
    }, [data])

  return (
    <div className="bg-white">
      <div
        id="Topcompanies"
        className="  bg-whit w-full pt-10 flex flex-col justify-center items-center"
      >
        <div className="h-full w-full ">
          <h1 className=" md:pt-10 text-center md:text-3xl font-Montserrat font-bold text-blue-500">
            Jobs In Major Cities
          </h1>
          <div className="flex h-full w-full justify-start md:justify-center overflow-x-auto  gap-6 items-center">
            {data.map((city) => {
              return (
                <div
                  key={city.ID}
                  className="flex flex-col justify-center shrink-0 items-center  overflow-hidden  border-black"
                >
                  <Image
                    className="size-30 md:size-50 rounded-xl shadow-xl"
                    src={city.image_url}
                    width={0}
                    height={0}
                    alt="company logo"
                  />
                  <h1 className="font-Montserrat text-[2.5vw] md:text-xl text-black font-bold pt-4">
                    {city.city}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cities;
