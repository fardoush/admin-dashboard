import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";

const StatsCard = ({ stats }) => {
  const { title, icon: Icon, value, growth } = stats;
  return (
    <div className="bg-surface p-4 rounded-xl border border-border w-full space-y-3">
      <div className="flex items-center gap-2 justify-between">
        <p className="text-sm uppercase text-text-secondary">{title}</p>
        <Icon />
      </div>
      <div className="flex items-center gap-2 justify-between">
        <h3 className="text-2xl uppercase text-text">{value}</h3>
        <span className="text-primary flex items-center gap-1 text-xs">
          <FaArrowTrendUp />+{growth}%
        </span>
      </div>
    </div>
  );
};

export default StatsCard;
