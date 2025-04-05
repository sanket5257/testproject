import React from "react";
import Image from "next/image";

const StudentCard = () => {
  const student = [
    {
      name: "employee1",
      position: "UI/UX Designer",
      company: "TATA",
      platform: "TextileVoice",
      salary: "17 LPA",
    },
    {
      name: "employee2",
      position: "Software Engineer",
      company: "Google",
      platform: "CampusRecruit",
      salary: "20 LPA",
    },
    {
      name: "employee1",
      position: "Data Scientist",
      company: "Amazon",
      platform: "TechHire",
      salary: "22 LPA",
    },
    {
      name: "employee2",
      position: "Full Stack Developer",
      company: "Microsoft",
      platform: "JobPortal",
      salary: "18 LPA",
    },
    {
      name: "employee1",
      position: "Data Scientist",
      company: "Amazon",
      platform: "TechHire",
      salary: "22 LPA",
    },
    {
      name: "employee2",
      position: "Full Stack Developer",
      company: "Microsoft",
      platform: "JobPortal",
      salary: "18 LPA",
    },
  ];

  return (
    <div className=" pt-4 w-full">
      <div
        id="students"
        className=" w-full overflow-x-hidden md:pt-10 flex flex-col justify-center items-center"
      >
        <h1 className="pb-10  text-center md:text-4xl  font-Montserrat font-bold text-blue-600">
          Students Placed Highest Packages
        </h1>

        <div className=" md:h-[60vh] h-[30vh] w-full no-scrollbar overflow-x-auto flex justify-start pl-4 items-center  gap-4  rounded-xl">
          {student.map((student, index) => {
            return (
              <div
                key={index}
                id={`student${index}`}
                className=" relative h-full flex shrink-0 justify-between items-end rounded-2xl overflow-hidden text-white font-Montserrat md:w-[26vw] "
              >
                <Image
                  className="object-cover h-full w-full"
                  src={`${student.name}.jpeg`}
                  alt={student.name}
                  width={0}
                    height={0}
                    fill // Automatically adjusts to parent width and height
                    style={{ objectFit: "contain" }} // Adjusts how the image scales
                />

                <div
                  id="student-info"
                  className="flex opacity-0 hover:opacity-100 flex-col items-center  p-6 justify-center w-full h-1/2 absolute"
                >
                  <div className="bg-blue-600 h-full w-full absolute opacity-60"></div>

                  <h1 className="z-10 md:text-4xl font-Montserrat font-bold ">
                    {student.salary}
                  </h1>

                  <p className="z-10 text-[1.2vw]">
                    `&quot;` I am {student.position}. I was placed through{" "}
                    <span className="font-bold">{student.platform}</span>{" "}
                    platform in{" "}
                    <span className="font-bold">{student.company}</span> with{" "}
                    <span className="font-bold">{student.salary}</span>`&quot;`
                  </p>

                  <h1 className="z-10 ml-[15vw] text-[1.2vw] font-Montserrat font-bold ">
                    ~{student.name}
                  </h1>

                  <button className="z-10 text-white mt- text-[1.2vw] font-bold border-2 rounded-md px-4 py-2 ">
                    See All Stories
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
