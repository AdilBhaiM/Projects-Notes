import React from "react";
import { CalendarCheck, ChartArea, LayoutDashboard, LogOut } from "lucide-react";
import { Logout } from "../redux/actions/AuthActions";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(Logout());
  };
  return (
    /* From Uiverse.io by sahilxkhadka */
    <div className="fixed h-screen card w-72 bg-gray-900 p-5 shadow-md shadow-purple-200/50 rounded-md">
      <ul className="w-full flex flex-col gap-2">
        <li className="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap">
          <button className="flex size-full text-white gap-4 py-3 px-8 font-medium rounded-full bg-cover hover:bg-gray-700 hover:shadow-inner focus:bg-gray-700 from-purple-400 transition-all ease-linear">
            <LayoutDashboard />
            Dashboard
          </button>
        </li>
        <li className="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap">
          <button className="flex size-full text-white gap-4 py-3 px-8 font-medium rounded-full bg-cover hover:bg-gray-700 hover:shadow-inner focus:bg-gray-700 from-purple-400 transition-all ease-linear">
            {/* <Settings /> */}
            <CalendarCheck />
            Schedule Task
          </button>
        </li>
        <li className="flex-center flex-1 cursor-pointer p-16-semibold w-full">
          <button
            className="flex size-full text-white gap-4 py-3 px-8 font-medium rounded-full bg-cover hover:bg-gray-700 hover:shadow-inner focus:bg-gray-700 transition-all ease-linear"
          >
            <ChartArea />
            Analytics
          </button>
        </li>
        <li class="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap">
          <button
            onClick={logout}
            className="flex size-full text-white gap-4 py-3 px-8 font-medium rounded-full bg-cover hover:bg-red-700 hover:shadow-inner focus:bg-red-700 transition-all ease-linear"
          >
            <LogOut />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
