import React, { useEffect, useState } from "react";
import Image from "next/image";

import api from "../services/api_service";

const Institutes = () => {
  const [data, setData] = useState([
    { name: "", image_url: "", url: "", ID: "" },
  ]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.getTieUpInstitute();
        setData(response.data);
      } catch (error) {
        console.error("Error fetching top companies:", error);
      }
    }
    fetchData();
  }, []);

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
          <div className="flex h-full w-full justify-start md:justify-center overflow-x-auto  gap-6 items-center">
            {data.map((institute) => {
              return (
                <div
                  key={institute.ID}
                  className="flex flex-col justify-center shrink-0 items-center  overflow-hidden  border-black"
                >
                  <Image
                    className="size-30 md:size-50 rounded-xl shadow-xl"
                    src={institute.image_url}
                    alt="company logo"
                    width={0}
                    height={0}
                  />
                  <h1 className="font-Montserrat text-black text-[2.5vw] md:text-xl font-bold pt-4">
                    {institute.name}
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
