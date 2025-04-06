import React from "react";
import Image from "next/image";

// Sample data array for the cards
const resumeData = [
  {
    name: "Current Industry",
    image: "/accountimg/textile.png", // Placeholder image URL
  },
  {
    name: "Current Industry",
    image: "/accountimg/textile.png", // Placeholder image URL
  },
  {
    name: "Current Industry",
    image: "/accountimg/textile.png", // Placeholder image URL
  },
  {
    name: "Current Industry",
    image: "/accountimg/textile.png", // Placeholder image URL
  },
];

const ResumeCard = () => {
  return (
    <div className="md:px-10 pt-6 flex flex-col md:flex-row flex-wrap gap-4 justify-between items-center">
      {resumeData.map((resume, index) => (
        <div
          key={index}
          className="flex justify-evenly items-center border border-[#004C99] bg-[#D9EBFF] rounded-lg md:w-[31.5vw] w-[90vw] h-[15vh]"
        >
          <Image src={resume.image} alt={resume.name} className="size-20" 
          width={0}
          height={0}
          />
          <div>
            <h3 className="text-2xl mb-2 text-[#004C99] font-semibold">
              {resume.name}
            </h3>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="bg-white mr-2 inline-block rounded-2xl text-[12px] p-1.5">
                  Javascript
                </h3>
                <h3 className="bg-[#F5F1FE] text-[#6D31ED] inline-block rounded-2xl text-[12px] p-1.5">
                  Python
                </h3>
              </div>
              <div className="bg-red-50 ">
                <Image className="size-6" src="/accountimg/plus.svg" alt="" 
                width={0}
                height={0}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResumeCard;
