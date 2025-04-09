"use client";
import Header2 from "../components/Header2";
import React, { useState } from "react";
import Image from "next/image";

const Page = () => {
  type Job = {
    company: string;
    jobTitle: string;
    location: string;
    jobType: string;
    mode: string;
    experience: string;
    postedDate: string;
    detailsLink: string;
  };
  
  type Filters = {
    jobType: string[];
    industry: string[];
    experience: string[];
    salary: string[];
    mode: string[];
    posted: string[];
  };
  
  const [filters, setFilters] = useState<Filters>({
    jobType: [],
    industry: [],
    experience: [],
    salary: [],
    mode: [],
    posted: [],
  });
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const appliedJobs: Job[] = [
    {
      company: "Google",
      jobTitle: "Senior Product Manager",
      location: "Pune, Maharashtra",
      jobType: "Full Time",
      mode: "On site",
      experience: "Senior (5+ years)",
      postedDate: "March 14, 2025",
      detailsLink: "/jobdetails2",
    },
    {
      company: "Google",
      jobTitle: "Software Engineer",
      location: "Bangalore, Karnataka",
      jobType: "Part Time",
      mode: "Remote",
      experience: "Fresher (0-2 years)",
      postedDate: "March 12, 2025",
      detailsLink: "#",
    },
  ];
  
  const handleCheckboxChange = (category: keyof Filters, value: string) => {
    setFilters((prevFilters) => {
      const currentValues = prevFilters[category];
      return {
        ...prevFilters,
        [category]: currentValues.includes(value)
          ? currentValues.filter((v) => v !== value)
          : [...currentValues, value],
      };
    });
  };
  
  // Filtering logic
  const filteredJobs = appliedJobs.filter((job) => {
    return (
      (filters.jobType.length === 0 || filters.jobType.includes(job.jobType)) &&
      (filters.experience.length === 0 || filters.experience.includes(job.experience)) &&
      (filters.mode.length === 0 || filters.mode.includes(job.mode))
      // Add other filters as needed
    );
  });
  
  return (
    <>
      <Header2 />

      <div className="flex pb-10 flex-col font-Montserrat md:flex-row w-full min-h-screen bg-white text-black">
        {/* Filters Sidebar */}
        <div
          className={`fixed inset-0 flex flex-col gap-4 items-start pl-4 pt-10 rounded-2xl bg-white border shadow-lg transition-transform transform ${
            isFilterOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-10 md:mt-10 md:relative`}
        >
          <button
            className="md:hidden text-black font-bold text-lg mt-10"
            onClick={() => setIsFilterOpen(false)}
          >
            ✖ Close
          </button>

          <h2 className="text-xl font-medium mb-4">Filters</h2>

          {[ // Filter Section Configurations
            { label: "Industry", key: "industry", options: ["Ginning", "Spinning", "All 8/10 industry"] },
            { label: "Job Type", key: "jobType", options: ["Full Time", "Internship", "Freelance", "Contractual", "Part Time"] },
            { label: "Experience", key: "experience", options: ["Fresher (0-2 years)", "mid (2-5 years)", "Senior (5+ years)"] },
            { label: "Salary Range", key: "salary", options: ["under $ 1000", "$ 2500 - $ 5000", "$ 1000 - $ 2500", "Above $ 2500"] },
            { label: "On site/remote", key: "mode", options: ["On site", "hybrid", "Remote"] },
            { label: "Posted Date", key: "posted", options: ["1 week", "15 days", "30 days"] },
          ].map((section) => (
            <div key={section.key} className="mb-4 flex flex-col gap-2">
              <label className="block font-medium text-lg">{section.label}</label>
              <div className="flex flex-col gap-2">
                {section.options.map((type) => (
                  <label key={type} className="w-[15vw]">
                    <input
                      type="checkbox"
                      className="mr-3 size-3"
                      onChange={() => handleCheckboxChange(section.key as keyof Filters, type)}
                      />
                    {type}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Job Cards */}
        <div className="w-full md:pl-16 p-6">
          <div className="flex gap-2 justify-center items-center md:justify-start md:pl-20">
            <Image
              src="/filter.png"
              className="md:hidden size-8 border p-1.5 rounded cursor-pointer"
              onClick={() => setIsFilterOpen(true)}
              alt="Filter"
              width={32}
              height={32}
            />
            <div className="flex gap-3 items-center">
              <h2 className="font-bold">For You</h2>
              <h3 className="border rounded-xl text-sm p-2">{filteredJobs.length} found</h3>
            </div>
            <div className="flex gap-3 items-center">
              <h2 className="font-bold">Total jobs</h2>
              <h3 className="border rounded-xl text-sm p-2">{appliedJobs.length}</h3>
            </div>
          </div>

          <div className="flex pt-6 flex-wrap gap-5 justify-center items-center">
            {filteredJobs.map((job, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between items-center p-2 bg-white shadow-xl rounded-lg border border-gray-300"
                >
                  <div className="bg-blue-100 rounded-xl md:w-[26vw] lg:w-[20vw] xl:w-[16vw] w-[50vw] sm:w-[35vw] h-full p-2">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-1">
                        <Image
                          className="size-8"
                          src="/google.svg"
                          alt="company logo"
                          width={0}
                          height={0}
                        />
                        <p className="text-sm text-gray-600 mt-2">
                          {job.company}
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <div className="bg-white flex justify-center items-center size-8 rounded-full">
                          <Image
                            className="size-7"
                            src="/save.svg"
                            alt="save"
                            width={0}
                            height={0}
                          />
                        </div>
                        <div className="bg-white flex justify-center items-center size-8 rounded-full">
                          <Image
                            className="size-7"
                            src="/save.svg"
                            alt="save"
                            width={0}
                            height={0}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="h-[8vh]">
                      <h2 className="text-xl font-Montserrat font-semibold text-black">
                        {job.jobTitle}
                      </h2>
                    </div>
                    <div className="h-[4vh]">
                      <p className="text-sm text-gray-600 mt-2">
                        {job.location}
                      </p>
                    </div>

                    <div className="h-[10vh] flex-wrap flex justify-start gap-2 items-center">
                      <p className="text-[1.6vh] border-2 p-0.5 rounded-xl inline-block text-gray-600 mt-2">
                        {job.jobType}
                      </p>
                      <p className="text-[1.6vh] border-2 p-0.5 rounded-xl inline-block text-gray-600 mt-2">
                        {job.jobType}
                      </p>
                      <p className="text-[1.6vh] border-2 p-0.5 rounded-xl inline-block text-gray-600 mt-2">
                        {job.jobType}
                      </p>
                    </div>

                    <div className="flex justify-between h-[4vh] w-full mt-2 items-end">
                      <p className="text-sm text-gray-600">
                        Posted Date: {job.postedDate}
                      </p>
                    </div>
                  </div>
                  <a
                    href={job.detailsLink}
                    className="mt-2 w-full text-center py-2 bg-[#004C99] text-white text-sm font-medium rounded-md hover:bg-blue-700"
                  >
                    See Details
                  </a>
                </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
