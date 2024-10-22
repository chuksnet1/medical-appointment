"use client";
import React, { useState } from "react";
import Sidebar from "./(component)/Sidebar";
import Navbar from "./(component)/Navbar";
import StoreProvider, { useAppSelector } from "./redux";
import { useGetUserQuery, useGetDashboardMetricsQuery } from "@/state/api";

type Props = {};

const Dashboardwrapper = ({ children }: { children: React.ReactNode }) => {
  const visible = useAppSelector((state) => state.global.isDarkMode);
  const [visibility, setVisibility] = useState("dark");
  //console.log(!visible);
  const { data, isLoading } = useGetUserQuery();
  const { data: value, isLoading: Loading } = useGetDashboardMetricsQuery();
  const getVal = value?.purchase;
  //console.log(getVal);

  return (
    <div>
      <div className={` flex h-full  w-full`}>
        {" "}
        <Sidebar />
        <div className="py-7 px-7 pl-5 md:pl-28 ml-4 md:ml-0 overflow-auto w-full">
          <Navbar />

          {children}
          <footer className="ml-4 font-semibold">Footer</footer>
        </div>
      </div>
    </div>
  );
};

const Appwrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <Dashboardwrapper>{children}</Dashboardwrapper>
    </StoreProvider>
  );
};

export default Appwrapper;
