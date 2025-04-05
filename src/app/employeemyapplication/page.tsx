"use client";
import Header3 from "../components/Header3";
import React, { useState } from "react";
import Image from "next/image";

const Page = () => {
  const [filters, setFilters] = useState({
    jobType: "",
    location: "",
    sortBy: "new",
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Example job data
  const appliedJobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Corp",
      location: "Remote",
      applieddate: "Applied on January 30, 2025",
      companylogo: "./twitter.png",
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "Code Labs",
      location: "New York",
      applieddate: "Applied on January 30, 2025",
      companylogo: "./google.svg",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Design Studio",
      location: "San Francisco",
      applieddate: "Applied on January 30, 2025",
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
        {/* Pass `setIsFilterOpen` as a prop to Header3 */}
        <Header3 setIsSidebarOpen={setIsFilterOpen} />
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
          <h2 className="text-xl text-[#004C99] font-bold mb-4">
            Filter & Sort
          </h2>

          {/* Job Type Radio Buttons */}
          <div className="mb-4 flex flex-col gap-2">
            <label className="block font-bold text-lg  text-black">
              Filter
            </label>
            <div className="flex flex-col">
              {["Full-time", "Part-time", "Contract"].map((type) => (
                <label key={type} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="jobType"
                    value={type}
                    className="mr-2"
                    onChange={(e) =>
                      setFilters({ ...filters, jobType: e.target.value })
                    }
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
                    onChange={(e) =>
                      setFilters({ ...filters, sortBy: e.target.value })
                    }
                  />
                  {sortType.toUpperCase()}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Applied Jobs */}
        <div className="w-full md:w-3/4 md:p-18 p-6">
          <div className="flex gap-2 justify-center items-center md:justify-start">
            <Image
              src="./filter.png"
              className="md:hidden size-8 border p-1.5 rounded mb-4"
              onClick={() => setIsFilterOpen(true)}
              alt="Filter"
              width={0}
                    height={0}
                    fill // Automatically adjusts to parent width and height
                    style={{ objectFit: "contain" }} // Adjusts how the image scales
            />
            <h2 className="text-4xl font-bold mb-4">My Applications</h2>
          </div>
          <h3 className="font-Montserrat mb-4 text-[#4F7594]">
            You can track the jobs youve applied to here
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            {sortedJobs.map((job) => (
              <div
                key={job.id}
                className="p-4 flex justify-between items-center bg-[#F7FAFA] border shadow-lg rounded-lg"
              >
                <div className="flex items-center justify-center">
                  <Image
                    className="size-20 p-4"
                    src={job.companylogo}
                    alt={job.company}
                    width={0}
                    height={0}
                    fill // Automatically adjusts to parent width and height
                    style={{ objectFit: "contain" }} // Adjusts how the image scales
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <p className="text-[#4F7594]">{job.applieddate}</p>
                  </div>
                </div>
                <div>
                  <h1 className="border bg-white rounded-lg px-3">pending</h1>
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
