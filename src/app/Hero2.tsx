"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import api from "./services/api_service";
import { AxiosResponse } from "axios";

const LandingPage = () => {
  interface Data {
      name: string;
      image_url: string;
      url: string;
      ID:string;
      
    }
    
    const [data, setData] = useState([
      { name: "", image_url: "", url: "", ID: "" },
    ]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response: AxiosResponse<Data[]> = await api.getTopCompanies();
        setData(response.data);
      } catch (error) {
        console.error("Error fetching top companies:", error);
      }
    }
    fetchData();
  }, [])
  

  // const companies = [
  //   { id: 1, name: "Google", path: "/companies/google.webp" },
  //   { id: 2, name: "Amazon", path: "/companies/amazon.svg" },
  //   { id: 3, name: "Meta", path: "/companies/meta.svg" },
  //   { id: 4, name: "Netflix", path: "/companies/netflix.png" },
  //   { id: 5, name: "atlassian", path: "/companies/atlassian.svg" },
  //   { id: 6, name: "google", path: "/companies/google.webp" },
  // ];

  return (
    <main className="flex bg-cover bg-center text-black flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      
      
        <>
          <section className="text-center">
            <h1 className="flex flex-col text-black pt-20 items-center justify-center  font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tighter py-4">
              Find Your Dream Job
              <span className="flex items-center gap-2 sm:gap-6">
                and get Hired
                
              </span>
            </h1>
            <p className="text-black sm:mt-4 text-xs sm:text-xl">
              Explore thousands of job listings or find the perfect candidate
            </p>
          </section>

          <section className=" px-10 flex-col flex md:flex-row justify-center items-center gap-10">
            <div className="bg-white shadow-xl flex justify-center items-center flex-col cursor-pointer h-[20vh] border-gray-200 border rounded-2xl p-6 hover:bg-gradient-to-br from-red-200 via-red-100 to-red-50 ">
              <h2 className="text-2xl font-bold mb-2">For Job Seekers</h2>
              <p className="text-sm text-black">
                Search and apply for jobs, track applications, and more.
              </p>
              
            </div>

            <div className="bg-white shadow-xl cursor-pointer flex justify-center items-center flex-col h-[20vh] border border-gray-200 rounded-2xl p-6 hover:bg-gradient-to-br from-blue-200 via-blue-100 to-blue-50">
              <h2 className="text-2xl font-bold mb-2">For Employers</h2>
              <p className="text-sm text-black">
                Post jobs, manage applications, and find the best candidates.
              </p>
              
            </div>
          </section>

          <div className="hidden md:flex justify-between  gap-6 overflow-x-auto px-18 items-center scroll-smooth">
            {data.map((company) => (
              <div key={company.ID} className="flex-shrink-0 justify-center">
                <Image
                  width={0}
                  height={0}
                  src={company.image_url}
                  alt={company.name}
                  className="lg:size-30 size-15 object-contain"
                />
              </div>
            ))}
          </div>
        </>
    
    </main>
  );
};

export default LandingPage;
