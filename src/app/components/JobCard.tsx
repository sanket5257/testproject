import React from "react";
import Image from "next/image";

const JobCard = () => {
  const jobs = [
    {
      company: "google",
      jobTitle: "Senior Product Manager",
      location: "Pune, Maharashtra",
      jobType: "Full Time",
      postedDate: "March 14, 2025",
      detailsLink: "#",
    },
    {
      company: "google",
      jobTitle: "Senior Product Manager",
      location: "Pune, Maharashtra",
      jobType: "Full Time",
      postedDate: "March 14, 2025",
      detailsLink: "#",
    },
    {
      company: "google",
      jobTitle: "Senior Product Manager",
      location: "Pune, Maharashtra",
      jobType: "Full Time",
      postedDate: "March 14, 2025",
      detailsLink: "#",
    },
    {
      company: "google",
      jobTitle: "Senior Product Manager",
      location: "Pune, Maharashtra",
      jobType: "Full Time",
      postedDate: "March 14, 2025",
      detailsLink: "#",
    },
    {
      company: "google",
      jobTitle: "Software Engineer",
      location: "Bangalore, Karnataka",
      jobType: "Part Time",
      postedDate: "March 12, 2025",
      detailsLink: "#",
    },
    {
      company: "google",
      jobTitle: "Senior Product Manager",
      location: "Pune, Maharashtra",
      jobType: "Full Time",
      postedDate: "March 14, 2025",
      detailsLink: "#",
    },
    {
      company: "google",
      jobTitle: "Software Engineer",
      location: "Bangalore, Karnataka",
      jobType: "Part Time",
      postedDate: "March 12, 2025",
      detailsLink: "#",
    },
  ];

  return (
    <div className="bg-white">
      <div
        id="JobCards"
        className="h-auto font-Montserrat w-full flex flex-col justify-center items-center"
      >
        <div className="h-full w-full">
          <h1 className="pt-10   text-center md:text-3xl font-Montserrat font-bold text-blue-500">
            Jobs Based On Your Applies
          </h1>
          <h3 className="float-right pr-10 ">See All &#x27A4;</h3>
          <div className="flex pt-6  overflow-x-auto w-full md:justify-st pl-10 gap-5 items-center">
            {jobs.map((job, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-between items-center p-2    bg-white shadow-xl rounded-lg border border-gray-300"
                >
                  <div className="bg-blue-100 rounded-xl md:w-[26vw] lg:w-[20vw] xl:w-[16vw] w-[50vw] sm:w-[35vw] h-full p-2">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-1">
                        <Image
                          className="size-8"
                          src="./google.svg"
                          alt="company logo"
                          width={0}
                    height={0}
                    fill // Automatically adjusts to parent width and height
                    style={{ objectFit: "contain" }} // Adjusts how the image scales
                        />
                        <p className="text-sm text-gray-600 mt-2">
                          {job.company}
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <div className="bg-white flex justify-center items-center size-8 rounded-full">
                          <Image
                            className="size-7"
                            src="./save.svg"
                            alt="save"
                            width={0}
                    height={0}
                    fill // Automatically adjusts to parent width and height
                    style={{ objectFit: "contain" }} // Adjusts how the image scales
                          />
                        </div>
                        <div className="bg-white flex justify-center items-center size-8 rounded-full">
                          <Image
                            className="size-7"
                            src="./save.svg"
                            alt="save"
                            width={0}
                    height={0}
                    fill // Automatically adjusts to parent width and height
                    style={{ objectFit: "contain" }} // Adjusts how the image scales
                          />
                        </div>
                      </div>
                    </div>
                    <div className="h-[8vh]">
                      <h2 className="text-xl font-Montserrat font-semibold text-black">
                        {job.jobTitle}
                      </h2>
                    </div>
                    <div className="h-[4vh]">
                      <p className="text-sm text-gray-600 mt-2">
                        {job.location}
                      </p>
                    </div>

                    <div className="h-[10vh] flex-wrap flex justify-start gap-2 items-center">
                      <p className="text-[1.6vh] border-2 p-0.5   rounded-xl inline-block text-gray-600 mt-2">
                        {job.jobType}
                      </p>
                      <p className="text-[1.6vh] border-2 p-0.5  rounded-xl inline-block text-gray-600 mt-2">
                        {job.jobType}
                      </p>
                      <p className="text-[1.6vh] border-2 p-0.5  rounded-xl inline-block text-gray-600 mt-2">
                        {job.jobType}
                      </p>
                    </div>

                    <div className="flex justify-between h-[4vh] w-full mt-2 items-end">
                      <p className="text-sm text-gray-600">
                        Posted Date: {job.postedDate}
                      </p>
                    </div>
                  </div>
                  <a
                    href={job.detailsLink}
                    className="mt-2 w-full text-center py-2 bg-[#004C99] text-white text-sm font-medium rounded-md hover:bg-blue-700"
                  >
                    See Details
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
