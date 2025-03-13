import React from 'react'

const Institutes = () => {
    const institutes=["IIT","NIT","IIT","NIT","IIT"]

  return (
    <div>
        <div
        id="Topcompanies"
        className="h-[40vh] w-full pt-10 flex flex-col justify-center items-center"
      >
        <div className="h-full w-full ">
          <h1 className="pt-10  text-center text-3xl font-Montserrat font-bold text-blue-600">
          Tie-up Institute
          </h1>
          <div className="flex pt-6 bg-white justify-center gap-4 items-center">
            {institutes.map((institute, index) => {
              return (
                <div key={index} className='flex  flex-col justify-center items-center  size-60 overflow-hidden  border-black' >
                    <img
                  className="size-50 rounded-xl shadow-xl"
                  src={`./${institute}.jpeg`}
                  alt="company logo"
                />
                <h1 className='font-Montserrat text-black font-bold pt-4'>{institute}</h1>
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