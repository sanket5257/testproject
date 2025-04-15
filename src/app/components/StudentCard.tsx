"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; // you can use any icon lib or your own SVG

const StudentCard = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const student = [
    {
      name: "employee1",
      position: "UI/UX Designer",
      company: "TATA",
      platform: "TextileVoice",
      salary: "17 LPA",
    },
    {
      name: "employee2",
      position: "Software Engineer",
      company: "Google",
      platform: "CampusRecruit",
      salary: "20 LPA",
    },
    {
      name: "employee1",
      position: "Data Scientist",
      company: "Amazon",
      platform: "TechHire",
      salary: "22 LPA",
    },
    {
      name: "employee2",
      position: "Full Stack Developer",
      company: "Microsoft",
      platform: "JobPortal",
      salary: "18 LPA",
    },
    {
      name: "employee1",
      position: "Data Scientist",
      company: "Amazon",
      platform: "TechHire",
      salary: "22 LPA",
    },
    {
      name: "employee2",
      position: "Full Stack Developer",
      company: "Microsoft",
      platform: "JobPortal",
      salary: "18 LPA",
    },
  ];

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
          {student.map((student, index) => (
            <div
              key={index}
              className="relative h-full flex-shrink-0 flex justify-between items-end rounded-2xl overflow-hidden text-white font-Montserrat md:w-[26vw] w-[70vw]"
            >
              <Image
                className="object-cover h-full w-full"
                src={`/${student.name}.jpeg`}
                alt={student.name}
                width={0}
                height={0}
              />
                <div className=" absolute h-full w-full opacity-0 hover:opacity-100">
                <div className=" w-full h-1/2 absolute bottom-0 bg-blue-600 opacity-80 flex flex-col items-center justify-center p-6">
                <h1 className="z-10 md:text-4xl font-bold">{student.salary}</h1>

                <p className="z-10 text-sm md:text-base text-center">
                  “I am {student.position}. I was placed through <span className="font-bold">{student.platform}</span> platform in{" "}
                  <span className="font-bold">{student.company}</span> with{" "}
                  <span className="font-bold">{student.salary}</span>”
                </p>

                <h1 className="z-10 mt-2 text-sm md:text-base font-bold">
                  ~{student.name}
                </h1>

                <button className="z-10 mt-2 text-white text-sm md:text-base font-bold border-2 rounded-md px-4 py-1">
                  See All Stories
                </button>
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
