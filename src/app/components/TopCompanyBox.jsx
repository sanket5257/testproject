import React from "react";

const TopCompanyBox = () => {
  const company = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Google" },
    { id: 3, name: "Amazon" },
    { id: 4, name: "Microsoft" },
    { id: 5, name: "Facebook" },
  ];

  return (
    <div>
      <div
        id="Topcompanies"
        className="h-[20vh] md:h-[40vh] w-full pt-14 md:pt-10 flex flex-col justify-center items-center"
      >
        <div className="h-full w-full overflow-x-hidden bg-blue-100">
          <h1 className=" text-center md:text-3xl font-Montserrat font-bold text-blue-600">
            Top Commines Hiring Now
          </h1>
          <div className="flex justify-center">
            {company.map((companyItem, index) => {
              return (
                <Image
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

export default TopCompanyBox;
