import React, { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import { Outlet } from "react-router";

const DashboardLayouts = () => {
    const [search, setSearch] = useState("");

  return (
    <div className="flex h-screen bg-background text-text">
      <div className=" h-screen">
        <Sidebar />
      </div>
      <div className="w-full flex flex-col flex-1 overflow-hidden ">
        <Navbar search={search} setSearch={setSearch}/>
        <main className="flex-1 overflow-y-auto py-4 px-6">
          <Outlet  context={search}/>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayouts;
