import React from "react";

const CustomLegend = ({ data, COLORS }) => {
  return (
    <div className="w-full space-y-3">
      {data.map((item, index) => (
        <div key={item.name} className="flex items-center justify-between">
          <div className="flex justify-between items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: COLORS[index] }}
            ></span>

            <span>{item.name}</span>
          </div>

          <span>{item.value}</span>
        </div>
      ))}
    </div>
  );
};

export default CustomLegend;
