"use client"
import React, { useState } from 'react';

const Header3 = ({ setIsSidebarOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, toggleSidebar] = useState(false);

  return (
    <div className="bg-white w-full shadow-xl absolute z-50">
      <div className="h-[7vh] bg-white w-full flex justify-between items-center px-6 md:px-10">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl text-black font-Montserrat font-light">
            <span className="text-blue-600 font-medium">Textile</span>Voice
          </h1>
        </div>
        <h1 className='font-bold cursor-pointer text-black hidden md:block'>Account</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <img className='size-8 cursor-pointer' src="./bell.svg" alt="Notifications" />
          <img className='size-8 cursor-pointer' src="./user.svg" alt="User" onClick={() => {
            toggleSidebar(!isSidebarOpen);
            setIsSidebarOpen(!isSidebarOpen);
          }} />
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
          <img className='size-12 cursor-pointer py-2' src="./user.svg" alt="User" onClick={() => {
            toggleSidebar(!isSidebarOpen);
            setIsSidebarOpen(!isSidebarOpen);
          }} />
        </div>
      )}
    </div>
  );
};

export default Header3;