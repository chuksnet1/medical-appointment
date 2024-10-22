'use client'
import { useGetDashboardMetricsQuery } from "@/state/api";
import React from "react";
import ExpenseBox from "./expense"
import Purchase from "./purchase";



const DashboardDisplay = () => {
  return <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
    <Purchase/>
    <ExpenseBox />
    <div className="row-span-6 bg-gray-500"></div>
    <div className="row-span-4 bg-gray-500"></div>
    <div className="row-span-6 bg-gray-500"></div>
  </div>;
};

export default DashboardDisplay;
