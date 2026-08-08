import React, { useState } from "react";
import PageTitle from "../../components/common/PageTitle";
import EmployeeTable from "../../components/ui/EmployeeTable";
import { Link } from "react-router";
import { LuArrowUpDown } from "react-icons/lu";

const Employees = () => {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [status,setStatus] = useState("All")
  const employees = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Priya Shah",
      email: "priya01@gmail.com",
      salary: 109000,
      designation: "SWE",
      dept: "Engineering",
      joined: "01/01/2024",
      status: "Active",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Julian Rossi",
      email: "Julian@gmail.com",
      salary: 79000,
      designation: "SWE",
      dept: "Engineering",
      joined: "19/08/2024",
      status: "Remote",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Raju Chacha",
      email: "raju@gmail.com",
      salary: 77000,
      designation: "UX Researcher",
      dept: "Design",
      joined: "19/08/2024",
      status: "Remote",
    },
    {
      id: 4,
      image:
        "https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Priya Shah",
      email: "priya@gmail.com",
      designation: "SWE",
      salary: 99000,
      designation: "UX Researcher",
      dept: "Design",
      joined: "19/08/2024",
      status: "Active",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Sarah Chen",
      email: "sarah@gmail.com",
      designation: "SWE",
      salary: 92000,
      dept: "Engineering",
      joined: "11/04/2023",
      status: "Active",
    },
  ];

  // search , dept filter &
  const filterEmployee = employees.filter((employee) => {
    const matchesSearch =
      employee.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      employee.designation
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase()) ||
      employee.email.toLocaleLowerCase().includes(search.toLocaleLowerCase());

    const matchesDepartment =
      department === "All" || employee.dept === department;

      const matchesStatus = status === "All" || employee.status === status

    return matchesSearch && matchesDepartment && matchesStatus;
  });
  // department filter
  const filterEmployeeDepartment = employees.filter((employee) => {
    if (department === "All") {
      return true;
    }
    return employee.dept === department;
  });
  return (
    <div>
      <div className="mt-5 mb-10">
        <PageTitle />
      </div>
      {/* Table  */}

      <div className="mt-10">
        <div className=" rounded-t-lg border-border border grid gap-4 grid-cols-6 justify-between items-center px-6 py-4">
          <div className="col-span-3">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full py-2 px-3 bg-card rounded-md outline-none focus:ring-2 focus:border-primary focus:ring-primary/60"
              placeholder="Search name,role,email..."
            />
          </div>
          <div className="col-span-1">
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full bg-card rounded-md px-3 py-2 focus:outline-none"
            >
              <option value="All">All Departments</option>
              <option value="Engineering">Engineering</option>
              <option value="Design">Design</option>
            </select>
          </div>
          <div className="col-span-1">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full bg-card rounded-md px-3 py-2 focus:outline-none"
            >
              <option value="All">All Statuses </option>
              <option value="Active">Active</option>
              <option value="Remote">Remote</option>
            </select>
          </div>
          <div className="col-span-1">
            <button className=" w-full bg-card px-3 py-2 rounded-md flex items-center gap-2">
              <LuArrowUpDown /> Salary Desc
            </button>
          </div>
        </div>

        <EmployeeTable employees={filterEmployee} />
        <div className="flex justify-between items-center gap-2 rounded-b-lg border border-border py-2 px-6 bg-card">
          <div className="">
            <span className="text-sm">Page 1 of 2</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="">Next</span>
            <span className="">1</span>
            <span className="">Prev</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employees;
