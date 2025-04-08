'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const BarChartComponent = dynamic(() => import('@/src/app/components/BarChartComponent'), { ssr: false });
const PieChartComponent = dynamic(() => import('@/src/app/components/PiChartComponent'), { ssr: false });

const Dashboard = () => {
  return (
    <div className='flex gap-4 pt-25 bg-white'>
                <div  className="p-6 w-[70vw]   bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg text-gray-500 font-semibold">Date :- 27 March 2025</h2>
        <button className="px-6 py-2 font-bold border border-blue-600 text-[#004C99] bg-white  rounded-xl hover:bg-blue-600 hover:text-white transition">
          Post New Job
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {[
          { label: 'Total Job Posted', value: '5,00', sub: '1 More Job Left' },
          { label: 'Total Application', value: '15,000', sub: '150 More Job Applications' },
          { label: 'Selected Candidates', value: '1,000', sub: '50% Candidates' },
        ].map((card, i) => (
          <div key={i} className="bg-white p-4 rounded shadow">
            <p className="text-gray-600">{card.label}</p>
            <h3 className="text-2xl font-bold text-blue-700">{card.value}</h3>
            <p className="text-sm text-gray-500">{card.sub}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="flex  gap-5 mb-6">
        <div className="bg-white p-4 w-[70vw] rounded shadow">
          <h4 className="font-semibold text-black mb-2">Job Posted</h4>
          <p className="text-sm text-gray-500 mb-2">2,40</p>
          <BarChartComponent />
        </div>

        <div className="bg-white w-[30vw] p-4 rounded shadow">
          <h4 className="font-semibold text-black mb-2">Candidate Qualification</h4>
          <PieChartComponent />
          <div className="flex justify-center gap-4 mt-2 text-sm">
            <span className="text-oconsole.log('Rendering Dashboard component');
console.log('Rendering BarChartComponent');
console.log('Rendering PieChartComponent');range-500 text-orange-500">30% Over Qualified</span>
            <span className="text-blue-600">70% Qualified</span>
          </div>
        </div>
      </div>

      {/* Job Table */}
      <div className="bg-white p-4 text-black rounded shadow">
        <div className="flex justify-between items-center mb-3">
          <h4 className="font-semibold">Job Posted</h4>
          <button className="text-blue-600 font-bold text-sm">View All</button>
        </div>
        <table className="w-full text-sm text-left">
          <thead className="text-gray-600 border-b">
            <tr>
              <th className="py-2">Job Title</th>
              <th>Total Applications</th>
              <th>Candidate Selected</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((_, i) => (
              <tr key={i} className="border-b font-bold">
                <td className="py-2">Full Stack Developer</td>
                <td>1,000</td>
                <td>1,000</td>
                <td>
                  <button className="px-3 py-1 bg-[#004C99] text-white rounded-lg">
                    Go To The Job
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
                <div className=' w-[30vw] h-screen'>   
                    <h1 className='text-gray-500 text-center font-bold'>packages</h1>
                </div>
    </div>
  );
};

export default Dashboard;
