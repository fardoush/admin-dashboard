import React from "react";
import { AiOutlineSlack } from "react-icons/ai";
import { LuLayoutDashboard } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FiUser } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";

import { Link, NavLink } from "react-router";
import { PiSignOut } from "react-icons/pi";

const Sidebar = () => {
  const menuItems = [
    {
      id: 1,
      path: "/",
      icon: LuLayoutDashboard,
      item: "Dashboard",
    },
    {
      id: 2,
      path: "employee",
      icon: FiUsers,
      item: "Employees",
    },
    {
      id: 3,
      path: "addEmployee",
      icon: FiUserPlus,
      item: "Add Employee",
    },
    {
      id: 4,
      path: "departments",
      icon: HiOutlineBuildingOffice2,
      item: "Departments",
    },
    {
      id: 5,
      path: "profile",
      icon: FiUser,
      item: "Profile",
    },
    {
      id: 6,
      path: "settings",
      icon: IoSettingsOutline,
      item: "Settings",
    },
  ];

  return (
    <div className="w-64 h-screen bg-surface flex flex-col justify-between ">
      {/* top  */}
      <div className="">
        {/* logo   */}
        <Link to="/" className="flex gap-2 items-center py-3 px-4 border-b border-b-border ">
          <AiOutlineSlack className="text-primary" size={24} />
          <span className=" font-bold tracking-wide text-2xl">AiSlack</span>
        </Link>

        {/* item  */}
        <div className="py-4 grid grid-cols-1 gap-2">
          {menuItems.map((items) => {
            const Icon = items.icon;
            return (
              <div className="px-4 " key={items.id} >
                <NavLink
                  to={items.path}
                  className={({ isActive }) =>
                    `flex items-center gap-2 p-2 rounded transition-all ease-in-out duration-700 ${isActive ? "bg-card text-primary" : "hover:bg-card hover:text-primary"}`
                  }
                >
                  <Icon size={16} />
                  <span className="">{items.item}</span>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
      {/* bottom  */}
      <div className="p-4 flex-end border-t border-border">
        <button className="flex items-center gap-2 p-2 rounded hover:bg-card w-full">
          <PiSignOut />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
