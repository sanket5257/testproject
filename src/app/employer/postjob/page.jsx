import React from "react";
import { PlusCircle } from "lucide-react";

const PostJobForm = () => {
  return (
    <div className="min-h-screen text-lg pb-10 font-Montserrat pt-35 text-black bg-white p-6 flex flex-col items-center">
      <h1 className="text-2xl md:text-3xl font-bold text-[#004C99] font-Montserrat mb-8">Post Job</h1>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        {/* Left Side */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Job Title</label>
            <div className="flex gap-2">
              <select className="w-full text-[#787878] border border-[#787878] rounded-lg px-3 py-2">
                <option>Select Industry</option>
              </select>
              <select className="w-full text-[#787878] border border-[#787878] rounded-lg px-3 py-2">
                <option>Select Domain</option>
              </select>
            </div>
            <select className="w-full text-[#787878] border border-[#787878] rounded-lg px-3 py-2 mt-2">
              <option>Select Job Title</option>
            </select>
          </div>
          <label className="block text-sm font-semibold mb-1">Other</label>

          
          <input type="text" placeholder="Enter no. of openings" className="w-full border border-[#787878] rounded-lg px-3 py-2" />
          <label className="block text-sm font-semibold mb-1">No of opening</label>

          <input type="text" placeholder="Enter salary" className="w-full border border-[#787878] rounded-lg px-3 py-2" />
          <label className="block text-sm font-semibold mb-1">Salary</label>

          <select className="w-full text-[#787878] border border-[#787878] rounded-lg px-3 py-2">
            <option>Select Experience</option>
          </select>
          <label className="block text-sm  font-semibold mb-1">Experience</label>

          <select className="w-full text-[#787878] border border-[#787878] rounded-lg px-3 py-2">
            <option>Select Job type Onsite/Remote/Hybrid</option>
          </select>
          <label className="block text-sm font-semibold mb-1">Job Type</label>

          <input type="text" placeholder="Enter company location" className="w-full border border-[#787878] rounded-lg px-3 py-2" />
          <label className="block text-sm font-semibold mb-1">Working time</label>

          <input type="text" placeholder="Enter working time" className="w-full border border-[#787878] rounded-lg px-3 py-2" />
        </div>

        {/* Right Side */}
        <div className="space-y-4">
        <label className="block text-sm font-semibold mb-1">Job description</label>

          <textarea placeholder="Address, Street , Landmark" className="w-full border border-[#787878] rounded-lg py-4.5 " />
          <label className="block text-sm font-semibold mb-1">Mandatory Skills</label>

          <div className="relative">
            
            <input type="text" placeholder="Enter Mandatory skills for this job" className="w-full border border-[#787878] rounded-lg px-3 py-2" />
            <PlusCircle className="absolute right-3 top-2.5 text-gray-500 cursor-pointer" />
          </div>
          <label className="block text-sm font-semibold mb-1">Beneficial Skills </label>

          <div className="relative">
            <input type="text" placeholder="Enter beneficial skills for this job" className="w-full border border-[#787878] rounded-lg px-3 py-2" />
            <PlusCircle className="absolute right-3 top-2.5 text-gray-500 cursor-pointer" />
          </div>
          <label className="block text-sm font-semibold mb-1">Benefits</label>

          <input type="text" placeholder="Enter benefits for this job" className="w-full border border-[#787878] rounded-lg px-3 py-2" />
          <label className="block text-sm font-semibold mb-1">Other</label>

          <input type="text" placeholder="Enter benefits for this job" className="w-full border border-[#787878] rounded-lg px-3 py-2" />
          <label className="block text-sm font-semibold mb-1">Highest Qualification Degree</label>

          <select className="w-full text-[#787878] border border-[#787878] rounded-lg px-3 py-2">
            <option>Select Highest Qualification Degree</option>
          </select>

          <div className="flex gap-4 mt-4">
            <button type="button" className="w-full text-[#004C99] border border-[#004C99] shadow-xl font-semibold py-2 rounded-lg">
              Save for later
            </button>
            <button type="submit" className="w-full bg-linear-to-bl from-[#007BFF] to-[#004C99] text-white font-semibold py-2 rounded-lg hover:bg-blue-700">
              Post a job
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostJobForm;
