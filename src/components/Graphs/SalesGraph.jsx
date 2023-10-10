"use client";

import React from "react";

import {
  ResponsiveContainer,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const SalesGraph = () => {
  return (
    <ResponsiveContainer className="h-full ">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#664dc9" stopOpacity={0.5} />
            <stop offset="95%" stopColor="#664dcb99" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Tooltip cursor={{ stroke: '#664dcb99', strokeWidth: 2 }} />

        <Area
          type="monotone"
          dataKey="pv"
          stroke="#fff"
          opacity={"40%"}
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SalesGraph;
