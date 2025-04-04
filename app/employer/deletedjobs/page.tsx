"use client";
import EmployerHeader3 from "@/components/EmployerHeader3";
import React, { useState } from "react";

const Page = () => {
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
 

  return (
    <>
      <div>
        {/* Pass `setIsFilterOpen` as a prop to Header3 */}
        <EmployerHeader3/>
      </div>
      <div className="flex flex-col font-Montserrat md:flex-row w-full min-h-screen pt-16 bg-white text-black">
        {/* Mobile Button to Open Filter & Sort */}
        {/* Sidebar Filter & Sort (Hidden on Desktop) */}
        <div
          className={`fixed inset-0 bg-whit flex flex-col gap-4 items-start px-10 pt-10 rounded-2xl bg-white  border shadow-lg transition-transform transform ${
            isFilterOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-10  md:mt-10  md:w-[18vw] md:relative`}
        >
          <button
            className="md:hidden text-red-500 font-bold text-lg mt-10"
            onClick={() => setIsFilterOpen(false)}
          >
            ✖ Close
          </button>

          {/* Job Type Radio Buttons */}
          <div className="mb-4 flex flex-col gap-2">
            <label className="block font-bold text-lg  text-black">Sort</label>
            <div className="flex gap-2 justify-center items-center flex-col">
              {["New to old", "Old to new", "A-Z","Z-A"].map((type) => (
                <div className="flex gap-2  text-md justify-between  border w-full  text-gray-700 rounded-lg px-5 py-4 cursor-pointer ">
                <h1 className="pr-5 font-bold">{type}</h1>

             <input type="radio" name="Country"/>
        </div>
              ))}
            </div>
          </div>

          {/* Sorting Options */}
          
        </div>

        {/* Right Side: Applied Jobs */}
        <div className="w-full md:w-3/4 md:p-18 p-6">
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            {appliedJobs.map( (id,index) =>{
                return(
                    <div key={index} className="border border-[#D9D9D9] rounded-2xl shadow-xl p-4">
                    <div className="bg-[#D9D9D9]  p-4 rounded-xl">
                        <div className="flex justify-between pb-2 ">
                        <h1 className='text-black font-bold text-xl pl-25'>Senior product manager</h1>
                        <img className='size-7 ' src="../accountimg/eyeborw.png" alt="" />
    
                        </div>
                        <div>
                        <div className='md:text-lg text-sm text-gray-500 w-full flex flex-wrap items-center justify-start gap-4'>
                        
                        
                        <div className='rounded-full overflow-hidden'>
                    <img className='md:size-22 size-10 ' src="../employerimg/employeraccount.jpeg" alt="" />
    
                    </div>            
                    <div className="text-sm">
                  <div className='flex gap-2 pb-1'>
                    <img className='size-5' src="../employerimg/rupee.svg" alt="" />
                    <h3>Salary : $1.5 K - $1.8 K </h3>
                  </div>
                  <div className='flex gap-2 pb-1'>
                    <img className='size-5' src="../employerimg/job.svg" alt="" />
                    <h3>Job Type : Onsite</h3>
                  </div>
                  <div className='flex gap-2 pb-1'>
                    <img className='size-5' src="../employerimg/location.svg" alt="" />
                    <h3>Location : Pune, Maharashtra</h3>
                  </div>
                </div>
                <div  className="text-sm">
                  <div className='flex gap-2 pb-1'>
                    <img className='size-5' src="../employerimg/job.svg" alt="" />
                    <h3>Experience : 0-1 year </h3>
                  </div>
                  <div className='flex gap-2 pb-1'>
                    <img className='size-5' src="../employerimg/user.svg" alt="" />
                    <h3>No. of Opening : 10</h3>
                  </div>
                  <div className='flex gap-2 pb-1'>
                    <img className='size-5' src="../employerimg/time.svg" alt="" />
                    <h3>Working Time : 11:00 AM to 06:00 PM</h3>
                  </div>
                </div>
                
              </div>
    
                        </div>
                        <div className="flex flex-col gap-4 pt-4 text-[#787878]">
                        <h1>
                           <span className="text-black font-bold">Description :</span> Description : Join our dynamic team as a Software Engineer, where you will be responsible for developing innovative software solutions and collaborating with cross-functional teams.</h1>
                        <h1><span className="text-black font-bold"> Mandatory Skills :</span> Bachelors degree in Computer Science or related field, 3+ years of software development experience, proficiency in Java, Python, or C++.. </h1>
                        <h1><span className="text-black font-bold">Beneficial Skills :</span> Communication: The ability to share ideas and feelings, and to listen actively . Problem-solving: The ability to understand and resolve situations</h1>
                        <h1><span className="text-black font-bold">Benefits :</span>  Health insurance, flexible work hours, opportunities for professional development.</h1>
                        </div>
                    </div>
                    <div className=" pt-4">
                        
                    <a className="bg-[#34A853]  text-white px-4 py-1 rounded-lg" href="#">Active</a>
                </div>
                </div>
    
                )
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
