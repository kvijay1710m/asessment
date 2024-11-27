import React from "react";
import { FaHandHoldingUsd } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({ toggleSidebar }) => {
  const userName = "Vijay K";
  const coins = 3000;
  const hasNotifications = true;

  return (
    <header className="shadow-lg font-inter fixed left-0 right-0 z-20 bg-white">
      <nav className="flex justify-between items-center py-5 px-5 md:px-8">

        <button
          className="text-gray-500 md:hidden"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          <RxHamburgerMenu size={25} />
        </button>


        <h1 className="hidden md:flex text-3xl font-semibold bg-gradient-to-r from-[#668D12] to-[#ACC43F] bg-clip-text text-transparent uppercase">
          <i>Rewardify</i>
        </h1>

        {/* Welcome Message */}
        <div className="hidden md:block text-center">
          <h2 className="text-xl md:text-xl font-bold">
            Welcome <span className="text-[#668D12]">{userName}</span>
          </h2>
        </div>

        {/* User and Action Icons */}
        <div>
          <ul className="flex items-center justify-center space-x-4 md:space-x-8">
            {/* Coins */}
            <li
              className="text-[10px] text-center md:text-lg font-medium bg-[#F2F8DF] px-3 py-1 rounded-full"
              title="Your Coins"
            >
              Coins: <span className="font-bold">{coins} 🪙</span>
            </li>

            {/* Redeem Icon */}
            <li
              className="text-xl md:text-2xl bg-[#F2F8DF] p-2 rounded-full hover:bg-[#D7E8B6] transition"
              title="Redeem Rewards"
              aria-label="Redeem Rewards"
            >
              <FaHandHoldingUsd />
            </li>

            {/* Notifications Icon */}
            <li
              className={`relative text-xl md:text-2xl bg-[#F2F8DF] p-2 rounded-full hover:bg-[#D7E8B6] transition ${hasNotifications ? "ring-2 ring-[#668D12]" : ""
                }`}
              title="Notifications"
              aria-label="Notifications"
            >
              <IoIosNotifications />
              {hasNotifications && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  !
                </span>
              )}
            </li>

            {/* User Profile Icon */}
            <li
              className="text-xl md:text-2xl bg-[#F2F8DF] p-2 rounded-full hover:bg-[#D7E8B9] transition"
              title="User Profile"
              aria-label="User Profile"
            >
              <IoPerson />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
