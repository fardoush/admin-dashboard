import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Charts = () => {
  const data = [
    {
      department: "Design",
      Salary: 350,
    },
    {
      department: "Engineering",
      Salary: 580,
    },
    {
      department: "People",
      Salary: 380,
    },
    {
      department: "Product",
      Salary: 220,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        data={data}
        tabIndex={-1}
        margin={{
          top: 20,
          right: 20,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid stroke="#2A3441" strokeDasharray="3 3" />
        <XAxis dataKey="department" stroke="#94A3B8" />
        <YAxis stroke="#94A3B8" />
        <Tooltip
          cursor={{
            fill: "#1E293B",
            opacity: 0.35,
          }}
          contentStyle={{
            backgroundColor: "#111827",
            border: "1px solid #374151",
            borderRadius: "8px",
          }}
        />
        <Legend />
        <Bar
          dataKey="Salary"
          fill="#34D399"
          // fillOpacity={0.8} 
          activeBar={false}
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Charts;
