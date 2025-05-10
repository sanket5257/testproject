'use client';
import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const pieData = [
  { name: 'Over Qualified', value: 30 },
  { name: 'Qualified', value: 70 },
];

const COLORS = ['#f97316', '#3b82f6'];

const PieChartComponent = () => (
  <PieChart width={250} height={200}>
    <Pie
      data={pieData}
      cx="50%"
      cy="50%"
      innerRadius={40}
      outerRadius={60}
      fill="#8884d8"
      dataKey="value"
      label
    >
      {pieData.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index]} />
      ))}
    </Pie>
    <Tooltip />
  </PieChart>
);

export default PieChartComponent;
