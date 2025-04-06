"use client";
import React from "react";
import ResumeCard from "../components/ResumeCard";
import Image from "next/image";

const Page = () => {

  return (
    <div className="bg-white min-h-screen pb-10 text-black w-full font-Montserrat">
      <div className="flex min-h-screen bg-white pt-20 lg:pt-25 sm:pt-16 items-center justify-center">
        <div className="h-full md:w-[70vw] w-full shadow-2xl">
          <div className="md:text-lg text-sm text-gray-500 w-full flex flex-wrap items-center justify-evenly gap-4">
            <Image
              className="md:size-36 size-10 opacity-60"
              src="/account.png"
              alt=""
              width={0}
                    height={0}
            />
            <div>
              <h1 className="text-black font-bold text-xl mb-4">John Doe</h1>
              <div className="flex gap-2 pb-1">
                <Image
                  className="size-5"
                  src="/accountimg/location.png"
                  alt=""
                  width={0}
                    height={0}
                />
                <h3>Kolhapur</h3>
              </div>
              <div className="flex gap-2 pb-1">
                <Image
                  className="size-5"
                  src="/accountimg/gender.png"
                  alt=""
                  width={0}
                    height={0}
                />
                <h3>Male</h3>
              </div>
              <div className="flex gap-2 pb-1">
                <Image
                  className="size-5"
                  src="/accountimg/agegroup.png"
                  alt=""
                  width={0}
                    height={0}
                />
                <h3>22</h3>
              </div>
            </div>
            <div>
              <Image
                className="size-7 mb-4 ml-[12vw]"
                src="/accountimg/eyeborw.png"
                alt=""
                width={0}
                    height={0}
              />
              <div className="flex gap-2 pb-1">
                <Image className="size-5" src="/accountimg/email.png" alt="" 
                width={0}
                height={0}
                />
                <h3>johndoe@gmail.com</h3>
              </div>
              <div className="flex gap-2 pb-1">
                <Image
                  className="size-5"
                  src="/accountimg/whatsapp.png"
                  alt=""
                  width={0}
                    height={0}
                />
                <h3>+91 00000 00000</h3>
              </div>
              <div className="flex gap-2 pb-1">
                <Image
                  className="size-5"
                  src="/accountimg/construction.png"
                  alt=""
                  width={0}
                    height={0}
                />
                <h3>Job seeker</h3>
              </div>
            </div>
            <div className="border-dotted border-3 flex text-black justify-evenly flex-col items-center rounded-2xl md:w-[22vw] md:h-[18vh] h-[20vh] w-[70vw] border-blue-400">
              <h1>Resume.pdf</h1>
              <div className="flex w-full items-end justify-evenly">
                <button className="border-1 border-blue-500 h-10 w-32 text-[#004C99] rounded-xl">
                  Clear
                </button>
                <button className="border-1 border-blue-500 h-10 w-32 bg-[#004C99] text-white rounded-xl">
                  Upload
                </button>
              </div>
            </div>
          </div>
          <div id="about" className="text-gray-500 md:px-10 px-4 pt-4">
            <h1 className="text-start text-xl text-black font-bold">About</h1>
            <p className="md:text-lg">
              {" "}
              I'm John Doe, a dedicated professional from Kolhapur with a strong
              interest in [insert field or industry]. I am eager to apply my
              skills in [specific job/role] and contribute to a dynamic team.
              With a keen eye for detail and excellent problem-solving
              abilities.
            </p>
            <div className="relative hidden md:block bg-red-50 h-[17vh] mt-5 overflow-hidden w-full rounded-2xl">
              <Image
                className="object-cover h-full w-full"
                src="/accountimg/ai.jpeg"
                alt=""
                width={0}
                    height={0}
              />
              <h1 className="text-white text-3xl font-bold absolute bottom-15 px-10">
                BUILD YOUR RESUME WITH TEXTILE VOICE
              </h1>
            </div>
          </div>
          <ResumeCard />
        </div>

        <div
          id="sidebar"
          className="relative ml-2 bg-white w-[28vw] hidden md:block"
        >
          <Image className="pt-10 h-full w-full" src="/account.jpeg" alt="img" 
          width={0}
          height={0}
          />
          <ul className="pl-10 list-disc">
            <li className="pb-4">Complete your profile to get noticed!</li>
            <li className="pb-4">Fill in details for better job matches.</li>
            <li className="pb-4">A complete profile attracts employers.</li>
            <li className="pb-4">
              Increase your chances by updating your info.
            </li>
            <li className="pb-4">Employers prefer 100% completed profiles.</li>
            <li className="pb-4">Don’t miss out—finish your profile today!</li>
            <li className="pb-4">
              The more details, the better the job offers!
            </li>
            <li className="pb-4">
              Keep your profile updated for new opportunities.
            </li>
          </ul>
        </div>
      </div>
        
      {/* Sidebar Component */}
      {/* {isSidebarOpen && (
        <div className="">
          <Sidebar />
          <button
            className="absolute top-5 right-5 text-black text-2xl"
            onClick={() => setIsSidebarOpen(false)}
          ></button>
        </div>
      )} */}
    </div>
  );
};

export default Page;
