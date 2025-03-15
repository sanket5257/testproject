import React from 'react';

const JobCard = () => {
  const jobs = [
    {
        company:'google',
      jobTitle: 'Senior Product Manager',
      location: 'Pune, Maharashtra',
      jobType: 'Full Time',
      postedDate: 'March 14, 2025',
      detailsLink: '#',
    },
    {
        company:'google',
      jobTitle: 'Senior Product Manager',
      location: 'Pune, Maharashtra',
      jobType: 'Full Time',
      postedDate: 'March 14, 2025',
      detailsLink: '#',
    },
    {
        company:'google',
      jobTitle: 'Senior Product Manager',
      location: 'Pune, Maharashtra',
      jobType: 'Full Time',
      postedDate: 'March 14, 2025',
      detailsLink: '#',
    },
    {
        company:'google',
      jobTitle: 'Senior Product Manager',
      location: 'Pune, Maharashtra',
      jobType: 'Full Time',
      postedDate: 'March 14, 2025',
      detailsLink: '#',
    },
    {
        company:'google',
      jobTitle: 'Software Engineer',
      location: 'Bangalore, Karnataka',
      jobType: 'Part Time',
      postedDate: 'March 12, 2025',
      detailsLink: '#',
    },
    // Add more job data as needed
  ];

  return (
    <div className='bg-white'>
      <div
        id="JobCards"
        className="h-auto font-Montserrat w-full flex flex-col justify-center items-center"
      >
        <div className="h-full w-full">
          <h1 className="pt-10 text-center text-3xl font-Montserrat font-bold text-blue-500">
          Jobs Based On Your Applies
          </h1>
          <div className="flex pt-6 flex-wrap justify-center gap-6 items-center">
            {jobs.map((job, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-between items-center p-2 w-[16vw] h-[41vh] bg-white shadow-xl rounded-lg border border-gray-300"
                >
                    <div className='bg-blue-100 rounded-xl w-full h-full p-2'>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-1'>
                            <img className='size-8' src="./google.svg" alt="company logo" />
                            <p className="text-sm text-gray-600 mt-2">{job.company}</p>
                            </div>
                            <div className='flex gap-1'>
                                <div className='bg-white flex justify-center items-center size-8 rounded-full'>
                                    <img className='size-7' src="./save.svg" alt="save" />
                                </div>
                                <div className='bg-white flex justify-center items-center size-8 rounded-full'>
                                    <img  className='size-7' src="./save.svg" alt="save" />
                                </div>
                            </div>
                        </div>
                        <div className=' h-[8vh]'>
                        <h2 className="text-xl font-Montserrat font-semibold text-black">
                    {job.jobTitle}
                  </h2>
                        </div>
                  
                  <p className="text-sm text-gray-600 mt-2">{job.location}</p>
                  <div className='h-[10vh] flex-wrap flex justify-start gap-2 items-center'>
                  <p className="text-sm border-2 px-3 py-1 rounded-xl inline-block text-gray-600 mt-2">{job.jobType}</p>
                  <p className="text-sm border-2 px-3 py-1 rounded-xl inline-block text-gray-600 mt-2">{job.jobType}</p>
                  <p className="text-sm border-2 px-3 py-1 rounded-xl inline-block text-gray-600 mt-2">{job.jobType}</p>

                  </div>

                  <div className='flex justify-between h-[4vh] w-full mt-2 items-end' >
                  <p className="text-sm  text-gray-600">Posted Date: {job.postedDate}</p>

                  </div>
                  
                  </div>
                  <a
                    href={job.detailsLink}
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
  );
};

export default JobCard;
