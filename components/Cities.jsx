import React from 'react'

const Cities = () => {

const cities=["Mumbai","Pune","Banglore","Mumbai","Pune"]

  return (
    <div className='bg-white'>
        <div
        id="Topcompanies"
        className="  bg-whit w-full pt-10 flex flex-col justify-center items-center"
      >
        <div className="h-full w-full ">

          <h1 className=" md:pt-10 text-center md:text-3xl font-Montserrat font-bold text-blue-500">
          Jobs In Major Cities
          </h1>
          <div className="flex h-full w-full justify-center overflow-x-auto  gap-6 items-center">
            {cities.map((city, index) => {
              return (
                <div key={index} className='flex flex-col justify-center shrink-0 items-center  overflow-hidden  border-black' >
                    <img
                  className="size-30 md:size-50 rounded-xl shadow-xl"
                  src={`./${city}.jpeg`}
                  alt="company logo"
                />
                <h1 className='font-Montserrat text-[2.5vw] md:text-xl text-black font-bold pt-4'>{city}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cities