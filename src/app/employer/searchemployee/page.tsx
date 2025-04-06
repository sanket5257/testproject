"use client";
import EmployerHeader2 from "../../components/EmployerHeader2";
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
      employee: "Jhon Doe",
      jobTitle: "Senior Product Manager",
      skills: "python",
      location: "Pune, Maharashtra",
      experince: "2 years Experienced",
      detailsLink: "#",
    },
    {
      employee: "Jhon Doe",
      jobTitle: "Senior Product Manager",
      skills: "python",
      location: "Pune, Maharashtra",
      experince: "2 years Experienced",
      detailsLink: "#",
    },
    {
      employee: "Jhon Doe",
      jobTitle: "Senior Product Manager",
      skills: "python",
      location: "Pune, Maharashtra",
      experince: "2 years Experienced",
      detailsLink: "#",
    },
    {
      employee: "Jhon Doe",
      jobTitle: "Senior Product Manager",
      skills: "python",
      location: "Pune, Maharashtra",
      experince: "2 years Experienced",
      detailsLink: "#",
    },
    {
      employee: "Jhon Doe",
      jobTitle: "Senior Product Manager",
      skills: "python",
      location: "Pune, Maharashtra",
      experince: "2 years Experienced",
      detailsLink: "#",
    },
    {
      employee: "Jhon Doe",
      jobTitle: "Senior Product Manager",
      skills: "python",
      location: "Pune, Maharashtra",
      experince: "2 years Experienced",
      detailsLink: "#",
    },
    {
      employee: "Jhon Doe",
      jobTitle: "Senior Product Manager",
      skills: "python",
      location: "Pune, Maharashtra",
      experince: "2 years Experienced",
      detailsLink: "#",
    },
    {
      employee: "Jhon Doe",
      jobTitle: "Senior Product Manager",
      skills: "python",
      location: "Pune, Maharashtra",
      experince: "2 years Experienced",
      detailsLink: "#",
    },
    // Add more job data as needed
  ];

  // Sorting logic
  // const sortedJobs = [...appliedJobs].sort(() => {
  //   // if (filters.sortBy === "a-z") return a.title.localeCompare(b.title);
  //   // if (filters.sortBy === "z-a") return b.title.localeCompare(a.title);
  //   return 0;
  // });

  return (
    <>
      <div>
        {/* Pass `setIsFilterOpen` as a prop to Header3 */}
        <EmployerHeader2 />
      </div>
      <div className="flex flex-col font-Montserrat md:flex-row w-full min-h-screen  bg-white text-black">
        {/* Mobile Button to Open Filter & Sort */}
        {/* Sidebar Filter & Sort (Hidden on Desktop) */}
        <div
          className={`fixed md:w-[20vw] pr-20 inset-0 flex flex-col gap-4 items-start pl-4 pt-10 rounded-2xl bg-white  border shadow-lg transition-transform transform ${
            isFilterOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-10  md:mt-10  md:relative`}
        >
          <button
            className="md:hidden text-black font-bold text-lg mt-10"
            onClick={() => setIsFilterOpen(false)}
          >
            ✖ Close
          </button>
          <h2 className="text-xl text-black font-medium mb-4">Filters</h2>

          {/* Job Type Radio Buttons */}
          <div className="mb-4 justify-start items-start flex flex-col gap-2">
            <label className="block font-medium text-lg  text-black">
              Industry
            </label>
            <div className="flex gap-2 flex-col">
              {["Ginning", "Spinning", "All 8/10 industry"].map((type) => (
                <label key={type} className="inline-flex gap-2 items-center ">
                  <input
                    type="checkbox"
                    name="jobType"
                    value={type}
                    className=" size-3"
                    onChange={(e) =>
                      setFilters({ ...filters, jobType: e.target.value })
                    }
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-4  justify-start items-start flex flex-col gap-2">
            <label className="block font-medium text-lg  text-black">
              Experience
            </label>
            <div className="flex gap-2 flex-col">
              {[
                "Fresher (0-2 years)",
                "mid (2-5 years)",
                "Senior (5+ years)",
              ].map((type) => (
                <label key={type} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="jobType"
                    value={type}
                    className="mr-2 size-3"
                    onChange={(e) =>
                      setFilters({ ...filters, jobType: e.target.value })
                    }
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-4  justify-start items-start flex flex-col gap-2">
            <label className="block font-medium text-lg  text-black">
              On site/remote
            </label>
            <div className="flex gap-2 flex-col">
              {["on site", "hybrid", "remote"].map((type) => (
                <label key={type} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="jobType"
                    value={type}
                    className="mr-2 size-3"
                    onChange={(e) =>
                      setFilters({ ...filters, jobType: e.target.value })
                    }
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-4  justify-start items-start flex flex-col gap-2">
            <label className="block font-medium text-lg  text-black">
              Skills
            </label>
            <div className="flex gap-2 flex-col">
              {["Textile Skills", "spinning", "All 8/10 industry"].map(
                (type) => (
                  <label key={type} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="jobType"
                      value={type}
                      className="mr-2 size-3"
                      onChange={(e) =>
                        setFilters({ ...filters, jobType: e.target.value })
                      }
                    />
                    {type}
                  </label>
                )
              )}
            </div>
          </div>
        </div>

        {/* Right Side: Applied Jobs */}
        <div className="w-full md:w md:pl-16 p-6">
          <div className="flex gap-2  justify-center items-center md:justify-start md:pl-20 ">
            <Image
              src="./filter.png"
              className="md:hidden size-8 border p-1.5 rounded "
              onClick={() => setIsFilterOpen(true)}
              alt="Filter"
              width={0}
                    height={0}
            />
          </div>

          <div className="flex pt-6  w-full flex-wrap gap-5 justify-center items-center">
            {appliedJobs.map((job, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-between items-center p-2    bg-white shadow-xl rounded-lg border border-gray-300"
                >
                  <div className="bg-blue-100 rounded-xl md:w-[26vw] lg:w-[20vw] xl:w-[16vw] w-[50vw] sm:w-[35vw] h-full p-2">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-1">
                        <Image
                          className="size-8"
                          src="../account.png"
                          alt="company logo"
                          width={0}
                    height={0}
                        />
                        <p className="text-sm text-[#004C99] mt-2">
                          {job.employee}
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <div className="bg-white flex justify-center items-center size-8 rounded-full">
                          <Image
                            className="size-7"
                            src="../save.svg"
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
                      <p className="text-[1.6vh] border-2 p-0.5   rounded-xl inline-block text-gray-600 mt-2">
                        {job.skills}
                      </p>
                      <p className="text-[1.6vh] border-2 p-0.5  rounded-xl inline-block text-gray-600 mt-2">
                        {job.skills}
                      </p>
                      <p className="text-[1.6vh] border-2 p-0.5  rounded-xl inline-block text-gray-600 mt-2">
                        {job.skills}
                      </p>
                    </div>

                    <div className="flex items-center justify-center h-[4vh] w-full mt-2">
                      <p className="text-sm text-gray-600"> {job.experince}</p>
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
