"use client"
import React, { useEffect, useState } from 'react'

const Footer = () => {

//   const [cat, setCat] = useState('')

// useEffect(() => {

//   fetch('https://catfact.ninja/fact')
//   .then(response => response.json())
//   .then(json => setCat(json.fact))
//   .catch(error => console.error('Error:', error));
// }, [])


  return (
    <div className='w-full overflow-x-hidden text-white font-Montserrat bg-[#161616]'>
      <div className='p-10 flex flex-wrap gap-12 justify-evenly items-start'>
        <div className='flex flex-col justify-between items-center gap-4'>
        <h1 className="text-[4vw] md:text-[1.5vw] text-white font-Montserrat font-light">
            <span className="text-blue-600 font-medium">Textile</span>Voice
          </h1>
          <h1>Contact with us</h1>
        </div>

        <div className='flex flex-col justify-center items-start gap-1'>
        <a href="">About Us</a>
        <a href="">Career</a>
        <a href="">FAQs</a>
        <a href="">Employer Home</a>
        <a href="">Article $ Blog</a>
        <a href="">community</a>
        <a href="">Exhibitions</a>
        </div>
        
        <div className='flex flex-col justify-center items-start gap-1'>
        <a href="">Home</a>
        <a href="">Notices</a>
        <a href="">Grievances</a>
        <a href="">Report issue</a>
        
        </div>

        <div className='flex flex-col justify-center items-start gap-1'>
        <a href="">Privacy Policy</a>
        <a href="">Terms & Conditions</a>
        <a href="">Fraud Alert</a>
        <a href="">Trust & Safety</a>
        
        </div>

            <div className='flex flex-col justify-between gap-4 items-start border rounded-xl p-4'>
                <div>
                    <h1 className='font-bold'>Apply on the go</h1>
                    <p>Get real time textile job update on our app</p>
                </div>
                <div className='flex pb-6 justify-between gap-10 items-center'>
                        <div className=' w-[35vw] md:w-[20vw] lg:w-[11vw] h-[7vh]  overflow-hidden border rounded-xl'>
                            <img className='h-full w-full object-cover' src="./playstore.png" alt="" />
                        </div>
                        <div className=' w-[35vw] md:w-[20vw]  lg:w-[11vw] h-[7vh] overflow-hidden border rounded-xl'>
                            <img className='h-full w-full object-cover' src="./applestore.png" alt="" />
                        </div>
                </div>
            </div>


      </div>
      <div>
        <h1 className='text-center p-4'>Copyright © 2024 TextileVoice. All rights reserved.</h1>
      </div>
    </div>
  )
}

export default Footer
