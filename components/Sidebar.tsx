import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <div id='sidebar' className=' h-full ml-2 gap-12 font-Montserrat bg-white md:w-[28vw] w-full absolute right-0 top-10 flex justify-center items-center flex-col'>
            <div className=' '>
            <img className='opacity-60  size-30 ' src="./account.png" alt="img" />
                </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <h1 className='font-bold text-xl'>John Doe</h1>
                <h3 className='text-gray-500 text-lg'>johndoe@gmail.com</h3>
                <h3 className='text-gray-500 text-lg'>987456321</h3>
            </div>
            <div className='flex flex-col font-medium justify-center items-center gap-2'>
                    <h3>My Profile</h3>
                    <h3>My Application</h3>
                    <h3>Saved Jobs</h3>
                    <h3>Packages</h3>
            </div>
            <div className='flex justify-center items-center h-[10vh]'>
  <button
    type="submit"
    className="bg-linear-to-bl bg-[#004C99] text-white rounded-lg font-bold  md:h-11 h-15 w-[40vw] md:w-[20vw]"
  >
    Log Out
  </button>
  </div>

        </div>
    </div>
  )
}

export default Sidebar
