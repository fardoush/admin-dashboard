import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

const Navbar = ({search,setSearch}) => {
  
  return (
    <div className="flex justify-between items-center bg-surface w-full py-3 px-6 h-[57px] border-b border-b-border">
      {/* Left side search  */}
      <div className="relative flex items-center ">
        <IoIosSearch className="absolute left-2 text-text-secondary" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input w-72 py-2 px-3 pl-10 bg-card rounded-lg focus:border-primary outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary"
          placeholder="Search..."

        />
      </div>
      {/* Right Side  */}

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-3">
          <span className="bg-card rounded-full p-2">
            <MdOutlineDarkMode size={20} />
          </span>
          <span className="bg-card rounded-full p-2">
            <MdOutlineLightMode size={20} />
          </span>
          <span className="bg-card rounded-full p-2">
            <IoIosNotificationsOutline size={20} />
          </span>
        </div>
        {/* user  */}
        <div className="flex gap-3 items-center justify-between border-l border-l-border pl-3">
          <div className="">
            <h6 className="text-sm font-semibold">Jahanara Fardoush Sherin </h6>
            <span className="text-xs text-text-secondary">Admin</span>
          </div>
          <img
            src="https://i.ibb.co.com/FkZBycgH/photo-1544723795-3fb6469f5b39.avif"
            alt=""
            className=" w-8 h-8 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
