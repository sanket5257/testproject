import React from "react";
import Image from "next/image";

const Page1 = () => {
  const company = [
    "appendFile",
    "amazon",
    "wipro",
    "infotech",
    "appendFile",
    "amazon",
  ];
  console.log(company);

  return (
    <div className=" w-full">
      <div
        id="Hothiring"
        className="h-[25vh] md:h-[60vh] w-full pt-10 flex flex-col justify-center items-center"
      >
        <h1 className="pb-10  text-center md:text-3xl font-Montserrat font-bold text-blue-600">
          {" "}
          HOT HIRING
        </h1>

        <div className="bg-[url(/hirebg.jpeg)] bg-cover bg-center h-full w-[95vw] rounded-xl">
          <div className="h-full  flex justify-between items-end pb-12 pl-14 pr-14 text-white font-Montserrat w-full opacity-0 hover:opacity-100">
            <div>
              <h1 className="font-bold text-3xl">COMPANY NAME</h1>
              <p>
                join our dynamic team as software engineer,where you will be
                resposible for devloping
              </p>
            </div>

            <button className="hover:bg-linear-to-bl from-[#007BFF] to-[#004C99] text-white text-lg font-bold border-2  rounded-md  h-12 w-[13vw]">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      <div
        id="Topcompanies"
        className=" w-full pt-14 md:pt-10 flex flex-col justify-center items-center"
      >
        <div className="h-full w-full pt-12 overflow-x-hidden bg-blue-100">
          <h1 className=" text-center md:text-3xl font-Montserrat font-bold text-blue-600">
            Top Commines Hiring Now
          </h1>
          <div className="flex justify-center">
            {company.map((companyItem, index) => {
              return (
                <Image
                width={0}
                    height={0}
                  key={index}
                  className="md:size-50 size-16 "
                  src="./apple.png"
                  alt="company logo"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
