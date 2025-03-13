// src/components/EmployeeCard.js
import React from 'react';




const StudentCard = () => {


    const student = [
        {
          name: "employee1",
          position: "UI/UX Designer",
          company: "TATA",
          platform: "TextileVoice",
          salary: "17 LPA"
        },
        {
          name: "employee2",
          position: "Software Engineer",
          company: "Google",
          platform: "CampusRecruit",
          salary: "20 LPA"
        },
        {
          name: "employee1",
          position: "Data Scientist",
          company: "Amazon",
          platform: "TechHire",
          salary: "22 LPA"
        },
        {
          name: "employee2",
          position: "Full Stack Developer",
          company: "Microsoft",
          platform: "JobPortal",
          salary: "18 LPA"
        },
        {
          name: "employee1",
          position: "Product Manager",
          company: "Facebook",
          platform: "TalentConnect",
          salary: "25 LPA"
        }
      ];


       

  return (
    <div className="h-screen w-full">
      <div
        id="students"
        className="h-full w-full overflow-x-hidden pt-10 flex flex-col justify-center items-center"
      >
        <h1 className="pb-10  text-center text-4xl font-Montserrat font-bold text-blue-600">
        Students Placed Highest Packages
        </h1>

        <div className=" h-[68vh] overflow-x-hidden p-4  flex justify-center items-center gap-6  rounded-xl">
        
          {student.map((student,index)=>{
            return (
                <div key={index} id={`student${index}`} className="relative h-full flex justify-between items-end rounded-2xl overflow-hidden text-white font-Montserrat w-[27vw]">
    <img className='object-cover h-full w-full' src={`${student.name}.jpeg`} alt={student.name} />

    <div id='student-info' className='flex opacity-0 hover:opacity-100 flex-col items-center  p-6 justify-center w-full h-1/2 absolute'>
      <div className='bg-blue-600 h-full w-full absolute opacity-60'></div>

      <h1 className='z-10 text-4xl font-Montserrat font-bold '>{student.salary}</h1>

      <p className='z-10'>" I am {student.position}. I was placed through <span className='font-bold'>{student.platform}</span> platform in <span className='font-bold'>{student.company}</span> with <span className='font-bold'>{student.salary}</span>"</p>
      
      <h1 className='z-10 ml-[17vw] font-Montserrat font-bold '>~{student.name}</h1>

      <button className="z-10 text-white mt-6 text-lg font-bold border-2 rounded-md h-12 w-[25vw]">
        Apply Now
      </button>
    </div>
  </div>
            )
          })}
         
        </div>
      </div>

    </div>
  );
};

export default StudentCard;
