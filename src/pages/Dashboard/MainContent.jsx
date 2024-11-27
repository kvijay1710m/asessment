import React from "react";
import Quickaction from "../../Components/Quickaction";
import MyOrder from "../../Components/MyOrder";
import Transaction from "../../Components/Transaction";

const MainContent = () => {
  return (
    <div className="mt-[110px] ml-[20px] md:ml-3">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
       
        <div className="space-y-6">
          <Quickaction />
          <Transaction />
        </div>

        {/* Right Column: MyOrder */}
        <div className="flex flex-col space-y-6">
          <MyOrder />
         
        </div>
      </div>
    </div>
  );
};

export default MainContent;
