import React from 'react'
import Header3 from '../../components/Header3'
import ResumeCard from '../../components/ResumeCard'

const page = () => {
  return (
    <div className='bg-white  text-black h-screen w-full font-Montserrat'>
        <Header3/>
        <div className='flex bg-white mt-1  items-center justify-center h-screen'>
        <div className=' h-full w-[70vw] shadow-2xl'>
            <div className=' h-[24vh] text-lg text-gray-500 w-full flex items-center justify-evenly'>
                    <img className='size-36 opacity-60' src="./account.png" alt="" />
                        <div>
                            <h1 className='text-black font-bold text-xl mb-4'>Jhon Doe</h1>
                            <div className='flex gap-2'>
                                <img className='size-5' src="./accountimg/location.png" alt="" />
                            <h3>Kolhapur</h3>
                            </div>
                            <div className='flex gap-2'>
                                <img className='size-5' src="./accountimg/gender.png" alt="" />
                            <h3>Male</h3>
                            </div>
                            <div className='flex gap-2'>
                                <img className='size-5' src="./accountimg/agegroup.png" alt="" />
                            <h3>22</h3>
                            </div>
                        </div>
                        <div>
                            <img className='size-7 mb-4 ml-[12vw]' src="./accountimg/eyeborw.png" alt="" />
                        <div className='flex gap-2'>
                                <img className='size-5' src="./accountimg/email.png" alt="" />
                            <h3>johndoe@gmail.com</h3>
                            </div>
                            <div className='flex gap-2'>
                                <img className='size-5' src="./accountimg/whatsapp.png" alt="" />
                            <h3>+91 00000 00000</h3>
                            </div>
                            <div className='flex gap-2'>
                                <img className='size-5' src="./accountimg/construction.png" alt="" />
                            <h3>Job seeker</h3>
                            </div>
                        </div>
                        <div className='border-dotted border-3 flex text-black justify-evenly flex-col items-center rounded-2xl w-[22vw] h-[18vh] border-blue-400'>
                                <h1 className=''>Resume.pdf</h1>
                                <div className='flex w-full  items-end justify-evenly '>
                                    <button className='border-1 border-blue-500 h-10 w-32 text-[#004C99] rounded-xl'>clear</button>
                                    <button className='border-1 border-blue-500 h-10 w-32 bg-[#004C99] text-white rounded-xl'>upload</button>
                                </div>
                        </div>
            </div>
            <div id="about" className=' text-gray-500 px-10'>
                        <h1 className='text-start text-xl text-black font-bold'>About</h1>
                        <p className='text-lg'> I'm John Doe, a dedicated professional from Kolhapur with a strong interest in [insert field or industry]. I am eager to apply my skills in [specific job/role] and contribute to a dynamic team. With a keen eye for detail and excellent problem-solving abilities.</p>
                
               <div className='relative bg-red-50 h-[17vh] mt-5 overflow-hidden w-full rounded-2xl'>
                <img className='object-cover h-full w-full' src="./accountimg/ai.jpeg" alt="" />
                 
                    <h1 className='text-white text-3xl font-bold absolute bottom-15 px-10'>BUILD YOUR RESUME WITH TEXTILE VOICE</h1>
                 </div> 
                </div>

                <ResumeCard/>
        </div>


        <div id='sidebar' className=' h-full ml-2 bg-white w-[28vw]'>
            <img className='pt-10 ' src="./account.jpeg" alt="img" />
            <ul className='pl-10 list-disc'>
                <li className='pb-4'>
                Complete your profile to get noticed!
                </li>
                <li className='pb-4'>
                Fill in details for better job matches.
                </li>
                <li className='pb-4'>
                A complete profile attracts employers.
                </li>
                <li className='pb-4'>
                Increase your chances by updating your info.
                </li>
                <li className='pb-4'>
                Employers prefer 100% completed profiles.
                </li>
                <li className='pb-4'>
            Don’t miss out—finish your profile today!
                </li>
                <li className='pb-4'>
                The more details, the better the job offers!
                </li>
                <li className='pb-4'>
                Keep your profile updated for new opportunities.
                </li>
            </ul>


        </div>
        </div>

        



    </div>
  )
}

export default page