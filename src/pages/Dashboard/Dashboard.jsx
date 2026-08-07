import React, { useState } from "react";
import { FiUsers } from "react-icons/fi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FiUserPlus } from "react-icons/fi";
import { GrWheelchairActive } from "react-icons/gr";

import StatsCard from "../../components/ui/StatsCard";
import Table from "../../components/ui/Table";
import Charts from "../../components/ui/Charts";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";
import PieCharts from "../../components/ui/PieCharts";
import PageTitle from "../../components/common/PageTitle";
import { Link, useOutletContext } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";

const Dashboard = () => {
  const search = useOutletContext();

  const status = [
    {
      id: 1,
      title: "Total Employees",
      value: "12",
      icon: FiUsers,
      growth: "12",
    },
    {
      id: 2,
      title: "Active",
      value: "7",
      icon: GrWheelchairActive,
      growth: "58",
    },
    {
      id: 3,
      title: "Departments",
      value: "5",
      icon: HiOutlineBuildingOffice2,
      growth: 0,
    },
    {
      id: 4,
      title: "New Hires (6mo)",
      value: "0",
      icon: FiUserPlus,
      growth: "3",
    },
  ];

  const employees = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Priya Shah",
      designation: "UX Researcher",
      dept: "Engineering",
      joined: "01/01/2024",
      status: "Active",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Julian Rossi",
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
      designation: "SWE",
      dept: "Engineering",
      joined: "11/04/2023",
      status: "Active",
    },
  ];
  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      employee.designation
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase()) ||
      employee.dept.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  ).slice(0,3);
// const recentEmployees = filteredEmployees.slice(0, 2);
  return (
    <div>
      <div className="mt-5 mb-10">
        <PageTitle />
      </div>
      {/* Start Status Cars  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {status.map((stats) => (
          <StatsCard key={stats.id} stats={stats} />
        ))}
      </div>
      {/* End Status Cars  */}

      {/* Start chart js  */}
      <div className="mt-10 grid grid-cols-6 gap-6">
        <div className="col-span-4 rounded-2xl border border-border bg-card p-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold capitalize">
              Salary by department
            </h3>
            <span className=" flex items-center gap-1 text-xs text-text-secondary">
              <RiCheckboxMultipleBlankLine />
              Total $1126k
            </span>
          </div>
          <Charts />
        </div>
        <div className="col-span-2 rounded-2xl border border-border bg-card p-6">
          <h3 className="text-lg font-semibold capitalize">
            Team distribution
          </h3>
          <PieCharts />
        </div>
      </div>

      {/* Start Table  */}
      <div className="mt-10">
        <div className=" rounded-t-lg border-border border flex justify-between items-center px-6 py-4">
          <div>
            <h2 className="text-lg font-semibold">Recently Joined</h2>
            <p className="text-xs text-text-secondary">
              Showing {filteredEmployees.length} employees
            </p>
          </div>

          <Link
            to="employee"
            className="text-primary text-sm hover:underline flex gap-1 items-center"
          >
            View All
            <FaArrowRightLong />
          </Link>
        </div>
        {filteredEmployees.length > 0 ? (
          <Table employees={filteredEmployees}/>
        ) : (
          <div className="border border-border rounded-xl bg-card py-10 text-center">
            <h2 className="text-xl font-semibold">No Employee Found</h2>
            <p className="text-text-secondary mt-2">
              Try searching with another name or department.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
