import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-900">
      <Navbar />
      <Sidebar />
      <main className="pt-[100px] pl-[300px]">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;