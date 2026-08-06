import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CustomLegend from "./CustomLegend";

const PieCharts = () => {
  const data = [
    { name: "Design", value: 2 },
    { name: "Engineering", value: 5 },
    { name: "People", value: 3 },
    { name: "Product", value: 1 },
  ];
  const COLORS = ["#34D399", "#10B981", "#F59E0B", "#3B82F6"];
  return (
    <>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={70}
            outerRadius={100}
            paddingAngle={3}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip    cursor={{
            fill: "#1E293B",
            opacity: 0.35,
          }}
          contentStyle={{
            backgroundColor: "#111827",
            border: "1px solid #374151",
            borderRadius: "8px",
          }}/>
          {/* <Legend content={<CustomLegend data={data} COLORS={COLORS} />} /> */}
        </PieChart>
      </ResponsiveContainer>
      <CustomLegend data={data} COLORS={COLORS} />
    </>
  );
};

export default PieCharts;
