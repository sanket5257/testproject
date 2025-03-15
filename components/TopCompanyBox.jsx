import React from 'react'

const TopCompanyBox = () => {

    const company = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Google' },
  { id: 3, name: 'Amazon' },
  { id: 4, name: 'Microsoft' },
  { id: 5, name: 'Facebook' },
]

  return (
    <div>
        <div
        id="Topcompanies"
        className="h-[45vh] w-full pt-10 flex flex-col justify-center items-center"
      >
        <div className="h-full w-full  bg-blue-100">
          <h1 className="pt-10  text-center text-3xl font-Montserrat font-bold text-blue-500">
          Jobs By Top Companies
          </h1>
          <div className="flex justify-center gap-8">
            {company.map((companyItem, index) => {
              return (
                <div key={index} className='h-[25vh] w-[15vw] flex flex-col justify-center items-center'>
                    <img
                   
                  className="size-50"
                  src="./apple.png"
                  alt="company logo"
                />
                <a
                    href={""}
                    className="mt-2 w-[15vw] text-center py-2 bg-[#004C99] text-white text-sm font-medium rounded-md hover:bg-blue-700"
                  >
                    See Details
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopCompanyBox