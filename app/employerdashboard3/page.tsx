"use client";
import Header2 from "@/components/Header2";
import React, { useState } from "react";

const Page = () => {
  const [filters, setFilters] = useState({ jobType: "", location: "", sortBy: "new" });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Example job data
  const appliedJobs = [
    {
        company:'google',
      jobTitle: 'Senior Product Manager',
      location: 'Pune, Maharashtra',
      jobType: 'Full Time',
      postedDate: 'March 14, 2025',
      detailsLink: '#',
    },
    {
        company:'google',
      jobTitle: 'Senior Product Manager',
      location: 'Pune, Maharashtra',
      jobType: 'Full Time',
      postedDate: 'March 14, 2025',
      detailsLink: '#',
    },
    {
        company:'google',
      jobTitle: 'Senior Product Manager',
      location: 'Pune, Maharashtra',
      jobType: 'Full Time',
      postedDate: 'March 14, 2025',
      detailsLink: '#',
    },
    {
        company:'google',
      jobTitle: 'Senior Product Manager',
      location: 'Pune, Maharashtra',
      jobType: 'Full Time',
      postedDate: 'March 14, 2025',
      detailsLink: '#',
    },
    {
        company:'google',
      jobTitle: 'Software Engineer',
      location: 'Bangalore, Karnataka',
      jobType: 'Part Time',
      postedDate: 'March 12, 2025',
      detailsLink: '#',
    },
    {
        company:'google',
      jobTitle: 'Senior Product Manager',
      location: 'Pune, Maharashtra',
      jobType: 'Full Time',
      postedDate: 'March 14, 2025',
      detailsLink: '#',
    },
    {
        company:'google',
      jobTitle: 'Senior Product Manager',
      location: 'Pune, Maharashtra',
      jobType: 'Full Time',
      postedDate: 'March 14, 2025',
      detailsLink: '#',
    },
    {
        company:'google',
      jobTitle: 'Software Engineer',
      location: 'Bangalore, Karnataka',
      jobType: 'Part Time',
      postedDate: 'March 12, 2025',
      detailsLink: '#',
    },
    // Add more job data as needed
  ];

  // Sorting logic
  const sortedJobs = [...appliedJobs].sort(() => {
    // if (filters.sortBy === "a-z") return a.title.localeCompare(b.title);
    // if (filters.sortBy === "z-a") return b.title.localeCompare(a.title);
    return 0;
  });

  return (
    <>
      <div>
        {/* Pass `setIsFilterOpen` as a prop to Header3 */}
        <Header2 />
      </div>
      <div className="flex flex-col font-Montserrat md:flex-row w-full min-h-screen  bg-white text-black">
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
          <div className="mb-4 flex flex-col gap-2">
            <label className="block font-bold text-lg  text-black">Filter</label>
            <div className="flex flex-col">
              {["Full-time", "Part-time", "Contract"].map((type) => (
                <label key={type} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="jobType"
                    value={type}
                    className="mr-2"
                    onChange={(e) => setFilters({ ...filters, jobType: e.target.value })}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

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
        <div className="w-full md:w md:pl-16 p-6">
          <div className="flex gap-2 justify-center items-center md:justify-start md:pl-20 ">
            <img
              src="./filter.png"
              className="md:hidden size-8 border p-1.5 rounded "
              onClick={() => setIsFilterOpen(true)}
              alt="Filter"
            />
            <div className="flex gap-3  items-center justify-center">
            <h2 className="text-xl font-bold ">For You</h2>
              <h3 className="border rounded-xl text-sm p-2">153 found</h3>
            </div>
          </div>
          
          <div className="flex pt-6 flex-wrap justify-center gap-5 items-center">
            {sortedJobs.map((job, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-between items-center p-2 md:w-[16.5vw] md:h-[42vh] h-[50vh] w-[70vw] bg-white shadow-xl rounded-lg border border-gray-300"
                >
                    <div className='bg-blue-100 rounded-xl w-full h-full p-2'>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-1'>
                            <img className='size-8' src="./google.svg" alt="company logo" />
                            <p className="text-sm text-gray-600 mt-2">{job.company}</p>
                            </div>
                            <div className='flex gap-1'>
                                <div className='bg-white flex justify-center items-center size-8 rounded-full'>
                                    <img className='size-7' src="./save.svg" alt="save" />
                                </div>
                                <div className='bg-white flex justify-center items-center size-8 rounded-full'>
                                    <img  className='size-7' src="./save.svg" alt="save" />
                                </div>
                            </div>
                        </div>
                        <div className=' h-[8vh]'>
                        <h2 className="text-xl font-Montserrat font-semibold text-black">
                    {job.jobTitle}
                  </h2>
                        </div>
                  
                  <p className="text-sm text-gray-600 mt-2">{job.location}</p>
                  <div className='h-[10vh] flex-wrap flex justify-start gap-2 items-center'>
                  <p className="text-sm border-2 px-3 py-1 rounded-xl inline-block text-gray-600 mt-2">{job.jobType}</p>
                  <p className="text-sm border-2 px-3 py-1 rounded-xl inline-block text-gray-600 mt-2">{job.jobType}</p>
                  <p className="text-sm border-2 px-3 py-1 rounded-xl inline-block text-gray-600 mt-2">{job.jobType}</p>

                  </div>

                  <div className='flex justify-between h-[4vh] w-full mt-2 items-end' >
                  <p className="text-sm  text-gray-600">Posted Date: {job.postedDate}</p>

                  </div>
                  
                  </div>
                  <a
                    href={job.detailsLink}
                    className="mt-2 w-full text-center py-2 bg-[#004C99] text-white text-sm font-medium rounded-md hover:bg-blue-700"
                  >
                    See Details
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
