"use client";
import React, { useState } from 'react';
import Header3 from '@/components/Header3';
import Sidebar from "@/components/Sidebar";

const Page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className='bg-white min-h-screen text-black w-full font-Montserrat'>
      <Header3 setIsSidebarOpen={setIsSidebarOpen} />
      <div className='flex bg-white pt-20 sm:pt-16 items-center justify-center'>
        <div className='h-full md:w-[70vw] w-full shadow-2xl'>
          <div className='md:text-lg text-sm text-gray-500 w-full flex flex-wrap items-center justify-evenly gap-4'>
                <div className='rounded-full overflow-hidden'>
                <img className='md:size-36 size-10 ' src="../employerimg/employeraccount.jpeg" alt="" />

                </div>
            <div>
              <h1 className='text-black font-bold text-xl mb-4'>John Doe</h1>
              <div className='flex gap-2 pb-1'>
                <img className='size-5' src="../accountimg/location.png" alt="" />
                <h3>Kolhapur</h3>
              </div>
              <div className='flex gap-2 pb-1'>
                <img className='size-5' src="../accountimg/gender.png" alt="" />
                <h3>Male</h3>
              </div>
              <div className='flex gap-2 pb-1'>
                <img className='size-5' src="../accountimg/agegroup.png" alt="" />
                <h3>22</h3>
              </div>
            </div>
            <div>
              <img className='size-7 mb-4 ml-[12vw]' src="../accountimg/eyeborw.png" alt="" />
              <div className='flex gap-2 pb-1'>
                <img className='size-5' src="../accountimg/email.png" alt="" />
                <h3>johndoe@gmail.com</h3>
              </div>
              <div className='flex gap-2 pb-1'>
                <img className='size-5' src="../accountimg/whatsapp.png" alt="" />
                <h3>+91 00000 00000</h3>
              </div>
              <div className='flex gap-2 pb-1'>
                <img className='size-5' src="../accountimg/construction.png" alt="" />
                <h3>Job seeker</h3>
              </div>
            </div>
            
          </div>
          <div id="about" className='text-gray-500 md:px-10 px-4 pt-4'>
            <h1 className='text-start text-xl text-black font-bold'>About</h1>
            <p className='md:text-lg'> Im John Doe, a dedicated professional from Kolhapur with a strong interest in [insert field or industry]. I am eager to apply my skills in [specific job/role] and contribute to a dynamic team. With a keen eye for detail and excellent problem-solving abilities.</p>
            
          </div>
        </div>

        <div id='sidebar' className='relative h-full ml-2 bg-white w-[28vw] hidden md:block'>
          
        </div>
      </div>

      {/* Sidebar Component */}
      {isSidebarOpen && (
        <div className="">
          <Sidebar />
          <button
            className="absolute top-5 right-5 text-black text-2xl"
            onClick={() => setIsSidebarOpen(false)}
          >
            
          </button>
        </div>
      )}
    </div>
  );
};

export default Page;
