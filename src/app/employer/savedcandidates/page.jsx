"use client";
import EmployerHeader3 from "../../components/EmployerHeader3";
import React, { useState } from "react";

const Page = () => {
  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest first");

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
    <div className="min-h-screen font-Manrope bg-white text-black">
      <EmployerHeader3 />
      <div className="flex pt-15 gap-4">
        <div className="w-2/10 min-h-screen p-12 bg-white shadow-2xl flex flex-col justify-start gap-5 items-center">
          <h2 className="font-bold text-[#004C99] text-lg">Sort</h2>
          <div className="flex flex-wrap shrink-0 gap-3">
            <button
              onClick={() => setSortOrder("Newest first")}
              className="block p-2 border rounded-lg"
            >
              Newest first
            </button>
            <button
              onClick={() => setSortOrder("Oldest first")}
              className="block p-2 border rounded-lg"
            >
              Oldest first
            </button>
            <button
              onClick={() => setSortOrder("A-Z")}
              className="block p-2 border rounded-lg"
            >
              A-Z
            </button>
            <button
              onClick={() => setSortOrder("Z-A")}
              className="block p-2 border rounded-lg"
            >
              Z-A
            </button>
          </div>
        </div>
        <div className="w-5/7 pt-10 bg-white pl-4">
          <h1 className="text-2xl font-bold">Saved Candidates</h1>
          <table className="w-full border border-gray-300 mt-4">
            <thead>
              <tr className="text-gray-400 border">
                <th className="text-start p-3">Candidate Name</th>
                <th className="text-start p-3">Email</th>
                <th className="text-start p-3">Phone</th>
                <th className="text-center p-3">Resume</th>
                <th className="text-center p-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {sortedCandidates.map((candidate, index) => (
                <tr key={index} className="text-start">
                  <td className="p-4">{candidate.name}</td>
                  <td className="p-4">{candidate.email}</td>
                  <td className="p-4">{candidate.phone}</td>
                  <td className="p-4 text-blue-500">
                    <h1 className="bg-[#F5F1FE] rounded-xl text-sm text-center">
                      {candidate.resume}
                    </h1>
                  </td>
                  <td className="p-4">
                    <h1 className="text-center">{candidate.date}</h1>
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
