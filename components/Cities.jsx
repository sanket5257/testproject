import React from 'react'

const Cities = () => {

const cities=["Mumbai","Pune","Banglore","Mumbai","Pune"]

  return (
    <div className='bg-white'>
        <div
        id="Topcompanies"
        className="h-[40vh] bg-white w-full pt-10 flex flex-col justify-center items-center"
      >
        <div className="h-full w-full ">
          <h1 className="pt-10  text-center text-3xl font-Montserrat font-bold text-blue-500">
          Jobs In Major Cities
          </h1>
          <div className="flex pt-6 justify-center gap-4 items-center">
            {cities.map((city, index) => {
              return (
                <div key={index} className='flex flex-col justify-center items-center  size-60 overflow-hidden  border-black' >
                    <img
                  className="size-50 rounded-xl shadow-xl"
                  src={`./${city}.jpeg`}
                  alt="company logo"
                />
                <h1 className='font-Montserrat text-black font-bold pt-4'>{city}</h1>
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