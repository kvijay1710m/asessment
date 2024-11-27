import React from "react";


const Quickaction = () => {
    
  return (
    <div className=" w-[340px]  md:ml-[260px] mt-[-30px] bg-gray-50 p-6 rounded-lg shadow-md">
      <h2 className="text-lg  font-bold mb-4">Quick Actions</h2>
      <div className="flex justify-between items-center">
        <button className="text-gray-500 ">&lt;</button> {/* Left Arrow */}
        <div className="grid grid-cols-4 gap-5  ">
          {/* Action Button 1 */}
          <div className="flex flex-col items-center ">
            <div className="bg-[#F2F8DF] w-16 h-16 flex items-center justify-center rounded-lg">
              <span className="text-green-500 text-2xl">💵</span>{" "}
              {/* Replace with action.icon */}
            </div>
            <p className="text-[10px] mt-2 text-center">Make Payment</p>
          </div>

          {/* Action Button 2 */}
          <div className="flex flex-col items-center">
            <div className="bg-[#F2F8DF] w-16 h-16 flex items-center justify-center rounded-lg">
              <span className="text-green-500 text-2xl">₹</span>{" "}
              {/* Replace with action.icon */}
            </div>
            <p className="text-[10px] mt-2 text-center">Settlements</p>
          </div>

          {/* Action Button 3 */}
          <div className="flex flex-col items-center">
            <div className="bg-[#F2F8DF] w-16 h-16 flex items-center justify-center rounded-lg">
              <span className="text-green-500 text-2xl">⏱</span>{" "}
              {/* Replace with action.icon */}
            </div>
            <p className="text-[10px] mt-2 text-center">Transaction History</p>
          </div>

          {/* Action Button 4 */}
          <div className="flex flex-col items-center">
            <div className="bg-[#F2F8DF] w-16 h-16 flex items-center justify-center rounded-lg">
              <span className="text-green-500 text-2xl">🎁</span>{" "}
              {/* Replace with action.icon */}
            </div>
            <p className="text-[10px] mt-2 text-center">Gift Cards</p>
          </div>
        </div>
        <button className="text-gray-500">&gt;</button> {/* Right Arrow */}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <span className="w-2 h-2 bg-black rounded-full mx-1"></span>
        <span className="w-2 h-2 bg-gray-300 rounded-full mx-1"></span>
      </div>
    </div>
  );
};

export default Quickaction;
