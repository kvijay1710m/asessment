import React from "react";
import Shop from "../assets/images/dasboardlogo.png";
import logo from "../assets/images/logo1.png";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";
import { FiTruck } from "react-icons/fi";
import { MdAddShoppingCart } from "react-icons/md";
import { MdOutlinePerson } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";

const Sidebar = ({ isOpen, closeSidebar }) => {
  const shopName = "Vijay Store";
  const shopID = "1717254";

  return (
    <aside
      className={`${isOpen ? "block" : "hidden"
        } md:block fixed md:static bg-gray-50 h-screen w-[280px] md:w-1/4 lg:w-1/5 px-6 py-8 font-inter shadow-xl z-30`}
      role="navigation"
      aria-label="Sidebar"
    >
      {/* Close Button for Mobile */}
      <button
        onClick={closeSidebar}
        className="md:hidden absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition"
        aria-label="Close Sidebar"
      >
        <IoCloseOutline size={30} />
      </button>

      {/* Shop Info Section */}
      <section className="text-center">
        <img
          src={Shop}
          alt={`${shopName} Logo`}
          className="w-32 md:w-40 mx-auto rounded-lg border-3 border-gray-400 mt-6"
        />
        <p className="text-md font-bold mt-4 capitalize flex items-center justify-center space-x-2">
          <span>{shopName}</span>
          <IoIosArrowDown className="text-gray-500" />
        </p>
        <small className="text-sm text-gray-400 mt-1">Shop ID: {shopID}</small>
      </section>

      {/* Navigation Menu */}
      <nav className="mt-12">
        <ul className="space-y-6">
          <SidebarItem
            icon={<MdOutlineDashboard size={25} />}
            label="Dashboard"
            color="text-[#668D12]"
          />
          <SidebarItem
            icon={<FiTruck size={25} />}
            label="Orders"
            color="text-[#668D12]"
          />
          <SidebarItem
            icon={<MdAddShoppingCart size={25} />}
            label="My Products"
            color="text-[#668D12]"
          />
          <SidebarItem
            icon={<MdOutlinePerson size={25} />}
            label="Profile"
            color="text-[#668D12]"
          />
        </ul>
      </nav>
    </aside>
  );
};

/** Reusable Sidebar Item Component */
const SidebarItem = ({ icon, label, color }) => (
  <li
    className={`flex items-center text-md font-medium text-gray-800 hover:bg-[#F2F8DF] rounded-lg px-4 py-2 transition`}
    aria-label={label}
  >
    <span className={`${color} mr-4`}>{icon}</span>
    {label}
  </li>
);

export default Sidebar;
