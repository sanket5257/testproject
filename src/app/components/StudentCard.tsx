"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import api from "../services/api_service";
import { AxiosResponse } from "axios";

interface Data {
  student_name: string;
  student_image_url: string;
  package: string;
  tesimonial_text: string;
  ID: string;
}

const StudentCard = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response: AxiosResponse<Data[]> = await api.getStudentsPlaced();
        setData(response.data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    }
    fetchData();
  }, []);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="pt-4 px-4 w-full relative">
      <div
        id="students"
        className="w-full overflow-x-hidden md:pt-10 flex flex-col justify-center items-center"
      >
        <h1 className="pb-10 text-center md:text-4xl font-Montserrat font-bold text-blue-600">
          Students Placed Highest Packages
        </h1>

        {/* Slider buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-200"
        >
          <ChevronLeft className="text-blue-600 w-6 h-6" />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-200"
        >
          <ChevronRight className="text-blue-600 w-6 h-6" />
        </button>

        <div
          ref={scrollRef}
          className="md:h-[60vh] h-[30vh] w-full overflow-x-auto no-scrollbar flex pl-4 gap-4 items-center rounded-xl scroll-smooth"
        >
          {data.map((student) => (
            <div
              key={student.ID}
              className="relative h-full flex-shrink-0 flex justify-between items-end rounded-2xl overflow-hidden text-white font-Montserrat md:w-[26vw] w-[70vw]"
            >
              <Image
                className="object-cover h-full w-full"
                src={student.student_image_url}
                alt={student.student_name}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
              />
              <div className="absolute h-full w-full opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-1/2 absolute bottom-0 bg-blue-600 opacity-80 flex flex-col items-center justify-center p-6">
                  <h1 className="z-10 md:text-4xl font-bold">{student.package}</h1>
                  <p className="z-10 text-sm md:text-base text-center">
                    {student.tesimonial_text}
                  </p>
                  <h1 className="z-10 mt-2 text-sm md:text-base font-bold">
                    ~{student.student_name}
                  </h1>
                  {/* <button className="z-10 mt-2 text-white text-sm md:text-base font-bold border-2 rounded-md px-4 py-1">
                    See All Stories
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
