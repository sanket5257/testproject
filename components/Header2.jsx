import React from 'react'

const Header2 = () => {
  return (
    <div className="bg-white w-full">
      <div className=" h-[7vh]  bg-white w-full flex justify-center items-center ">
        <div className="h-full flex items-center justify-start pl-10 w-1/3 ">
          <h1 className="text-2xl text-black font-Montserrat font-light">  <span className="text-blue-600 font-medium"> Textile</span>Voice</h1>
        </div>
        <div className=" h-full text-black flex justify-evenly   items-center  w-1/3">
          <h1>Home</h1>
          <h1>Artical & Blog</h1>
          <h1>community</h1>
          <h1>Exhibitions</h1>
        </div>
        <div className=" h-full w-1/3 flex gap-8 items-center justify-end pr-10 ">
        <a className="text-black" href=""> 999999999</a>
          <img className='size-8' src="./bell.svg" alt="" />
          <img className='size-8' src="./user.svg" alt="" />

        </div>
      </div>
    
<div className="font-Montserrat h-[22vh] bg-[#021F3C] flex justify-start items-center ">
	<div className="container w-[75vw]  pl-25 ">
		<form>
			<h1 className="font-Montserrat font-bold text-white text-4xl pt-4 ">Find Your Dream Job Here </h1>
				<div className="sm:flex mt-5 items-center outline-2 outline-white rounded-3xl overflow-hidden px-2 py-1 justify-between">
					<input className="text-base text-white flex-grow outline-none px-2 " type="text" placeholder="Search job , company or skills" />
					<div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
						
						<button className="bg-white text-[#004C99]  rounded-3xl px-6 py-2">find jobs</button>
					</div>
				</div>
		</form>
	</div>
</div>
    </div>
  )
}

export default Header2