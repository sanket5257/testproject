"use client";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className=" min-h-screen bg-white w-full font-Montserrat text-lg">
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
              Employee Register
            </h1>

            {/* whatsapp number*/}
            <div className=" mb-2  font-Montserrat">
              <label
                htmlFor="whatsapp number"
                className="text-black text-lg font-medium"
              >
                whats app number
              </label>
              <input
                className="border-2 border-gray-400 mt-1 py-2 px-3 rounded-xl w-full text-black"
                type="text"
                id="Number"
                placeholder="Enter what's app number"
              />
            </div>

            {/* Email Address */}
            <div className="mb-2 font-Montserrat">
              <label htmlFor="email" className="text-black text-lg font-medium">
                Email
              </label>
              <input
                className="border-2 border-gray-400 mt-1 py-2 px-3 rounded-xl w-full text-black"
                type="email"
                id="Email"
                placeholder="Enter email address"
              />
            </div>

            {/* Password */}
            <div className=" mb-2 font-Montserrat">
              <label
                htmlFor="password"
                className="text-black text-lg font-medium"
              >
                Password
              </label>
              <input
                className="border-2 border-gray-400 mt-1 py-2 px-3 rounded-xl w-full text-black"
                type="password"
                id="Password"
                placeholder="Enter password"
              />
            </div>

            {/* Address */}
            <div className=" mb-2 font-Montserrat">
              <label
                htmlFor="address"
                className="text-black text-lg font-medium"
              >
                Address
              </label>
              <input
                className="border-2 border-gray-400 mt-1 py-2 px-3 rounded-xl w-full text-black"
                type="text"
                id="Address"
                placeholder="Enter Address"
              />
            </div>

            {/*contry state city*/}

            <div className="flex justify-between mt-1 items-center  font-Montserrat md:gap-4 gap-2 mb-4">
              <div className="">
                <label
                  htmlFor="contry"
                  className="text-black text-lg font-medium"
                >
                  Contry
                </label>

                <select
                  id="options"
                  name="Select Gender"
                  className="border-2 h-13 mt-1  rounded-2xl md:w-[12vw] w-[30vw] border-gray-400 text-gray-400"
                >
                  <option value="option1">Contry</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  <option value="option4">Option 4</option>
                </select>
              </div>
              <div className="">
                <label
                  htmlFor="state"
                  className="text-black text-lg font-medium"
                >
                  State
                </label>

                <select
                  id="options"
                  name="State"
                  className="border-2 h-13 mt-1  rounded-2xl md:w-[12vw] w-[30vw] border-gray-400 text-gray-400"
                >
                  <option value="option1">State</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  <option value="option4">Option 4</option>
                </select>
              </div>
              <div className="">
                <label
                  htmlFor="city"
                  className="text-black text-lg font-medium"
                >
                  City
                </label>

                <select
                  id="options"
                  name="Select Gender"
                  className="border-2 h-13 mt-1 rounded-2xl md:w-[12vw] w-[30vw] border-gray-400 text-gray-400"
                >
                  <option value="option1">City</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  <option value="option4">Option 4</option>
                </select>
              </div>
            </div>

            {/* Pin code */}

            <div className=" mb-2 font-Montserrat">
              <label
                htmlFor="password"
                className="text-black text-lg font-medium"
              >
                Pin code
              </label>
              <input
                className="border-2 border-gray-400 mt-1 py-2 px-3 rounded-xl w-full text-black"
                type="number"
                id="Pin code"
                placeholder="Enter Pin code"
              />
            </div>
            <div className="flex justify-between gap-4 items-center">
              <div>
                <div className=" mb-2 font-Montserrat">
                  <label
                    htmlFor="password"
                    className="text-black text-lg font-medium"
                  >
                    GST no. and document
                  </label>
                  <input
                    className="border-2 border-gray-400 mt-1 py-2 px-3 rounded-xl w-full text-black"
                    type="number"
                    id="GST no. and document"
                    placeholder="GST no."
                  />
                </div>
                <div className=" mb-2 font-Montserrat">
                  <label
                    htmlFor="password"
                    className="text-black text-lg font-medium"
                  >
                    Website link
                  </label>
                  <input
                    className="border-2 border-gray-400 mt-1 py-2 px-3 rounded-xl w-full text-black"
                    type="number"
                    id="Website link"
                    placeholder="Enter link here"
                  />
                </div>
              </div>
              <div>
                <div className=" mb-2 font-Montserrat">
                  <label
                    htmlFor="password"
                    className="text-black text-lg font-medium"
                  >
                    Pin code
                  </label>
                  <input
                    className="border-2 border-gray-400 mt-1 py-13 text-center rounded-xl w-full text-black"
                    type="img"
                    id="logo"
                    placeholder="Upload LOGO"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-4">
              <div className="flex justify-center items-center h-[10vh]">
                <a
                  href="/employer/employerregisterpage1"
                  className="bg-white text-[#004C99] flex items-center justify-center border border-[#004C99] rounded-md font-bold  md:h-11 h-15 w-[40vw] md:w-[20vw]"
                >
                  Previous
                </a>
              </div>
              <div className="flex justify-center items-center h-[10vh]">
                <button
                  type="submit"
                  className="bg-linear-to-bl from-[#007BFF] to-[#004C99] text-white rounded-md font-bold  md:h-11 h-15 w-[40vw] md:w-[20vw]"
                >
                  Register now
                </button>
              </div>
            </div>
            {/* Forgot Password Link */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
