import React from 'react'

const Institutes = () => {
    const institutes=["IIT","NIT","IIT","NIT","IIT"]

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
          <div className="flex h-full w-full justify-center overflow-x-auto  gap-6 items-center">
            {institutes.map((institute, index) => {
              return (
                <div key={index} className='flex flex-col justify-center shrink-0 items-center  overflow-hidden  border-black' >
                    <img
                  className="size-30 md:size-50 rounded-xl shadow-xl"
                  src={`./${institute}.jpeg`}
                  alt="company logo"
                />
                <h1 className='font-Montserrat text-black text-[2.5vw] md:text-xl font-bold pt-4'>{institute}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Institutes