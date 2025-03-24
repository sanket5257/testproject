import React from 'react'

const Institutes = () => {
    const institutes=["IIT","NIT","IIT","NIT","IIT"]

  return (
    <div>
        <div
        id="Topcompanies"
        className="md:h-[40vh] mb-22 h-[18vh] w-full pt-10 flex flex-col justify-center items-center"
      >
        <div className="h-full  w-full ">
          <h1 className="pt-10  text-center md:text-3xl font-Montserrat font-bold text-blue-600">
          Tie-up Institute
          </h1>
          <div className="flex md:pt-6 pt-6 bg-white justify-center gap-4 items-center">
            {institutes.map((institute, index) => {
              return (
                <div key={index} className='flex   flex-col justify-center items-center  md:size-60 overflow-hidden  border-black' >
                    <img
                  className="md:size-50 size-15 rounded-xl shadow-xl"
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