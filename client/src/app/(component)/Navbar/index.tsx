import { Bell, Menu, Search, Settings, Sun } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className=" flex justify-between px-4 py-4 bg-blue-50 w-full">
      {/* left side */}
      <div className=" flex gap-4  mt-2">
        <Menu />
        <div className="md:hidden flex shadow-sm border rounded-md">
          <input></input>
          <Search />
        </div>
      </div>
      {/* right side */}
      <div className="flex gap-4 mt-2 pl-2">
        <div className="hidden md:flex justify-between items-center gap-10 ">
          <div className="flex border rounded-md mr-4">
            <input ></input>
            <Search />
          </div>
          {/* profile */}
          <div className="flex gap-2">
            <Sun /> <Bell />
            <hr className="border h-7 bg-black" />
            <div className="border rounded-3xl h-7 w-7 object-contain">img</div>
            chuks
          </div>
        </div>
        <Settings />
      </div>
    </div>
  );
};

export default Navbar;
