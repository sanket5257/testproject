'use client';
import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Dec 01', jobs: 140 },
  { name: 'Dec 02', jobs: 180 },
  { name: 'Dec 03', jobs: 220 },
  { name: 'Dec 04', jobs: 210 },
  { name: 'Dec 05', jobs: 240 },
  { name: 'Dec 06', jobs: 120 },
  { name: 'Dec 07', jobs: 190 },
  { name: 'Dec 08', jobs: 200 },
  { name: 'Dec 09', jobs: 160 },
];

const BarChartComponent = () => (
  <div className="w-full h-60">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <Tooltip />
        <Bar dataKey="jobs" fill="#1D4ED8" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default BarChartComponent;
