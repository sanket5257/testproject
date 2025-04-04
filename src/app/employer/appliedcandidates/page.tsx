"use client";
import EmployerHeader3 from "../../components/EmployerHeader3";
import { useState } from "react";
import Image from "next/image";

const candidates = [
  {
    name: "Alice Johnson",
    date: "27-02",
    email: "alice.johnson@example.com",
    phone: "123-456-7890",
    resume: "one.pdf",
    status: "Selected",
  },
  {
    name: "Bob Smith",
    date: "02-02",
    email: "bob.smith@example.com",
    phone: "987-654-3210",
    resume: "one.pdf",
    status: "View",
  },
  {
    name: "Catherine Lee",
    date: "01-01",
    email: "catherine.lee@example.com",
    phone: "555-123-4567",
    resume: "one.pdf",
    status: "Rejected",
  },
  {
    name: "David Brown",
    date: "03-03",
    email: "david.brown@example.com",
    phone: "444-987-6543",
    resume: "one.pdf",
    status: "View",
  },
];

const Page = () => {
  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest first");

  const filteredCandidates = candidates.filter(
    (candidate) => filter === "All" || candidate.status === filter
  );

  const sortedCandidates = [...filteredCandidates].sort((a, b) => {
    if (sortOrder === "Newest first") return b.date.localeCompare(a.date);
    if (sortOrder === "Oldest first") return a.date.localeCompare(b.date);
    setFilter("All");

    return 0;
  });

  return (
    <div className=" min-h-screen font-Manrope bg-white text-black ">
      <EmployerHeader3 />
      <div className="flex pt-15 gap-4">
        <div className="w-2/10 h-full p-12 bg-white shadow-2xl flex flex-col justify-start gap-5 items-center">
          <h2 className="font-bold text-[#004C99] text-lg ">Candidates</h2>
          <div className="flex text-md justify-between border w-full  text-gray-700 rounded-lg px-3 py-4 cursor-pointer ">
            <h1 className="pl-2 font-bold">All</h1>

            <input type="radio" name="Country" />
          </div>
          <div className="flex text-md bg-[#004C99] justify-between border w-full text-white rounded-lg px-3 py-4 cursor-pointer ">
            <h1 className="pl-2 font-bold">Apply Now</h1>

            <input type="radio" name="Country" />
          </div>
          <div className="flex text-md justify-between border w-full  text-[#004C99] rounded-lg px-3 py-4 cursor-pointer ">
            <div className="flex justify-center items-center">
              <Image className="size-5" src="../employerimg/flash.svg" alt="" />
              <h1 className="pl-2 font-bold">Easy Apply</h1>
            </div>

            <input type="radio" name="Country" />
          </div>
          <div className="flex text-md justify-between border w-full  text-[#33CA0E] rounded-lg px-3 py-4 cursor-pointer ">
            <div className="flex justify-center items-center">
              <Image
                className="size-5"
                src="../employerimg/whatsappicon.png"
                alt=""
              />
              <h1 className="pl-2 font-bold">Whatsapp</h1>
            </div>
            <input type="radio" name="Country" />
          </div>
          <h2 className="font-bold text-[#004C99] text-lg">Actions</h2>
          {["All", "Pending", "Reviewed", "Rejected"].map((index) => (
            <div
              key={index}
              className="flex text-sm justify-between border w-full  text-gray-700 rounded-lg px-3 py-3 cursor-pointer "
            >
              <h1 className="pl-2 font-bold">{index}</h1>

              <input type="radio" name="Country" />
            </div>
          ))}

          <h2 className="font-bold text-[#004C99] text-lg">Sort</h2>
          <div className="flex flex-wrap shrink-0 gap-3">
            <button
              onClick={() => setSortOrder("Newest first")}
              className="block  p-2 border rounded-lg"
            >
              Newest first
            </button>
            <button
              onClick={() => setSortOrder("Oldest first")}
              className="block  p-2 border rounded-lg"
            >
              Oldest first
            </button>
            <button
              onClick={() => setSortOrder("Oldest first")}
              className="block  p-2 border rounded-lg"
            >
              A-Z
            </button>
            <button
              onClick={() => setSortOrder("Oldest first")}
              className="block  p-2 border rounded-lg"
            >
              Z-A
            </button>
          </div>
        </div>
        <div className=" w-5/7 pt-10 bg-white pl-4">
          <h1 className="text-2xl font-bold">Senior Product Manager</h1>
          <table className="w-full border border-gray-300  mt-4">
            <thead>
              <tr className=" text-gray-400 border">
                <th className=" text-start p-3">Candidate Name</th>
                <th className="  text-start p-3">Date</th>
                <th className="  text-start p-3">Email</th>
                <th className="  text-start p-3">Phone</th>
                <th className="  text-start p-3">Resume</th>
                <th className="  text-start p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedCandidates.map((candidate, index) => (
                <tr key={index} className="text-start">
                  <td className=" p-4">{candidate.name}</td>
                  <td className=" p-4">{candidate.date}</td>
                  <td className=" p-4">{candidate.email}</td>
                  <td className=" p-4">{candidate.phone}</td>
                  <td className=" p-4 text-blue-500">
                    <h1 className=" bg-[#F5F1FE] rounded-xl text-sm text-center">
                      {candidate.resume}
                    </h1>
                  </td>
                  <td className=" p-4 ">
                    {candidate.status === "Selected" ? (
                      <span className="bg-[#34A853] text-white px-4 py-2 rounded">
                        Selected
                      </span>
                    ) : candidate.status === "Rejected" ? (
                      <span className="bg-gray-500 text-white px-4 py-2 rounded">
                        Rejected
                      </span>
                    ) : (
                      <a className="bg-[#004C99] text-white px-8 py-2  rounded">
                        View
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
