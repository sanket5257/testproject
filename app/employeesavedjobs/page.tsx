"use client"
import Header3 from '../../components/Header3';
import React, { useState } from 'react';

const Page = () => {
  const [filters, setFilters] = useState({ jobType: "", location: "", sortBy: "new" });
    const [isFilterOpen, setIsFilterOpen] = useState(false);
  
    // Example job data
    const appliedJobs = [
      {
        id: 1,
        title: "Frontend Developer",
        company: "Tech Corp",
        location: "Remote",
        expireddate: "Applied on January 30, 2025",
        companylogo: "./twitter.png",
      },
      {
        id: 2,
        title: "Backend Engineer",
        company: "Code Labs",
        location: "New York",
        expireddate: "Applied on January 30, 2025",
        companylogo: "./google.svg",
      },
      {
        id: 3,
        title: "UI/UX Designer",
        company: "Design Studio",
        location: "San Francisco",
        expireddate: "Applied on January 30, 2025",
        companylogo: "./apple.png",
      },
    ];
  
    // Sorting logic
    const sortedJobs = [...appliedJobs].sort((a, b) => {
      if (filters.sortBy === "a-z") return a.title.localeCompare(b.title);
      if (filters.sortBy === "z-a") return b.title.localeCompare(a.title);
      return 0;
    });

  return (
   <>
   <div>
   <Header3 setIsSidebarOpen={""} />

   </div>
   <div className="flex flex-col font-Montserrat md:flex-row w-full min-h-screen pt-16 bg-white text-black">
        
        {/* Mobile Button to Open Filter & Sort */}
        
  
        {/* Sidebar Filter & Sort (Hidden on Desktop) */}
        <div 
          className={`fixed inset-0 bg-whit w-3/4 flex flex-col gap-4 items-start pl-10 pt-10 rounded-2xl bg-white  border shadow-lg transition-transform transform ${
            isFilterOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-10  md:mt-10  md:w-[15vw] md:relative`}
        >
          <button 
            className="md:hidden text-red-500 font-bold text-lg mt-10"
            onClick={() => setIsFilterOpen(false)}
          >
            ✖ Close
          </button>
          <h2 className="text-xl text-[#004C99] font-bold mb-4">Filter & Sort</h2>
          
          {/* Job Type Radio Buttons */}
          

    
  
          {/* Sorting Options */}
          <div>
            <label className="block font-bold text-lg text-black">Sort</label>
            <div className="flex gap-2 pt-3  flex-col">
              {["new", "old", "a-z", "z-a"].map((sortType) => (
                <label key={sortType} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="sortBy"
                    value={sortType}
                    className="mr-2"
                    onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                  />
                  {sortType.toUpperCase()}
                </label>
              ))}
            </div>
          </div>
        </div>
  
        {/* Right Side: Applied Jobs */}
        <div className="w-full md:w-3/4 md:p-18 p-6">
        <div className='flex gap-2 justify-center items-center md:justify-start'>
        <img src='./filter.png'
          className="md:hidden size-8 rounded mb-4"
          onClick={() => setIsFilterOpen(true)}
        >
        </img>
        <h2 className="text-4xl font-bold mb-4 font-Montserrat">Saved Jobs</h2>

        </div>
          <h3 className='font-Montserrat mb-4 text-[#4F7594] text-center md:text-start'>Saved jobs—apply when youre ready</h3>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            {sortedJobs.map((job) => (
              <div key={job.id} className="p-4 flex justify-between items-center bg-[#F7FAFA] border shadow-lg rounded-lg">
             <div className='flex items-center justify-center'>
             <img className='size-20 p-4' src={job.companylogo} alt="" />
                <div>
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-[#4F7594]">{job.expireddate}</p>


                </div>
             </div>
             <div>
                <h1 className='border bg-white rounded-lg px-3 hidden'>pending</h1>
             </div>
              </div>
            ))}
          </div>
        </div>
      </div>
   
   </>
    
  );
};

export default Page;
