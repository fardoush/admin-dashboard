import React from "react";
import { IoAdd } from "react-icons/io5";

const PageTitle = () => {
  return (
    <div className="flex justify-between items-center gap-5">
      <div className="space-y-2">
        <h2 className="text-4xl text-text">Team Overview</h2>
        <span className="text-text-secondary text-sm">
          Everything at a glance.
        </span>
      </div>

 <div className="">
         <button className=" bg-primary  leading-none text-surface py-3 px-6 flex items-center gap-1 font-semibold rounded-lg">
        <IoAdd size={18}/> Add Employee
      </button>
 </div>
    </div>
  );
};

export default PageTitle;
