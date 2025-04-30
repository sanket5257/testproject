'use client';

import React, { useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;

      if (sectionRef.current && !sectionRef.current.contains(target)) {
        router.back();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [router]);

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div
        ref={sectionRef}
        className="px-10 flex flex-col md:flex-row justify-center items-center gap-10"
      >
        <a
          href="/Signup"
          className="bg-white shadow-xl flex justify-center items-center flex-col cursor-pointer h-[20vh]  border-gray-200 border rounded-2xl p-6 hover:bg-gradient-to-br from-red-200 via-red-100 to-red-50"
        >
          <h2 className="text-2xl font-bold mb-2 text-black">For Job Seekers</h2>
          <p className="text-sm text-black">
            Search and apply for jobs, track applications, and more.
          </p>
        </a>

        <a
          href="/employer/employerregisterpage1"
          className="bg-white shadow-xl cursor-pointer flex justify-center items-center flex-col h-[20vh] border border-gray-200 rounded-2xl p-6 hover:bg-gradient-to-br from-blue-200 via-blue-100 to-blue-50"
        >
          <h2 className="text-2xl font-bold mb-2 text-black">For Employers</h2>
          <p className="text-sm text-black">
            Post jobs, manage applications, and find the best candidates.
          </p>
        </a>
      </div>
    </div>
  );
};

export default Page;
