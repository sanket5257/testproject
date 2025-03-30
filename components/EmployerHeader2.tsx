"use client";
import React, { useState } from "react";

const EmployerHeader2 = () => {
    const [isOpen, setIsOpen] = useState(false);



  return (
    <div className="bg-white w-full font-Montserrat overflow-x-hidden">
   <div className="h-[7vh] bg-white w-full flex justify-between items-center px-6 md:px-10">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl text-black font-Montserrat font-light">
            <span className="text-blue-600 font-medium">Textile</span>Voice
          </h1>
        </div>
        <h1 className='font-bold cursor-pointer text-black hidden md:block'>Employee Search</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <img className='size-8 cursor-pointer' src="../bell.svg" alt="Notifications" />
          <img className='size-8 cursor-pointer' src="../user.svg" alt="User"  />
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <span className="text-2xl">✖</span>
            ) : (
              <span className="text-2xl text-[#004C99]">☰</span>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-white shadow-lg py-4">
          <h1 className='font-bold cursor-pointer py-2 text-black'>Account</h1>
          <img className='size-12 cursor-pointer py-2' src="./bell.svg" alt="Notifications" />
          <img className='size-12 cursor-pointer py-2' src="./user.svg" alt="User" />
        </div>
      )}
  
<div className="font-Montserrat h-[22vh] px-4 bg-[#021F3C] flex justify-start items-center ">
  <div className="container md:w-[75vw]  md:pl-25 ">
      <form>
          <h1 className="font-Montserrat md:font-bold text-2xl text-white md:text-4xl pt-4 ">Search a Employee</h1>
              <div className="mt-5 flex items-center outline-2 outline-white rounded-3xl overflow-hidden px-2 py-1 justify-between">
                  <input className="text-base text-white flex-grow outline-none px-2 " type="text" placeholder="Search job role or Skills" />
                  <div className="ms:flex items-center px- rounded-lg space-x-4 mx-auto ">
                      
                      <button className="bg-white text-[#004C99]  rounded-3xl md:px-6 md:py-2 px-2 py-1 ">find jobs</button>
                  </div>
              </div>
      </form>
  </div>
</div>
  </div>

  )
}

export default EmployerHeader2
