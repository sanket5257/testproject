import React from "react";
import Image from "next/image";

const Institutes = () => {
  const institutes = ["IIT", "NIT", "IIT", "NIT", "IIT"];

  return (
    <div>
      <div
        id="Topcompanies"
        className=" w-full pt-10 pb-10 flex flex-col justify-center items-center"
      >
        <div className="h-full  w-full ">
          <h1 className="pt-10 pb-10  text-center md:text-3xl font-Montserrat font-bold text-blue-600">
            Tie-up Institute
          </h1>
          <div className="flex h-full w-full justify-center overflow-x-auto  gap-6 items-center">
            {institutes.map((institute, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-center shrink-0 items-center  overflow-hidden  border-black"
                >
                  <Image
                    className="size-30 md:size-50 rounded-xl shadow-xl"
                    src={`./${institute}.jpeg`}
                    alt="company logo"
                    width={0}
                    height={0}
                    fill // Automatically adjusts to parent width and height
                    style={{ objectFit: "contain" }} // Adjusts how the image scales
                  />
                  <h1 className="font-Montserrat text-black text-[2.5vw] md:text-xl font-bold pt-4">
                    {institute}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Institutes;
