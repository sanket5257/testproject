import React from 'react'
import Header2 from "../../components/Header2"
import JobCard from '../../components/JobCard'
import TopCompanyBox from '../../components/TopCompanyBox'
import JobCardSkillBased from '../../components/JobCardSkillBased'
import Cities from '../../components/Cities'


const Page = () => {
  return (
    <div className='bg-white  text-black w-full '>
        <Header2/>
          <div
        id="Hothiring"
        className="h-[45vh] pt-4 w-full flex flex-col justify-center items-center"
      >
        <h1 className="pb-10  text-center text-2xl font-Montserrat font-bold text-blue-500">
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
      <JobCard/>

      <TopCompanyBox/>
      <JobCardSkillBased/>
      <Cities/>

      <div
        id="upcoming-Exhibition"
        className="md:h-[60vh] bg-white h-[20vh] w-full pt-20 flex flex-col justify-center items-center"
      >
        <h1 className="pb-4  text-center md:text-3xl font-Montserrat font-bold text-blue-600">
          {" "}
          Institute Advertisement
        </h1>

        <div className="bg-[url(/exhibition.jpeg)] bg-cover bg-center h-full w-[95vw] rounded-xl">
          <div className="h-full  flex justify-between items-end pb-12 pl-14 pr-14 text-white font-Montserrat w-full opacity-0 hover:opacity-100">
            <div>
              <h1 className="font-bold text-3xl">Exhibition NAME</h1>
              <p>
                join our dynamic team as software engineer,where you will be
                resposible for devloping
              </p>
            </div>

            <button className="hover:bg-linear-to-bl from-[#007BFF] to-[#004C99] text-white text-lg font-bold border-2  rounded-md  h-12 w-[13vw]">
                    Details
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Page