import React, { useState } from "react";
import { IoMdRefresh } from "react-icons/io";

const Transaction = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Mock Data
  const transactions = [
    {
      id: 1,
      type: "Send a Payment",
      phone: "+918956598562",
      paidOn: "Apr 11, 2024 at 3:30PM",
      via: "Paid via QR Scan",
      amount: "+₹50.00",
      isPositive: true,
    },
    // More transactions...
  ];

  const settlements = [
    {
      id: 1,
      description: "Weekly Settlements (1 june - 17 Oct)",
      paidOn: "Apr 1, 2024 at 1:30PM",
      via: "REWARDIFY (weekly Settlement)",
      amount: "-₹6326.00",
      isPositive: false,
      status: "Paid",
      view: "View",
    },
    // More settlements...
  ];

  // Reusable Component for a Transaction
  const TransactionItem = ({ data }) => (
    <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-[#F2F8DF] rounded-full flex items-center justify-center">
          <span className="text-gray-500 text-xl">👤</span>
        </div>
        <div>
          <p className="text-gray-900 font-medium text-[12px]">
            {data.phone}{" "}
            <span className="text-gray-500">{data.type}</span>
          </p>
          <p className="text-gray-500 text-[12px] mt-1">
            Paid on {data.paidOn}
          </p>
          <span className="inline-block bg-[#F2F8DF] text-gray-700 text-xs font-medium mt-2 px-2 py-1 rounded">
            {data.via}
          </span>
        </div>
      </div>
      <div
        className={`font-medium text-[12px] ${
          data.isPositive ? "text-green-600" : "text-red-600"
        }`}
      >
        {data.amount}
      </div>
    </div>
  );

  // Reusable Component for a Settlement
  const SettlementItem = ({ data }) => (
    <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-[#F2F8DF] rounded-full flex items-center justify-center">
          <span className="text-green-600 text-xl">🔗</span>
        </div>
        <div>
          <p className="text-gray-900 font-medium text-[12px]">
            {data.description}
          </p>
          <p className="text-gray-500 text-[12px] mt-1">
            Paid on {data.paidOn}
          </p>
          <span className="inline-block bg-[#F2F8DF] text-gray-700 text-[10px] font-medium mt-2 px-2 py-1 rounded">
            {data.via}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div
          className={`font-medium text-[12px] ${
            data.isPositive ? "text-green-600" : "text-red-600"
          }`}
        >
          {data.amount}
        </div>
        <div className="flex gap-2 mt-1">
          <span className="text-green-600 text-[12px] font-medium">
            {data.status}
          </span>
          <span className="text-red-600 text-[12px] font-medium cursor-pointer">
            {data.view}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="mt-5 w-full md:max-w-lg mx-auto shadow">
      <div className="bg-white rounded-md p-5">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">Recent Transaction</h1>
          <IoMdRefresh className="text-xl cursor-pointer" />
        </div>
        <p className="text-[10px] text-gray-400">
          Last Update at: June 02, 2024 | 11:25 PM
        </p>
        <div className="w-full mt-6">
          <div className="flex space-x-9 font-bold text-[15px] border-b border-gray-200">
            <button
              className={`pb-2 ${
                activeTab === "tab1"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-400"
              }`}
              onClick={() => handleTabClick("tab1")}
            >
              All Transaction
            </button>
            <button
              className={`pb-2 ${
                activeTab === "tab2"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-400"
              }`}
              onClick={() => handleTabClick("tab2")}
            >
              Settlement
            </button>
          </div>
          <div className="tab-content mt-6">
            {activeTab === "tab1" && (
              <div>
                {transactions.length > 0 ? (
                  transactions.map((transaction) => (
                    <TransactionItem key={transaction.id} data={transaction} />
                  ))
                ) : (
                  <p className="text-center text-gray-500 mt-6">
                    No Transactions Found.
                  </p>
                )}
              </div>
            )}
            {activeTab === "tab2" && (
              <div>
                {settlements.length > 0 ? (
                  settlements.map((settlement) => (
                    <SettlementItem key={settlement.id} data={settlement} />
                  ))
                ) : (
                  <p className="text-center text-gray-500 mt-6">
                    No Settlements Found.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
