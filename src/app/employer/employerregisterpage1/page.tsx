"use client";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className=" w-full font-Montserrat text-lg">
      <div className=" bg-white md:flex md:pt-[15vh] pt-[10vh]">
        <div className="relative overflow-hidden md:flex md:w-1/2 bg-white justify-around items-center">
          <Image src="../employerimg/signupbg.jpeg" alt="" 
          width={0}
          height={0}
          fill // Automatically adjusts to parent width and height
          style={{ objectFit: "contain" }} // Adjusts how the image scales
          />
        </div>
        <div className="flex md:w-1/2 justify-center md:px-20 px-4 items-center bg-white">
          <form method="post" className="bg-white ">
            <h1 className="font-bold text-center font-Montserrat md:text-3xl text-xl text-blue-800 mb-1">
              Employer Register
            </h1>

            {/* Full Name Fields */}
            <label
              htmlFor="Name"
              className="text-black font-medium text-lg font-Montserrat"
            >
              Name
            </label>

            <div className="flex justify-center mt-1 items-center font-Montserrat md:gap-4 gap-2 mb-2">
              <div className="">
                <input
                  className="border-2 border-gray-400 placeholder:text-sm py-2 px-3 rounded-xl w-full text-black"
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                />
              </div>
              <div className="">
                <input
                  className="border-2 border-gray-400 placeholder:text-sm py-2 px-3 rounded-xl w-full text-black"
                  type="text"
                  id="middleName"
                  placeholder="Middle Name"
                />
              </div>
              <div className="">
                <input
                  className="border-2 border-gray-400 placeholder:text-sm py-2 px-3 rounded-xl w-full text-black"
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                />
              </div>
            </div>

            {/* Designationr*/}
            <div className=" mb-2  font-Montserrat">
              <label
                htmlFor="whatsapp number"
                className="text-black text-lg font-medium"
              >
                Designation
              </label>
              <input
                className="border-2 border-gray-400 mt-1 py-2 px-3 rounded-xl w-full text-black"
                type="text"
                id="Designation"
                placeholder="Hr /Excretive dropdowns"
              />
            </div>

            {/*Company Name */}
            <div className="mb-2 font-Montserrat">
              <label htmlFor="email" className="text-black text-lg font-medium">
                Company Name
              </label>
              <input
                className="border-2 border-gray-400 mt-1 py-2 px-3 rounded-xl w-full text-black"
                type="text"
                id="Company Name"
                placeholder="Enter company name"
              />
            </div>

            {/*Company Domain*/}
            <div className="mb-2 font-Montserrat">
              <div className="">
                <label
                  htmlFor="email"
                  className="text-black text-lg font-medium"
                >
                  Company Domain
                </label>

                <select
                  id="options"
                  name="Select job"
                  className="border-2 py-3 rounded-2xl w-full border-gray-400 text-gray-400"
                >
                  <option value="option1">Select company domain</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  <option value="option4">Option 4</option>
                </select>
              </div>
            </div>

            {/*Company Details */}

            <div className="mb-2 font-Montserrat">
              <label htmlFor="email" className="text-black text-lg font-medium">
                Company Details
              </label>
              <input
                className="border-2 border-gray-400 mt-1 py-2 px-3 rounded-xl w-full text-black"
                type="text"
                id="Company Details"
                placeholder="Enter Company Details"
              />
            </div>
            {/* About Company */}
            <div className="mb-2 font-Montserrat">
              <label htmlFor="email" className="text-black text-lg font-medium">
                About Company
              </label>
              <input
                className="border-2 border-gray-400 mt-1 py-2 px-3 rounded-xl w-full text-black"
                type="text"
                id="About Company"
                placeholder="Enter About Company"
              />
            </div>

            {/* No. of employee*/}
            <div className="mb-2 font-Montserrat">
              <label htmlFor="email" className="text-black text-lg font-medium">
                No. of employee
              </label>
              <input
                className="border-2 border-gray-400 mt-1 py-2 px-3 rounded-xl w-full text-black"
                type="number"
                id="No. of employee"
                placeholder="Enter No. of employee"
              />
            </div>

            <div className="flex justify-center items-center h-[10vh]">
              <a
                href={"/employer/employerregisterpage2"}
                className="bg-linear-to-bl from-[#007BFF] flex items-center justify-center to-[#004C99] text-white rounded-md font-bold  md:h-11 h-15 w-[40vw] md:w-[20vw]"
              >
                Next
              </a>
            </div>

            {/* Forgot Password Link */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
