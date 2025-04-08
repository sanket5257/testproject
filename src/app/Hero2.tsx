"use client"

import Image from "next/image";

const LandingPage = () => {
  const companies = [
    { id: 1, name: "Google", path: "/companies/google.webp" },
    { id: 2, name: "Amazon", path: "/companies/amazon.svg" },
    { id: 3, name: "Meta", path: "/companies/meta.svg" },
    { id: 4, name: "Netflix", path: "/companies/netflix.png" },
    { id: 5, name: "Apple", path: "/companies/atlassian.svg" },
    { id: 6, name: "Tesla", path: "/companies/ibm.svg" },
  ];

  
  return (
    <main className="flex bg-cover bg-center bg-[url(/background3.jpeg)] flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center">
        <h1 className="flex flex-col pt-20 items-center justify-center bg-gradient-to-br from-gray-500 via-gray-200 to-white text-transparent bg-clip-text font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Find Your Dream Job
          <span className="flex items-center gap-2 sm:gap-6">
            and get
            <Image
              src="/logo2.png"
              className="lg:h-[20vh] lg:w-[20vw]"
              alt="Hirrd Logo"
              width={0}
              height={0}
            />
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>
      <section className="grid grid-cols-1 px-10 md:grid-cols-2 gap-4">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6  ">
          <h2 className="text-lg font-bold mb-2">For Job Seekers</h2>
          <p className="text-sm text-gray-300">
            Search and apply for jobs, track applications, and more.
          </p>
          <a href="/jobs">
          <button className="bg-blue-700 float-right hover:bg-blue-700 text-white text-lg font-semibold py-2 px-6 rounded-xl">
            Find Jobs
          </button>
        </a>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-lg font-bold mb-2">For Employers</h2>
          <p className="text-sm text-gray-300">
            Post jobs, manage applications, and find the best candidates.
          </p>
          <a href="/post-job">
          <button className="bg-red-700 float-right hover:bg-red-700 text-white text-lg font-semibold py-2 px-6 rounded-xl">
            Post a Job
          </button>
        </a>
        </div>
      </section>


      <div className="flex gap-6 justify-center">
        
        
      </div>

      <div
       
        className="flex justify-between  overflow-x-auto px-10 items-center  scroll-smooth"
      >
        {companies.map(({ name, id, path }) => (
          <div key={id} className="flex-shrink-0 justify-center ">
            <Image width={0} height={0} src={path} alt={name} className="size-30 sm:h-14 object-contain" />
          </div>
        ))}
      </div>


    </main>
  );
};

export default LandingPage;
