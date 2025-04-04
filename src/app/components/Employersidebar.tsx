import React from "react";
import Image from "next/image";

const Employersidebar = () => {
  return (
    <div>
      <div
        id="sidebar"
        className=" h-full ml-2 gap-12 font-Montserrat bg-white md:w-[28vw] w-full absolute right-0 top-10 flex justify-center items-center flex-col"
      >
        <div className="">
          <div className="size-36 rounded-full overflow-hidden">
            <Image
              className="h-full w-full object-cover"
              src="../employerimg/employeraccount.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-xl">Vardhaman Textile</h1>
          <h3 className="text-gray-500 text-lg">Himachal Pradesh</h3>
        </div>
        <div className="flex flex-col font-medium justify-center items-start gap-2">
          <div className="flex gap-2 pb-2">
            <Image className="size-5" src="../employerimg/user.png" alt="" />
            <h3>Company Profile</h3>
          </div>
          <div className="flex gap-2 pb-2">
            <Image className="size-5" src="../employerimg/search.png" alt="" />
            <h3>Search Employee</h3>
          </div>
          <div className="flex gap-2 pb-2">
            <Image className="size-5" src="../employerimg/mobile.png" alt="" />
            <h3>Post Jobs</h3>
          </div>
          <div className="flex gap-2 pb-2">
            <Image
              className="size-5"
              src="../employerimg/independant.png"
              alt=""
            />
            <h3>Active Jobs</h3>
          </div>
          <div className="flex gap-2 pb-2">
            <Image className="size-5" src="../save.svg" alt="" />
            <h3>Deleted Jobs</h3>
          </div>
          <div className="flex gap-2 pb-2">
            <Image className="size-5" src="../employerimg/delete.png" alt="" />
            <h3>Saved Candidate</h3>
          </div>
          <div className="flex gap-2 pb-2">
            <Image className="size-5" src="../employerimg/pending.png" alt="" />
            <h3>Packages</h3>
          </div>
        </div>
        <div className="flex justify-center items-center h-[10vh]">
          <button
            type="submit"
            className="bg-linear-to-bl bg-[#004C99] text-white rounded-lg font-bold  md:h-11 h-15 w-[40vw] md:w-[20vw]"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Employersidebar;
