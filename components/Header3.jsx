import React from 'react'

const Header3 = () => {
  return (
    <div className="bg-white w-full shadow-2xl">
      <div className=" h-[7vh]  bg-white w-full flex justify-center items-center ">
        <div className="h-full flex items-center justify-start pl-10 w-1/3 ">
          <h1 className="text-2xl text-black font-Montserrat font-light">  <span className="text-blue-600 font-medium"> Textile</span>Voice</h1>
        </div>
        <div className=" h-full text-black flex justify-evenly   items-center  w-1/3">
          <h1 className='font-bold'>Account</h1>
          
        </div>
        <div className=" h-full w-1/3 flex gap-8 items-center justify-end pr-10 ">
          <img className='size-8' src="./bell.svg" alt="" />
          <img className='size-8' src="./user.svg" alt="" />

        </div>
      </div>
    
    </div>
  )
}

export default Header3