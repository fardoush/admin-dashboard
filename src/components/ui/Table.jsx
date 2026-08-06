import React from "react";

const Table = ({employees}) => {

  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className=" w-full">
        <thead className="bg-card">
          <tr className="text-left">
            <th className="px-6 py-4">Employee</th>
            <th className="px-6 py-4">Department</th>
            <th className="px-6 py-4">Joined</th>
            <th className="px-6 py-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {
            employees.map(employee => (
                <tr key={employee.id} className="text-left border-t border-border hover:bg-card transition">
            <td className="px-6 py-4" >
              <div className="flex gap-3">
               <div className="h-12 w-12 rounded-full">
                 <img src={employee.image} alt="" className=" w-full h-full object-cover rounded-full" />
               </div>
                <div className="">
                  <div className="font-bold">{employee.name}</div>
                  <div className="text-sm text-text-secondary">{employee.designation}</div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4">{employee.dept}</td>
            <td className="px-6 py-4">{employee.joined}</td>
            <td className="px-6 py-4">
              <span className={`text-xs  px-3 py-[4px] rounded-md text-center uppercase font-semibold ${employee.status === "Active" ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-500"}`}>
                {employee.status}
              </span>
            </td>
          </tr>
            ))
          }
          
        </tbody>
      </table>
    </div>
  );
};

export default Table;
