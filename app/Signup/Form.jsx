import React from 'react'

const Form = () => {
  return (
    <div className='h-screen w-full font-Montserrat text-lg'>
            
<div className="h-screen md:flex">
	<div
		className="relative overflow-hidden md:flex w-1/2 bg-white justify-around items-center hidden">
		<img src="./signupbg.jpeg" alt="" />
	</div>
	<div className="flex md:w-1/2 justify-center pl-20 pr-20 items-center bg-white">
    <form className="bg-white">
  <h1 className="font-bold text-center font-Montserrat text-3xl text-blue-800 mb-1">Employee Register</h1>
  
  {/* Full Name Fields */}
  <label htmlFor="Name" className="text-black font-medium text-lg font-Montserrat">Name</label>

  <div className="flex justify-center mt-1 items-center font-Montserrat gap-4 mb-2">
    <div className="">
      <input
        className="border-2 py-2 px-3 rounded-xl w-full text-black"
        type="text"
        id="firstName"
        placeholder="First Name"
      />
    </div>
    <div className="">
     
      <input
        className="border-2 py-2 px-3 rounded-xl w-full text-black"
        type="text"
        id="middleName"
        placeholder="Middle Name"
      />
    </div>
    <div className="">
      <input
        className="border-2 py-2 px-3 rounded-xl w-full text-black"
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

<div className=" mb-2 flex justify-between  items-center  font-Montserrat gap-4 ">
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

  <select id="options" name="Select Gender" className='border-2 py-3 mt-1 px-10 rounded-2xl w-full border-gray-400 text-gray-400'>
            <option value="option1">Select Gender</option>
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

<div className="flex justify-between mt-1 items-center  font-Montserrat gap-4 mb-4">
  <div className="">
  <label htmlFor="contry" className="text-black text-lg font-medium">Contry</label>

  <select id="options" name="Select Gender" className='border-2 py-3 mt-1 px-10 rounded-2xl w-full border-gray-400 text-gray-400'>
            <option value="option1">Contry</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
        </select>
  </div>
  <div className="">
  <label htmlFor="state" className="text-black text-lg font-medium">State</label>

  <select id="options" name="State" className='border-2 py-3 mt-1 px-10 rounded-2xl w-full border-gray-400 text-gray-400'>
            <option value="option1">State</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
        </select>
  </div>
  <div className="">
  <label htmlFor="city" className="text-black text-lg font-medium">City</label>

  <select id="options" name="Select Gender" className='border-2 py-3 mt-1 px-10 rounded-2xl w-full border-gray-400 text-gray-400'>
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



  <button
    type="submit"
    className="bg-linear-to-bl from-[#007BFF] to-[#004C99] text-white rounded-md font-bold  h-11 w-64"
  >
    Register now
  </button>

  {/* Forgot Password Link */}
  <span className="text-sm ml-2 text-blue-400 hover:text-blue-500 cursor-pointer">Forgot Password?</span>
</form>

	</div>
</div>
    </div>
  )
}

export default Form