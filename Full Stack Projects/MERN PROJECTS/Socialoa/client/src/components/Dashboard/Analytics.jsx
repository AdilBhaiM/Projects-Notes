import React from "react";

const Analytics = () => {
  return (
    <div className="text-white">
      <div className="flex text-white gap-2 w-full flex-wrap">
        <div className="flex p-3 rounded-lg bg-gray-800 flex-col gap-2 min-w-[180px] flex-1 w-full sm:[40%]">
          <p className="font-thin">Total Posts</p>
          <h1 className="text-2xl self-end">123</h1>
        </div>
        <div className="flex p-3 rounded-lg bg-gray-800 flex-col gap-2 min-w-[180px] flex-1 w-full sm:[40%]">
          <p className="font-thin">Scheduled Posts</p>
          <h1 className="text-2xl self-end">123</h1>
        </div>
        <div className="flex p-3 rounded-lg bg-gray-800 flex-col gap-2 min-w-[180px] flex-1 w-full sm:[40%]">
          <p className="font-thin">Draft Posts</p>
          <h1 className="text-2xl self-end">123</h1>
        </div>
      </div>
    </div>
  );
};
export default Analytics;
