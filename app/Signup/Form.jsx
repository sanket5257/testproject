"use client"

import React from 'react'
import Header from '../../components/Header'

const Form = () => {
const handleonsubmit=(e)=>{
  e.preventDefault();
  const data=e
  console.log(data.target.value)
  
}

  return (
    <div className=' w-full font-Montserrat text-lg'>
      <Header/>
            
<div className=" bg-white md:flex md:pt-[15vh] pt-[10vh]">
	<div
		className="relative overflow-hidden md:flex md:w-1/2 bg-white justify-around items-center">
		<img src="./signupbg.jpeg" alt="" />
	</div> 
	<div className="flex md:w-1/2 justify-center md:px-20 px-4 items-center bg-white">
    <form method='post' onSubmit={handleonsubmit} className="bg-white ">
  <h1 className="font-bold text-center font-Montserrat md:text-3xl text-xl text-blue-800 mb-1">Employee Register</h1>
  
  {/* Full Name Fields */}
  <label htmlFor="Name" className="text-black font-medium text-lg font-Montserrat">Name</label>

  <div className="flex justify-center mt-1 items-center font-Montserrat md:gap-4 gap-2 mb-2">
    <div className="">
      <input
        className="border-2 border-gray-400 placeholder:text-sm py-2 px-3 rounded-xl w-full text-black"
        type="text"
        id="firstName"
        placeholder="First Name"
      />
    </div>
    <div className="">
     
      <input
        className="border-2 border-gray-400 placeholder:text-sm py-2 px-3 rounded-xl w-full text-black"
        type="text"
        id="middleName"
        placeholder="Middle Name"
      />
    </div>
    <div className="">
      <input
        className="border-2 border-gray-400 placeholder:text-sm py-2 px-3 rounded-xl w-full text-black"
        type="text"
        id="lastName"
        placeholder="Last Name"
      />
    </div>
  </div>

  {/* whatsapp number*/}
  <div className=" mb-2  font-Montserrat">
    <label htmlFor="whatsapp number" className="text-black text-lg font-medium">what's app number</label>
    <input
        className="border-2 border-gray-400 mt-1 py-2 px-3 rounded-xl w-full text-black"
        type="text"
        id="Number"
        placeholder="Enter what's app number"
      />
  </div>

  {/* Email Address */}
  <div className="mb-2 font-Montserrat">
    <label htmlFor="email" className="text-black text-lg font-medium">Email</label>
    <input
        className="border-2 border-gray-400 mt-1 py-2 px-3 rounded-xl w-full text-black"
        type="email"
        id="Email"
        placeholder="Enter email address"
      />
  </div>

  {/* Password */}
  <div className=" mb-2 font-Montserrat">
    <label htmlFor="password" className="text-black text-lg font-medium">Password</label>
    <input
        className="border-2 border-gray-400 mt-1 py-2 px-3 rounded-xl w-full text-black"
        type="password"
        id="Password"
        placeholder="Enter password"
      />
  </div>

  {/* Age Gender */}

<div className=" mb-2 flex justify-between  items-center  font-Montserrat gap-10 ">
  <div className="">
  <label htmlFor="Age" className="text-black text-lg font-medium">Age</label>
    <input
        className="border-2 border-gray-400 mt-1 py-3 px-3 rounded-xl w-full text-black"
        type="text"
        id="Age"
        placeholder="Enter Age"
      />
  </div>
  <div className="">
  <label htmlFor="gender" className="text-black text-lg font-medium">Gender</label>

  <select id="options"  name="Select Gender" className='border-2 placeholder:text-sm  mt-1 h-14 rounded-2xl md:w-[18vw] border-gray-400 text-gray-400'>
            <option className='' value="option1">Select Gender</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
        </select>
  </div>
  
</div>
{/* Address */}
<div className=" mb-2 font-Montserrat">
    <label htmlFor="address" className="text-black text-lg font-medium">Address</label>
    <input
        className="border-2 border-gray-400 mt-1 py-2 px-3 rounded-xl w-full text-black"
        type="text"
        id="Address"
        placeholder="Enter Address"
      />
  </div>

{/*contry state city*/}

<div className="flex justify-between mt-1 items-center  font-Montserrat md:gap-4 gap-2 mb-4">
  <div className="">
  <label htmlFor="contry" className="text-black text-lg font-medium">Contry</label>

  <select id="options" name="Select Gender" className='border-2 h-13 mt-1  rounded-2xl md:w-[12vw] w-[30vw] border-gray-400 text-gray-400'>
            <option value="option1">Contry</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
        </select>
  </div>
  <div className="">
  <label htmlFor="state" className="text-black text-lg font-medium">State</label>

  <select id="options" name="State" className='border-2 h-13 mt-1  rounded-2xl md:w-[12vw] w-[30vw] border-gray-400 text-gray-400'>
            <option value="option1">State</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
        </select>
  </div>
  <div className="">
  <label htmlFor="city" className="text-black text-lg font-medium">City</label>

  <select id="options" name="Select Gender" className='border-2 h-13 mt-1 rounded-2xl md:w-[12vw] w-[30vw] border-gray-400 text-gray-400'>
            <option value="option1">City</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
        </select>
  </div>
  
</div>

 {/* job seeker/intern */}

 <div className="mb-2 font-Montserrat">
  <div className="">

  <select id="options" name="Select job" className='border-2 py-3 rounded-2xl w-full border-gray-400 text-gray-400'>
            <option value="option1">Select Role Job Seeker / Intern</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
        </select>
  </div>

  
  
</div>



  <div className='flex justify-center items-center h-[10vh]'>
  <button
    type="submit"
    className="bg-linear-to-bl from-[#007BFF] to-[#004C99] text-white rounded-md font-bold  md:h-11 h-15 w-[40vw] md:w-[20vw]"
  >
    Register now
  </button>
  </div>

  {/* Forgot Password Link */}
</form>

	</div>
</div>
    </div>
  )
}

export default Form