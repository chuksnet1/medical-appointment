import { Archive, Calendar, CircleDollarSign, Clipboard, DollarSign, Folder, LucideIcon, SaveIcon, Settings, Star, User } from "lucide-react";
import Link from "next/link";
import React from "react";

type SideType = {
  label: string;
  href: string;
  Icon: LucideIcon;
};

const SideBarComponent = ({ label, href, Icon }: SideType) => {
  return (
    <div className="flex justify-around bg-blue-50 hover:bg-blue-300 rounded-sm">
      <Link href={href} className="flex justify-around gap-4">
        <h3 className="hidden md:flex">{label}</h3>
        <Icon />
      </Link>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="fixed flex flex-col w-8 md:w-28 bg-white  transition-all overflow-hidden h-full shadow-md z-40 ">
      {/* {`fixed flex flex-col w-36 bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`} */}
      <div className="flex flex-col mt-8 mx-2 h-full gap-4 ">
        <SideBarComponent Icon={Clipboard} href="/DashboardDisplay" label="Board" />
        <SideBarComponent Icon={User} href="/users" label="Users" />
        <SideBarComponent Icon={Calendar} href="/appointment" label="Schedule" />
        <SideBarComponent Icon={CircleDollarSign} href="/Expenditure" label="Expense" />
        <SideBarComponent Icon={Settings} href="/settings" label="settings" />
      </div>
      <div>copy</div>
    </div>
  );
};

export default Sidebar;
