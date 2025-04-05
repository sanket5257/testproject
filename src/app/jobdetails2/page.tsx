import Header2 from "../components/Header2";
import SimilarJobs from "../components/SimilarJobs";
import React from "react";
import Image from "next/image";

const page = () => {
  const appliedJobs = [
    {
      id: 2,
      title: "Backend Engineer",
      company: "Code Labs",
      location: "New York",
      expireddate: "Applied on January 30, 2025",
      companylogo: "./google.svg",
    },
  ];
  return (
    <div className="bg-white h-screen font-Montserrat text-black">
      <Header2 />
      <div className="w-full pt-4 h-auto bg-white flex flex-col gap-5 justify-center items-center">
        <div className="h-full md:w-[70vw] w-[90vw]">
          {appliedJobs.map((job) => (
            <div
              key={job.id}
              className="p-4 flex justify-between md:w-[70vw] items-center bg-[#F7FAFA] border shadow-lg rounded-lg"
            >
              <div className="flex items-center justify-center">
                <Image className="size-20 p-4" src={job.companylogo} alt="" 
                width={0}
                height={0}
                fill // Automatically adjusts to parent width and height
                style={{ objectFit: "contain" }} // Adjusts how the image scales
                />
                <div>
                  <h3 className="text-xl text-[#004C99] font-semibold">
                    {job.title}
                  </h3>
                  <p className="text-[#4F7594]">{job.expireddate}</p>
                </div>
              </div>
              <div>
                <h1 className="border bg-white rounded-lg px-3 hidden">
                  pending
                </h1>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="md:w-[70vw] w-[90vw] border p-9 rounded-2xl">
            <div className="md:w-[42vw] flex justify-center items-start flex-col gap-4">
              <div className="">
                <button className="bg-[#787878] mr-4 text-white p-2 rounded-xl">
                  Job Details
                </button>

                <button className="bg-white text-black border p-2 rounded-xl">
                  Company Details
                </button>
              </div>
              <h1 className="font-bold md:text-lg text-sm">Description</h1>
              <h3 className="text-[#787878]">
                Join our dynamic team as a Software Engineer, where you will be
                responsible for developing innovative software solutions and
                collaborating with cross-functional teams.
              </h3>
              <h1 className="font-bold text-lg">Requirements</h1>
              <h3 className="text-[#787878]">
                Bachelors degree in Computer Science or related field, 3+ years
                of software development experience, proficiency in Java, Python,
                or C++.
              </h3>
              <h1 className="font-bold text-lg">Beneficial Skills</h1>
              <h3 className="text-[#787878]">
                Communication: The ability to share ideas and feelings, and to
                listen actively . Problem-solving: The ability to understand and
                resolve situations 
              </h3>
              <h1 className="font-bold text-lg">Benefits</h1>
              <h3 className="text-[#787878]">
                {" "}
                Health insurance, 401(k) matching, flexible work hours,
                opportunities for professional development.
              </h3>
            </div>
          </div>
          <div className="pt-4 hidden md:block">
            <SimilarJobs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
