import React from "react";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const DepartmentsCard = () => {
  return (
    <div className="p-6 bg-surface border border-border rounded-lg space-y-4">
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 bg-primary/20 rounded flex items-center justify-center">
          <HiOutlineBuildingOffice2 className="w-6 h-6 text-primary" />
        </div>
        <div className="flex flex-col">
            <span className="text-base">Design</span>
            <span className="text-xs text-text-secondary">2 people</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex flex-col p-3 rounded bg-card space-y-1">
         <span className="text-xs uppercase tracking-widest  text-text-secondary">2 people</span>
         <span className="text-base">$88k</span>
      </div>
      <div className="flex flex-col p-3 rounded bg-card space-y-1">
         <span className="text-xs uppercase tracking-widest  text-text-secondary">Active</span>
         <span className="text-base">2</span>
      </div>
      </div>

      <div className="flex -space-x-4 overflow-hidden">
<div className="w-12 h-12">
    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full rounded-full object-cover" />
</div>
<div className="w-12 h-12">
    <img src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full rounded-full object-cover" />
</div>
<div className="w-12 h-12">
    <img src="https://images.unsplash.com/photo-1695927621677-ec96e048dce2?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full rounded-full object-cover" />
</div>
<div className="w-12 h-12">
    <img src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full rounded-full object-cover" />
</div>
      </div>
    </div>
  );
};

export default DepartmentsCard;
