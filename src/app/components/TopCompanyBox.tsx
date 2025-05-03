"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import api from "../services/api_service";
import { AxiosResponse } from "axios";
import Link from "next/link";


const TopCompanyBox = () => {
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

  return (
    <div>
      <div
        id="Topcompanies"
        className="h-[20vh] md:h-[25vh] w-full pt-14 md:pt-10 flex flex-col justify-center items-center"
      >
        <div className="h-full w-full overflow-x-hidden">
          
           <div className="hidden md:flex justify-between  gap-6 overflow-x-auto px-18 items-center scroll-smooth">
                      {data.map((company) => (
                        <Link href={company.url} key={company.ID} className="flex-shrink-0 justify-center">
                          <Image
                            width={0}
                            height={0}
                            src={company.image_url}
                            alt={company.name}
                            className="lg:size-30 size-15 object-contain"
                          />
                        </Link>
                      ))}
                    </div>
        </div>
      </div>
    </div>
  );
};

export default TopCompanyBox;
